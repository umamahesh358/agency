"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollSectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    fadeIn?: boolean;
    slideFrom?: "left" | "right" | "bottom" | "none";
    parallax?: boolean;
    scale?: boolean;
}

const ScrollSection = ({
    children,
    id,
    className = "",
    fadeIn = true,
    slideFrom = "bottom",
    parallax = false,
    scale = false,
}: ScrollSectionProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Parallax effect
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

    // Scale effect
    const scaleValue = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);

    // Opacity for fade in/out at edges
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

    // Direction-based initial animation
    const getSlideVariants = () => {
        switch (slideFrom) {
            case "left":
                return { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 } };
            case "right":
                return { hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 } };
            case "bottom":
                return { hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1 } };
            case "none":
                return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
            default:
                return { hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1 } };
        }
    };

    const variants = getSlideVariants();

    return (
        <motion.div
            ref={sectionRef}
            id={id}
            className={`relative ${className}`}
            style={{
                y: parallax ? smoothY : 0,
                scale: scale ? scaleValue : 1,
                opacity: fadeIn ? opacity : 1,
            }}
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-15%" }}
                variants={variants}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default ScrollSection;

"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [cursorText, setCursorText] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Only show on desktop
        if (typeof window !== "undefined" && window.innerWidth < 1024) {
            return;
        }

        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Track hover states
        const handleElementHover = () => {
            const hoverElements = document.querySelectorAll("a, button, [data-cursor-hover]");

            hoverElements.forEach((el) => {
                el.addEventListener("mouseenter", () => {
                    setIsHovering(true);
                    const text = el.getAttribute("data-cursor-text");
                    if (text) setCursorText(text);
                });
                el.addEventListener("mouseleave", () => {
                    setIsHovering(false);
                    setCursorText("");
                });
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        document.body.addEventListener("mouseenter", handleMouseEnter);

        // Delay to allow DOM to load
        setTimeout(handleElementHover, 1000);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [cursorX, cursorY]);

    // Hide on mobile/tablet
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
        return null;
    }

    return (
        <>
            {/* Hide default cursor via CSS */}
            <style jsx global>{`
        @media (min-width: 1024px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

            {/* Main Cursor - Tiger Paw Shape */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            >
                {/* Outer Ring */}
                <motion.div
                    className="relative flex items-center justify-center"
                    animate={{
                        width: isHovering ? 80 : 40,
                        height: isHovering ? 80 : 40,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                    {/* Glow */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-[#FFBF00] blur-xl"
                        animate={{ opacity: isHovering ? 0.4 : 0.2 }}
                    />

                    {/* Circle Border */}
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#FFBF00]"
                        animate={{
                            borderWidth: isHovering ? 3 : 2,
                            backgroundColor: isHovering ? "rgba(255,191,0,0.1)" : "transparent",
                        }}
                    />

                    {/* Center Dot / Paw */}
                    <motion.div
                        className="relative z-10"
                        animate={{
                            scale: isClicking ? 0.5 : 1,
                        }}
                    >
                        {isHovering ? (
                            // Tiger Paw on Hover
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-[#FFBF00]" />
                                    <div className="w-2 h-2 rounded-full bg-[#FFBF00]" />
                                    <div className="w-2 h-2 rounded-full bg-[#FFBF00]" />
                                </div>
                                <div className="w-4 h-3 rounded-full bg-[#FFBF00]" />
                            </div>
                        ) : (
                            // Simple Dot
                            <div className="w-2 h-2 rounded-full bg-[#FFBF00]" />
                        )}
                    </motion.div>

                    {/* Cursor Text */}
                    {cursorText && (
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[#FFBF00] text-xs font-bold whitespace-nowrap"
                        >
                            {cursorText}
                        </motion.span>
                    )}
                </motion.div>
            </motion.div>

            {/* Trail Effect */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <motion.div
                    className="w-6 h-6 rounded-full border border-[#FFBF00]/30"
                    animate={{
                        scale: isHovering ? 2 : 1.5,
                        opacity: isVisible ? 0.5 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.02 }}
                />
            </motion.div>
        </>
    );
};

export default CustomCursor;

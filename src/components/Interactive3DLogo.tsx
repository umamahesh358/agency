"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

const Interactive3DLogo = () => {
    const logoRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // 3D rotation based on mouse position
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    // Smooth springs
    const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
    const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!logoRef.current) return;
        const rect = logoRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set((e.clientX - centerX) / rect.width);
        mouseY.set((e.clientY - centerY) / rect.height);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <Link href="/" className="relative group" data-cursor-hover data-cursor-text="Home">
            <motion.div
                ref={logoRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX: springRotateX,
                    rotateY: springRotateY,
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
            >
                {/* Glow Behind */}
                <motion.div
                    className="absolute inset-0 bg-[#FFBF00] blur-xl rounded-xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.4 }}
                    style={{ transform: "translateZ(-20px)" }}
                />

                {/* Main Logo Container */}
                <motion.div
                    className="relative bg-gradient-to-br from-[#FFBF00] to-[#FF8C00] w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                    style={{
                        transform: "translateZ(20px)",
                        boxShadow: "0 10px 40px -10px rgba(255, 191, 0, 0.5)",
                    }}
                >
                    {/* Letter A */}
                    <motion.span
                        className="text-[#030303] font-extrabold text-2xl font-[family-name:var(--font-syne)]"
                        style={{ transform: "translateZ(30px)" }}
                    >
                        A
                    </motion.span>

                    {/* Shine Effect */}
                    <motion.div
                        className="absolute inset-0 rounded-xl overflow-hidden"
                        style={{ transform: "translateZ(25px)" }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
                            initial={{ x: "-100%", y: "-100%" }}
                            whileHover={{ x: "100%", y: "100%" }}
                            transition={{ duration: 0.6 }}
                        />
                    </motion.div>
                </motion.div>

                {/* Floating Particles around logo on hover */}
                <motion.div
                    className="absolute -inset-4 pointer-events-none"
                    style={{ transform: "translateZ(40px)" }}
                >
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-[#FFBF00]"
                            style={{
                                top: `${20 + i * 20}%`,
                                left: `${i % 2 === 0 ? -10 : 110}%`,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            whileHover={{
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                                y: [0, -20, -40],
                            }}
                            transition={{
                                duration: 1,
                                delay: i * 0.1,
                                repeat: Infinity,
                            }}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </Link>
    );
};

export default Interactive3DLogo;

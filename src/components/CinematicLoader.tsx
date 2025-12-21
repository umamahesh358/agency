"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CinematicLoader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [phase, setPhase] = useState(0); // 0: dark, 1: eyes appear, 2: eyes glow, 3: reveal

    useEffect(() => {
        // Phase sequence
        const timers = [
            setTimeout(() => setPhase(1), 200),   // Eyes appear
            setTimeout(() => setPhase(2), 800),   // Eyes glow bright
            setTimeout(() => setPhase(3), 1400),  // Start reveal
            setTimeout(() => setIsLoading(false), 1800), // Complete
        ];

        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        clipPath: "circle(150% at 50% 50%)",
                        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                    }}
                    className="fixed inset-0 z-[100] bg-[#030303] flex items-center justify-center overflow-hidden"
                    style={{
                        clipPath: phase >= 3 ? "circle(0% at 50% 50%)" : "circle(150% at 50% 50%)",
                    }}
                >
                    {/* Background subtle glow */}
                    <motion.div
                        className="absolute inset-0"
                        animate={{
                            background: phase >= 2
                                ? "radial-gradient(circle at 50% 50%, rgba(255,140,0,0.1) 0%, transparent 50%)"
                                : "transparent"
                        }}
                        transition={{ duration: 0.5 }}
                    />

                    {/* Tiger Eyes Container */}
                    <div className="relative flex items-center justify-center gap-24 md:gap-32">
                        {/* Left Eye */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: phase >= 1 ? 1 : 0,
                                scale: phase >= 1 ? 1 : 0.5,
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            {/* Eye Glow */}
                            <motion.div
                                className="absolute inset-0 rounded-full blur-2xl"
                                animate={{
                                    opacity: phase >= 2 ? 0.8 : 0.3,
                                    scale: phase >= 2 ? 1.5 : 1,
                                    background: "radial-gradient(circle, #FFBF00 0%, #FF8C00 50%, transparent 70%)",
                                }}
                                transition={{ duration: 0.4 }}
                                style={{ width: "80px", height: "50px" }}
                            />
                            {/* Eye Shape - Almond */}
                            <motion.div
                                className="relative w-20 h-10 md:w-24 md:h-12 rounded-[50%] overflow-hidden border-2 border-[#FFBF00]/50"
                                style={{
                                    background: "linear-gradient(180deg, #1a1000 0%, #0a0500 100%)",
                                    boxShadow: phase >= 2
                                        ? "0 0 40px rgba(255,191,0,0.6), inset 0 0 20px rgba(255,140,0,0.3)"
                                        : "0 0 15px rgba(255,191,0,0.3)",
                                }}
                                animate={{
                                    borderColor: phase >= 2 ? "rgba(255,191,0,0.8)" : "rgba(255,191,0,0.5)",
                                }}
                            >
                                {/* Iris */}
                                <motion.div
                                    className="absolute top-1/2 left-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        background: "radial-gradient(circle, #FFBF00 0%, #FF8C00 40%, #CC7000 70%, #995500 100%)",
                                    }}
                                    animate={{
                                        scale: phase >= 2 ? [1, 1.1, 1] : 1,
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: phase >= 2 ? Infinity : 0,
                                        ease: "easeInOut",
                                    }}
                                >
                                    {/* Pupil - Vertical Slit */}
                                    <motion.div
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] rounded-full"
                                        animate={{
                                            width: phase >= 2 ? "4px" : "6px",
                                            height: phase >= 2 ? "20px" : "16px",
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    {/* Light Reflection */}
                                    <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-white/80" />
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Right Eye */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: phase >= 1 ? 1 : 0,
                                scale: phase >= 1 ? 1 : 0.5,
                            }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                        >
                            {/* Eye Glow */}
                            <motion.div
                                className="absolute inset-0 rounded-full blur-2xl"
                                animate={{
                                    opacity: phase >= 2 ? 0.8 : 0.3,
                                    scale: phase >= 2 ? 1.5 : 1,
                                    background: "radial-gradient(circle, #FFBF00 0%, #FF8C00 50%, transparent 70%)",
                                }}
                                transition={{ duration: 0.4, delay: 0.05 }}
                                style={{ width: "80px", height: "50px" }}
                            />
                            {/* Eye Shape - Almond */}
                            <motion.div
                                className="relative w-20 h-10 md:w-24 md:h-12 rounded-[50%] overflow-hidden border-2 border-[#FFBF00]/50"
                                style={{
                                    background: "linear-gradient(180deg, #1a1000 0%, #0a0500 100%)",
                                    boxShadow: phase >= 2
                                        ? "0 0 40px rgba(255,191,0,0.6), inset 0 0 20px rgba(255,140,0,0.3)"
                                        : "0 0 15px rgba(255,191,0,0.3)",
                                }}
                                animate={{
                                    borderColor: phase >= 2 ? "rgba(255,191,0,0.8)" : "rgba(255,191,0,0.5)",
                                }}
                            >
                                {/* Iris */}
                                <motion.div
                                    className="absolute top-1/2 left-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full -translate-x-1/2 -translate-y-1/2"
                                    style={{
                                        background: "radial-gradient(circle, #FFBF00 0%, #FF8C00 40%, #CC7000 70%, #995500 100%)",
                                    }}
                                    animate={{
                                        scale: phase >= 2 ? [1, 1.1, 1] : 1,
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: phase >= 2 ? Infinity : 0,
                                        ease: "easeInOut",
                                        delay: 0.1,
                                    }}
                                >
                                    {/* Pupil - Vertical Slit */}
                                    <motion.div
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] rounded-full"
                                        animate={{
                                            width: phase >= 2 ? "4px" : "6px",
                                            height: phase >= 2 ? "20px" : "16px",
                                        }}
                                        transition={{ duration: 0.3, delay: 0.05 }}
                                    />
                                    {/* Light Reflection */}
                                    <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-white/80" />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Brand text below eyes */}
                    <motion.div
                        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: phase >= 2 ? 1 : 0,
                            y: phase >= 2 ? 0 : 20,
                        }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <p className="text-[#FFBF00]/60 text-xs uppercase tracking-[0.3em] font-medium">
                            Automate SMMA
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CinematicLoader;

"use client";

import { motion } from "framer-motion";

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Base gradient - warm dark */}
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(180deg, #0a0705 0%, #050403 50%, #080604 100%)",
                }}
            />

            {/* Static tiger stripe pattern */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `
            repeating-linear-gradient(
              -30deg,
              transparent,
              transparent 80px,
              rgba(255,140,0,0.2) 80px,
              rgba(255,140,0,0.2) 85px,
              transparent 85px,
              transparent 160px
            )
          `,
                }}
            />

            {/* Simple static glow - no animation for performance */}
            <div
                className="absolute w-[500px] h-[500px] rounded-full opacity-15"
                style={{
                    background: "radial-gradient(circle, rgba(255,140,0,0.3) 0%, transparent 60%)",
                    left: "0%",
                    top: "20%",
                    filter: "blur(60px)",
                }}
            />
            <div
                className="absolute w-[400px] h-[400px] rounded-full opacity-10"
                style={{
                    background: "radial-gradient(circle, rgba(255,100,0,0.25) 0%, transparent 50%)",
                    right: "5%",
                    bottom: "20%",
                    filter: "blur(50px)",
                }}
            />

            {/* Minimal floating particles - only 4 */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: "2px",
                        height: "2px",
                        background: "rgba(255,150,0,0.7)",
                        left: `${20 + i * 20}%`,
                        bottom: "-5%",
                    }}
                    animate={{
                        y: [0, -500],
                        opacity: [0, 0.6, 0],
                    }}
                    transition={{
                        duration: 15 + i * 3,
                        repeat: Infinity,
                        delay: i * 3,
                        ease: "linear",
                    }}
                />
            ))}

            {/* Vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, rgba(5,4,3,0.6) 70%, rgba(5,4,3,0.95) 100%)",
                }}
            />
        </div>
    );
};

export default AnimatedBackground;

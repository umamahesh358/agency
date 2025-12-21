"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const isImageInView = useInView(imageRef, { once: false, margin: "-10%" });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Tiger walks across as you scroll
    const tigerX = useTransform(scrollYProgress, [0, 1], [-50, 100]);
    const contentY = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const glowOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.1, 0.5, 0.1]);

    // Smooth springs
    const smoothTigerX = useSpring(tigerX, { stiffness: 50, damping: 20 });
    const smoothContentY = useSpring(contentY, { stiffness: 100, damping: 30 });

    const values = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Speed",
            description: "Lightning-fast execution with no compromises.",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Precision",
            description: "Every pixel, every word is intentional.",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Partnership",
            description: "We become an extension of your team.",
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "Innovation",
            description: "Constantly evolving and improving.",
        },
    ];

    return (
        <section id="about" ref={containerRef} className="py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Animated Spotlight that follows tiger */}
                <motion.div
                    className="absolute w-[1000px] h-[600px] rounded-full blur-[200px]"
                    style={{
                        background: "radial-gradient(ellipse, rgba(255,191,0,0.2) 0%, transparent 60%)",
                        left: "-20%",
                        top: "30%",
                        x: smoothTigerX,
                        opacity: glowOpacity,
                    }}
                />
                {/* Secondary ambient glow */}
                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-10"
                    style={{
                        background: "radial-gradient(circle, rgba(255,140,0,0.3) 0%, transparent 70%)",
                        right: "10%",
                        bottom: "20%",
                    }}
                />
            </div>

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* ===== LEFT - CINEMATIC WALKING TIGER ===== */}
                    <motion.div
                        ref={imageRef}
                        className="relative"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={isImageInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="relative"
                        >
                            {/* Ground Level Line - Where tiger walks */}
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFBF00]/30 to-transparent" />

                            {/* Motion Trail - Ghost images behind tiger */}
                            <motion.div
                                className="absolute inset-0 opacity-20"
                                style={{ x: -30, filter: "blur(8px)" }}
                            >
                                <div className="relative aspect-[16/10]">
                                    <Image
                                        src="/images/tiger-walk.jpg"
                                        alt=""
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                className="absolute inset-0 opacity-10"
                                style={{ x: -60, filter: "blur(16px)" }}
                            >
                                <div className="relative aspect-[16/10]">
                                    <Image
                                        src="/images/tiger-walk.jpg"
                                        alt=""
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </motion.div>

                            {/* Main Tiger - Walks as you scroll */}
                            <motion.div
                                className="relative"
                                style={{ x: smoothTigerX }}
                            >
                                {/* Pulsing Glow Aura Behind Tiger */}
                                <motion.div
                                    className="absolute inset-0 scale-110"
                                    animate={{
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    style={{
                                        background: "radial-gradient(ellipse at center, rgba(255,191,0,0.15) 0%, transparent 60%)",
                                        filter: "blur(40px)",
                                    }}
                                />

                                {/* Tiger Image with Breathing Animation */}
                                <motion.div
                                    className="relative aspect-[16/10]"
                                    animate={{
                                        scaleX: [1, 1.01, 1],
                                        scaleY: [1, 0.995, 1],
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Image
                                        src="/images/tiger-walk.jpg"
                                        alt="The Digital Predator"
                                        fill
                                        className="object-contain"
                                        priority
                                    />

                                    {/* Cinematic Color Grade Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFBF00]/5 via-transparent to-[#FF8C00]/5 mix-blend-overlay" />
                                </motion.div>

                                {/* Dust Particles at Tiger's Feet */}
                                <div className="absolute bottom-0 left-1/4 right-1/4">
                                    {[...Array(6)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute bottom-0 w-1 h-1 rounded-full bg-[#FFBF00]/40"
                                            style={{ left: `${15 + i * 15}%` }}
                                            animate={{
                                                y: [0, -20 - Math.random() * 20, 0],
                                                opacity: [0, 0.6, 0],
                                                scale: [0.5, 1.5, 0.5],
                                            }}
                                            transition={{
                                                duration: 2 + Math.random(),
                                                repeat: Infinity,
                                                delay: i * 0.3,
                                                ease: "easeOut",
                                            }}
                                        />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Floating Stats Badge - Top Right */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, x: 50 }}
                                animate={isImageInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                                transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
                                className="absolute -top-4 -right-4 md:top-4 md:right-4"
                            >
                                <motion.div
                                    className="bg-[#1A1A1A]/90 backdrop-blur-2xl border border-[#FFBF00]/30 rounded-2xl p-5 shadow-2xl"
                                    style={{ boxShadow: "0 25px 50px -12px rgba(255, 191, 0, 0.2)" }}
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <div className="text-center">
                                        <motion.p
                                            className="text-4xl font-bold font-[family-name:var(--font-syne)] text-[#FFBF00]"
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            5+
                                        </motion.p>
                                        <p className="text-[#B3B3B3] text-xs uppercase tracking-wider mt-1">Years</p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Floating Brand Badge - Bottom Left */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                                animate={isImageInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
                                className="absolute -bottom-6 -left-4 md:bottom-4 md:left-4"
                            >
                                <motion.div
                                    className="bg-[#1A1A1A]/90 backdrop-blur-2xl border border-[#FFBF00]/30 rounded-2xl px-5 py-4 shadow-2xl"
                                    style={{ boxShadow: "0 25px 50px -12px rgba(255, 191, 0, 0.15)" }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <motion.div
                                            className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFBF00] to-[#FF8C00] flex items-center justify-center"
                                            animate={{ rotate: [0, 5, -5, 0] }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                        >
                                            <span className="text-xl">🐯</span>
                                        </motion.div>
                                        <div>
                                            <p className="text-white font-bold font-[family-name:var(--font-syne)] text-sm">Digital Predator</p>
                                            <p className="text-[#B3B3B3] text-xs">Nature × Technology</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Animated Corner Accents */}
                            <motion.div
                                className="absolute -top-4 -left-4 w-20 h-20"
                                initial={{ opacity: 0 }}
                                animate={isImageInView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.4 }}
                            >
                                <motion.div
                                    className="absolute top-0 left-0 w-px bg-gradient-to-b from-[#FFBF00] to-transparent"
                                    initial={{ height: 0 }}
                                    animate={isImageInView ? { height: 60 } : {}}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                />
                                <motion.div
                                    className="absolute top-0 left-0 h-px bg-gradient-to-r from-[#FFBF00] to-transparent"
                                    initial={{ width: 0 }}
                                    animate={isImageInView ? { width: 60 } : {}}
                                    transition={{ delay: 0.7, duration: 0.6 }}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* ===== RIGHT - CONTENT ===== */}
                    <motion.div
                        style={{ y: smoothContentY }}
                        className="space-y-10"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="inline-block px-4 py-2 rounded-full border border-[#FFBF00]/30 bg-[#FFBF00]/5 text-[#FFBF00] text-sm uppercase tracking-[0.2em] font-medium mb-6"
                            >
                                Why the Tiger
                            </motion.span>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-[family-name:var(--font-syne)] mb-6">
                                <motion.span
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                    className="block text-white"
                                >
                                    built for
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                    className="block premium-gradient-text"
                                    style={{ textShadow: "0 0 60px rgba(255,191,0,0.3)" }}
                                >
                                    dominance
                                </motion.span>
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="space-y-6 text-[#B3B3B3] text-lg leading-relaxed"
                        >
                            <p>
                                The tiger doesn't chase. It <span className="text-white font-medium">waits</span>,
                                <span className="text-white font-medium"> observes</span>, and
                                <span className="text-white font-medium"> strikes</span> with precision.
                                That's our philosophy.
                            </p>
                            <p>
                                We build automated digital systems that work while you sleep —
                                capturing leads, nurturing prospects, and converting clients
                                with <span className="text-[#FFBF00] font-medium">predatory efficiency</span>.
                            </p>
                        </motion.div>

                        {/* Values Grid */}
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                                >
                                    <motion.div
                                        className="bg-[#1A1A1A]/50 backdrop-blur-xl border border-white/5 p-5 rounded-2xl group hover:border-[#FFBF00]/30 transition-all duration-300 h-full"
                                        whileHover={{ scale: 1.03, y: -5 }}
                                    >
                                        <motion.div
                                            className="text-[#FFBF00] mb-3"
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                        >
                                            {value.icon}
                                        </motion.div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-syne)] mb-1 group-hover:text-[#FFBF00] transition-colors">
                                            {value.title}
                                        </h4>
                                        <p className="text-[#B3B3B3] text-sm group-hover:text-white/80 transition-colors">
                                            {value.description}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 }}
                            className="pt-4"
                        >
                            <motion.a
                                href="#contact"
                                className="group inline-flex items-center gap-3 text-[#FFBF00] font-semibold text-lg"
                                whileHover={{ x: 10 }}
                            >
                                <span>Start Your Hunt</span>
                                <motion.svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </motion.svg>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

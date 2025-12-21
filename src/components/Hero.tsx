"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CounterProps {
    target: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
}

const AnimatedCounter = ({
    target,
    suffix = "",
    prefix = "",
    duration = 2000,
}: CounterProps) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        hasAnimated.current = true;
                        const startTime = Date.now();
                        const animate = () => {
                            const elapsed = Date.now() - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            const easeOut = 1 - Math.pow(1 - progress, 3);
                            setCount(Math.floor(easeOut * target));
                            if (progress < 1) {
                                requestAnimationFrame(animate);
                            }
                        };
                        animate();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, [target, duration]);

    return (
        <span ref={counterRef} className="tabular-nums">
            {prefix}
            {count}
            {suffix}
        </span>
    );
};

// 3D Tilt Card Component
const Tilt3DCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

    const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 30 });
    const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) / rect.width);
        y.set((e.clientY - centerY) / rect.height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformStyle: "preserve-3d",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                setMousePosition({
                    x: (e.clientX - rect.left) / rect.width - 0.5,
                    y: (e.clientY - rect.top) / rect.height - 0.5,
                });
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const stats = [
        { value: 150, suffix: "+", label: "Clients Scaled" },
        { value: 12, suffix: "M", prefix: "$", label: "Revenue Generated" },
        { value: 98, suffix: "%", label: "Client Retention" },
    ];

    const industries = ["Real Estate", "Medical", "Fashion", "Travel"];
    const [currentIndustry, setCurrentIndustry] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndustry((prev) => (prev + 1) % industries.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{ perspective: "1500px" }}
        >
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#020202]" />

                {/* Tiger - Slow Reveal */}
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{
                        scale: isLoaded ? 1.05 : 1.2,
                        opacity: isLoaded ? 1 : 0,
                    }}
                    transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            x: mousePosition.x * -20,
                            y: mousePosition.y * -20,
                        }}
                    >
                        <Image
                            src="/images/tiger-face.jpg"
                            alt="Digital Predator"
                            fill
                            priority
                            className="object-cover object-center"
                            sizes="100vw"
                        />
                    </motion.div>
                </motion.div>

                {/* Darkness Overlay */}
                <motion.div
                    className="absolute inset-0 bg-black"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isLoaded ? 0.5 : 1 }}
                    transition={{ duration: 2 }}
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-[#020202]/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-[#020202]/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020202]" />

                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.6)_70%,_rgba(0,0,0,0.9)_100%)]" />
            </div>

            {/* Main Content */}
            <div className="section-container relative z-10 py-32">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -30 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-3">
                                <div className="relative flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#FFBF00]/40 bg-[#FFBF00]/5 backdrop-blur-sm">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFBF00] opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFBF00]" />
                                    </span>
                                    <span className="text-[#FFBF00] text-sm font-semibold uppercase tracking-[0.2em]">
                                        Digital Predator Agency
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Headline */}
                        <div className="space-y-2">
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 80 }}
                                transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <h1 className="text-7xl md:text-8xl lg:text-[6rem] xl:text-[8rem] font-extrabold font-[family-name:var(--font-syne)] leading-none tracking-[-0.02em] text-white">
                                    automate
                                </h1>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 80 }}
                                transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <h1 className="text-7xl md:text-8xl lg:text-[6rem] xl:text-[8rem] font-extrabold font-[family-name:var(--font-syne)] leading-none tracking-[-0.02em]">
                                    <span className="text-white">your </span>
                                    <span className="relative inline-block">
                                        <span
                                            className="text-transparent bg-clip-text"
                                            style={{
                                                backgroundImage: "linear-gradient(135deg, #FFBF00 0%, #FFD700 50%, #FF8C00 100%)",
                                            }}
                                        >
                                            dominance
                                        </span>
                                        <motion.span
                                            className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-[#FFBF00] to-[#FF8C00] rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: isLoaded ? "100%" : 0 }}
                                            transition={{ delay: 2, duration: 0.6 }}
                                        />
                                    </span>
                                    <span className="text-[#FFBF00]">.</span>
                                </h1>
                            </motion.div>
                        </div>

                        {/* Industry Showcase */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                            transition={{ delay: 1.8, duration: 0.6 }}
                            className="flex items-center gap-4"
                        >
                            <span className="text-[#B3B3B3] text-lg">Powering</span>
                            <div className="h-12 relative w-44">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={currentIndustry}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute text-2xl font-bold font-[family-name:var(--font-syne)] text-[#FFBF00]"
                                    >
                                        {industries[currentIndustry]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                            <span className="text-[#B3B3B3] text-lg">brands globally</span>
                        </motion.div>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                            transition={{ delay: 2, duration: 0.6 }}
                            className="text-[#B3B3B3] text-xl md:text-2xl max-w-2xl leading-relaxed font-light"
                        >
                            We build <span className="text-white font-normal">high-performance digital systems</span> that
                            capture, nurture, and convert — with <span className="text-[#FFBF00] font-normal">predatory precision</span>.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                            transition={{ delay: 2.2, duration: 0.6 }}
                            className="flex flex-wrap gap-5 pt-4"
                        >
                            <Link href="#contact" className="group relative inline-flex">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#FFBF00] to-[#FF8C00] rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
                                <span className="relative btn-primary text-lg px-10 py-5">
                                    Start Hunting
                                    <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </Link>
                            <Link href="#portfolio" className="btn-secondary text-lg px-8 py-5 group">
                                <span className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-[#FFBF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    View Our Work
                                </span>
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                            transition={{ delay: 2.4, duration: 0.6 }}
                            className="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-white/10"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="group cursor-default">
                                    <div className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-syne)] text-white group-hover:text-[#FFBF00] transition-colors">
                                        <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                                    </div>
                                    <div className="text-[#B3B3B3] text-sm mt-1 uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right - Dashboard Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 100 }}
                        transition={{ duration: 1, delay: 1.8 }}
                        className="lg:col-span-5 hidden lg:block"
                    >
                        <Tilt3DCard className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FFBF00]/20 to-transparent blur-3xl -z-10 scale-110" />

                            <div
                                className="relative bg-gradient-to-br from-[#1A1A1A]/95 to-[#0a0a0a]/95 backdrop-blur-2xl rounded-[2rem] p-8 border border-[#FFBF00]/20"
                                style={{ boxShadow: "0 25px 80px -20px rgba(255, 191, 0, 0.2)" }}
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <span className="text-[#B3B3B3] text-xs uppercase tracking-[0.2em]">Live Dashboard</span>
                                        <h3 className="text-white text-lg font-bold font-[family-name:var(--font-syne)] mt-1">client performance</h3>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                        </span>
                                        <span className="text-emerald-400 text-xs font-medium">Live</span>
                                    </div>
                                </div>

                                {/* Main Metric */}
                                <div className="bg-[#0a0a0a]/70 rounded-2xl p-6 border border-white/5 mb-6">
                                    <div className="flex items-end justify-between mb-4">
                                        <div>
                                            <p className="text-[#B3B3B3] text-sm mb-1">Monthly Revenue</p>
                                            <p className="text-5xl font-bold font-[family-name:var(--font-syne)] text-white">
                                                $847<span className="text-3xl text-[#FFBF00]">K</span>
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500/10">
                                            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                            </svg>
                                            <span className="text-emerald-400 text-sm font-bold">127%</span>
                                        </div>
                                    </div>

                                    {/* Chart */}
                                    <div className="h-24 flex items-end gap-1.5">
                                        {[35, 55, 40, 75, 55, 85, 70, 90, 80, 95, 85, 100].map((height, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex-1 rounded-t-sm"
                                                initial={{ height: 0 }}
                                                animate={{ height: isLoaded ? `${height}%` : 0 }}
                                                transition={{ delay: 2.5 + i * 0.05, duration: 0.5 }}
                                                style={{
                                                    background: i === 11
                                                        ? "linear-gradient(180deg, #FFBF00 0%, #FF8C00 100%)"
                                                        : "linear-gradient(180deg, rgba(255,191,0,0.6) 0%, rgba(255,191,0,0.1) 100%)",
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Sub Metrics */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-[#0a0a0a]/70 rounded-xl p-4 border border-white/5">
                                        <p className="text-[#B3B3B3] text-xs mb-2">Conversion</p>
                                        <p className="text-2xl font-bold text-white font-[family-name:var(--font-syne)]">8.4<span className="text-[#FFBF00]">%</span></p>
                                    </div>
                                    <div className="bg-[#0a0a0a]/70 rounded-xl p-4 border border-white/5">
                                        <p className="text-[#B3B3B3] text-xs mb-2">New Leads</p>
                                        <p className="text-2xl font-bold text-white font-[family-name:var(--font-syne)]">2,847</p>
                                    </div>
                                </div>

                                {/* CTA */}
                                <Link
                                    href="#contact"
                                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#FFBF00]/10 border border-[#FFBF00]/30 text-[#FFBF00] font-semibold hover:bg-[#FFBF00] hover:text-[#050505] transition-all"
                                >
                                    Get These Results
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </Tilt3DCard>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ delay: 3 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-3 text-[#B3B3B3]">
                    <span className="text-xs uppercase tracking-[0.3em] font-light">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-6 h-10 rounded-full border border-[#FFBF00]/30 flex items-start justify-center p-2"
                    >
                        <div className="w-1.5 h-3 rounded-full bg-gradient-to-b from-[#FFBF00] to-[#FF8C00]" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

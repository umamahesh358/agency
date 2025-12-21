"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const Process = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

    const steps = [
        {
            number: "01",
            title: "audit",
            subtitle: "Discover & Analyze",
            description:
                "We dissect your current digital presence, identify weaknesses, and map opportunities for exponential growth.",
            features: [
                "Competitive Analysis",
                "Technical SEO Audit",
                "Conversion Analysis",
                "Market Research",
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
        },
        {
            number: "02",
            title: "automate",
            subtitle: "Build & Optimize",
            description:
                "We construct your digital hunting ground — automated systems that capture, nurture, and convert leads 24/7.",
            features: [
                "Website Development",
                "Marketing Automation",
                "CRM Integration",
                "Content Strategy",
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            number: "03",
            title: "scale",
            subtitle: "Grow & Dominate",
            description:
                "With systems in place, we amplify your reach and optimize for maximum ROI. Your competition becomes prey.",
            features: [
                "Paid Advertising",
                "Retargeting Campaigns",
                "A/B Testing",
                "Performance Scaling",
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
        },
    ];

    return (
        <section id="process" ref={containerRef} className="py-32 relative overflow-hidden bg-[#0a0a0a]">
            {/* Cinematic Background */}
            <div className="absolute inset-0">
                {/* Animated Grid */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `
            linear-gradient(rgba(255,191,0,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,191,0,0.5) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                }} />

                {/* Radial Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,191,0,0.05)_0%,_transparent_70%)]" />
            </div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-24"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="inline-block px-4 py-2 rounded-full border border-[#FFBF00]/30 bg-[#FFBF00]/5 text-[#FFBF00] text-sm uppercase tracking-[0.2em] font-medium mb-6"
                    >
                        Our Process
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-extrabold font-[family-name:var(--font-syne)] mb-6">
                        <span className="text-white">the </span>
                        <span className="premium-gradient-text">hunt</span>
                    </h2>
                    <p className="text-[#B3B3B3] text-xl max-w-2xl mx-auto">
                        A systematic approach to digital dominance. Three phases. One goal:
                        your market supremacy.
                    </p>
                </motion.div>

                {/* Process Timeline */}
                <div className="relative">
                    {/* Central Connection Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 hidden lg:block w-px -translate-x-1/2">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFBF00]/20 to-transparent" />
                        <motion.div
                            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#FFBF00] to-[#FF8C00]"
                            style={{
                                height: useTransform(lineProgress, [0, 1], ["0%", "100%"]),
                                boxShadow: "0 0 20px rgba(255,191,0,0.5)",
                            }}
                        />
                    </div>

                    {/* Steps */}
                    <div className="space-y-24 lg:space-y-0">
                        {steps.map((step, index) => (
                            <ProcessStep key={index} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

interface ProcessStepProps {
    step: {
        number: string;
        title: string;
        subtitle: string;
        description: string;
        features: string[];
        icon: React.ReactNode;
    };
    index: number;
}

const ProcessStep = ({ step, index }: ProcessStepProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.2 }}
            className={`relative lg:grid lg:grid-cols-2 lg:gap-20 items-center ${index > 0 ? "lg:mt-[-100px]" : ""
                }`}
            style={{ marginTop: index > 0 ? "0" : "0" }}
        >
            {/* Node Point */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block z-20">
                <motion.div
                    className="relative"
                    animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <motion.div
                        className="absolute inset-0 bg-[#FFBF00] rounded-full blur-xl"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
                    />
                    <div className="relative w-6 h-6 rounded-full bg-[#050505] border-2 border-[#FFBF00] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#FFBF00]" />
                    </div>
                </motion.div>
            </div>

            {/* Content Card */}
            <motion.div
                className={`${isEven ? "lg:col-start-1" : "lg:col-start-2"} relative`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    className="relative bg-gradient-to-br from-[#1A1A1A]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 overflow-hidden group"
                    whileHover={{
                        scale: 1.02,
                        borderColor: "rgba(255, 191, 0, 0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{
                        boxShadow: isHovered ? "0 25px 80px -20px rgba(255, 191, 0, 0.15)" : "none",
                    }}
                >
                    {/* Background Glow */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#FFBF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Corner Accents */}
                    <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                        <motion.div
                            className="absolute top-4 right-4 w-px h-0 bg-gradient-to-b from-[#FFBF00] to-transparent group-hover:h-16 transition-all duration-500"
                        />
                        <motion.div
                            className="absolute top-4 right-4 h-px w-0 bg-gradient-to-l from-[#FFBF00] to-transparent group-hover:w-16 transition-all duration-500 delay-100"
                        />
                    </div>

                    {/* Step Number - Large Background */}
                    <div className="absolute -top-4 -right-4 text-[12rem] font-bold font-[family-name:var(--font-syne)] text-white/[0.02] group-hover:text-[#FFBF00]/[0.05] transition-colors duration-500 select-none leading-none">
                        {step.number}
                    </div>

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-8">
                            <div>
                                <motion.div
                                    className="flex items-center gap-4 mb-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    {/* Icon */}
                                    <motion.div
                                        className="w-14 h-14 rounded-2xl bg-[#FFBF00]/10 flex items-center justify-center text-[#FFBF00]"
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                    >
                                        {step.icon}
                                    </motion.div>
                                    <div>
                                        <span className="text-[#FFBF00] text-xs uppercase tracking-[0.2em] font-medium">
                                            {step.subtitle}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-syne)] text-white group-hover:text-[#FFBF00] transition-colors">
                                            {step.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Step Number Badge */}
                            <motion.div
                                className="text-5xl font-bold font-[family-name:var(--font-syne)] text-[#FFBF00]/20 group-hover:text-[#FFBF00]/40 transition-colors"
                                animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1 }}
                            >
                                {step.number}
                            </motion.div>
                        </div>

                        {/* Description */}
                        <p className="text-[#B3B3B3] text-lg leading-relaxed mb-8 group-hover:text-white/80 transition-colors">
                            {step.description}
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-3">
                            {step.features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="flex items-center gap-3 text-sm text-white/70 group-hover:text-white/90 transition-colors"
                                >
                                    <motion.svg
                                        className="w-5 h-5 text-[#FFBF00] flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </motion.svg>
                                    {feature}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Empty Column for Layout */}
            <div className={`hidden lg:block ${isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}`} />
        </motion.div>
    );
};

export default Process;

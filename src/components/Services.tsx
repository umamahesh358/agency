"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Services = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const services = [
        {
            id: 1,
            title: "brand architecture",
            subtitle: "Website-as-a-Service",
            description:
                "Premium websites that convert. We design and develop high-performance digital experiences that capture attention and drive action.",
            features: [
                "Custom Design Systems",
                "Conversion Optimization",
                "SEO-First Development",
                "Ongoing Maintenance",
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            image: "/images/tiger-prowl.jpg",
            gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
        },
        {
            id: 2,
            title: "cinematic precision",
            subtitle: "SEO & Content Strategy",
            description:
                "Dominate search results with data-driven SEO strategies. We optimize every element to ensure your brand appears exactly where your clients are looking.",
            features: [
                "Technical SEO Audits",
                "Content Strategy",
                "Local SEO Mastery",
                "Analytics & Reporting",
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
            image: "/images/tiger-face.jpg",
            gradient: "from-yellow-500/20 via-amber-500/10 to-transparent",
        },
        {
            id: 3,
            title: "predatory growth",
            subtitle: "Social Media Marketing",
            description:
                "Aggressive growth strategies that capture market share. We build automated systems that generate leads while you sleep.",
            features: [
                "Paid Advertising",
                "Social Automation",
                "Lead Generation",
                "Funnel Optimization",
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            image: "/images/tiger-sprint.jpg",
            gradient: "from-orange-500/20 via-red-500/10 to-transparent",
        },
    ];

    return (
        <section id="services" ref={containerRef} className="py-32 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-20"
                    style={{
                        y,
                        background: "radial-gradient(circle, #FFBF00 0%, transparent 70%)",
                        left: "10%",
                        top: "20%",
                    }}
                />
                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
                    style={{
                        y: useTransform(scrollYProgress, [0, 1], [-50, 150]),
                        background: "radial-gradient(circle, #FF8C00 0%, transparent 70%)",
                        right: "10%",
                        bottom: "20%",
                    }}
                />
            </div>

            <motion.div style={{ opacity }} className="section-container relative z-10">
                {/* Section Header with 3D Effect */}
                <motion.div
                    initial={{ opacity: 0, y: 60, rotateX: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20 perspective-1000"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-block px-4 py-2 rounded-full border border-[#FFBF00]/30 bg-[#FFBF00]/5 text-[#FFBF00] text-sm uppercase tracking-[0.2em] font-medium mb-6"
                    >
                        What We Do
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-extrabold font-[family-name:var(--font-syne)] mb-6">
                        <motion.span
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="inline-block text-white"
                        >
                            hunt with{" "}
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="inline-block premium-gradient-text"
                        >
                            precision
                        </motion.span>
                    </h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-[#B3B3B3] text-xl max-w-2xl mx-auto"
                    >
                        Three core systems designed to capture, convert, and scale your
                        digital presence with predatory efficiency.
                    </motion.p>
                </motion.div>

                {/* Services Grid with 3D Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

interface ServiceCardProps {
    service: {
        id: number;
        title: string;
        subtitle: string;
        description: string;
        features: string[];
        icon: React.ReactNode;
        image: string;
        gradient: string;
    };
    index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 80, rotateY: -10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }}
            className="group perspective-1000"
        >
            <motion.div
                className="relative h-full rounded-3xl overflow-hidden"
                whileHover={{
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: -5,
                    z: 50,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                {/* Card Base */}
                <div className="relative h-full bg-gradient-to-br from-[#1A1A1A]/90 to-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 group-hover:border-[#FFBF00]/30 transition-all duration-500 p-8 rounded-3xl">
                    {/* Background Image on Hover */}
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                        initial={false}
                    >
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
                    </motion.div>

                    <div className="relative z-10">
                        {/* Icon with Glow */}
                        <motion.div
                            className="relative mb-8"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <div className="absolute inset-0 bg-[#FFBF00] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                            <div className="relative w-16 h-16 rounded-2xl bg-[#FFBF00]/10 flex items-center justify-center text-[#FFBF00] group-hover:bg-[#FFBF00]/20 transition-colors duration-300">
                                {service.icon}
                            </div>
                        </motion.div>

                        {/* Content */}
                        <motion.span
                            className="text-[#FFBF00] text-xs uppercase tracking-[0.2em] font-medium"
                            initial={{ opacity: 0.7 }}
                            whileHover={{ opacity: 1 }}
                        >
                            {service.subtitle}
                        </motion.span>
                        <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-syne)] mt-3 mb-4 group-hover:text-[#FFBF00] transition-colors duration-300">
                            {service.title}
                        </h3>
                        <p className="text-[#B3B3B3] mb-6 leading-relaxed group-hover:text-white/80 transition-colors">
                            {service.description}
                        </p>

                        {/* Features with Staggered Animation */}
                        <ul className="space-y-3 mb-6">
                            {service.features.map((feature, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="flex items-center gap-3 text-sm text-white/70 group-hover:text-white/90 transition-colors"
                                >
                                    <motion.span
                                        className="w-1.5 h-1.5 rounded-full bg-[#FFBF00]"
                                        whileHover={{ scale: 1.5 }}
                                    />
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>

                        {/* Hover CTA */}
                        <motion.div
                            className="flex items-center gap-2 text-[#FFBF00] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
                        >
                            <span className="text-sm font-semibold uppercase tracking-wider">Explore Service</span>
                            <motion.svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </motion.svg>
                        </motion.div>
                    </div>

                    {/* Number Indicator */}
                    <div className="absolute top-6 right-6 text-6xl font-bold font-[family-name:var(--font-syne)] text-white/5 group-hover:text-[#FFBF00]/10 transition-colors duration-500">
                        0{service.id}
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-3 left-3 w-px h-10 bg-gradient-to-b from-[#FFBF00] to-transparent" />
                        <div className="absolute top-3 left-3 h-px w-10 bg-gradient-to-r from-[#FFBF00] to-transparent" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-3 right-3 w-px h-10 bg-gradient-to-t from-[#FFBF00] to-transparent" />
                        <div className="absolute bottom-3 right-3 h-px w-10 bg-gradient-to-l from-[#FFBF00] to-transparent" />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Services;

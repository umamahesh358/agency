"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const Portfolio = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const projects = [
        {
            id: 1,
            title: "Luxury Living Estates",
            category: "Real Estate",
            tags: ["Web Design", "SEO", "Lead Gen"],
            metric: "+340%",
            metricLabel: "Organic Traffic",
            image: "/images/tiger-crouch.jpg",
            size: "large",
        },
        {
            id: 2,
            title: "Premier Medical Group",
            category: "Healthcare",
            tags: ["Brand Identity", "Website"],
            metric: "2.5K",
            metricLabel: "Monthly Leads",
            image: "/images/tiger-face.jpg",
            size: "medium",
        },
        {
            id: 3,
            title: "Vogue Fashion House",
            category: "Fashion",
            tags: ["Social Media", "E-commerce"],
            metric: "$1.2M",
            metricLabel: "Revenue",
            image: "/images/tiger-sprint.jpg",
            size: "medium",
        },
        {
            id: 4,
            title: "Wanderlust Travel Co",
            category: "Travel",
            tags: ["Website", "Automation"],
            metric: "+890%",
            metricLabel: "Bookings",
            image: "/images/tiger-walk.jpg",
            size: "small",
        },
        {
            id: 5,
            title: "Urban Boutique Realty",
            category: "Real Estate",
            tags: ["Full Service"],
            metric: "47",
            metricLabel: "Listings Sold",
            image: "/images/tiger-prowl.jpg",
            size: "small",
        },
    ];

    return (
        <section id="portfolio" ref={containerRef} className="py-32 relative overflow-hidden bg-[#050505]">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute w-[800px] h-[800px] rounded-full blur-[150px] opacity-10"
                    style={{
                        y,
                        background: "radial-gradient(circle, #FFBF00 0%, transparent 70%)",
                        left: "-20%",
                        top: "30%",
                    }}
                />
            </div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="inline-block px-4 py-2 rounded-full border border-[#FFBF00]/30 bg-[#FFBF00]/5 text-[#FFBF00] text-sm uppercase tracking-[0.2em] font-medium mb-6"
                    >
                        Our Work
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-extrabold font-[family-name:var(--font-syne)] mb-6">
                        <span className="text-white">proven </span>
                        <span className="premium-gradient-text">results</span>
                    </h2>
                    <p className="text-[#B3B3B3] text-xl max-w-2xl mx-auto">
                        Case studies from clients who chose to dominate their markets.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Large Card */}
                    <PortfolioCard project={projects[0]} index={0} className="md:col-span-2 md:row-span-2" isLarge />

                    {/* Medium Cards */}
                    <PortfolioCard project={projects[1]} index={1} className="md:col-span-1" />
                    <PortfolioCard project={projects[2]} index={2} className="md:col-span-1" />

                    {/* Small Cards */}
                    <PortfolioCard project={projects[3]} index={3} className="md:col-span-1" />
                    <PortfolioCard project={projects[4]} index={4} className="md:col-span-1" />
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:border-[#FFBF00] hover:text-[#FFBF00] transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        suppressHydrationWarning
                    >
                        <span>View All Projects</span>
                        <motion.svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

interface PortfolioCardProps {
    project: {
        id: number;
        title: string;
        category: string;
        tags: string[];
        metric: string;
        metricLabel: string;
        image: string;
        size: string;
    };
    index: number;
    className?: string;
    isLarge?: boolean;
}

const PortfolioCard = ({ project, index, className = "", isLarge = false }: PortfolioCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 60, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }}
            className={`group perspective-1000 ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className={`relative overflow-hidden rounded-3xl border border-white/10 ${isLarge ? "min-h-[550px]" : "min-h-[280px]"} h-full`}
                whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(255, 191, 0, 0.4)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                    boxShadow: isHovered ? "0 30px 80px -20px rgba(255, 191, 0, 0.2)" : "none",
                }}
            >
                {/* Image with Parallax */}
                <motion.div
                    className="absolute inset-0"
                    animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

                {/* Hover Color Overlay */}
                <motion.div
                    className="absolute inset-0 bg-[#FFBF00]/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    {/* Tags */}
                    <motion.div
                        className="flex flex-wrap gap-2 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm text-white/80 border border-white/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    {/* Category & Title */}
                    <motion.span
                        className="text-[#FFBF00] text-xs uppercase tracking-[0.15em] font-medium"
                        animate={isHovered ? { x: 10 } : { x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {project.category}
                    </motion.span>
                    <motion.h3
                        className={`font-bold font-[family-name:var(--font-syne)] mt-2 mb-4 text-white ${isLarge ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}
                        animate={isHovered ? { x: 10 } : { x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                    >
                        {project.title}
                    </motion.h3>

                    {/* Metric Badge */}
                    <motion.div
                        className="inline-flex"
                        animate={isHovered ? { x: 10, scale: 1.05 } : { x: 0, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <div className="bg-[#1A1A1A]/80 backdrop-blur-xl border border-[#FFBF00]/30 rounded-2xl px-5 py-3 inline-flex items-center gap-3">
                            <span className={`font-bold font-[family-name:var(--font-syne)] text-[#FFBF00] ${isLarge ? "text-3xl" : "text-2xl"}`}>
                                {project.metric}
                            </span>
                            <span className="text-white/60 text-sm">
                                {project.metricLabel}
                            </span>
                        </div>
                    </motion.div>

                    {/* View Project Arrow */}
                    <motion.div
                        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#FFBF00]/10 border border-[#FFBF00]/30 flex items-center justify-center text-[#FFBF00]"
                        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                        animate={isHovered ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -45 }}
                        transition={{ duration: 0.3, type: "spring" }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.div>
                </div>

                {/* Corner Accent */}
                <motion.div
                    className="absolute bottom-0 left-0 w-32 h-32 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="absolute bottom-4 left-4 w-px h-12 bg-gradient-to-t from-[#FFBF00] to-transparent" />
                    <div className="absolute bottom-4 left-4 h-px w-12 bg-gradient-to-r from-[#FFBF00] to-transparent" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Portfolio;

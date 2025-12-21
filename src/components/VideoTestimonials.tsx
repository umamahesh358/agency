"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const VideoTestimonials = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });
    const [activeVideo, setActiveVideo] = useState<number | null>(null);

    const testimonials = [
        {
            id: 1,
            name: "Michael Thompson",
            role: "CEO",
            company: "Luxury Estates Group",
            location: "Miami, USA",
            country: "🇺🇸",
            thumbnail: "/images/testimonials/michael.jpg",
            videoUrl: "#",
            quote: "They took us from $50K to $500K monthly revenue in just 6 months.",
            result: "+900%",
            resultLabel: "Revenue Growth",
        },
        {
            id: 2,
            name: "Dr. Sarah Williams",
            role: "Founder",
            company: "Premier Medical Clinic",
            location: "London, UK",
            country: "🇬🇧",
            thumbnail: "/images/testimonials/sarah.jpg",
            videoUrl: "#",
            quote: "Our patient bookings increased by 340% within the first quarter.",
            result: "340%",
            resultLabel: "More Bookings",
        },
        {
            id: 3,
            name: "Ahmed Al-Hassan",
            role: "Managing Director",
            company: "Desert Luxury Properties",
            location: "Dubai, UAE",
            country: "🇦🇪",
            thumbnail: "/images/testimonials/ahmed.jpg",
            videoUrl: "#",
            quote: "Best investment we've made. ROI was visible within 30 days.",
            result: "30 Days",
            resultLabel: "To ROI",
        },
        {
            id: 4,
            name: "Emma Chen",
            role: "Brand Director",
            company: "Vogue Fashion House",
            location: "Sydney, Australia",
            country: "🇦🇺",
            thumbnail: "/images/testimonials/emma.jpg",
            videoUrl: "#",
            quote: "They understand luxury brands. Our online presence is now world-class.",
            result: "$2.4M",
            resultLabel: "Sales Generated",
        },
    ];

    return (
        <section id="testimonials" ref={containerRef} className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #050505 0%, #080604 50%, #050505 100%)" }}>
            {/* Background - Warm amber tint */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Warm amber tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFBF00]/[0.02] via-[#FF8C00]/[0.03] to-transparent" />

                {/* Left amber glow */}
                <div
                    className="absolute w-[800px] h-[800px] rounded-full blur-[200px] opacity-[0.08]"
                    style={{
                        background: "radial-gradient(circle, #FFBF00 0%, transparent 60%)",
                        left: "-10%",
                        top: "20%",
                    }}
                />
                {/* Right amber glow */}
                <div
                    className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.06]"
                    style={{
                        background: "radial-gradient(circle, #FF8C00 0%, transparent 60%)",
                        right: "-5%",
                        bottom: "10%",
                    }}
                />

                {/* Horizontal accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFBF00]/20 to-transparent" />
            </div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="inline-block px-4 py-2 rounded-full border border-[#FFBF00]/30 bg-[#FFBF00]/5 text-[#FFBF00] text-sm uppercase tracking-[0.2em] font-medium mb-6"
                    >
                        Client Stories
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-extrabold font-[family-name:var(--font-syne)] mb-6">
                        <span className="text-white">real results, </span>
                        <span className="premium-gradient-text">real clients</span>
                    </h2>
                    <p className="text-[#B3B3B3] text-xl max-w-2xl mx-auto">
                        Don't just take our word for it. Hear directly from clients across the globe.
                    </p>

                    {/* Trust Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-8 mt-10"
                    >
                        {[
                            { value: "150+", label: "Clients Worldwide" },
                            { value: "12", label: "Countries Served" },
                            { value: "98%", label: "Client Retention" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <p className="text-3xl font-bold text-[#FFBF00] font-[family-name:var(--font-syne)]">
                                    {stat.value}
                                </p>
                                <p className="text-[#B3B3B3] text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 60, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{
                                delay: 0.3 + index * 0.15,
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group"
                        >
                            <motion.div
                                className="relative bg-gradient-to-br from-[#1A1A1A]/90 to-[#0a0a0a]/90 rounded-3xl overflow-hidden border border-white/5 hover:border-[#FFBF00]/30 transition-all duration-500"
                                whileHover={{ y: -5 }}
                                style={{
                                    boxShadow: "0 25px 50px -20px rgba(0,0,0,0.5)",
                                }}
                            >
                                {/* Video Thumbnail Area */}
                                <div className="relative aspect-video overflow-hidden">
                                    {/* Placeholder - Replace with actual thumbnails */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFBF00]/10 to-[#FF8C00]/5">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            {/* Company Initial */}
                                            <div className="w-20 h-20 rounded-full bg-[#FFBF00]/20 flex items-center justify-center">
                                                <span className="text-3xl font-bold text-[#FFBF00]">
                                                    {testimonial.company.charAt(0)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Play Button */}
                                    <motion.button
                                        onClick={() => setActiveVideo(testimonial.id)}
                                        className="absolute inset-0 flex items-center justify-center z-10"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <motion.div
                                            className="w-20 h-20 rounded-full bg-[#FFBF00] flex items-center justify-center shadow-2xl"
                                            style={{ boxShadow: "0 0 60px rgba(255,191,0,0.4)" }}
                                            animate={{
                                                scale: [1, 1.1, 1],
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <svg
                                                className="w-8 h-8 text-[#050505] ml-1"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </motion.div>
                                    </motion.button>

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

                                    {/* Result Badge */}
                                    <motion.div
                                        className="absolute top-4 right-4 px-4 py-2 rounded-xl bg-[#050505]/90 backdrop-blur-xl border border-[#FFBF00]/30"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                    >
                                        <p className="text-2xl font-bold text-[#FFBF00] font-[family-name:var(--font-syne)]">
                                            {testimonial.result}
                                        </p>
                                        <p className="text-white/60 text-xs">{testimonial.resultLabel}</p>
                                    </motion.div>

                                    {/* Country Flag */}
                                    <div className="absolute top-4 left-4 text-2xl">
                                        {testimonial.country}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8">
                                    {/* Quote */}
                                    <div className="mb-6">
                                        <svg
                                            className="w-8 h-8 text-[#FFBF00]/30 mb-2"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                        <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
                                            "{testimonial.quote}"
                                        </p>
                                    </div>

                                    {/* Author */}
                                    <div className="flex items-center gap-4">
                                        {/* Avatar Placeholder */}
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFBF00] to-[#FF8C00] flex items-center justify-center">
                                            <span className="text-xl font-bold text-[#050505]">
                                                {testimonial.name.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-white font-bold font-[family-name:var(--font-syne)]">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-[#FFBF00] text-sm">{testimonial.role}</p>
                                            <p className="text-[#B3B3B3] text-sm">
                                                {testimonial.company} • {testimonial.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:border-[#FFBF00] hover:text-[#FFBF00] transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>View All Case Studies</span>
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

            {/* Video Modal */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/95 backdrop-blur-xl"
                        onClick={() => setActiveVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-4xl aspect-video bg-[#1A1A1A] rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Placeholder for video player */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-24 h-24 rounded-full bg-[#FFBF00]/20 flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-12 h-12 text-[#FFBF00]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <p className="text-white text-xl font-bold">Video Testimonial</p>
                                    <p className="text-[#B3B3B3] text-sm mt-2">Add your video URL here</p>
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={() => setActiveVideo(null)}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FFBF00] hover:text-[#050505] transition-all"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default VideoTestimonials;

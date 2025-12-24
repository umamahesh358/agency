"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const FeaturedVideo = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });
    const [isPlaying, setIsPlaying] = useState(false);

    const videoId = "DhakWn1jzdI";

    return (
        <section ref={containerRef} className="py-32 relative overflow-hidden bg-[#030303]">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
                <motion.div
                    className="absolute w-[800px] h-[800px] rounded-full blur-[200px] opacity-[0.06]"
                    style={{
                        background: "radial-gradient(circle, #FFBF00 0%, transparent 60%)",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                />
            </div>

            <div className="section-container relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="inline-block px-4 py-2 rounded-full border border-[#FFBF00]/30 bg-[#FFBF00]/5 text-[#FFBF00] text-sm uppercase tracking-[0.2em] font-medium mb-6"
                    >
                        🎬 Featured Work
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-extrabold font-[family-name:var(--font-syne)] mb-6">
                        <span className="text-white">see our </span>
                        <span className="premium-gradient-text">work in action</span>
                    </h2>
                    <p className="text-[#B3B3B3] text-xl max-w-2xl mx-auto">
                        Watch how we transformed Navya's International Dental Hospital's digital presence with professional video production.
                    </p>
                </motion.div>

                {/* Video Container */}
                <motion.div
                    initial={{ opacity: 0, y: 80, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative max-w-5xl mx-auto"
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#FFBF00]/20 via-[#FF8C00]/20 to-[#FFBF00]/20 rounded-[2rem] blur-2xl opacity-50" />

                    {/* Video Frame */}
                    <div className="relative rounded-2xl overflow-hidden border border-[#FFBF00]/20 bg-[#0a0a0a]"
                        style={{ boxShadow: "0 40px 100px -20px rgba(255, 191, 0, 0.2)" }}
                    >
                        {/* Aspect Ratio Container */}
                        <div className="relative aspect-video">
                            {!isPlaying ? (
                                <>
                                    {/* Thumbnail */}
                                    <img
                                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                        alt="Navya's International Dental Hospital Video"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/30" />

                                    {/* Play Button */}
                                    <motion.button
                                        onClick={() => setIsPlaying(true)}
                                        className="absolute inset-0 flex items-center justify-center group"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        suppressHydrationWarning
                                    >
                                        <motion.div
                                            className="relative"
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                        >
                                            {/* Outer Ring */}
                                            <div className="absolute -inset-6 rounded-full border-2 border-[#FFBF00]/30 group-hover:border-[#FFBF00]/60 transition-colors" />
                                            <div className="absolute -inset-10 rounded-full border border-[#FFBF00]/20 group-hover:border-[#FFBF00]/40 transition-colors" />

                                            {/* Play Icon */}
                                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FFBF00] to-[#FF8C00] flex items-center justify-center shadow-2xl group-hover:shadow-[#FFBF00]/30 transition-shadow">
                                                <svg className="w-10 h-10 text-[#050505] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </motion.div>

                                        <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                            Watch Now
                                        </span>
                                    </motion.button>
                                </>
                            ) : (
                                <iframe
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                    title="Navya's International Dental Hospital"
                                    className="absolute inset-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            )}
                        </div>
                    </div>

                    {/* Project Info Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-4 mt-8"
                    >
                        <div className="px-5 py-3 rounded-full bg-[#1A1A1A]/80 border border-white/10 text-white/80 text-sm flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            Navya's International Dental Hospital
                        </div>
                        <div className="px-5 py-3 rounded-full bg-[#1A1A1A]/80 border border-white/10 text-white/80 text-sm">
                            📍 Guntur, India
                        </div>
                        <div className="px-5 py-3 rounded-full bg-[#FFBF00]/10 border border-[#FFBF00]/30 text-[#FFBF00] text-sm font-medium">
                            🎬 Video Production
                        </div>
                    </motion.div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <p className="text-[#B3B3B3] text-lg mb-6">
                        Want professional video production for your business?
                    </p>
                    <motion.a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FFBF00] to-[#FF8C00] text-[#050505] font-bold hover:shadow-lg hover:shadow-[#FFBF00]/30 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Get a Quote
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedVideo;

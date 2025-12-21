"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Team = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });

    const team = [
        {
            name: "Alex Mitchell",
            role: "Founder & CEO",
            image: "/images/team/founder.jpg",
            bio: "10+ years scaling agencies from $0 to $10M+",
            location: "New York, USA",
            linkedin: "#",
            specialties: ["Strategy", "Growth", "Automation"],
        },
        {
            name: "Sarah Chen",
            role: "Creative Director",
            image: "/images/team/creative.jpg",
            bio: "Former lead designer at top Fortune 500 brands",
            location: "London, UK",
            linkedin: "#",
            specialties: ["Branding", "UI/UX", "Motion"],
        },
        {
            name: "Marcus Johnson",
            role: "Head of Marketing",
            image: "/images/team/marketing.jpg",
            bio: "$50M+ in client revenue generated",
            location: "Dubai, UAE",
            linkedin: "#",
            specialties: ["Paid Ads", "SEO", "Analytics"],
        },
        {
            name: "Emma Rodriguez",
            role: "Client Success Lead",
            image: "/images/team/success.jpg",
            bio: "98% client retention rate champion",
            location: "Sydney, Australia",
            linkedin: "#",
            specialties: ["Onboarding", "Support", "Growth"],
        },
    ];

    return (
        <section id="team" ref={containerRef} className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #080808 0%, #050505 100%)" }}>
            {/* Background - Professional gradient with accent */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFBF00]/30 to-transparent" />

                {/* Center glow */}
                <div
                    className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.08]"
                    style={{
                        background: "radial-gradient(circle, #FFBF00 0%, transparent 70%)",
                        left: "50%",
                        top: "30%",
                        transform: "translateX(-50%)",
                    }}
                />

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFBF00]/20 to-transparent" />
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
                        Meet The Pack
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-extrabold font-[family-name:var(--font-syne)] mb-6">
                        <span className="text-white">the hunters </span>
                        <span className="premium-gradient-text">behind you</span>
                    </h2>
                    <p className="text-[#B3B3B3] text-xl max-w-2xl mx-auto">
                        A global team of digital predators, spanning 4 continents and ready to dominate your market.
                    </p>
                </motion.div>

                {/* Global Presence Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-6 mb-16"
                >
                    {["🇺🇸 USA", "🇬🇧 UK", "🇦🇪 UAE", "🇦🇺 Australia"].map((location, i) => (
                        <motion.div
                            key={location}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            className="px-4 py-2 rounded-full bg-[#1A1A1A]/50 border border-white/10 text-white/80 text-sm"
                        >
                            {location}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 60, rotateY: -10 }}
                            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                            transition={{
                                delay: 0.4 + index * 0.15,
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group"
                        >
                            <motion.div
                                className="relative bg-gradient-to-br from-[#1A1A1A]/80 to-[#0a0a0a]/80 rounded-3xl overflow-hidden border border-white/5 hover:border-[#FFBF00]/30 transition-all duration-500"
                                whileHover={{ y: -10, scale: 1.02 }}
                                style={{
                                    boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)",
                                }}
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    {/* Placeholder - Replace with actual images */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFBF00]/20 to-[#FF8C00]/10 flex items-center justify-center">
                                        <div className="w-24 h-24 rounded-full bg-[#FFBF00]/20 flex items-center justify-center">
                                            <span className="text-4xl font-bold text-[#FFBF00] font-[family-name:var(--font-syne)]">
                                                {member.name.charAt(0)}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Overlay on hover */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"
                                    />

                                    {/* Location Badge */}
                                    <motion.div
                                        className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#050505]/80 backdrop-blur-sm border border-white/10 text-white/80 text-xs flex items-center gap-1.5"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                        {member.location}
                                    </motion.div>

                                    {/* LinkedIn */}
                                    <motion.a
                                        href={member.linkedin}
                                        className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#050505]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-[#FFBF00] hover:border-[#FFBF00]/30 transition-all opacity-0 group-hover:opacity-100"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </motion.a>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-syne)] mb-1 group-hover:text-[#FFBF00] transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-[#FFBF00] text-sm font-medium mb-3">{member.role}</p>
                                    <p className="text-[#B3B3B3] text-sm mb-4">{member.bio}</p>

                                    {/* Specialties */}
                                    <div className="flex flex-wrap gap-2">
                                        {member.specialties.map((specialty) => (
                                            <span
                                                key={specialty}
                                                className="px-2 py-1 rounded-md bg-white/5 text-white/60 text-xs"
                                            >
                                                {specialty}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-[#B3B3B3] text-lg mb-4">
                        Want to join the pack?
                    </p>
                    <motion.a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-[#FFBF00] font-semibold hover:underline"
                        whileHover={{ x: 5 }}
                    >
                        View Open Positions
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Team;

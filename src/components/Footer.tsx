"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const footerLinks = {
        services: [
            { name: "Website Design", href: "#services" },
            { name: "SEO Optimization", href: "#services" },
            { name: "Social Media Marketing", href: "#services" },
            { name: "Lead Generation", href: "#services" },
        ],
        company: [
            { name: "About Us", href: "#about" },
            { name: "Our Process", href: "#process" },
            { name: "Case Studies", href: "#portfolio" },
            { name: "Contact", href: "#contact" },
        ],
        industries: [
            { name: "Real Estate", href: "#" },
            { name: "Medical & Healthcare", href: "#" },
            { name: "Fashion & Retail", href: "#" },
            { name: "Travel & Hospitality", href: "#" },
        ],
    };

    const socialLinks = [
        {
            name: "Twitter",
            href: "https://twitter.com",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
        },
        {
            name: "Instagram",
            href: "https://instagram.com",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            ),
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
        },
        {
            name: "YouTube",
            href: "https://youtube.com",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="relative overflow-hidden border-t border-white/5 bg-[#050505]">
            {/* Background Tiger */}
            <div className="absolute inset-0 opacity-[0.03]">
                <Image
                    src="/images/tiger-sprint.jpg"
                    alt=""
                    fill
                    className="object-cover object-right"
                />
            </div>

            {/* Premium Top Gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFBF00]/30 to-transparent" />

            <div className="section-container relative z-10 py-20">
                {/* Top Section - CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 pb-20 border-b border-white/5"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold font-[family-name:var(--font-syne)] mb-6">
                        <span className="text-white">ready to </span>
                        <span className="premium-gradient-text">dominate?</span>
                    </h2>
                    <p className="text-[#B3B3B3] text-lg max-w-xl mx-auto mb-8">
                        Let's build your digital hunting ground and capture your market.
                    </p>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link href="#contact" className="group relative inline-flex">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#FFBF00] to-[#FF8C00] rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
                            <span className="relative btn-primary text-lg px-10 py-5">
                                Start Your Project
                                <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </Link>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="col-span-2 lg:col-span-2 space-y-6"
                    >
                        <Link href="/" className="flex items-center gap-3 group">
                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.05, rotate: 5 }}
                            >
                                <div className="absolute inset-0 bg-[#FFBF00] blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFBF00] to-[#FF8C00] flex items-center justify-center shadow-lg">
                                    <span className="text-[#050505] font-bold text-xl font-[family-name:var(--font-syne)]">
                                        A
                                    </span>
                                </div>
                            </motion.div>
                            <div>
                                <span className="text-white font-bold text-2xl font-[family-name:var(--font-syne)] tracking-tight block">
                                    automate
                                </span>
                                <span className="text-[#B3B3B3] text-xs uppercase tracking-[0.15em]">
                                    smma agency
                                </span>
                            </div>
                        </Link>

                        <p className="text-[#B3B3B3] text-sm leading-relaxed max-w-sm">
                            Cinematic, automation-driven digital experiences for clients who
                            demand dominance. Real Estate. Medical. Fashion. Travel.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#B3B3B3] hover:bg-[#FFBF00] hover:border-[#FFBF00] hover:text-[#050505] transition-all duration-300"
                                    aria-label={social.name}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([title, links], columnIndex) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + columnIndex * 0.1 }}
                        >
                            <h4 className="text-white font-bold font-[family-name:var(--font-syne)] mb-5 uppercase tracking-wider text-sm">
                                {title}
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link, linkIndex) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + linkIndex * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-[#B3B3B3] text-sm hover:text-[#FFBF00] transition-colors duration-300 inline-flex items-center gap-2 group"
                                        >
                                            {link.name}
                                            <svg
                                                className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-[#B3B3B3] text-sm">
                        © 2024 Automate SMMA Agency. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className="text-[#B3B3B3] text-sm hover:text-[#FFBF00] transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* Large Background Text */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-extrabold font-[family-name:var(--font-syne)] text-white/[0.015] whitespace-nowrap select-none pointer-events-none leading-none">
                    AUTOMATE
                </div>
            </div>
        </footer>
    );
};

export default Footer;

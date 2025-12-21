"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Interactive3DLogo from "./Interactive3DLogo";

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "About", href: "#about" },
        { name: "Process", href: "#process" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "py-3 bg-[#050505]/80 backdrop-blur-2xl border-b border-white/5"
                    : "py-6"
                    }`}
            >
                <div className="section-container flex items-center justify-between">
                    {/* Interactive 3D Logo */}
                    <div className="flex items-center gap-3">
                        <Interactive3DLogo />
                        <Link href="/" className="flex flex-col group" data-cursor-hover data-cursor-text="Home">
                            <span className="text-white font-bold text-xl font-[family-name:var(--font-syne)] tracking-tight group-hover:text-[#FFBF00] transition-colors duration-300">
                                automate
                            </span>
                            <span className="text-[#B3B3B3] text-[10px] uppercase tracking-[0.2em] -mt-0.5">
                                smma agency
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                            >
                                <Link
                                    href={link.href}
                                    className="relative px-4 py-2 text-[#B3B3B3] hover:text-white text-sm font-medium transition-colors duration-300 group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FFBF00] to-[#FF8C00] rounded-full transition-all duration-300 group-hover:w-3/4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="hidden md:block"
                    >
                        <Link href="#contact" className="group relative inline-flex">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFBF00] to-[#FF8C00] rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                            <span className="relative flex items-center gap-2 bg-[#FFBF00] hover:bg-[#FFD700] text-[#050505] font-bold text-sm py-3 px-6 rounded-full transition-all duration-300">
                                Start Hunting
                                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </Link>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center text-white"
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-6 h-5 flex flex-col justify-between">
                            <motion.span
                                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                className="w-full h-0.5 bg-white rounded-full origin-center transition-colors"
                                style={{ backgroundColor: mobileMenuOpen ? "#FFBF00" : "white" }}
                            />
                            <motion.span
                                animate={mobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                className="w-full h-0.5 bg-white rounded-full"
                            />
                            <motion.span
                                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                className="w-full h-0.5 bg-white rounded-full origin-center transition-colors"
                                style={{ backgroundColor: mobileMenuOpen ? "#FFBF00" : "white" }}
                            />
                        </div>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Menu Content */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-[#0a0a0a] border-l border-white/5 p-8 pt-24"
                        >
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block py-4 text-2xl font-bold font-[family-name:var(--font-syne)] text-white hover:text-[#FFBF00] transition-colors border-b border-white/5"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8"
                            >
                                <Link
                                    href="#contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="btn-primary w-full text-center block"
                                >
                                    Start Hunting
                                </Link>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-12 pt-8 border-t border-white/5"
                            >
                                <p className="text-[#B3B3B3] text-sm mb-4">Follow us</p>
                                <div className="flex gap-4">
                                    {["Twitter", "Instagram", "LinkedIn"].map((social) => (
                                        <a
                                            key={social}
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#B3B3B3] hover:bg-[#FFBF00] hover:text-[#050505] transition-all"
                                        >
                                            <span className="text-xs font-bold">{social[0]}</span>
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;

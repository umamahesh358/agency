"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        industry: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitSuccess(true);
        console.log("Form submitted:", formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const inputClasses = "w-full px-5 py-4 rounded-xl bg-[#0a0a0a]/80 border border-white/10 text-white placeholder-white/30 focus:border-[#FFBF00] focus:outline-none focus:ring-2 focus:ring-[#FFBF00]/20 transition-all duration-300";

    return (
        <section id="contact" ref={containerRef} className="py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <motion.div style={{ y }} className="absolute inset-0 scale-110">
                    <Image
                        src="/images/tiger-crouch.jpg"
                        alt="Contact Background"
                        fill
                        className="object-cover opacity-20"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/95 to-[#050505]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />

                {/* Animated Gradient Orbs */}
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-15"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                    style={{
                        background: "radial-gradient(circle, #FFBF00 0%, transparent 70%)",
                        left: "20%",
                        top: "20%",
                    }}
                />
            </div>

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-10"
                    >
                        <div>
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="inline-block px-4 py-2 rounded-full border border-[#FFBF00]/30 bg-[#FFBF00]/5 text-[#FFBF00] text-sm uppercase tracking-[0.2em] font-medium mb-6"
                            >
                                Start Your Hunt
                            </motion.span>
                            <h2 className="text-5xl md:text-7xl font-extrabold font-[family-name:var(--font-syne)] mb-6">
                                <motion.span
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="block text-white"
                                >
                                    ready to
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="block premium-gradient-text"
                                >
                                    dominate?
                                </motion.span>
                            </h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="text-[#B3B3B3] text-xl leading-relaxed max-w-lg"
                            >
                                Book a strategy call to discover how our automated systems can
                                transform your digital presence and <span className="text-white">capture your market</span>.
                            </motion.p>
                        </div>

                        {/* Contact Methods */}
                        <div className="space-y-4">
                            {[
                                { icon: "email", title: "Email Us", value: "hello@automatesmma.com" },
                                { icon: "calendar", title: "Book a Call", value: "30-min Strategy Session" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                >
                                    <motion.div
                                        className="flex items-center gap-4 p-4 rounded-2xl bg-[#1A1A1A]/50 border border-white/5 hover:border-[#FFBF00]/30 transition-all duration-300 group cursor-pointer"
                                        whileHover={{ x: 10, scale: 1.02 }}
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-[#FFBF00]/10 flex items-center justify-center text-[#FFBF00] group-hover:bg-[#FFBF00]/20 transition-colors">
                                            {item.icon === "email" ? (
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            ) : (
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            )}
                                        </div>
                                        <div>
                                            <p className="text-[#B3B3B3] text-sm">{item.title}</p>
                                            <p className="text-white font-medium group-hover:text-[#FFBF00] transition-colors">{item.value}</p>
                                        </div>
                                        <motion.svg
                                            className="w-5 h-5 text-[#FFBF00] ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </motion.svg>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <motion.button
                                className="group relative inline-flex"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                suppressHydrationWarning
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#FFBF00] to-[#FF8C00] rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
                                <span className="relative btn-primary">
                                    Book a Call
                                    <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </motion.button>
                            <motion.button
                                className="btn-secondary"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                suppressHydrationWarning
                            >
                                Apply Now
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 60, rotateY: -10 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="perspective-1000"
                    >
                        <motion.form
                            onSubmit={handleSubmit}
                            className="relative bg-gradient-to-br from-[#1A1A1A]/90 to-[#0a0a0a]/90 backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-white/10 overflow-hidden"
                            style={{
                                boxShadow: "0 25px 80px -20px rgba(255, 191, 0, 0.1)",
                            }}
                            whileHover={{
                                borderColor: "rgba(255, 191, 0, 0.2)",
                            }}
                        >
                            {/* Corner Accents */}
                            <div className="absolute top-0 right-0 w-24 h-24">
                                <div className="absolute top-4 right-4 w-px h-12 bg-gradient-to-b from-[#FFBF00] to-transparent" />
                                <div className="absolute top-4 right-4 h-px w-12 bg-gradient-to-l from-[#FFBF00] to-transparent" />
                            </div>

                            {/* Form Header */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold font-[family-name:var(--font-syne)] text-white mb-2">
                                    start your project
                                </h3>
                                <p className="text-[#B3B3B3] text-sm">
                                    Fill out the form and we'll be in touch within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <motion.div whileFocus={{ scale: 1.01 }}>
                                        <label className="text-sm text-[#B3B3B3] mb-2 block">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className={inputClasses}
                                            placeholder="John Smith"
                                            suppressHydrationWarning
                                        />
                                    </motion.div>
                                    <div>
                                        <label className="text-sm text-[#B3B3B3] mb-2 block">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className={inputClasses}
                                            placeholder="john@company.com"
                                            suppressHydrationWarning
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm text-[#B3B3B3] mb-2 block">Company Name</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className={inputClasses}
                                            placeholder="Your Company"
                                            suppressHydrationWarning
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm text-[#B3B3B3] mb-2 block">Industry</label>
                                        <select
                                            name="industry"
                                            value={formData.industry}
                                            onChange={handleChange}
                                            className={`${inputClasses} cursor-pointer`}
                                            suppressHydrationWarning
                                        >
                                            <option value="" className="bg-[#1A1A1A]">Select Industry</option>
                                            <option value="real-estate" className="bg-[#1A1A1A]">Real Estate</option>
                                            <option value="medical" className="bg-[#1A1A1A]">Medical / Healthcare</option>
                                            <option value="fashion" className="bg-[#1A1A1A]">Fashion / Retail</option>
                                            <option value="travel" className="bg-[#1A1A1A]">Travel / Hospitality</option>
                                            <option value="other" className="bg-[#1A1A1A]">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm text-[#B3B3B3] mb-2 block">Tell us about your project</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className={`${inputClasses} resize-none`}
                                        placeholder="What are your goals? What challenges are you facing?"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="w-full relative group overflow-hidden"
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    disabled={isSubmitting}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFBF00] to-[#FF8C00]" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C00] to-[#FFBF00] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <span className="relative flex items-center justify-center gap-2 py-4 text-[#050505] font-bold text-lg">
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    className="w-5 h-5 border-2 border-[#050505] border-t-transparent rounded-full"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                />
                                                Sending...
                                            </>
                                        ) : submitSuccess ? (
                                            <>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Message Sent!
                                            </>
                                        ) : (
                                            <>
                                                Start Hunting
                                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </>
                                        )}
                                    </span>
                                </motion.button>

                                <p className="text-center text-[#B3B3B3] text-xs">
                                    By submitting, you agree to our privacy policy.
                                </p>
                            </div>
                        </motion.form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

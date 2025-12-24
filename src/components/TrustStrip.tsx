"use client";

import { motion } from "framer-motion";

const TrustStrip = () => {
    const logos = [
        "ZAYKAA",
        "Shankar Heights",
        "Navyas International Dental Hospital",
        "Bhadradri Papikondalu Tourism",
        "Aqua Kushi",
        "Sarvagna Innovation Pvt",
        "Urban Realty",
        "Elite Properties",
        "Luxury Estates",
        "MedCare Plus",
        "Wellness Co",
        "Prime Med",
    ];

    return (
        <section className="pt-32 pb-16 border-y border-white/5 overflow-hidden bg-[#0a0a0a]">
            <div className="section-container mb-8">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-[#B3B3B3] text-sm uppercase tracking-wider"
                >
                    Trusted by industry leaders
                </motion.p>
            </div>

            {/* Marquee Container */}
            <div className="relative">
                {/* Gradient Fade Left */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
                {/* Gradient Fade Right */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

                <div className="flex animate-marquee">
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-12 flex items-center justify-center"
                        >
                            <span className="text-2xl font-bold font-[family-name:var(--font-syne)] text-white/20 hover:text-white/40 transition-colors duration-300 whitespace-nowrap">
                                {logo}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustStrip;

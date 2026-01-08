"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content Side - LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            className="text-white text-sm tracking-widest uppercase mb-4 block"
                            style={{
                                fontFamily: "var(--font-cormorant), serif",
                                fontWeight: 600,
                                letterSpacing: "0.2em",
                                textShadow: "0 0 15px rgba(255, 179, 71, 0.8), 2px 2px 4px rgba(0,0,0,0.8)",
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            ✦ Our Story ✦
                        </motion.span>

                        <h2
                            className="text-4xl md:text-5xl mb-6 text-wild-cream"
                            style={{
                                fontFamily: "var(--font-cinzel), serif",
                                fontWeight: 700,
                                textShadow: "2px 2px 10px rgba(0,0,0,0.8), 0 0 30px rgba(255, 179, 71, 0.4)",
                                letterSpacing: "0.03em",
                            }}
                        >
                            <span className="gradient-text">Where Imagination Flows Freely</span>
                        </h2>

                        <div
                            className="space-y-4 text-wild-cream/70 leading-relaxed text-lg"
                            style={{
                                fontFamily: "var(--font-cormorant), serif",
                                fontWeight: 500,
                                lineHeight: 1.8,
                            }}
                        >
                            <p>
                                Welcome to <span className="text-wild-gold font-semibold">Wild Canvas</span>,
                                a peaceful creative space where imaginative artistry meets the gentle
                                magic and emotional depth of Studio Ghibli-style aesthetics.
                            </p>
                            <p>
                                Every video is carefully crafted to help you <span className="text-wild-gold">relax</span>,
                                <span className="text-wild-teal"> unwind</span>, and escape into beautifully
                                rendered worlds filled with calm moments, soft music, and dreamy visuals.
                            </p>
                            <p>
                                Whether you&apos;re looking for background ambience for work, soothing
                                animations for sleep, or simply a peaceful escape from the everyday—
                                Wild Canvas is your destination.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {[
                                { icon: "✨", text: "Handcrafted Art" },
                                { icon: "🌸", text: "Ghibli Aesthetic" },
                                { icon: "🎵", text: "Relaxing Music" },
                                { icon: "💫", text: "Weekly Content" },
                            ].map((feature, index) => (
                                <motion.div
                                    key={feature.text}
                                    className="flex items-center gap-3 glass-card p-3 rounded-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <span className="text-2xl">{feature.icon}</span>
                                    <span className="text-wild-cream/80 text-sm font-medium">
                                        {feature.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            className="mt-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 text-wild-gold hover:text-wild-cream transition-colors font-medium group"
                            >
                                Learn More About Us
                                <motion.svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </motion.svg>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Image Side - RIGHT - No glassmorphism */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative flex justify-center">
                            {/* Glow effect behind image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-wild-purple/40 to-wild-teal/20 blur-3xl" />

                            {/* Main image - natural, no glassmorphism */}
                            <div className="relative">
                                <Image
                                    src="/Wildcanvas.jpeg"
                                    alt="Wild Canvas Creator"
                                    width={350}
                                    height={350}
                                    className="rounded-full border-4 border-wild-gold/30"
                                    style={{
                                        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                                    }}
                                />
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-24 h-24 bg-wild-gold/20 rounded-full blur-xl"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute -bottom-8 -left-8 w-32 h-32 bg-wild-gold/20 rounded-full blur-2xl"
                                animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 5, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

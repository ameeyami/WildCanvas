"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SubscribeCTA() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wild-purple/10 to-transparent" />

            <motion.div
                className="absolute top-10 left-1/4 w-64 h-64 bg-wild-gold/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-10 right-1/4 w-48 h-48 bg-wild-gold/10 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="container mx-auto relative z-10">
                <motion.div
                    className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Icon */}
                    <motion.div
                        className="w-20 h-20 mx-auto mb-6 rounded-full bg-wild-gold/20 flex items-center justify-center"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                    >
                        <svg
                            className="w-10 h-10 text-wild-gold"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        className="text-4xl md:text-5xl mb-4 text-white"
                        style={{
                            fontFamily: "var(--font-cinzel), serif",
                            fontWeight: 700,
                            textShadow: "2px 2px 10px rgba(0,0,0,0.6), 0 0 20px rgba(244, 197, 66, 0.3)",
                            letterSpacing: "0.03em",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="gradient-text">Join The Journey</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-white/90 max-w-2xl mx-auto mb-8 text-lg"
                        style={{
                            fontFamily: "var(--font-cormorant), serif",
                            fontWeight: 500,
                            lineHeight: 1.8,
                            textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        Subscribe to Wild Canvas and never miss a new relaxing video.
                        Get weekly escapes into peaceful, dreamlike worlds.
                    </motion.p>

                    {/* Subscribe button */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-[#FF0000] hover:bg-[#CC0000] text-white font-semibold text-lg px-8 py-6 btn-glow group"
                        >
                            <a
                                href="https://www.youtube.com/@wild_canvas_3d?sub_confirmation=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3"
                            >
                                <svg
                                    className="w-6 h-6 group-hover:scale-110 transition-transform"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                                Subscribe on YouTube
                            </a>
                        </Button>
                    </motion.div>

                    {/* Newsletter signup */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <p
                            className="text-white/80 text-sm mb-4"
                            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.4)" }}
                        >
                            Or get notified via email (optional)
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-wild-cream/5 border-wild-cream/20 text-wild-cream placeholder:text-wild-cream/40 focus:border-wild-gold"
                            />
                            <Button
                                type="submit"
                                variant="outline"
                                className="border-wild-gold text-wild-gold hover:bg-wild-gold hover:text-wild-deep whitespace-nowrap"
                            >
                                Notify Me
                            </Button>
                        </form>
                    </motion.div>

                    {/* Benefits */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-6 mt-10 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                    >
                        {[
                            "🎬 New videos weekly",
                            "🔔 First access to premieres",
                            "💬 Join the community",
                        ].map((benefit) => (
                            <span key={benefit} className="text-wild-cream/60">
                                {benefit}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

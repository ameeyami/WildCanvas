"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Overlay gradient for left side text readability */}
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(90deg, rgba(26, 26, 46, 0.7) 0%, rgba(26, 26, 46, 0.4) 35%, rgba(26, 26, 46, 0.1) 60%, transparent 80%)`,
                }}
            />

            {/* Bottom blend gradient */}
            <div
                className="absolute bottom-0 left-0 right-0 h-48 z-[2]"
                style={{
                    background: `linear-gradient(to bottom, transparent 0%, rgba(26, 26, 46, 0.5) 40%, rgba(26, 26, 46, 0.9) 80%, rgba(26, 26, 46, 1) 100%)`,
                }}
            />

            {/* Content overlay - Left side */}
            <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 pt-20 sm:pt-24">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                        {/* Left side - Text content */}
                        <motion.div
                            className="max-w-xl"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            {/* Single accent sparkle */}
                            <motion.span
                                className="inline-block text-amber-400 text-lg mb-3"
                                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.15, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                ✦
                            </motion.span>

                            {/* Title with wave color animation and sparkling effect */}
                            <motion.h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 relative"
                                style={{
                                    fontFamily: "var(--font-cinzel), serif",
                                    letterSpacing: "0.04em",
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                {/* Wave animated letters */}
                                <span className="relative inline-flex">
                                    {"WildCanvas".split("").map((letter, index) => (
                                        <motion.span
                                            key={index}
                                            className="inline-block"
                                            style={{
                                                background: "linear-gradient(90deg, #FFFFFF 0%, #FFE4B5 25%, #FFB347 50%, #FFE4B5 75%, #FFFFFF 100%)",
                                                backgroundSize: "200% auto",
                                                WebkitBackgroundClip: "text",
                                                backgroundClip: "text",
                                                color: "transparent",
                                                filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.7)) drop-shadow(0 0 20px rgba(255,255,255,0.3))",
                                            }}
                                            animate={{
                                                backgroundPosition: ["200% center", "-200% center"],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: index * 0.08,
                                                ease: "linear",
                                            }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </span>
                                {/* Sparkle effects */}
                                <motion.span
                                    className="absolute -top-2 left-[15%] text-amber-300 text-sm"
                                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                                >
                                    ✦
                                </motion.span>
                                <motion.span
                                    className="absolute top-1 right-[25%] text-yellow-200 text-xs"
                                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
                                >
                                    ✧
                                </motion.span>
                                <motion.span
                                    className="absolute -bottom-1 left-[40%] text-amber-400 text-xs"
                                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2.2, repeat: Infinity, delay: 1.2 }}
                                >
                                    ✦
                                </motion.span>
                            </motion.h1>

                            {/* Simple underline accent */}
                            <motion.div
                                className="flex items-center gap-3 mb-6"
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <div className="h-[2px] w-16 bg-gradient-to-r from-amber-400 to-transparent" />
                                <motion.span
                                    className="text-amber-400 text-sm"
                                    animate={{ opacity: [0.6, 1, 0.6] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    ✦
                                </motion.span>
                            </motion.div>

                            {/* Emotional Tagline */}
                            <motion.div
                                className="mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <p
                                    className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-3"
                                    style={{
                                        fontFamily: "var(--font-cormorant), serif",
                                        textShadow: "3px 3px 6px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,0.7), 0 0 60px rgba(0,0,0,0.5)",
                                        lineHeight: 1.3,
                                        letterSpacing: "0.02em",
                                    }}
                                >
                                    Quiet stories for loud minds
                                </p>
                                <p
                                    className="text-white text-base sm:text-lg font-semibold"
                                    style={{ textShadow: "2px 2px 6px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,0.7)" }}
                                >
                                    Handcrafted animated stories
                                </p>
                            </motion.div>

                            {/* Enhanced CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                            >
                                <motion.div
                                    whileHover={{ y: -2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-amber-500 text-white hover:bg-amber-400 font-semibold text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 rounded-full transition-all duration-300"
                                        style={{
                                            boxShadow: "0 0 20px rgba(255, 179, 71, 0.5), 0 4px 15px rgba(0,0,0,0.3)",
                                        }}
                                    >
                                        <a
                                            href="https://www.youtube.com/@wild_canvas_3d"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 group"
                                        >
                                            <svg
                                                className="w-5 h-5 group-hover:scale-110 transition-transform"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                            Watch a Short Film
                                        </a>
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Right side - Logo in circle */}
                        <motion.div
                            className="hidden lg:flex items-center justify-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <div className="relative">
                                {/* Glow effect behind the logo */}
                                <motion.div
                                    className="absolute inset-0 bg-amber-500/30 blur-3xl rounded-full"
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />
                                {/* Logo image in circle */}
                                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-amber-400/50 shadow-[0_0_30px_rgba(255,179,71,0.4)]">
                                    <Image
                                        src="/Wildcanvas.jpeg"
                                        alt="Wild Canvas"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                {/* Sparkle decorations */}
                                <motion.span
                                    className="absolute -top-2 -right-2 text-amber-300 text-xl"
                                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    ✦
                                </motion.span>
                                <motion.span
                                    className="absolute -bottom-2 -left-2 text-yellow-300 text-lg"
                                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                >
                                    ✧
                                </motion.span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Fireflies - positioned in background only (lower z-index, back half) */}
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full z-[1]"
                        style={{
                            left: `${50 + Math.random() * 45}%`,
                            top: `${25 + Math.random() * 50}%`,
                            background: i % 2 === 0
                                ? "radial-gradient(circle, rgba(255, 179, 71, 0.8) 0%, transparent 70%)"
                                : "radial-gradient(circle, rgba(76, 201, 240, 0.8) 0%, transparent 70%)",
                            boxShadow: i % 2 === 0
                                ? "0 0 8px rgba(255, 179, 71, 0.5)"
                                : "0 0 8px rgba(76, 201, 240, 0.5)",
                        }}
                        animate={{
                            opacity: [0.2, 0.7, 0.2],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 4,
                        }}
                    />
                ))}

                {/* Flying birds - dreamy effect */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`bird-${i}`}
                        className="absolute z-[3] pointer-events-none"
                        style={{
                            top: `${15 + i * 12}%`,
                        }}
                        initial={{ x: "-10%" }}
                        animate={{
                            x: "110%",
                            y: [0, -20, 0, 15, 0],
                        }}
                        transition={{
                            x: {
                                duration: 20 + i * 5,
                                repeat: Infinity,
                                delay: i * 4,
                                ease: "linear",
                            },
                            y: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        {/* Bird SVG */}
                        <svg
                            width={20 + i * 4}
                            height={12 + i * 2}
                            viewBox="0 0 24 12"
                            fill="none"
                            className="opacity-40"
                        >
                            <motion.path
                                d="M12 6 C8 2, 4 4, 0 2 M12 6 C16 2, 20 4, 24 2"
                                stroke="rgba(50, 50, 70, 0.8)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                animate={{
                                    d: [
                                        "M12 6 C8 2, 4 4, 0 2 M12 6 C16 2, 20 4, 24 2",
                                        "M12 6 C8 8, 4 6, 0 8 M12 6 C16 8, 20 6, 24 8",
                                        "M12 6 C8 2, 4 4, 0 2 M12 6 C16 2, 20 4, 24 2",
                                    ],
                                }}
                                transition={{
                                    duration: 0.4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </svg>
                    </motion.div>
                ))}

                {/* Scroll indicator with text */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: 2,
                        times: [0, 0.1, 0.9, 1]
                    }}
                >
                    <motion.div
                        className="w-6 h-10 border-2 border-amber-400/40 rounded-full flex justify-center p-2"
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.div
                            className="w-1.5 h-2.5 bg-amber-400 rounded-full"
                            animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>
                    <span
                        className="text-white/50 text-xs tracking-widest uppercase"
                        style={{ fontFamily: "var(--font-cormorant), serif" }}
                    >
                        Scroll to explore
                    </span>
                </motion.div>
            </div>
        </section>
    );
}

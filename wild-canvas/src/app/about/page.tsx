"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const timeline = [
    {
        year: "2024",
        title: "The Beginning",
        description:
            "Wild Canvas was born from a passion for art and the desire to create peaceful, beautiful content for stressed souls.",
    },
    {
        year: "2024",
        title: "First Videos",
        description:
            "Our first Ghibli-inspired relaxation videos started gaining traction, helping thousands find peace.",
    },
    {
        year: "2025",
        title: "Growing Community",
        description:
            "A wonderful community of peace-seekers and animation lovers began to form around our content.",
    },
    {
        year: "Now",
        title: "New Adventures",
        description:
            "Continuing to explore new creative techniques and create ever more beautiful, calming experiences.",
    },
];

const features = [
    {
        icon: "🎨",
        title: "Imaginative Art",
        description:
            "We create unique, beautiful artwork that captures the essence of traditional animation styles with a modern touch.",
    },
    {
        icon: "🌸",
        title: "Ghibli Aesthetic",
        description:
            "Inspired by the magical worlds of Studio Ghibli, our videos bring that same sense of wonder and tranquility.",
    },
    {
        icon: "🎵",
        title: "Curated Soundscapes",
        description:
            "Every video features carefully selected music and ambient sounds designed to promote relaxation and peace.",
    },
    {
        icon: "✨",
        title: "Weekly Content",
        description:
            "New relaxing videos every week, ensuring you always have fresh content for your meditation and relaxation sessions.",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
            <div className="container mx-auto max-w-5xl">
                {/* Hero Section */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="mb-8 flex justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
                    >
                        <div className="relative">
                            <motion.div
                                className="absolute inset-0 bg-wild-gold/30 blur-3xl rounded-full"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <Image
                                src="/Wildcanvas.jpeg"
                                alt="Wild Canvas"
                                width={150}
                                height={150}
                                className="relative rounded-full border-4 border-wild-gold/50"
                            />
                        </div>
                    </motion.div>

                    <h1 className="text-section gradient-text mb-4">About Wild Canvas</h1>
                    <p className="text-wild-cream/60 max-w-2xl mx-auto text-lg">
                        A peaceful creative space where imaginative art and Ghibli-inspired
                        magic come together to help you find tranquility.
                    </p>
                </motion.div>

                {/* Mission Statement */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="glass-card p-8 md:p-12 text-center">
                        <h2 className="text-2xl font-semibold text-wild-gold mb-4">
                            Our Mission
                        </h2>
                        <p className="text-wild-cream/70 text-lg leading-relaxed max-w-3xl mx-auto">
                            In a world that never stops moving, Wild Canvas exists to offer a
                            moment of peace. Through the fusion of creative artistry and
                            timeless beauty, we create visuals and soundscapes
                            designed to calm your mind, soothe your soul, and transport you to
                            worlds of gentle wonder. Whether you&apos;re seeking relaxation,
                            meditation, focus, or simply a beautiful escape—we&apos;re here
                            for you.
                        </p>
                    </Card>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-section gradient-text text-center mb-12">
                        What Makes Us Special
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="glass-card p-6 h-full">
                                    <div className="flex items-start gap-4">
                                        <span className="text-4xl">{feature.icon}</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-wild-cream mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-wild-cream/60">{feature.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-section gradient-text text-center mb-12">
                        Our Journey
                    </h2>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-wild-gold via-amber-400 to-wild-teal" />

                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className={`relative flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-wild-gold rounded-full transform -translate-x-1/2 z-10" />

                                {/* Content */}
                                <div
                                    className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                                        }`}
                                >
                                    <Card className="glass-card p-6 inline-block">
                                        <span className="text-wild-gold font-medium text-sm">
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl font-semibold text-wild-cream mt-1 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-wild-cream/60">{item.description}</p>
                                    </Card>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="glass-card p-8 md:p-12">
                        <h2 className="text-2xl font-semibold gradient-text mb-4">
                            Join Our Journey
                        </h2>
                        <p className="text-wild-cream/60 mb-6 max-w-xl mx-auto">
                            Subscribe to Wild Canvas and become part of our peaceful community.
                            Together, we&apos;ll explore beautiful worlds and find moments of calm.
                        </p>
                        <motion.a
                            href="https://www.youtube.com/@wild_canvas_3d?sub_confirmation=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-wild-gold text-wild-deep px-6 py-3 rounded-lg font-semibold hover:bg-wild-gold/90 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            Subscribe on YouTube
                        </motion.a>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}

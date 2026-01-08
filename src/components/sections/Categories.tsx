"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const categories = [
    {
        id: "relaxation",
        name: "Relaxation",
        description: "Calm your mind with peaceful visuals",
        icon: "🌸",
        image: "/Relaxation.webp",
        color: "from-amber-500/20 to-orange-500/20",
        borderColor: "border-amber-500/30",
        count: "12 videos",
    },
    {
        id: "sleep",
        name: "Sleep & Dreams",
        description: "Drift into restful slumber",
        icon: "🌙",
        image: "/Sleep & Dream.webp",
        color: "from-blue-500/20 to-indigo-500/20",
        borderColor: "border-blue-500/30",
        count: "8 videos",
    },
    {
        id: "meditation",
        name: "Meditation",
        description: "Find inner peace and clarity",
        icon: "🧘",
        image: "/Relaxation.webp",
        color: "from-teal-500/20 to-cyan-500/20",
        borderColor: "border-teal-500/30",
        count: "6 videos",
    },
    {
        id: "cozy",
        name: "Cozy Ambience",
        description: "Warm, comforting atmospheres",
        icon: "☕",
        image: "/Cozy Ambience.jpg",
        color: "from-orange-500/20 to-amber-500/20",
        borderColor: "border-orange-500/30",
        count: "10 videos",
    },
    {
        id: "fantasy",
        name: "Fantasy Worlds",
        description: "Explore magical realms",
        icon: "✨",
        image: "/Fantasy World.webp",
        color: "from-purple-500/20 to-violet-500/20",
        borderColor: "border-purple-500/30",
        count: "9 videos",
    },
    {
        id: "nature",
        name: "Nature Scenes",
        description: "Serene natural landscapes",
        icon: "🌿",
        image: "/Nature Scenes.jpg",
        color: "from-green-500/20 to-emerald-500/20",
        borderColor: "border-green-500/30",
        count: "7 videos",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
} as const;

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
        },
    },
};

export default function Categories() {
    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
            {/* Section header */}
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <motion.span
                    className="text-white text-base tracking-widest uppercase mb-4 block"
                    style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textShadow: "0 0 15px rgba(255, 179, 71, 0.8), 2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    ✦ Explore Worlds ✦
                </motion.span>
                <h2
                    className="text-4xl md:text-5xl mb-4 text-white"
                    style={{
                        fontFamily: "var(--font-cinzel), serif",
                        fontWeight: 700,
                        textShadow: "2px 2px 10px rgba(0,0,0,0.8), 0 0 30px rgba(255, 179, 71, 0.4)",
                        letterSpacing: "0.03em",
                    }}
                >
                    <span className="gradient-text">Find Your Perfect Mood</span>
                </h2>
                <p
                    className="text-white/90 max-w-2xl mx-auto text-lg"
                    style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontWeight: 500,
                        lineHeight: 1.8,
                        textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
                    }}
                >
                    Browse our curated collections designed for different moments
                    and moods throughout your day.
                </p>
            </motion.div>

            {/* Categories grid */}
            <motion.div
                className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {categories.map((category) => (
                    <motion.div key={category.id} variants={cardVariants}>
                        <Link href={`/videos?category=${category.id}`}>
                            {/* Outer frame box */}
                            <div className={`p-1.5 rounded-xl border ${category.borderColor} bg-white/5 hover:bg-white/10 transition-all duration-300`}>
                                {/* Inner card */}
                                <Card
                                    className={`border-0 cursor-pointer group overflow-hidden relative h-60 rounded-lg`}
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Dark overlay for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 transition-all duration-300" />

                                    {/* Colored overlay on hover */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                                    />

                                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                                        {/* Icon - static, no animation */}
                                        <div className="text-4xl mb-3">
                                            {category.icon}
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-semibold text-white group-hover:text-wild-gold transition-colors mb-1">
                                            {category.name}
                                        </h3>
                                        <p className="text-white/70 text-sm mb-3">
                                            {category.description}
                                        </p>

                                        {/* Video count and arrow */}
                                        <div className="flex items-center justify-between">
                                            <span className="text-white/50 text-xs">
                                                {category.count}
                                            </span>
                                            <motion.svg
                                                className="w-5 h-5 text-wild-gold opacity-0 group-hover:opacity-100 transition-opacity"
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
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

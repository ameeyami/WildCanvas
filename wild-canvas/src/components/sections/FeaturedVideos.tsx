"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";

// Featured videos data - Wild Canvas YouTube videos
const featuredVideos = [
    {
        id: "1",
        title: "Wild Canvas Serenity",
        description: "Experience tranquility through dreamlike art",
        thumbnail: "https://img.youtube.com/vi/cumMw_YjfP4/hqdefault.jpg",
        duration: "Video",
        category: "Relaxation",
        youtubeId: "cumMw_YjfP4",
        isShort: false,
    },
    {
        id: "2",
        title: "Wild Canvas Journey",
        description: "Immerse yourself in tranquil nature visuals",
        thumbnail: "https://img.youtube.com/vi/_VDTV2-TfaE/hqdefault.jpg",
        duration: "Video",
        category: "Relaxation",
        youtubeId: "_VDTV2-TfaE",
        isShort: false,
    },
    {
        id: "3",
        title: "Serene Nature Escape",
        description: "Find peace with calming natural scenery",
        thumbnail: "https://img.youtube.com/vi/sbhJ3MNbEDY/hqdefault.jpg",
        duration: "Video",
        category: "Nature",
        youtubeId: "sbhJ3MNbEDY",
        isShort: false,
    },
    {
        id: "4",
        title: "Peaceful Moments",
        description: "Unwind with soothing ambient visuals",
        thumbnail: "https://img.youtube.com/vi/eKsNYE-TrCU/hqdefault.jpg",
        duration: "Video",
        category: "Ambient",
        youtubeId: "eKsNYE-TrCU",
        isShort: false,
    },
    {
        id: "5",
        title: "Wild Canvas Experience",
        description: "Explore the beauty of the wild canvas",
        thumbnail: "https://img.youtube.com/vi/fiMUsQqu6zg/hqdefault.jpg",
        duration: "Video",
        category: "Cozy",
        youtubeId: "fiMUsQqu6zg",
        isShort: false,
    },
    {
        id: "6",
        title: "Nature's Canvas",
        description: "Discover tranquility through visual art",
        thumbnail: "https://img.youtube.com/vi/rid1WmFCik4/hqdefault.jpg",
        duration: "Video",
        category: "Meditation",
        youtubeId: "rid1WmFCik4",
        isShort: false,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
} as const;

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const,
        },
    },
};

export default function FeaturedVideos() {
    return (
        <section id="featured" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
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
                    ✦ Featured Content ✦
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
                    <span className="gradient-text">Escape Into Tranquility</span>
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
                    Discover our most beloved videos designed to help you relax,
                    focus, and find inner peace through imaginative art.
                </p>
            </motion.div>

            {/* Video grid */}
            <motion.div
                className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {featuredVideos.map((video) => (
                    <motion.div key={video.id} variants={cardVariants}>
                        <a
                            href={video.isShort
                                ? `https://youtube.com/shorts/${video.youtubeId}`
                                : `https://www.youtube.com/watch?v=${video.youtubeId}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <Card className="glass-card overflow-hidden border-0 hover:scale-[1.02] transition-transform duration-300">
                                {/* Thumbnail */}
                                <div className="relative aspect-video overflow-hidden">
                                    {/* Actual YouTube thumbnail */}
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            // Fallback to hqdefault if maxresdefault doesn't exist
                                            const target = e.target as HTMLImageElement;
                                            if (target.src.includes('maxresdefault')) {
                                                target.src = target.src.replace('maxresdefault', 'hqdefault');
                                            }
                                        }}
                                    />

                                    {/* Play button overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                                        <motion.div
                                            className="w-16 h-16 rounded-full bg-wild-gold flex items-center justify-center play-button shadow-lg"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <svg
                                                className="w-6 h-6 text-wild-deep ml-1"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </motion.div>
                                    </div>

                                    {/* Video overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                    {/* Duration badge */}
                                    <span className="absolute bottom-2 right-2 bg-wild-deep/90 text-wild-cream text-xs px-2 py-1 rounded font-medium">
                                        {video.duration}
                                    </span>

                                    {/* Category badge */}
                                    <span className="absolute top-2 left-2 bg-wild-gold/90 text-wild-deep text-xs px-2 py-1 rounded font-medium">
                                        {video.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="font-semibold text-wild-cream group-hover:text-wild-gold transition-colors line-clamp-1">
                                        {video.title}
                                    </h3>
                                    <p className="text-wild-cream/50 text-sm mt-1 line-clamp-2">
                                        {video.description}
                                    </p>
                                </div>
                            </Card>
                        </a>
                    </motion.div>
                ))}
            </motion.div>

            {/* View all button */}
            <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                <a
                    href="/videos"
                    className="inline-flex items-center gap-2 text-white hover:text-wild-gold transition-colors font-medium group"
                    style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}
                >
                    View All Videos
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
                </a>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute left-0 top-1/3 w-40 h-40 bg-wild-purple/20 rounded-full blur-3xl -translate-x-1/2" />
            <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-wild-teal/10 rounded-full blur-3xl translate-x-1/2" />
        </section>
    );
}

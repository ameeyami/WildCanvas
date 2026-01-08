"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Video data - replace with your actual videos
const allVideos = [
    {
        id: "1",
        title: "Peaceful Village at Sunset",
        description: "A calming journey through a Ghibli-inspired countryside with soft ambient music",
        thumbnail: "/api/placeholder/400/225",
        duration: "15:30",
        category: "relaxation",
        youtubeId: "dQw4w9WgXcQ",
        views: "12.5K",
    },
    {
        id: "2",
        title: "Cozy Rain on Window",
        description: "Soothing rain sounds with anime aesthetics for deep relaxation",
        thumbnail: "/api/placeholder/400/225",
        duration: "1:00:00",
        category: "sleep",
        youtubeId: "dQw4w9WgXcQ",
        views: "45.2K",
    },
    {
        id: "3",
        title: "Floating Islands Dream",
        description: "Ethereal fantasy world perfect for meditation and focus",
        thumbnail: "/api/placeholder/400/225",
        duration: "30:00",
        category: "meditation",
        youtubeId: "dQw4w9WgXcQ",
        views: "28.1K",
    },
    {
        id: "4",
        title: "Forest Spirit's Garden",
        description: "Magical garden ambience with soft piano music",
        thumbnail: "/api/placeholder/400/225",
        duration: "45:00",
        category: "cozy",
        youtubeId: "dQw4w9WgXcQ",
        views: "33.7K",
    },
    {
        id: "5",
        title: "Moonlit Lake Serenity",
        description: "Calm waters reflecting the night sky with gentle music",
        thumbnail: "/api/placeholder/400/225",
        duration: "20:00",
        category: "relaxation",
        youtubeId: "dQw4w9WgXcQ",
        views: "19.3K",
    },
    {
        id: "6",
        title: "Enchanted Forest Walk",
        description: "Journey through a mystical forest filled with wonder",
        thumbnail: "/api/placeholder/400/225",
        duration: "25:00",
        category: "fantasy",
        youtubeId: "dQw4w9WgXcQ",
        views: "22.8K",
    },
    {
        id: "7",
        title: "Stargazing on the Hill",
        description: "Peaceful night under the stars with ambient soundscape",
        thumbnail: "/api/placeholder/400/225",
        duration: "1:30:00",
        category: "sleep",
        youtubeId: "dQw4w9WgXcQ",
        views: "67.4K",
    },
    {
        id: "8",
        title: "Sunrise Mountain Temple",
        description: "Serene morning atmosphere for mindful meditation",
        thumbnail: "/api/placeholder/400/225",
        duration: "35:00",
        category: "meditation",
        youtubeId: "dQw4w9WgXcQ",
        views: "31.2K",
    },
];

const categories = [
    { id: "all", name: "All Videos", icon: "🎬" },
    { id: "relaxation", name: "Relaxation", icon: "🌸" },
    { id: "sleep", name: "Sleep", icon: "🌙" },
    { id: "meditation", name: "Meditation", icon: "🧘" },
    { id: "cozy", name: "Cozy", icon: "☕" },
    { id: "fantasy", name: "Fantasy", icon: "✨" },
];

export default function VideosPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredVideos =
        activeCategory === "all"
            ? allVideos
            : allVideos.filter((video) => video.category === activeCategory);

    return (
        <div className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
            <div className="container mx-auto">
                {/* Page Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-section gradient-text mb-4">Video Gallery</h1>
                    <p className="text-wild-cream/60 max-w-2xl mx-auto">
                        Explore our complete collection of relaxing handcrafted videos.
                        Find the perfect ambience for any moment.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant={activeCategory === category.id ? "default" : "outline"}
                            className={`
                ${activeCategory === category.id
                                    ? "bg-wild-gold text-wild-deep hover:bg-wild-gold/90"
                                    : "border-wild-cream/20 text-wild-cream/70 hover:bg-wild-cream/10"
                                }
              `}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <span className="mr-2">{category.icon}</span>
                            {category.name}
                        </Button>
                    ))}
                </motion.div>

                {/* Videos Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    layout
                >
                    {filteredVideos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <a
                                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block"
                            >
                                <Card className="glass-card overflow-hidden border-0">
                                    {/* Thumbnail */}
                                    <div className="relative aspect-video overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-wild-purple/60 to-wild-blue/60" />

                                        {/* Play button overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <motion.div
                                                className="w-14 h-14 rounded-full bg-wild-gold flex items-center justify-center"
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
                                        <div className="absolute inset-0 video-overlay opacity-50 group-hover:opacity-70 transition-opacity" />

                                        {/* Duration badge */}
                                        <span className="absolute bottom-2 right-2 bg-wild-deep/90 text-wild-cream text-xs px-2 py-1 rounded">
                                            {video.duration}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4">
                                        <h3 className="font-semibold text-wild-cream group-hover:text-wild-gold transition-colors line-clamp-1 mb-1">
                                            {video.title}
                                        </h3>
                                        <p className="text-wild-cream/50 text-sm line-clamp-2 mb-3">
                                            {video.description}
                                        </p>
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-wild-cream/40">{video.views} views</span>
                                            <span className="bg-wild-purple/30 text-wild-cream/70 px-2 py-0.5 rounded capitalize">
                                                {video.category}
                                            </span>
                                        </div>
                                    </div>
                                </Card>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Empty state */}
                {filteredVideos.length === 0 && (
                    <motion.div
                        className="text-center py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <p className="text-wild-cream/50 text-lg">
                            No videos found in this category yet.
                        </p>
                    </motion.div>
                )}

                {/* YouTube CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-wild-cream/50 mb-4">
                        Want to see more? Visit our YouTube channel for all videos!
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-[#FF0000] hover:bg-[#CC0000] text-white font-semibold"
                    >
                        <a
                            href="https://www.youtube.com/@wild_canvas_3d"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            Visit YouTube Channel
                        </a>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}

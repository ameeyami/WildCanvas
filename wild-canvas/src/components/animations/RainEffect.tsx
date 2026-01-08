"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface RainDrop {
    id: number;
    x: number;
    delay: number;
    duration: number;
    size: number;
    opacity: number;
}

const generateRainDrops = (count: number): RainDrop[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 0.8 + Math.random() * 0.6,
        size: 1 + Math.random() * 2,
        opacity: 0.2 + Math.random() * 0.4,
    }));
};

export default function RainEffect() {
    const rainDrops = useMemo(() => generateRainDrops(80), []);

    return (
        <div className="fixed inset-0 z-[5] pointer-events-none overflow-hidden">
            {rainDrops.map((drop) => (
                <motion.div
                    key={drop.id}
                    className="absolute"
                    style={{
                        left: `${drop.x}%`,
                        top: -20,
                        width: drop.size,
                        height: 15 + Math.random() * 15,
                        background: `linear-gradient(180deg, transparent 0%, rgba(200, 220, 255, ${drop.opacity}) 50%, rgba(150, 200, 255, ${drop.opacity * 0.8}) 100%)`,
                        borderRadius: "50%",
                        filter: "blur(0.5px)",
                    }}
                    animate={{
                        y: ["0vh", "105vh"],
                        opacity: [0, drop.opacity, drop.opacity, 0],
                    }}
                    transition={{
                        y: {
                            duration: drop.duration,
                            repeat: Infinity,
                            delay: drop.delay,
                            ease: "linear",
                        },
                        opacity: {
                            duration: drop.duration,
                            repeat: Infinity,
                            delay: drop.delay,
                            times: [0, 0.1, 0.9, 1],
                        },
                    }}
                />
            ))}

            {/* Subtle mist/fog overlay for rainy atmosphere */}
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(180deg, rgba(100, 130, 180, 0.03) 0%, transparent 30%, transparent 70%, rgba(100, 130, 180, 0.05) 100%)",
                    pointerEvents: "none",
                }}
            />
        </div>
    );
}

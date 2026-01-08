"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

// Generate random floating particles/fireflies
const generateParticles = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
    }));
};

export default function AuroraBackground() {
    const particles = useMemo(() => generateParticles(40), []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden">
            {/* Main background image - vibrant dreamy landscape */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/vibrant-bg.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Subtle overlay for better text readability */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
            linear-gradient(180deg, 
              rgba(26, 26, 46, 0.3) 0%, 
              rgba(26, 26, 46, 0.1) 30%,
              rgba(26, 26, 46, 0.05) 50%,
              rgba(26, 26, 46, 0.2) 80%,
              rgba(26, 26, 46, 0.5) 100%
            )
          `
                }}
            />

            {/* Animated color overlay for magical effect */}
            <motion.div
                className="absolute inset-0 opacity-25"
                animate={{
                    background: [
                        `radial-gradient(ellipse 50% 40% at 20% 30%, rgba(255, 179, 71, 0.4) 0%, transparent 70%)`,
                        `radial-gradient(ellipse 50% 40% at 70% 60%, rgba(157, 78, 221, 0.4) 0%, transparent 70%)`,
                        `radial-gradient(ellipse 50% 40% at 50% 40%, rgba(76, 201, 240, 0.4) 0%, transparent 70%)`,
                        `radial-gradient(ellipse 50% 40% at 20% 30%, rgba(255, 179, 71, 0.4) 0%, transparent 70%)`,
                    ],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Floating fireflies/particles with vibrant colors */}
            <div className="absolute inset-0">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: particle.size,
                            height: particle.size,
                            background: particle.id % 2 === 0
                                ? `radial-gradient(circle, rgba(255, 179, 71, 0.9) 0%, rgba(255, 179, 71, 0.3) 50%, transparent 70%)`
                                : `radial-gradient(circle, rgba(76, 201, 240, 0.9) 0%, rgba(76, 201, 240, 0.3) 50%, transparent 70%)`,
                            boxShadow: particle.id % 2 === 0
                                ? `0 0 ${particle.size * 2}px rgba(255, 179, 71, 0.5)`
                                : `0 0 ${particle.size * 2}px rgba(76, 201, 240, 0.5)`,
                        }}
                        animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.2, 0.8],
                            y: [-10, 10, -10],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Additional twinkling stars in the sky area */}
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={`star-${i}`}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 40}%`, // Only in upper portion (sky)
                        width: Math.random() * 2 + 1,
                        height: Math.random() * 2 + 1,
                    }}
                    animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: Math.random() * 2 + 1.5,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Shooting star occasionally */}
            <motion.div
                className="absolute w-20 h-0.5"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), #FFB347)",
                    top: "15%",
                    left: "-10%",
                    transformOrigin: "left center",
                    rotate: 25,
                }}
                animate={{
                    x: ["0vw", "120vw"],
                    opacity: [0, 1, 1, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 10,
                    ease: "easeOut",
                }}
            />

            {/* Vignette for depth */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center, transparent 40%, rgba(13, 13, 26, 0.3) 80%, rgba(13, 13, 26, 0.5) 100%)",
                }}
            />
        </div>
    );
}

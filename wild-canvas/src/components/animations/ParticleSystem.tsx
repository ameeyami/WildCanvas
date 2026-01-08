"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    color: string;
}

export default function ParticleSystem() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number | null>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const colors = [
            "rgba(244, 197, 66, 0.6)",   // Gold
            "rgba(255, 179, 71, 0.5)",  // Amber
            "rgba(94, 234, 212, 0.5)",   // Teal
            "rgba(255, 248, 231, 0.3)",  // Cream
        ];

        const createParticles = () => {
            const particles: Particle[] = [];
            const count = Math.min(80, Math.floor(window.innerWidth / 20));

            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 4 + 1,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5 - 0.2,
                    opacity: Math.random() * 0.5 + 0.3,
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }
            return particles;
        };

        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((particle, index) => {
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Mouse interaction - gentle attraction
                const dx = mouseRef.current.x - particle.x;
                const dy = mouseRef.current.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    const force = (150 - distance) / 150;
                    particle.x += dx * force * 0.01;
                    particle.y += dy * force * 0.01;
                }

                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Draw particle with glow
                ctx.beginPath();
                const gradient = ctx.createRadialGradient(
                    particle.x,
                    particle.y,
                    0,
                    particle.x,
                    particle.y,
                    particle.size * 3
                );
                gradient.addColorStop(0, particle.color);
                gradient.addColorStop(1, "transparent");
                ctx.fillStyle = gradient;
                ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
                ctx.fill();

                // Draw connections between nearby particles
                for (let j = index + 1; j < particlesRef.current.length; j++) {
                    const other = particlesRef.current[j];
                    const distX = particle.x - other.x;
                    const distY = particle.y - other.y;
                    const dist = Math.sqrt(distX * distX + distY * distY);

                    if (dist < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(244, 197, 66, ${0.1 * (1 - dist / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();
                    }
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        resizeCanvas();
        particlesRef.current = createParticles();
        animate();

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none z-[15]"
                style={{ mixBlendMode: "screen" }}
            />
            {/* Static decorative stars */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="star"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </>
    );
}

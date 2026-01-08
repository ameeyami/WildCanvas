"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackgroundMusic() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Initialize audio and attempt auto-play
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.4; // 40% volume
        }

        // Try to auto-play immediately
        const attemptAutoPlay = async () => {
            if (audioRef.current && !hasAutoPlayed) {
                try {
                    await audioRef.current.play();
                    setIsPlaying(true);
                    setHasAutoPlayed(true);
                } catch {
                    // Auto-play blocked by browser, wait for user interaction
                    setShowTooltip(true);

                    // Add event listener for first user interaction
                    const handleFirstInteraction = async () => {
                        if (audioRef.current && !hasAutoPlayed) {
                            try {
                                await audioRef.current.play();
                                setIsPlaying(true);
                                setHasAutoPlayed(true);
                                setShowTooltip(false);
                            } catch (e) {
                                console.error("Playback error:", e);
                            }
                        }
                        // Remove listeners after first interaction
                        document.removeEventListener("click", handleFirstInteraction);
                        document.removeEventListener("scroll", handleFirstInteraction);
                        document.removeEventListener("keydown", handleFirstInteraction);
                    };

                    document.addEventListener("click", handleFirstInteraction);
                    document.addEventListener("scroll", handleFirstInteraction);
                    document.addEventListener("keydown", handleFirstInteraction);

                    return () => {
                        document.removeEventListener("click", handleFirstInteraction);
                        document.removeEventListener("scroll", handleFirstInteraction);
                        document.removeEventListener("keydown", handleFirstInteraction);
                    };
                }
            }
        };

        // Small delay to let page load
        const timer = setTimeout(attemptAutoPlay, 500);
        return () => clearTimeout(timer);
    }, [hasAutoPlayed]);

    // Hide tooltip after showing it for a while
    useEffect(() => {
        if (showTooltip) {
            const timer = setTimeout(() => {
                setShowTooltip(false);
            }, 8000);
            return () => clearTimeout(timer);
        }
    }, [showTooltip]);

    const togglePlay = async () => {
        if (audioRef.current) {
            try {
                if (isPlaying) {
                    audioRef.current.pause();
                    setIsPlaying(false);
                } else {
                    await audioRef.current.play();
                    setIsPlaying(true);
                    setHasAutoPlayed(true);
                    setShowTooltip(false);
                }
            } catch (error) {
                console.error("Playback error:", error);
                alert("Please add an audio file at /public/ambient-music.mp3");
            }
        }
    };

    return (
        <>
            {/* Background audio - place your audio file at public/ambient-music.mp3 */}
            <audio
                ref={audioRef}
                loop
                preload="auto"
                src="/ambient-music.mp3"
            />

            {/* Floating music control button */}
            <motion.div
                className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.5, type: "spring" }}
            >
                {/* Tooltip */}
                <AnimatePresence>
                    {showTooltip && !isPlaying && (
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="bg-wild-deep/90 border border-amber-400/30 px-4 py-2 rounded-full text-white/80 text-sm whitespace-nowrap"
                            style={{ backdropFilter: "blur(8px)" }}
                        >
                            🎵 Click for ambient music
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Music button */}
                <motion.button
                    onClick={togglePlay}
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${isPlaying
                        ? "bg-amber-500 text-white shadow-[0_0_20px_rgba(255,179,71,0.5)]"
                        : "bg-wild-deep/80 text-white/70 border border-white/20 hover:border-amber-400/50"
                        }`}
                    style={{ backdropFilter: "blur(8px)" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={isPlaying ? "Pause music" : "Play music"}
                >
                    {isPlaying ? (
                        // Speaker with sound waves - click to mute
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                        </svg>
                    ) : (
                        // Muted speaker - click to unmute
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                        </svg>
                    )}
                </motion.button>
            </motion.div>
        </>
    );
}

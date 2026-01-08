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
                        // Sound waves animation when playing
                        <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4].map((bar) => (
                                <motion.div
                                    key={bar}
                                    className="w-1 bg-wild-deep rounded-full"
                                    animate={{
                                        height: [8, 16, 8, 20, 8],
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: bar * 0.1,
                                    }}
                                />
                            ))}
                        </div>
                    ) : (
                        // Music note icon when paused
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                        </svg>
                    )}
                </motion.button>
            </motion.div>
        </>
    );
}

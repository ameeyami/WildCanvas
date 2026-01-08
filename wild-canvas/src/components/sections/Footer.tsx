"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
    navigation: [
        { name: "Home", href: "/" },
        { name: "Videos", href: "/videos" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ],
    categories: [
        { name: "Relaxation", href: "/videos?category=relaxation" },
        { name: "Sleep & Meditation", href: "/videos?category=sleep" },
        { name: "Cozy Ambience", href: "/videos?category=cozy" },
        { name: "Fantasy Worlds", href: "/videos?category=fantasy" },
    ],
    social: [
        {
            name: "YouTube",
            href: "https://www.youtube.com/@wild_canvas_3d",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/wild_canvas_3d/",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            ),
        },
        {
            name: "Twitter",
            href: "#",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
        },
    ],
};

export default function Footer() {
    return (
        <footer
            className="relative mt-20 border-t border-wild-cream/20"
            style={{
                background: "linear-gradient(180deg, rgba(13, 13, 26, 0.9) 0%, rgba(13, 13, 26, 0.95) 100%)",
            }}
        >
            {/* Gradient divider */}
            <div className="section-divider" />

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center sm:text-left">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-1"
                    >
                        <Link href="/" className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
                            <Image
                                src="/LOGO.jpeg"
                                alt="Wild Canvas"
                                width={50}
                                height={50}
                                className="rounded-full border-2 border-wild-gold/50"
                            />
                            <span className="text-xl font-bold gradient-text">Wild Canvas</span>
                        </Link>
                        <p className="text-white/80 text-sm leading-relaxed">
                            A peaceful creative space where anime-inspired art and
                            relaxing animations come together to help you unwind.
                        </p>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-wild-gold font-semibold mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-wild-gold transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Categories */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-wild-gold font-semibold mb-4">Categories</h4>
                        <ul className="space-y-2">
                            {footerLinks.categories.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-wild-gold transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social & Subscribe */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h4 className="text-wild-gold font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4 mb-6 justify-center sm:justify-start">
                            {footerLinks.social.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-wild-cream/10 flex items-center justify-center text-wild-cream/60 hover:bg-wild-gold hover:text-wild-deep transition-all"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                        <p className="text-white/70 text-xs">
                            New relaxing videos every week!
                        </p>
                    </motion.div>
                </div>

                {/* Bottom bar */}
                <motion.div
                    className="mt-12 pt-8 border-t border-wild-cream/10 flex flex-col md:flex-row justify-between items-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <p className="text-white/70 text-sm">
                        © {new Date().getFullYear()} Wild Canvas. Made with ✨ and creative magic.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link
                            href="/privacy"
                            className="text-white/70 hover:text-wild-gold transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-white/70 hover:text-wild-gold transition-colors"
                        >
                            Terms of Use
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-wild-deep/50 to-transparent pointer-events-none" />
        </footer>
    );
}

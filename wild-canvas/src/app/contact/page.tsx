"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const contactInfo = [
    {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
        label: "YouTube",
        value: "@wild_canvas_3d",
        href: "https://www.youtube.com/@wild_canvas_3d",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
        label: "Instagram",
        value: "@wild_canvas_3d",
        href: "https://www.instagram.com/wild_canvas_3d/",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
        ),
        label: "Email",
        value: "ameeyadav200@gmail.com",
        href: "mailto:ameeyadav200@gmail.com",
    },
];

const faqs = [
    {
        question: "What kind of content does Wild Canvas create?",
        answer:
            "We create relaxing videos featuring Ghibli-inspired art, peaceful animations, and soothing soundscapes perfect for meditation, sleep, and stress relief.",
    },
    {
        question: "How often do you upload new videos?",
        answer:
            "We release new relaxing content every week! Subscribe to our YouTube channel to get notified when new videos are uploaded.",
    },
    {
        question: "Can I use your videos for background ambience?",
        answer:
            "Absolutely! Our videos are designed exactly for that purpose - as calming backgrounds for work, study, meditation, or sleep.",
    },
    {
        question: "Do you accept collaboration requests?",
        answer:
            "We're always open to creative collaborations! Please reach out through our contact form with your proposal.",
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                alert('Failed to send message. Please try again or email directly.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again or email directly.');
        }

        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
            <div className="container mx-auto max-w-5xl">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-section gradient-text mb-4">Get In Touch</h1>
                    <p className="text-wild-cream/60 max-w-2xl mx-auto">
                        Have questions, collaboration ideas, or just want to say hello?
                        We&apos;d love to hear from you!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Card className="glass-card p-8">
                            <h2 className="text-2xl font-semibold text-wild-cream mb-6">
                                Send a Message
                            </h2>

                            {isSubmitted ? (
                                <motion.div
                                    className="text-center py-12"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <div className="text-5xl mb-4">✨</div>
                                    <h3 className="text-xl font-semibold text-wild-gold mb-2">
                                        Message Sent!
                                    </h3>
                                    <p className="text-wild-cream/60">
                                        Thank you for reaching out. We&apos;ll get back to you soon!
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-wild-cream/70 text-sm mb-2">
                                                Name
                                            </label>
                                            <Input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                                className="bg-wild-cream/5 border-wild-cream/20 text-wild-cream placeholder:text-wild-cream/40 focus:border-wild-gold"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-wild-cream/70 text-sm mb-2">
                                                Email
                                            </label>
                                            <Input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                }
                                                className="bg-wild-cream/5 border-wild-cream/20 text-wild-cream placeholder:text-wild-cream/40 focus:border-wild-gold"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-wild-cream/70 text-sm mb-2">
                                            Subject
                                        </label>
                                        <Input
                                            type="text"
                                            required
                                            value={formData.subject}
                                            onChange={(e) =>
                                                setFormData({ ...formData, subject: e.target.value })
                                            }
                                            className="bg-wild-cream/5 border-wild-cream/20 text-wild-cream placeholder:text-wild-cream/40 focus:border-wild-gold"
                                            placeholder="What's this about?"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-wild-cream/70 text-sm mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                            className="w-full bg-wild-cream/5 border border-wild-cream/20 text-wild-cream placeholder:text-wild-cream/40 focus:border-wild-gold rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-wild-gold/20"
                                            placeholder="Your message..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-wild-gold text-wild-deep hover:bg-wild-gold/90 font-semibold py-6"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <motion.span
                                                    className="w-5 h-5 border-2 border-wild-deep/30 border-t-wild-deep rounded-full"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                />
                                                Sending...
                                            </span>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </Button>
                                </form>
                            )}
                        </Card>
                    </motion.div>

                    {/* Contact Info & FAQ */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-8"
                    >
                        {/* Contact Info */}
                        <Card className="glass-card p-8">
                            <h2 className="text-2xl font-semibold text-wild-cream mb-6">
                                Connect With Us
                            </h2>
                            <div className="space-y-4">
                                {contactInfo.map((info) => (
                                    <a
                                        key={info.label}
                                        href={info.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-lg bg-wild-cream/5 hover:bg-wild-cream/10 transition-colors group"
                                    >
                                        <div className="text-wild-gold group-hover:scale-110 transition-transform">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-wild-cream/50 text-sm">{info.label}</p>
                                            <p className="text-wild-cream font-medium">{info.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </Card>

                        {/* FAQ */}
                        <Card className="glass-card p-8">
                            <h2 className="text-2xl font-semibold text-wild-cream mb-6">
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <motion.div
                                        key={faq.question}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <h3 className="text-wild-gold font-medium mb-2">
                                            {faq.question}
                                        </h3>
                                        <p className="text-wild-cream/60 text-sm">{faq.answer}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

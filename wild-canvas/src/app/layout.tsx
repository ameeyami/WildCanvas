import type { Metadata } from "next";
import { Outfit, Inter, Cinzel_Decorative, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/sections/Footer";
import AuroraBackground from "@/components/animations/AuroraBackground";
import ParticleSystem from "@/components/animations/ParticleSystem";
import RainEffect from "@/components/animations/RainEffect";
import ScrollToTop from "@/components/utils/ScrollToTop";
import BackgroundMusic from "@/components/audio/BackgroundMusic";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wild Canvas | Relaxing Anime Art & Videos",
  description:
    "Welcome to Wild Canvas, a peaceful creative space where imaginative anime art, relaxing animations, and heartwarming Ghibli-style storytelling come together. Perfect for relaxation, meditation, sleep, and creative inspiration.",
  keywords: [
    "Wild Canvas",
    "anime art",
    "Ghibli style",
    "relaxing videos",
    "meditation",
    "sleep",
    "calming animation",
    "handcrafted art",
    "peaceful",
    "cozy ambience",
  ],
  authors: [{ name: "Wild Canvas" }],
  openGraph: {
    title: "Wild Canvas | Relaxing Anime Art",
    description:
      "Escape into beautifully crafted worlds of Ghibli-inspired scenery and heartwarming animations.",
    type: "website",
    locale: "en_US",
    siteName: "Wild Canvas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wild Canvas | Relaxing Anime Art",
    description:
      "Escape into beautifully crafted worlds of Ghibli-inspired scenery and heartwarming animations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${inter.variable} ${cinzelDecorative.variable} ${cormorant.variable} font-sans antialiased min-h-screen w-full overflow-x-hidden`}
      >
        <div className="relative w-full min-h-screen overflow-x-hidden">
          <ScrollToTop />
          <AuroraBackground />
          <ParticleSystem />
          <RainEffect />
          <Navbar />
          <main className="relative z-10 w-full">{children}</main>
          <Footer />
          <BackgroundMusic />
        </div>
      </body>
    </html>
  );
}

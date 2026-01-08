import HeroSection from "@/components/sections/HeroSection";
import FeaturedVideos from "@/components/sections/FeaturedVideos";
import AboutPreview from "@/components/sections/AboutPreview";
import Categories from "@/components/sections/Categories";
import SubscribeCTA from "@/components/sections/SubscribeCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="section-divider mx-auto max-w-4xl" />
      <FeaturedVideos />
      <div className="section-divider mx-auto max-w-4xl" />
      <Categories />
      <div className="section-divider mx-auto max-w-4xl" />
      <AboutPreview />
      <SubscribeCTA />
    </>
  );
}

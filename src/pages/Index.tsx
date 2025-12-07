import { Helmet } from "react-helmet-async";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MusicSection from "@/components/MusicSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>PSYWAVE | Psytrance DJ & Producer</title>
        <meta
          name="description"
          content="PSYWAVE - Psytrance DJ & Producer crafting hypnotic soundscapes. Explore my music releases, book a set, and join the cosmic journey."
        />
        <meta
          name="keywords"
          content="PSYWAVE, Psytrance, DJ, Producer, Electronic Music, Trance, Psytrance DJ, Music Producer"
        />
        <meta property="og:title" content="PSYWAVE | Psytrance DJ & Producer" />
        <meta
          property="og:description"
          content="Crafting hypnotic soundscapes that transcend dimensions. From underground raves to cosmic journeys."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PSYWAVE | Psytrance DJ & Producer" />
        <meta
          name="twitter:description"
          content="Crafting hypnotic soundscapes that transcend dimensions."
        />
        <link rel="canonical" href="https://psywave.com" />
      </Helmet>

      <div className="relative min-h-screen overflow-x-hidden">
        <ParticleBackground />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <MusicSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

import HeroSection from "@/components/HeroSection";
import CatchphraseTicker from "@/components/CatchphraseTicker";
import AboutCard from "@/components/AboutCard";
import MusicCard from "@/components/MusicCard";
import FootballCard from "@/components/FootballCard";
import FavouritesGrid from "@/components/FavouritesGrid";
import DreamCarCard from "@/components/DreamCarCard";
import LetterSection from "@/components/LetterSection";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream text-brand-navy flex flex-col justify-between selection:bg-brand-gold selection:text-white">
      <div>
        {/* Hero Banner */}
        <HeroSection />

        {/* Ticker / Banner */}
        <CatchphraseTicker />

        {/* About Him Card */}
        <AboutCard />

        {/* Music Journey Card */}
        <MusicCard />

        {/* Football & Messi Card */}
        <FootballCard />

        {/* Favourites Grid */}
        <FavouritesGrid />

        {/* Dream Car (BMW 340i) Card */}
        <DreamCarCard />

        {/* Letter Section */}
        <LetterSection />
      </div>

      {/* Footer */}
      <footer className="py-8 bg-brand-navy text-white text-center text-xs space-y-2 border-t border-gray-800">
        <p className="flex items-center justify-center gap-1 font-medium">
          Happy Birthday Wandeme Ipfi Mamatsharaga <Heart className="w-3.5 h-3.5 text-brand-coral fill-brand-coral" />
        </p>
        <p className="text-gray-400 text-[11px]">
          Created for Wandeme &bull; Built with Next.js & Tailwind CSS
        </p>
      </footer>
    </main>
  );
}

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
    <main className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between selection:bg-zinc-900 selection:text-white font-typewriter">
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
      <footer className="py-8 bg-zinc-900 text-white text-center text-xs space-y-2 border-t-2 border-zinc-900 font-typewriter">
        <p className="flex items-center justify-center gap-1 font-bold uppercase tracking-wider">
          Happy Birthday Wandeme Ipfi Mamatsharaga <Heart className="w-3.5 h-3.5 text-white fill-white" />
        </p>
        <p className="text-zinc-400 text-[11px] font-mono">
          Created for Wandeme &bull; Built with Next.js & Tailwind CSS
        </p>
      </footer>
    </main>
  );
}

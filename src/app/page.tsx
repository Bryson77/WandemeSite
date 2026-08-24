import HeroSection from "@/components/HeroSection";
import CatchphraseTicker from "@/components/CatchphraseTicker";
import AboutCard from "@/components/AboutCard";
import MusicCard from "@/components/MusicCard";
import FootballCard from "@/components/FootballCard";
import FavouritesGrid from "@/components/FavouritesGrid";
import DreamCarCard from "@/components/DreamCarCard";
// import LetterSection from "@/components/LetterSection";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between selection:bg-red-600 selection:text-white font-typewriter">
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

        {/* Letter Section (Temporarily commented out) */}
        {/* <LetterSection /> */}
      </div>

      {/* Footer */}
      <footer className="py-10 bg-zinc-900 text-white text-center text-xs sm:text-sm border-t-4 border-red-600 font-typewriter">
        <p className="flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-zinc-100">
          Created by Kopano with love <Heart className="w-4 h-4 text-red-600 fill-red-600 animate-pulse" /> ❤️
        </p>
      </footer>
    </main>
  );
}

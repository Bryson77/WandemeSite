"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function HeroSection() {
  const fireConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#000000", "#3F3F46", "#71717A", "#27272A"],
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => fireConfetti(), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleCelebrate = () => {
    fireConfetti();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[75vh] sm:min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-12 sm:py-16 bg-white text-zinc-900 border-b-2 border-zinc-900 font-typewriter">
      <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
        {/* Magazine Style Issue Header / Date Tag */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold border-b border-zinc-300 pb-2 inline-block"
        >
          &mdash; SPECIAL EDITION &bull; ISSUE NO. 1 &mdash;
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-900 font-magazine leading-tight"
        >
          Happy Birthday, <br />
          <span className="font-typewriter uppercase tracking-wide underline decoration-zinc-900 decoration-4 underline-offset-8">Wandeme!</span> 🎉
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-sm sm:text-lg text-zinc-700 max-w-xl mx-auto leading-relaxed font-typewriter italic px-2"
        >
          &quot;The guy who&apos;d rather nap than talk to me... but we love him anyway.&quot;
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="flex justify-center pt-2 sm:pt-4 w-full max-w-xs sm:max-w-sm mx-auto"
        >
          <button
            onClick={handleCelebrate}
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-black active:scale-[0.97] text-white font-typewriter font-bold text-xs sm:text-sm tracking-wider uppercase border-2 border-zinc-900 transition-all duration-150 ease-out shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          >
            Celebrate Wandeme &darr;
          </button>
        </motion.div>
      </div>
    </section>
  );
}

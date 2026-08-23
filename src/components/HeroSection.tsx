"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, PartyPopper, Heart, Music, Trophy } from "lucide-react";

export default function HeroSection() {
  const [easterEggActive, setEasterEggActive] = useState(false);

  const fireConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#F4A93B", "#FF6B6B", "#1F2937", "#60A5FA", "#F59E0B"],
    });
  };

  useEffect(() => {
    // Initial celebration burst
    const timer = setTimeout(() => {
      fireConfetti();
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleEasterEgg = () => {
    setEasterEggActive(true);
    fireConfetti();
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
    }, 250);

    setTimeout(() => setEasterEggActive(false), 4000);
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-12 overflow-hidden bg-gradient-to-b from-amber-100/60 via-brand-cream to-brand-cream">
      {/* Decorative Floating Badges */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-6 md:left-20 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-md border border-amber-200 text-amber-600 hidden sm:flex items-center gap-2 text-sm font-semibold"
      >
        <Sparkles className="w-4 h-4 text-brand-gold" /> Sleeping Champion 😴
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-20 right-6 md:right-24 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-md border border-red-200 text-red-600 hidden sm:flex items-center gap-2 text-sm font-semibold"
      >
        <Trophy className="w-4 h-4 text-brand-coral" /> 340i Enthusiast 🏎️
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-16 left-10 md:left-32 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-md border border-blue-200 text-blue-600 hidden md:flex items-center gap-2 text-sm font-semibold"
      >
        <Music className="w-4 h-4 text-blue-500" /> Bass & Drum Master 🥁
      </motion.div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto z-10 space-y-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/15 text-amber-800 font-medium text-sm border border-brand-gold/30"
        >
          <PartyPopper className="w-4 h-4 text-brand-gold animate-bounce" />
          <span>Official Birthday Celebration Page</span>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-brand-navy tracking-tight font-heading leading-tight"
        >
          Happy Birthday, <br />
          <span className="bg-gradient-to-r from-brand-gold via-amber-500 to-brand-coral bg-clip-text text-transparent drop-shadow-sm">
            Wandeme!
          </span>{" "}
          🎉
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-700 font-normal max-w-xl mx-auto italic"
        >
          &quot;The guy who&apos;d rather nap than talk to me... but we love him anyway.&quot; 😴✨
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={fireConfetti}
            className="px-6 py-3.5 rounded-full bg-brand-gold hover:bg-amber-500 text-white font-semibold shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" /> Celebrate Wandeme!
          </button>

          <button
            onClick={handleEasterEgg}
            className="px-6 py-3.5 rounded-full bg-white hover:bg-amber-50 text-brand-navy border-2 border-brand-gold/40 font-semibold shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
          >
            <span>Kha pass&apos;e bola ⚽</span>
          </button>
        </motion.div>

        {/* Easter Egg Popup Speech Bubble */}
        <AnimatePresence>
          {easterEggActive && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: -10 }}
              className="mt-6 inline-block bg-brand-navy text-white px-6 py-3.5 rounded-2xl shadow-xl border border-amber-400 relative"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-navy rotate-45 border-t border-l border-amber-400"></div>
              <p className="text-sm font-bold tracking-wide text-amber-300">
                🗣️ &quot;Kha pass&apos;e bola, thoho ya mianu!&quot; ⚽🔥
              </p>
              <p className="text-xs text-gray-300 mt-1">Yelling at Orlando Pirates screen since day 1!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Down arrow indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 text-xs flex flex-col items-center gap-1"
      >
        <span>Scroll for the good stuff</span>
        <div className="w-1.5 h-3 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-0.5 h-1 bg-gray-400 rounded-full mt-0.5"></div>
        </div>
      </motion.div>
    </section>
  );
}

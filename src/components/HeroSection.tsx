"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, Shield } from "lucide-react";

export default function HeroSection() {
  const [easterEggActive, setEasterEggActive] = useState(false);

  const fireConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#2563EB", "#38BDF8", "#FFFFFF", "#1E293B"],
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => fireConfetti(), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleEasterEgg = () => {
    setEasterEggActive(true);
    fireConfetti();
    setTimeout(() => setEasterEggActive(false), 4000);
  };

  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-16 bg-[#090D16] text-white border-b border-slate-800/60">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Subtle pill badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Official Birthday Page</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 12, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-sans leading-tight"
        >
          Happy Birthday, <br />
          <span className="text-blue-500">Wandeme!</span> 🎉
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed"
        >
          &quot;The guy who&apos;d rather nap than talk to me... but we love him anyway.&quot;
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 w-full max-w-sm mx-auto"
        >
          <button
            onClick={fireConfetti}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-[0.97] text-white font-semibold text-sm transition-transform duration-150 ease-out shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
          >
            <span>Celebrate Wandeme</span>
          </button>

          <button
            onClick={handleEasterEgg}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 active:scale-[0.97] text-slate-200 font-semibold text-sm border border-slate-700 transition-transform duration-150 ease-out flex items-center justify-center gap-2"
          >
            <Shield className="w-4 h-4 text-blue-400" />
            <span>Kha pass&apos;e bola ⚽</span>
          </button>
        </motion.div>

        {/* Easter Egg Popup */}
        <AnimatePresence>
          {easterEggActive && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 8 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="mt-6 p-4 rounded-2xl bg-[#121826] border border-blue-500/40 text-left max-w-md mx-auto shadow-xl"
            >
              <p className="text-sm font-bold text-sky-400">
                🗣️ &quot;Kha pass&apos;e bola, thoho ya mianu!&quot; ⚽🔥
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Yelling at Orlando Pirates screen since day 1!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

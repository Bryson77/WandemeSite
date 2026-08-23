"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, MessageSquareQuote, Shield } from "lucide-react";
import Image from "next/image";
import confetti from "canvas-confetti";

export default function FootballCard() {
  const [goalCelebration, setGoalCelebration] = useState(false);

  const handleGoalClick = () => {
    setGoalCelebration(true);
    confetti({
      particleCount: 60,
      angle: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#2563EB", "#38BDF8", "#FFFFFF", "#000000"],
    });
    setTimeout(() => setGoalCelebration(false), 2000);
  };

  return (
    <section className="py-8 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#121826] rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Soccer Ball Image */}
          <div className="md:col-span-5 flex flex-col items-center order-2 md:order-1">
            <div
              onClick={handleGoalClick}
              className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden cursor-pointer border border-slate-700 group shadow-md"
            >
              <Image
                src="/images/soccer.jpg"
                alt="Soccer Ball"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className={`object-cover transition-transform duration-500 ${
                  goalCelebration ? "scale-110 rotate-6" : "group-hover:scale-105"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end justify-between p-3 text-white text-xs">
                <span>⚽ Click for GOAL celebration!</span>
                <span className="bg-blue-600 px-2 py-0.5 rounded text-[10px] font-bold">Tap</span>
              </div>

              <AnimatePresence>
                {goalCelebration && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="absolute inset-0 bg-blue-600/90 flex flex-col items-center justify-center text-white p-4 text-center"
                  >
                    <Trophy className="w-10 h-10 text-yellow-300 animate-bounce mb-1" />
                    <h4 className="text-xl font-extrabold uppercase font-sans">GOAAAL! ⚽</h4>
                    <p className="text-xs text-blue-100 mt-1">Kha pass&apos;e bola!</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Text Content */}
          <div className="md:col-span-7 space-y-4 order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/20">
              <Shield className="w-3.5 h-3.5" />
              <span>Football Fanatic</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              The Beautiful Game ⚽
            </h3>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-black text-white text-xs font-bold border border-slate-700">
                ☠️ Orlando Pirates
              </span>
              <span className="px-3 py-1 rounded-lg bg-sky-500 text-white text-xs font-bold">
                🩵 Manchester City
              </span>
              <span className="px-3 py-1 rounded-lg bg-blue-600 text-white text-xs font-bold">
                👑 Lionel Messi (GOAT)
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Lionel Messi is his favorite player of all time. But for Orlando Pirates... he has <em className="italic text-white font-semibold">no favorite player</em> because he yells at all of them!
            </p>

            <div className="bg-[#090D16] border border-slate-800 rounded-xl p-3.5">
              <div className="flex items-start gap-2.5">
                <MessageSquareQuote className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-sky-400 italic">
                    &quot;kha pass&apos;e bola, thoho ya mianu&quot;
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    — Wandeme, every single time Pirates loses possession
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

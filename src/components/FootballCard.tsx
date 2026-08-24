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
      colors: ["#DC2626", "#000000", "#FFFFFF"],
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
        className="bg-white p-6 sm:p-10 border-2 border-zinc-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      >
        {/* Header Tag */}
        <div className="flex items-center justify-between border-b-2 border-zinc-900 pb-4 mb-8 font-typewriter">
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
            ARTICLE 03 // SPORTS & MATCHDAY
          </span>
          <span className="text-xs font-mono font-bold bg-zinc-900 text-white px-2.5 py-0.5 uppercase tracking-wider">
            MATCHDAY SPREAD
          </span>
        </div>

        <div className="space-y-8 font-typewriter">
          {/* Text Content Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-zinc-900 text-xs font-bold border border-zinc-900 uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5 text-red-600" />
              <span>Football Fanatic</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-magazine text-zinc-900">
              The Beautiful Game ⚽
            </h2>

            <p className="text-zinc-700 text-sm leading-relaxed max-w-3xl">
              Lionel Messi reigns supreme as his undisputed favorite player of all time. But when it comes to Orlando Pirates... he has <em className="italic text-red-600 font-bold">no favorite player</em>—because he spends the entire 90 minutes yelling at every single one of them!
            </p>
          </div>

          {/* 4-Part Football Cut-Out Gallery Spread */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Cutout 1: Orlando Pirates */}
            <div className="relative rotate-[-2deg] hover:rotate-0 transition-transform duration-300 bg-white p-2.5 border-2 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div className="relative w-full aspect-square border border-zinc-900 overflow-hidden bg-black">
                <Image
                  src="/images/pirates.jpg"
                  alt="Orlando Pirates"
                  fill
                  sizes="(max-width: 768px) 100vw, 200px"
                  className="object-cover"
                />
              </div>
              <div className="pt-2 text-center">
                <p className="text-[11px] font-bold text-zinc-900 uppercase">
                  [ FIG. 03A — PIRATES ]
                </p>
                <p className="text-[10px] text-zinc-500 italic">Yelling at screen mandatory</p>
              </div>
            </div>

            {/* Cutout 2: Lionel Messi */}
            <div className="relative rotate-[2deg] hover:rotate-0 transition-transform duration-300 bg-white p-2.5 border-2 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] flex flex-col justify-between">
              <div className="relative w-full aspect-square border border-zinc-900 overflow-hidden bg-zinc-100">
                <Image
                  src="/images/messi.jpg"
                  alt="Lionel Messi"
                  fill
                  sizes="(max-width: 768px) 100vw, 200px"
                  className="object-cover"
                />
              </div>
              <div className="pt-2 text-center">
                <p className="text-[11px] font-bold text-red-600 uppercase">
                  [ FIG. 03B — MESSI GOAT ]
                </p>
                <p className="text-[10px] text-zinc-500 italic">Favorite player forever</p>
              </div>
            </div>

            {/* Cutout 3: Manchester City */}
            <div className="relative rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300 bg-white p-2.5 border-2 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div className="relative w-full aspect-square border border-zinc-900 overflow-hidden bg-zinc-100">
                <Image
                  src="/images/mancity.jpg"
                  alt="Manchester City"
                  fill
                  sizes="(max-width: 768px) 100vw, 200px"
                  className="object-cover"
                />
              </div>
              <div className="pt-2 text-center">
                <p className="text-[11px] font-bold text-zinc-900 uppercase">
                  [ FIG. 03C — MAN CITY ]
                </p>
                <p className="text-[10px] text-zinc-500 italic">European loyalty</p>
              </div>
            </div>

            {/* Cutout 4: Soccer Ball */}
            <div className="relative rotate-[1.5deg] hover:rotate-0 transition-transform duration-300 bg-white p-2.5 border-2 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div
                onClick={handleGoalClick}
                className="relative w-full aspect-square border border-zinc-900 overflow-hidden bg-zinc-100 cursor-pointer group"
              >
                <Image
                  src="/images/soccer.jpg"
                  alt="Soccer Ball"
                  fill
                  sizes="(max-width: 768px) 100vw, 200px"
                  className={`object-cover transition-transform duration-500 ${
                    goalCelebration ? "scale-110 rotate-6" : "group-hover:scale-105"
                  }`}
                />
                <div className="absolute inset-x-0 bottom-0 bg-zinc-900/90 p-1 text-white text-[10px] text-center font-bold">
                  Tap GOAL ⚽
                </div>

                <AnimatePresence>
                  {goalCelebration && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute inset-0 bg-red-600/95 flex flex-col items-center justify-center text-white p-2 text-center font-typewriter z-20"
                    >
                      <Trophy className="w-8 h-8 text-yellow-300 animate-bounce mb-1" />
                      <h4 className="text-sm font-extrabold uppercase font-magazine">GOAAAL! ⚽</h4>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="pt-2 text-center">
                <p className="text-[11px] font-bold text-zinc-900 uppercase">
                  [ FIG. 03D — MATCHDAY ]
                </p>
                <p className="text-[10px] text-zinc-500 italic">Tap ball for goal</p>
              </div>
            </div>
          </div>

          {/* Pirates Quote Banner */}
          <div className="bg-zinc-50 border-2 border-zinc-900 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative rotate-[0.5deg]">
            <div className="flex items-start gap-3">
              <MessageSquareQuote className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm sm:text-base font-bold text-zinc-900 italic font-magazine">
                  &quot;kha pass&apos;e bola, thoho ya mianu!&quot;
                </p>
                <p className="text-[11px] text-zinc-600 mt-1 font-typewriter font-semibold uppercase">
                  — Wandeme, every single time Pirates loses possession
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Disc } from "lucide-react";
import Image from "next/image";
import confetti from "canvas-confetti";

export default function MusicCard() {
  const [drumRipple, setDrumRipple] = useState(false);

  const handleDrumClick = () => {
    setDrumRipple(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#000000", "#3F3F46", "#FFFFFF"],
    });
    setTimeout(() => setDrumRipple(false), 1000);
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
            ARTICLE 02 // MUSIC & SOUND
          </span>
          <span className="text-xs font-mono font-bold bg-zinc-900 text-white px-2 py-0.5 uppercase">
            RHYTHM SECTION
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Main Article Body Text */}
          <div className="md:col-span-6 space-y-5 font-typewriter">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-zinc-900 text-xs font-bold border border-zinc-900 uppercase tracking-wider">
              <Music className="w-3.5 h-3.5" />
              <span>Musical Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-magazine text-zinc-900">
              Rhythm & Melodies 🥁🎸🎷
            </h2>

            <p className="text-zinc-700 text-sm leading-relaxed">
              Music isn&apos;t just a hobby for Wandeme—it&apos;s encoded in his DNA. Drumming runs directly in the family (passed down from his dad). Today, he&apos;s expanding his repertoire by learning the <strong className="text-zinc-900 underline">bass guitar</strong> with long-term sights on mastering the <strong className="text-zinc-900 underline">saxophone</strong>.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="p-3 bg-zinc-50 border border-zinc-900 flex items-center justify-between text-xs font-typewriter">
                <span className="font-bold text-zinc-900">01. Drums (Heritage)</span>
                <span className="text-zinc-600 font-mono font-semibold">Dad to Son</span>
              </div>
              <div className="p-3 bg-zinc-900 text-white border border-zinc-900 flex items-center justify-between text-xs font-typewriter">
                <span className="font-bold">02. Bass Guitar</span>
                <span className="text-zinc-300 font-mono font-semibold">Learning Now</span>
              </div>
              <div className="p-3 bg-zinc-50 border border-zinc-900 flex items-center justify-between text-xs font-typewriter">
                <span className="font-bold text-zinc-900">03. Saxophone</span>
                <span className="text-zinc-600 font-mono font-semibold">Future Goal</span>
              </div>
            </div>
          </div>

          {/* Magazine Cut-Out Photo */}
          <div className="md:col-span-6 flex flex-col items-center">
            <div className="relative rotate-[2.5deg] hover:rotate-0 transition-transform duration-300 bg-white p-3 border-2 border-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-full max-w-md">
              {/* Tape Effect */}
              <div className="absolute -top-3 right-8 w-20 h-5 bg-amber-100/90 border border-amber-300/80 rotate-[-2deg] shadow-sm z-10" />

              <div
                onClick={handleDrumClick}
                className="relative w-full aspect-video border border-zinc-900 overflow-hidden bg-zinc-100 cursor-pointer group"
              >
                <Image
                  src="/images/drums.jpg"
                  alt="Drums"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <AnimatePresence>
                  {drumRipple && (
                    <motion.div
                      initial={{ opacity: 1, scale: 0.5 }}
                      animate={{ opacity: 0, scale: 1.4 }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0 bg-black/40 pointer-events-none flex items-center justify-center"
                    >
                      <Disc className="w-16 h-16 text-white animate-spin" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute inset-x-0 bottom-0 bg-zinc-900/90 p-2.5 text-white text-xs flex justify-between items-center font-typewriter">
                  <span className="font-medium text-[11px]">Tap image to trigger beat pulse 🥁</span>
                  <span className="bg-white text-zinc-900 px-2 py-0.5 font-bold uppercase text-[10px]">Tap</span>
                </div>
              </div>

              <div className="pt-3 text-center font-typewriter">
                <p className="text-xs font-bold text-zinc-900 uppercase tracking-wide">
                  [ FIG. 02 — THE RHYTHM SECTION ]
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

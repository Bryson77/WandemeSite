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
      colors: ["#DC2626", "#000000", "#FFFFFF"],
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
          <span className="text-xs font-mono font-bold bg-zinc-900 text-white px-2.5 py-0.5 uppercase tracking-wider">
            RHYTHM SPREAD
          </span>
        </div>

        <div className="space-y-8">
          {/* Main Narrative Header */}
          <div className="space-y-3 font-typewriter max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-zinc-900 text-xs font-bold border border-zinc-900 uppercase tracking-wider">
              <Music className="w-3.5 h-3.5 text-red-600" />
              <span>Musical Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-magazine text-zinc-900">
              Rhythm & Melodies 🥁🎸🎷
            </h2>

            <p className="text-zinc-700 text-sm leading-relaxed">
              Music isn&apos;t just a hobby for Wandeme—it&apos;s encoded in his DNA. Drumming runs directly in the family (passed down from his dad). Today, he&apos;s expanding his musical arsenal by mastering the <strong className="text-red-600 underline">bass guitar</strong> with long-term sights on the <strong className="text-red-600 underline">saxophone</strong>.
            </p>
          </div>

          {/* 3-Part Magazine Instrument Cut-Out Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Cutout 1: Drums.jpg */}
            <div className="relative rotate-[-2deg] hover:rotate-0 transition-transform duration-300 bg-white p-3 border-2 border-zinc-900 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div className="absolute -top-3 left-4 w-16 h-4 bg-amber-100/90 border border-amber-300/80 rotate-[2deg] shadow-sm z-10" />

              <div
                onClick={handleDrumClick}
                className="relative w-full aspect-video border border-zinc-900 overflow-hidden bg-zinc-100 cursor-pointer group"
              >
                <Image
                  src="/images/drums.jpg"
                  alt="Drums"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <AnimatePresence>
                  {drumRipple && (
                    <motion.div
                      initial={{ opacity: 1, scale: 0.5 }}
                      animate={{ opacity: 0, scale: 1.4 }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0 bg-red-600/40 pointer-events-none flex items-center justify-center"
                    >
                      <Disc className="w-12 h-12 text-white animate-spin" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute inset-x-0 bottom-0 bg-zinc-900/90 p-2 text-white text-[11px] flex justify-between items-center font-typewriter">
                  <span>Drums 🥁</span>
                  <span className="bg-red-600 text-white px-1.5 py-0.5 font-bold uppercase text-[9px]">Tap Beat</span>
                </div>
              </div>

              <div className="pt-3 font-typewriter">
                <p className="text-xs font-bold text-zinc-900 uppercase">
                  [ FIG. 02A — DRUMS ]
                </p>
                <p className="text-[11px] text-zinc-600 mt-1">Heritage passed down from his father.</p>
              </div>
            </div>

            {/* Cutout 2: Guitar.jpg */}
            <div className="relative rotate-[1.5deg] hover:rotate-0 transition-transform duration-300 bg-white p-3 border-2 border-zinc-900 shadow-[5px_5px_0px_0px_rgba(220,38,38,1)] flex flex-col justify-between">
              <div className="relative w-full aspect-video border border-zinc-900 overflow-hidden bg-zinc-100">
                <Image
                  src="/images/guitar.jpg"
                  alt="Bass Guitar"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="pt-3 font-typewriter">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-red-600 uppercase">
                    [ FIG. 02B — BASS GUITAR ]
                  </p>
                  <span className="text-[9px] bg-red-600 text-white font-bold px-1.5 py-0.5 uppercase">Learning</span>
                </div>
                <p className="text-[11px] text-zinc-600 mt-1">Currently learning & practicing daily.</p>
              </div>
            </div>

            {/* Cutout 3: Saxophone.jpg */}
            <div className="relative rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300 bg-white p-3 border-2 border-zinc-900 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div className="relative w-full aspect-video border border-zinc-900 overflow-hidden bg-zinc-100">
                <Image
                  src="/images/saxophone.jpg"
                  alt="Saxophone"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="pt-3 font-typewriter">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-zinc-900 uppercase">
                    [ FIG. 02C — SAXOPHONE ]
                  </p>
                  <span className="text-[9px] bg-zinc-200 text-zinc-900 font-bold px-1.5 py-0.5 uppercase border border-zinc-900">Future Goal</span>
                </div>
                <p className="text-[11px] text-zinc-600 mt-1">Dream instrument to master next.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

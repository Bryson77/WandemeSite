"use client";

import { motion } from "framer-motion";
import { Car, Gauge, Zap } from "lucide-react";
import Image from "next/image";

export default function DreamCarCard() {
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
            ARTICLE 04 // AUTOMOTIVE
          </span>
          <span className="text-xs font-mono font-bold bg-zinc-900 text-white px-2 py-0.5 uppercase">
            GARAGE DREAMS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start font-typewriter">
          {/* Content */}
          <div className="md:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-zinc-900 text-xs font-bold border border-zinc-900 uppercase tracking-wider">
              <Car className="w-3.5 h-3.5" />
              <span>Dream Machine</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-magazine text-zinc-900">
              The BMW 340i 🏎️
            </h2>

            <p className="text-zinc-700 text-sm leading-relaxed">
              Wandeme is a genuine car enthusiast through and through. But no matter how many exotic supercars exist in the world, he <strong className="text-zinc-900 underline">always circles right back</strong> to the ultimate legendary daily driver: the BMW 340i.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-zinc-50 border border-zinc-900">
                <div className="flex items-center gap-1.5 text-zinc-900 text-xs font-bold mb-0.5">
                  <Gauge className="w-3.5 h-3.5" /> Engine Spec
                </div>
                <p className="text-xs text-zinc-700 font-mono font-bold">B58 Inline 6 Turbo</p>
              </div>

              <div className="p-3 bg-zinc-900 text-white border border-zinc-900">
                <div className="flex items-center gap-1.5 text-zinc-200 text-xs font-bold mb-0.5">
                  <Zap className="w-3.5 h-3.5" /> Status
                </div>
                <p className="text-xs text-zinc-200 font-mono font-bold">Garage Queen 👑</p>
              </div>
            </div>
          </div>

          {/* Magazine Cut-Out Photo */}
          <div className="md:col-span-6 flex flex-col items-center">
            <div className="relative rotate-[2deg] hover:rotate-0 transition-transform duration-300 bg-white p-3 border-2 border-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-full max-w-md">
              {/* Tape Effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-amber-100/90 border border-amber-300/80 rotate-[-1deg] shadow-sm z-10" />

              <div className="relative w-full aspect-video border border-zinc-900 overflow-hidden bg-zinc-100">
                <Image
                  src="/images/bmw340i.jpg"
                  alt="BMW 340i"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="pt-3 text-center font-typewriter">
                <p className="text-xs font-bold text-zinc-900 uppercase tracking-wide">
                  [ FIG. 04 — THE BMW 340i B58 ]
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

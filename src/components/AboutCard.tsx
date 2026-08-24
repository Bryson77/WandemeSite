"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import wandemeImg from "../../public/images/wandeme.jpg";

export default function AboutCard() {
  const traits = [
    {
      title: "Sleep Enthusiast 😴",
      desc: "10+ sleeping videos exist. Napping is a full-time profession.",
    },
    {
      title: "The Dying Laugh 💀",
      desc: "Can't laugh quietly. Sounds like he's gasping for air when something is funny.",
    },
    {
      title: "Do Not Wake Him 🚫",
      desc: "Waking him up is high risk. Proceed at your own caution.",
    },
    {
      title: "Burger & Chips Only 🍔",
      desc: "Hates restaurant disappointment. Always orders burger and chips.",
    },
  ];

  return (
    <section className="py-14 px-4 max-w-5xl mx-auto" id="about">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 sm:p-10 border-2 border-zinc-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative"
      >
        {/* Top Section Header */}
        <div className="flex items-center justify-between border-b-2 border-zinc-900 pb-4 mb-8 font-typewriter">
          <span className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
            ARTICLE 01 // PROFILE & QUIRKS
          </span>
          <span className="text-xs font-mono font-bold bg-red-600 text-white px-2.5 py-0.5 uppercase tracking-wider">
            FEATURE STORY
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Magazine Cut-Out Photo (Main Wandeme Photo) */}
          <div className="md:col-span-5 flex flex-col items-center gap-6">
            {/* Cutout 1: Wandeme.jpg */}
            <div className="relative rotate-[-2deg] hover:rotate-0 transition-transform duration-300 bg-white p-3 border-2 border-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-full max-w-sm">
              {/* Tape Effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-amber-100/90 border border-amber-300/80 rotate-[1deg] shadow-sm z-10" />

              <div className="relative w-full aspect-square border border-zinc-900 overflow-hidden bg-zinc-100">
                <Image
                  src={wandemeImg}
                  alt="Wandeme Ipfi"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  priority
                />
              </div>

              <div className="pt-3 text-center font-typewriter">
                <p className="text-xs font-bold text-zinc-900 uppercase tracking-wide">
                  [ FIG. 01 — WANDEME IPFI ]
                </p>
                <p className="text-[11px] text-zinc-500 italic mt-0.5">
                  &quot;Venda Pride &bull; Car Enthusiast &bull; Nap Master&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Body Text & Bio Quirks */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-magazine text-zinc-900 leading-tight">
                Who is Wandeme?
              </h2>
              <p className="text-sm font-typewriter text-zinc-700 mt-2 leading-relaxed">
                A closer look at the man of the hour. Known across Venda and beyond for his unshakeable commitment to high quality naps, legendary humor, and zero-compromise dining habits.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  className="bg-zinc-50 p-4 border border-zinc-900 font-typewriter relative hover:border-red-600 transition-colors"
                >
                  <div className="absolute top-2 right-2 text-[10px] font-mono text-red-600 font-bold">#0{i+1}</div>
                  <h3 className="font-bold text-zinc-900 text-sm mb-1">{trait.title}</h3>
                  <p className="text-xs text-zinc-700 leading-relaxed">{trait.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

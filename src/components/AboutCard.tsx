"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <section className="py-14 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="bg-[#121826] rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Portrait */}
          <div className="md:col-span-5 flex flex-col items-center text-center">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-md">
              <Image
                src="/images/portrait.jpg"
                alt="Wandeme Ipfi"
                fill
                sizes="(max-width: 768px) 100vw, 250px"
                className="object-cover"
              />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white">Wandeme Ipfi</h2>
            <p className="text-xs text-slate-400 mt-1 font-medium">
              Venda Pride &bull; Car Enthusiast &bull; Nap Master
            </p>
          </div>

          {/* Bio Quirks Grid */}
          <div className="md:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                Personality & Quirks
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Who is Wandeme?
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
                  className="bg-[#090D16] p-4 rounded-xl border border-slate-800/80 active:scale-[0.98] transition-transform duration-150 ease-out"
                >
                  <h4 className="font-bold text-white text-sm mb-1">{trait.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{trait.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Utensils, Cookie, Cake, Shirt, Star } from "lucide-react";

export default function FavouritesGrid() {
  const items = [
    {
      icon: <Utensils className="w-5 h-5 text-blue-400" />,
      category: "Favorite Meal",
      title: "Spaghetti & Mince 🍝",
      detail: "Pap runs a close second (Venda pride 🇿🇦). Nothing beats a full plate.",
    },
    {
      icon: <Cookie className="w-5 h-5 text-sky-400" />,
      category: "Go-To Snacks",
      title: "Oreos + Top Deck 🍫",
      detail: "\"Broke but he'll make a plan\" — snack stash is non-negotiable.",
    },
    {
      icon: <Cake className="w-5 h-5 text-blue-400" />,
      category: "Top Cake",
      title: "Checkers Mousse / Woolies Swirl 🍰",
      detail: "Checkers Chocolate Mousse or Woolworths Caramel Swirl — zero competition.",
    },
    {
      icon: <Shirt className="w-5 h-5 text-sky-400" />,
      category: "Go-To Brand",
      title: "Old Khaki 👕",
      detail: "Dedicated t-shirt collector. If it's Old Khaki, he's adding it to the wardrobe.",
    },
  ];

  return (
    <section className="py-10 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-2 border border-blue-500/20">
          <Star className="w-3.5 h-3.5" />
          <span>The Essentials</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-sans">
          Wandeme&apos;s Favorites ⭐️
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            className="p-5 rounded-2xl bg-[#121826] border border-slate-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 bg-[#090D16] rounded-xl border border-slate-800">
                  {item.icon}
                </div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

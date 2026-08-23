"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MailOpen, Heart, Edit3, Check, Copy } from "lucide-react";
import confetti from "canvas-confetti";

export default function LetterSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);

  const defaultLetter = `Brother man, you're pushing 30! 🤣 if only the little kid on the picture didn't wish to be older, you wouldn't be here 🙂‍↕️. Jokes aside, happy birthday Ipfi ❤️! I hope God blesses you with more wisdom as you grow. I hope He blesses you with money so that I don't have to worry about getting a degree 🤣, you're my only plan B (jk).

Next time, I'm gonna get you an entire drum kit and the bass guitar that you've always wanted. Just keep my finances in prayer. 🥺🙏🏾

I know people that push 30 nag about their back most of the time, so today you're getting A FREE FULL MASSAGE! 🙂‍↕️❤️ Congratulations! 🙂‍↕️

I love you Wandeme Ipfi Mamatsharaga and happy birthday! 🥳`;

  const [letterText, setLetterText] = useState(defaultLetter);

  const handleOpenEnvelope = () => {
    if (!isOpen) {
      setIsOpen(true);
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.8 },
        colors: ["#F4A93B", "#FF6B6B", "#1F2937", "#EC4899"],
      });
    } else {
      setIsOpen(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(letterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="letter">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-semibold mb-2 border border-red-200">
          <Heart className="w-4 h-4 text-brand-coral fill-brand-coral" />
          <span>Special Message</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-navy font-heading">
          A Letter For You ✉️
        </h2>
        <p className="text-gray-600 text-sm max-w-md mx-auto mt-2">
          Tap the envelope below to unfold your birthday letter!
        </p>
      </div>

      {/* Envelope Container */}
      <div className="flex flex-col items-center">
        {!isOpen && (
          <motion.div
            onClick={handleOpenEnvelope}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full max-w-md bg-gradient-to-br from-amber-400 via-brand-gold to-orange-400 p-8 rounded-3xl shadow-2xl border-4 border-white cursor-pointer text-white flex flex-col items-center justify-center text-center space-y-4 relative group"
          >
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
              <Mail className="w-10 h-10 text-white animate-bounce" />
            </div>

            <div>
              <h3 className="text-2xl font-bold font-heading">Open Birthday Letter</h3>
              <p className="text-xs text-amber-100 mt-1">Tap to unseal the message</p>
            </div>

            <div className="px-4 py-1.5 rounded-full bg-white/30 text-white text-xs font-semibold backdrop-blur-sm">
              ✨ Sealed with Friendship
            </div>
          </motion.div>
        )}

        {/* Opened Letter Paper Container */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
              className="w-full bg-white paper-texture rounded-3xl p-6 sm:p-12 shadow-2xl border-2 border-amber-200/70 relative"
            >
              {/* Top Controls Bar */}
              <div className="flex items-center justify-between border-b border-amber-200/60 pb-4 mb-6">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                  <MailOpen className="w-5 h-5 text-brand-gold" />
                  <span>Unsealed Letter</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="p-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-amber-200"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>{isEditing ? "Done Editing" : "Edit Letter"}</span>
                  </button>

                  <button
                    onClick={handleCopy}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-colors"
                    title="Copy letter text"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold transition-colors"
                  >
                    Close Envelope
                  </button>
                </div>
              </div>

              {/* Letter Content Area */}
              {isEditing ? (
                <textarea
                  value={letterText}
                  onChange={(e) => setLetterText(e.target.value)}
                  rows={12}
                  className="w-full p-4 rounded-xl border-2 border-brand-gold/50 focus:outline-none focus:ring-2 focus:ring-brand-gold text-brand-navy font-mono text-sm leading-relaxed bg-amber-50/50"
                  placeholder="Paste or write your birthday letter text here..."
                />
              ) : (
                <div className="space-y-4 text-brand-navy leading-relaxed text-sm sm:text-base whitespace-pre-line font-serif italic text-gray-800 p-2">
                  {letterText}
                </div>
              )}

              {/* Letter Footer */}
              <div className="mt-8 pt-6 border-t border-amber-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1 text-brand-coral font-medium">
                  <Heart className="w-4 h-4 fill-brand-coral" /> Made with love for Wandeme
                </span>
                <span>Tap &apos;Edit Letter&apos; anytime to paste your own message</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

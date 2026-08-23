"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MailOpen, Heart, Edit3, Check, Copy } from "lucide-react";
import confetti from "canvas-confetti";
import Toast from "./Toast";

export default function LetterSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const defaultLetter = `Brother man, you're pushing 30! 🤣 if only the little kid on the picture didn't wish to be older, you wouldn't be here 🙂‍↕️. Jokes aside, happy birthday Ipfi ❤️! I hope God blesses you with more wisdom as you grow. I hope He blesses you with money so that I don't have to worry about getting a degree 🤣, you're my only plan B (jk).

Next time, I'm gonna get you an entire drum kit and the bass guitar that you've always wanted. Just keep my finances in prayer. 🥺🙏🏾

I know people that push 30 nag about their back most of the time, so today you're getting A FREE FULL MASSAGE! 🙂‍↕️❤️ Congratulations! 🙂‍↕️

I love you Wandeme Ipfi Mamatsharaga and happy birthday! 🥳`;

  const [letterText, setLetterText] = useState(defaultLetter);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2000);
  };

  const handleOpenEnvelope = () => {
    if (!isOpen) {
      setIsOpen(true);
      showToast("Envelope Unsealed");
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.8 },
        colors: ["#2563EB", "#38BDF8", "#FFFFFF"],
      });
    } else {
      setIsOpen(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(letterText);
    setCopied(true);
    showToast("Letter Copied");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto" id="letter">
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-2 border border-blue-500/20">
          <Heart className="w-3.5 h-3.5 fill-blue-400" />
          <span>Special Birthday Letter</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
          A Letter For You ✉️
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          Tap envelope to unseal the message
        </p>
      </div>

      <div className="flex flex-col items-center">
        {!isOpen && (
          <motion.div
            onClick={handleOpenEnvelope}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="w-full max-w-md bg-[#121826] p-8 rounded-2xl border border-slate-700 cursor-pointer text-white flex flex-col items-center justify-center text-center space-y-3 shadow-xl group active:scale-[0.97] transition-transform duration-150 ease-out"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Mail className="w-8 h-8 text-blue-400" />
            </div>

            <div>
              <h3 className="text-xl font-bold">Open Birthday Letter</h3>
              <p className="text-xs text-slate-400 mt-1">Click to unseal message</p>
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="w-full bg-white paper-texture rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-300 text-slate-900"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-5">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                  <MailOpen className="w-4 h-4 text-blue-600" />
                  <span>Unsealed Letter</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 active:scale-[0.97] text-slate-800 text-xs font-semibold flex items-center gap-1 border border-slate-300 transition-transform duration-150 ease-out"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>{isEditing ? "Done" : "Edit"}</span>
                  </button>

                  <button
                    onClick={handleCopy}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 active:scale-[0.97] text-slate-700 text-xs font-semibold transition-transform duration-150 ease-out"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-2.5 py-1 rounded-lg bg-red-50 hover:bg-red-100 active:scale-[0.97] text-red-600 text-xs font-semibold transition-transform duration-150 ease-out"
                  >
                    Close
                  </button>
                </div>
              </div>

              {isEditing ? (
                <textarea
                  value={letterText}
                  onChange={(e) => setLetterText(e.target.value)}
                  rows={10}
                  className="w-full p-4 rounded-xl border border-blue-400 text-slate-900 font-sans text-sm leading-relaxed bg-slate-50 focus:outline-none"
                />
              ) : (
                <div className="space-y-4 text-slate-900 leading-relaxed text-sm sm:text-base whitespace-pre-line font-serif italic p-1">
                  {letterText}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

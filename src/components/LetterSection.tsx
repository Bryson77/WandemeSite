"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MailOpen, Heart, Check, Copy } from "lucide-react";
import confetti from "canvas-confetti";
import Toast from "./Toast";

const letterContent = `Brother man, you're pushing 30! 🤣 if only the little kid on the picture didn't wish to be older, you wouldn't be here 🙂‍↕️. Jokes aside, happy birthday Ipfi ❤️! I hope God blesses you with more wisdom as you grow. I hope He blesses you with money so that I don't have to worry about getting a degree 🤣, you're my only plan B (jk).

Next time, I'm gonna get you an entire drum kit and the bass guitar that you've always wanted. Just keep my finances in prayer. 🥺🙏🏾

I know people that push 30 nag about their back most of the time, so today you're getting A FREE FULL MASSAGE! 🙂‍↕️❤️ Congratulations! 🙂‍↕️

I love you Wandeme Ipfi Mamatsharaga and happy birthday! 🥳`;

export default function LetterSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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
        colors: ["#000000", "#3F3F46", "#FFFFFF"],
      });
    } else {
      setIsOpen(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(letterContent);
    setCopied(true);
    showToast("Letter Copied");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto" id="letter">
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      <div className="text-center mb-8 font-typewriter">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-zinc-900 text-xs font-bold uppercase tracking-widest mb-2 border border-zinc-900">
          <Heart className="w-3.5 h-3.5 fill-zinc-900 text-zinc-900" />
          <span>Special Birthday Letter</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 font-magazine">
          A Letter For You ✉️
        </h2>
        <p className="text-zinc-600 text-xs sm:text-sm mt-1 font-typewriter">
          Tap envelope to unseal the message
        </p>
      </div>

      <div className="flex flex-col items-center font-typewriter">
        {!isOpen && (
          <motion.div
            onClick={handleOpenEnvelope}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-md bg-white p-8 border-2 border-zinc-900 cursor-pointer text-zinc-900 flex flex-col items-center justify-center text-center space-y-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <div className="w-16 h-16 bg-zinc-100 border border-zinc-900 flex items-center justify-center">
              <Mail className="w-8 h-8 text-zinc-900" />
            </div>

            <div>
              <h3 className="text-xl font-bold font-magazine">Open Birthday Letter</h3>
              <p className="text-xs text-zinc-600 mt-1 uppercase tracking-wider font-mono">Click to unseal message</p>
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 12 }}
              transition={{ duration: 0.25 }}
              className="w-full bg-white paper-texture p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-zinc-900 text-zinc-900"
            >
              <div className="flex items-center justify-between border-b-2 border-zinc-900 pb-3 mb-6">
                <div className="flex items-center gap-2 text-zinc-900 font-bold text-xs sm:text-sm font-magazine">
                  <MailOpen className="w-4 h-4 text-zinc-900" />
                  <span>UNSEALED LETTER</span>
                </div>

                <div className="flex items-center gap-2 font-typewriter">
                  <button
                    onClick={handleCopy}
                    className="px-2.5 py-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs font-bold border border-zinc-900 flex items-center gap-1.5"
                    title="Copy letter"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-zinc-900" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-2.5 py-1 bg-zinc-900 text-white hover:bg-black text-xs font-bold border border-zinc-900"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="space-y-4 text-zinc-900 leading-relaxed text-sm sm:text-base whitespace-pre-line font-typewriter p-1">
                {letterContent}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

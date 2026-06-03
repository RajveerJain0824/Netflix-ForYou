"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Memory } from "@/data/eras";

export function FloatingAudioPlayer({ memory, onClose }: { memory: Memory | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {memory ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed bottom-4 left-4 right-4 z-30 rounded-sm border border-white/10 bg-[#181818]/95 p-4 shadow-[0_16px_60px_rgba(0,0,0,.65)] backdrop-blur-xl sm:left-auto sm:w-[460px]"
        >
          <div className="mb-3 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-white">{memory.title}</p>
              <p className="text-xs text-zinc-500">{memory.funnyMetadata}</p>
            </div>
            <button onClick={onClose} className="text-zinc-400 transition hover:text-white" aria-label="Close audio player">
              <X className="h-5 w-5" />
            </button>
          </div>
          <audio src={memory.src} controls autoPlay className="w-full" />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

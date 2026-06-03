"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Memory } from "@/data/eras";

export function MediaModal({
  memory,
  onClose,
  onAudio
}: {
  memory: Memory | null;
  onClose: () => void;
  onAudio: (memory: Memory) => void;
}) {
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [onClose]);

  useEffect(() => {
    if (memory?.type === "audio") {
      onAudio(memory);
      onClose();
    }
  }, [memory, onAudio, onClose]);

  return (
    <AnimatePresence>
      {memory && memory.type !== "audio" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/[0.92] p-3 backdrop-blur-md sm:p-6"
          onClick={onClose}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (Math.abs(info.offset.x) > 90) onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.92, y: 24 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 24 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-6xl overflow-hidden rounded-sm bg-[#181818] shadow-[0_24px_90px_rgba(0,0,0,.75)]"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#181818]/90 text-white transition hover:bg-white hover:text-black"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative bg-black">
              {memory.type === "video" ? (
                <video src={memory.src} poster={memory.thumbnail} className="max-h-[76vh] w-full bg-black" controls autoPlay />
              ) : (
                <img
                  src={memory.src}
                  alt={memory.title}
                  className="max-h-[76vh] w-full object-contain"
                  onError={(event) => {
                    event.currentTarget.style.opacity = "0";
                  }}
                />
              )}
              {memory.song ? <audio key={memory.song} src={memory.song} autoPlay loop className="hidden" /> : null}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#181818] to-transparent" />
            </div>
            <div className="space-y-4 p-5 sm:p-8">
              <h2 className="text-2xl font-bold text-white sm:text-4xl">{memory.title}</h2>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium">
                <span className="font-bold text-green-400">98% Match</span>
                <span className="text-zinc-400">{memory.date}</span>
                <span className="text-zinc-400">{memory.location}</span>
                <span className="rounded border border-zinc-500 px-1 text-xs uppercase text-zinc-300">{memory.type}</span>
              </div>
              <p className="max-w-3xl text-base leading-7 text-zinc-200">{memory.caption}</p>
              <div className="flex flex-wrap gap-2">
                {memory.tags.map((tag) => (
                  <span key={tag} className="rounded-sm bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

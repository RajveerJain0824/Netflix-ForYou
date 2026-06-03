"use client";

import { motion } from "framer-motion";
import { Headphones, ImageIcon, Play } from "lucide-react";
import { Memory } from "@/data/eras";

const icons = {
  photo: ImageIcon,
  video: Play,
  audio: Headphones
};

export function MemoryCard({ memory, onOpen }: { memory: Memory; onOpen: (memory: Memory) => void }) {
  const Icon = icons[memory.type];

  return (
    <motion.button
      whileHover={{ scale: 1.08, y: -6, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      onClick={() => onOpen(memory)}
      className="group relative min-w-[280px] max-w-[280px] overflow-hidden rounded-sm bg-[#181818] text-left shadow-xl outline-none ring-white/0 transition focus:ring-2 sm:min-w-[360px] sm:max-w-[360px] lg:min-w-[410px] lg:max-w-[410px]"
    >
      <div className="relative aspect-video overflow-hidden bg-[linear-gradient(135deg,#262626,#070707)]">
        <img
          src={memory.thumbnail}
          alt={memory.title}
          className="h-full w-full object-cover opacity-95 transition duration-500 group-hover:scale-110"
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />
        <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white text-black opacity-95 shadow-lg">
          <Icon className="h-5 w-5 fill-black" />
        </div>
        <div className="absolute bottom-3 right-3 rounded-sm bg-black/70 px-2 py-1 text-xs font-semibold uppercase text-zinc-300">
          {memory.type}
        </div>
      </div>
      <div className="space-y-2 p-3 sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="line-clamp-1 text-sm font-bold text-white sm:text-base">{memory.title}</h3>
          <span className="shrink-0 text-xs text-zinc-500">{memory.date}</span>
        </div>
        <p className="line-clamp-2 text-sm leading-5 text-zinc-400">{memory.caption}</p>
        <p className="line-clamp-1 text-xs font-semibold uppercase tracking-wider text-netflix-red">{memory.funnyMetadata}</p>
      </div>
    </motion.button>
  );
}

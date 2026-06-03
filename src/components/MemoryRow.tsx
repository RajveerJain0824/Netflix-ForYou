"use client";

import { motion } from "framer-motion";
import { Memory } from "@/data/eras";
import { MemoryCard } from "./MemoryCard";

export function MemoryRow({
  title,
  description,
  memories,
  onOpen
}: {
  title: string;
  description?: string;
  memories: Memory[];
  onOpen: (memory: Memory) => void;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-10 -mt-4 px-5 py-6 sm:px-12 lg:px-16"
    >
      <h2 className="text-lg font-bold text-white sm:text-2xl">{title}</h2>
      {description ? <p className="mt-1 max-w-2xl text-sm leading-5 text-zinc-500">{description}</p> : null}
      <div className="scrollbar-hide -mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-10 pt-2 sm:-mx-12 sm:gap-3 sm:px-12 lg:-mx-16 lg:px-16">
        {memories.map((memory) => (
          <MemoryCard key={`${title}-${memory.title}`} memory={memory} onOpen={onOpen} />
        ))}
      </div>
    </motion.section>
  );
}

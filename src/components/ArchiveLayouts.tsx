"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Memory } from "@/data/eras";

const isPhoneLike = (memory: Memory) => memory.thumbnail.toLowerCase().endsWith(".png") || memory.thumbnail.includes("IMG_");

function MediaPreview({ memory, className = "" }: { memory: Memory; className?: string }) {
  if (memory.type === "video") {
    return <video src={memory.src} className={`h-full w-full object-cover opacity-90 ${className}`} autoPlay muted loop playsInline />;
  }

  return (
    <img
      src={memory.thumbnail}
      alt={memory.title}
      className={`h-full w-full opacity-90 transition duration-500 group-hover:scale-105 ${isPhoneLike(memory) ? "object-contain" : "object-cover"} ${className}`}
      onError={(event) => {
        event.currentTarget.style.opacity = "0";
      }}
    />
  );
}

function ArchiveCard({
  memory,
  onOpen,
  index,
  compact = false
}: {
  memory: Memory;
  onOpen: (memory: Memory) => void;
  index: number;
  compact?: boolean;
}) {
  return (
    <motion.button
      onClick={() => onOpen(memory)}
      whileHover={{ y: -8, rotate: index % 2 === 0 ? -1.2 : 1.2, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 230, damping: 20 }}
      className={`group relative overflow-hidden rounded-sm border border-white/10 bg-[#101010] text-left shadow-[0_20px_55px_rgba(0,0,0,.5)] outline-none focus:ring-2 focus:ring-white ${
        compact ? "aspect-[4/5]" : isPhoneLike(memory) ? "aspect-[9/14]" : "aspect-[4/5]"
      }`}
    >
      <MediaPreview memory={memory} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
      {memory.type === "video" ? (
        <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-xl">
          <Play className="h-5 w-5 fill-black" />
        </span>
      ) : null}
      <div className="absolute inset-x-0 bottom-0 p-3">
        <p className="text-sm font-black text-white">{memory.title}</p>
        <p className="mt-1 line-clamp-2 text-xs text-zinc-300">{memory.caption}</p>
      </div>
    </motion.button>
  );
}

export function ArchiveMessageStrip({
  title,
  note,
  memories,
  onOpen
}: {
  title: string;
  note: string;
  memories: Memory[];
  onOpen: (memory: Memory) => void;
}) {
  return (
    <section className="relative px-5 py-10 sm:px-12 lg:px-16">
      <div className="mb-6 max-w-3xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-400 sm:text-base">{note}</p>
      </div>
      <div className="scrollbar-hide -mx-5 flex gap-3 overflow-x-auto px-5 pb-8 pt-2 sm:-mx-12 sm:px-12 lg:-mx-16 lg:px-16">
        {memories.map((memory, index) => (
          <button
            key={`${memory.title}-strip-${index}`}
            onClick={() => onOpen(memory)}
            className="group relative h-[420px] w-[210px] shrink-0 overflow-hidden rounded-sm border border-white/10 bg-black shadow-[0_18px_55px_rgba(0,0,0,.5)] transition hover:-translate-y-2 hover:scale-[1.025] focus:outline-none focus:ring-2 focus:ring-white sm:h-[520px] sm:w-[260px]"
          >
            <MediaPreview memory={memory} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <p className="absolute inset-x-0 bottom-0 p-3 text-left text-sm font-bold text-white">{memory.title}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

export function ArchiveMemoryWall({
  title,
  note,
  memories,
  onOpen
}: {
  title: string;
  note: string;
  memories: Memory[];
  onOpen: (memory: Memory) => void;
}) {
  return (
    <section className="relative bg-[radial-gradient(circle_at_22%_20%,rgba(229,9,20,.13),transparent_30%),radial-gradient(circle_at_82%_30%,rgba(255,255,255,.08),transparent_28%)] px-5 py-10 sm:px-12 lg:px-16">
      <div className="mb-6 max-w-3xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-400 sm:text-base">{note}</p>
      </div>
      <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] md:grid-cols-4 lg:grid-cols-6">
        {memories.map((memory, index) => {
          const span = index % 7 === 0 ? "col-span-2 row-span-2" : index % 5 === 0 ? "col-span-2" : "";

          return (
            <div key={`${memory.title}-wall-${index}`} className={span}>
              <ArchiveCard memory={memory} onOpen={onOpen} index={index} compact />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function ArchiveMiniClusters({
  title,
  note,
  clusters,
  onOpen
}: {
  title: string;
  note: string;
  clusters: { title: string; caption: string; items: Memory[] }[];
  onOpen: (memory: Memory) => void;
}) {
  return (
    <section className="relative px-5 py-10 sm:px-12 lg:px-16">
      <div className="mb-6 max-w-3xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-400 sm:text-base">{note}</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {clusters.map((cluster, clusterIndex) => (
          <motion.div
            key={cluster.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: clusterIndex * 0.08, duration: 0.55 }}
            className="relative min-h-[410px] overflow-hidden rounded-sm border border-white/10 bg-white/[0.04] p-4 shadow-[0_24px_70px_rgba(0,0,0,.42)]"
          >
            <p className="relative z-10 text-xl font-black text-white">{cluster.title}</p>
            <p className="relative z-10 mt-2 text-sm leading-6 text-zinc-400">{cluster.caption}</p>
            <div className="relative mt-5 h-[300px]">
              {cluster.items.slice(0, 3).map((memory, itemIndex) => (
                <button
                  key={`${cluster.title}-${memory.title}-${itemIndex}`}
                  onClick={() => onOpen(memory)}
                  className="group absolute overflow-hidden rounded-sm border border-white/10 bg-black shadow-2xl transition hover:z-20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
                  style={{
                    width: itemIndex === 1 ? "58%" : "48%",
                    height: itemIndex === 1 ? "72%" : "58%",
                    left: itemIndex === 0 ? "0%" : itemIndex === 1 ? "28%" : "52%",
                    top: itemIndex === 0 ? "12%" : itemIndex === 1 ? "2%" : "34%",
                    transform: `rotate(${[-5, 3, -2][itemIndex]}deg)`
                  }}
                >
                  <MediaPreview memory={memory} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <p className="absolute inset-x-0 bottom-0 p-2 text-left text-xs font-bold text-white">{memory.title}</p>
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function ArchiveFloatingStacks({
  title,
  note,
  stacks,
  onOpen
}: {
  title: string;
  note: string;
  stacks: Memory[][];
  onOpen: (memory: Memory) => void;
}) {
  return (
    <section className="relative bg-[radial-gradient(circle_at_28%_20%,rgba(255,198,136,.11),transparent_30%)] px-5 py-10 sm:px-12 lg:px-16">
      <div className="mb-6 max-w-3xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-400 sm:text-base">{note}</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {stacks.map((stack, stackIndex) => (
          <motion.div
            key={`stack-${stackIndex}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.75, delay: stackIndex * 0.12 }}
            className="relative h-[360px]"
          >
            {stack.slice(0, 3).map((memory, itemIndex) => (
              <button
                key={`${memory.title}-floating-${itemIndex}`}
                onClick={() => onOpen(memory)}
                className="group absolute left-1/2 top-1/2 h-[260px] w-[190px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-sm border border-white/10 bg-black shadow-[0_24px_70px_rgba(0,0,0,.48)] transition hover:z-20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
                style={{
                  transform: `translate(-50%, -50%) translate(${(itemIndex - 1) * 38}px, ${itemIndex * 18}px) rotate(${[-8, 3, 10][itemIndex]}deg)`
                }}
              >
                <MediaPreview memory={memory} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-3 text-left text-xs font-bold text-white">{memory.title}</p>
              </button>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

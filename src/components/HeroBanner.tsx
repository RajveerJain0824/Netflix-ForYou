"use client";

import { motion } from "framer-motion";
import { Play, Plus } from "lucide-react";
import { Era } from "@/data/eras";

export function HeroBanner({ era }: { era: Era }) {
  const warm = era.vibe === "warm";

  return (
    <section className="relative min-h-[82vh] overflow-hidden bg-black px-5 pb-28 pt-28 sm:px-12 lg:px-16">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.84)_28%,rgba(5,5,5,.42)_58%,rgba(5,5,5,.1)_100%),linear-gradient(0deg,#141414_0%,rgba(20,20,20,.72)_12%,rgba(20,20,20,.08)_42%,transparent_70%)]" />
      <div className={`absolute inset-0 ${warm ? "bg-[radial-gradient(circle_at_70%_18%,rgba(255,157,93,.28),transparent_35%)]" : "bg-[radial-gradient(circle_at_72%_20%,rgba(229,9,20,.22),transparent_34%)]"}`} />
      <img
        src={era.heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-55"
        onError={(event) => {
          event.currentTarget.style.opacity = "0";
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex min-h-[62vh] max-w-3xl flex-col justify-end"
      >
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-netflix-red">Anniversary Original</p>
        <h1 className="text-5xl font-black leading-none text-white drop-shadow-2xl sm:text-7xl lg:text-8xl">{era.title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-100 drop-shadow sm:text-xl sm:leading-8">{era.subtitle}</p>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-zinc-300">
          <span className="font-bold text-green-400">{era.matchPercentage}% Match</span>
          {era.fakeGenres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
          <span>{era.runtime}</span>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 rounded bg-netflix-red px-8 py-3 text-lg font-bold text-white transition hover:bg-red-700">
            <Play className="h-6 w-6 fill-white" />
            Play
          </button>
          <button className="inline-flex items-center gap-2 rounded bg-[#6d6d6eb3] px-7 py-3 text-lg font-bold text-white backdrop-blur transition hover:bg-[#6d6d6e66]">
            <Plus className="h-6 w-6" />
            My List
          </button>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Era, Memory } from "@/data/eras";
import { FloatingAudioPlayer } from "@/components/FloatingAudioPlayer";
import { HeroBanner } from "@/components/HeroBanner";
import { MediaModal } from "@/components/MediaModal";
import { MemoryRow } from "@/components/MemoryRow";
import { MonthFourEpisode } from "@/components/MonthFourEpisode";
import { MonthOneEpisode } from "@/components/MonthOneEpisode";
import { MonthThreeEpisode } from "@/components/MonthThreeEpisode";
import { MonthTwoEpisode } from "@/components/MonthTwoEpisode";
import { NetflixLogo } from "@/components/NetflixLogo";
import { SecretEasterEgg } from "@/components/SecretEasterEgg";
import { TalkingStageEpisode } from "@/components/TalkingStageEpisode";

const moodClasses: Record<string, string> = {
  warm: "bg-[radial-gradient(circle_at_12%_18%,rgba(255,129,72,.22),transparent_30%),radial-gradient(circle_at_82%_35%,rgba(229,9,20,.12),transparent_28%)]",
  energetic: "bg-[radial-gradient(circle_at_15%_20%,rgba(229,9,20,.24),transparent_30%),radial-gradient(circle_at_88%_42%,rgba(255,255,255,.1),transparent_25%)]",
  intimate: "bg-[radial-gradient(circle_at_20%_12%,rgba(210,85,120,.16),transparent_30%),radial-gradient(circle_at_80%_55%,rgba(255,255,255,.08),transparent_30%)]",
  polished: "bg-[radial-gradient(circle_at_18%_18%,rgba(229,9,20,.18),transparent_30%),radial-gradient(circle_at_80%_42%,rgba(110,110,110,.16),transparent_28%)]"
};

export function EraExperience({ era }: { era: Era }) {
  const [selected, setSelected] = useState<Memory | null>(null);
  const [audio, setAudio] = useState<Memory | null>(null);

  return (
    <main className="min-h-screen bg-[#141414] text-white">
      <header className="fixed left-0 right-0 top-0 z-30 flex items-center justify-between bg-black px-5 py-4 shadow-[0_2px_24px_rgba(0,0,0,.45)] sm:px-12 lg:px-16">
        <div className="flex items-center gap-6">
          <NetflixLogo />
          <Link href="/" className="hidden items-center gap-1 text-sm font-medium text-zinc-300 transition hover:text-white sm:flex">
            <ChevronLeft className="h-4 w-4" />
            Profiles
          </Link>
          <span className="hidden text-sm font-medium text-white md:inline">Home</span>
          <span className="hidden text-sm font-medium text-zinc-400 md:inline">Series</span>
          <span className="hidden text-sm font-medium text-zinc-400 md:inline">My List</span>
        </div>
        <div className="text-xs font-semibold uppercase tracking-widest text-zinc-400 sm:text-sm">Private Cut</div>
      </header>

      {era.id === "talking-stage" ? (
        <TalkingStageEpisode era={era} onOpen={setSelected} />
      ) : era.id === "month-1" ? (
        <MonthOneEpisode era={era} onOpen={setSelected} />
      ) : era.id === "month-2" ? (
        <MonthTwoEpisode era={era} onOpen={setSelected} />
      ) : era.id === "month-3" ? (
        <MonthThreeEpisode era={era} onOpen={setSelected} />
      ) : era.id === "month-4" ? (
        <MonthFourEpisode era={era} onOpen={setSelected} />
      ) : (
        <>
          <HeroBanner era={era} />

          <div className={`relative overflow-hidden ${moodClasses[era.vibe] ?? ""}`}>
            <MemoryRow title="Episodes" description="Every memory opens like an episode card." memories={era.memories} onOpen={setSelected} />

            {era.categories.map((category) => (
              <MemoryRow
                key={category.title}
                title={category.title}
                description={category.description}
                memories={category.items}
                onOpen={setSelected}
              />
            ))}

            <section className="relative px-5 py-24 text-center sm:px-12 lg:px-16">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mx-auto max-w-3xl"
              >
                <p className="mb-4 text-sm uppercase tracking-[0.35em] text-netflix-red">Final Scene</p>
                <h2 className="text-5xl font-black sm:text-7xl">Thank you for watching.</h2>
                <p className="mt-5 text-3xl font-bold text-zinc-300">Renewed for another season.</p>
              </motion.div>
            </section>
          </div>
        </>
      )}

      <MediaModal memory={selected} onClose={() => setSelected(null)} onAudio={setAudio} />
      <FloatingAudioPlayer memory={audio} onClose={() => setAudio(null)} />
      <SecretEasterEgg />
    </main>
  );
}

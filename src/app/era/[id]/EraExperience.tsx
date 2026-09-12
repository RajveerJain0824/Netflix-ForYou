"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Era, Memory } from "@/data/eras";
import { CollectionExperience } from "@/components/CollectionExperience";
import { FloatingAudioPlayer } from "@/components/FloatingAudioPlayer";
import { MediaModal } from "@/components/MediaModal";
import { NetflixLogo } from "@/components/NetflixLogo";
import { SecretEasterEgg } from "@/components/SecretEasterEgg";

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

      <CollectionExperience era={era} onOpen={setSelected} />

      <MediaModal memory={selected} onClose={() => setSelected(null)} onAudio={setAudio} />
      <FloatingAudioPlayer memory={audio} onClose={() => setAudio(null)} />
      <SecretEasterEgg />
    </main>
  );
}

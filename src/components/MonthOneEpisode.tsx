"use client";

import { motion } from "framer-motion";
import { Headphones, Play, Plus } from "lucide-react";
import { Era, Memory } from "@/data/eras";
import { ArchiveFloatingStacks, ArchiveMemoryWall, ArchiveMessageStrip, ArchiveMiniClusters } from "@/components/ArchiveLayouts";

const askOut: Memory = {
  title: "The Ask-Out",
  type: "video",
  src: "/memories/month1/VIDEO-2026-02-06-12-30-21.mp4",
  thumbnail: "/memories/month1/b0e78c7d-2392-4141-8d68-841f854a12c8.JPG",
  caption: "The card that made it official.",
  date: "Month 1",
  location: "The card moment",
  funnyMetadata: "Season premiere",
  tags: ["ask out", "card", "official"]
};

const fastestLove: Memory = {
  title: "The Fastest I Love You",
  type: "photo",
  src: "/memories/month1/IMG_7127.jpg",
  thumbnail: "/memories/month1/IMG_7127.jpg",
  caption: "Subtle was never really our thing.",
  date: "Month 1",
  location: "WhatsApp",
  funnyMetadata: "Speedrun record",
  tags: ["i love you", "fast", "romantic chaos"]
};

const callLogs: Memory[] = [
  {
    title: "Call Logs",
    type: "photo",
    src: "/memories/month1/IMG_7129.PNG",
    thumbnail: "/memories/month1/IMG_7129.PNG",
    caption: "Apparently we had nothing to say, so we talked for hours.",
    date: "Month 1",
    location: "WhatsApp",
    funnyMetadata: "Daily routine unlocked",
    tags: ["calls", "routine", "hours"]
  },
  {
    title: "Cute Calls",
    type: "photo",
    src: "/memories/month1/IMG_6230.PNG",
    thumbnail: "/memories/month1/IMG_6230.PNG",
    caption: "One of those calls that just became part of the day.",
    date: "Month 1",
    location: "Video call",
    funnyMetadata: "Nothing to say, somehow still talking",
    tags: ["video call", "cute", "daily"]
  }
];

const hoodie: Memory = {
  title: "The Hoodie",
  type: "photo",
  src: "/memories/month1/6D584964-F926-4A20-93F6-D18F5EED81A7.JPG",
  thumbnail: "/memories/month1/6D584964-F926-4A20-93F6-D18F5EED81A7.JPG",
  caption: "First gift energy.",
  date: "Month 1",
  location: "The hoodie she got me.",
  funnyMetadata: "The hoodie she got me.",
  tags: ["hoodie", "first gift", "soft"]
};

const officialEra: Memory[] = [
  {
    title: "New Label",
    type: "photo",
    src: "/memories/month1/324b13dd-4c51-44ab-bbfc-efdba698f37e.JPG",
    thumbnail: "/memories/month1/324b13dd-4c51-44ab-bbfc-efdba698f37e.JPG",
    caption: "New label, same chaos.",
    date: "Month 1",
    location: "First official era",
    funnyMetadata: "Officially unserious",
    tags: ["official", "couple", "month 1"]
  },
  {
    title: "Same Chaos",
    type: "photo",
    src: "/memories/month1/b0e78c7d-2392-4141-8d68-841f854a12c8.JPG",
    thumbnail: "/memories/month1/b0e78c7d-2392-4141-8d68-841f854a12c8.JPG",
    caption: "Settled, but still not acting normal.",
    date: "Month 1",
    location: "First official era",
    funnyMetadata: "Comfort arc started early",
    tags: ["official", "warm", "chaos"]
  }
];

const softLaunch: Memory = {
  title: "Soft Launch",
  type: "photo",
  src: "/memories/month1/IMG_7128.PNG",
  thumbnail: "/memories/month1/IMG_7128.PNG",
  caption: "Close Friends knew before the world did.",
  date: "Valentine's Day",
  location: "Instagram story",
  funnyMetadata: "Public hint detected",
  tags: ["soft launch", "valentines", "close friends"]
};

const audioMemory: Memory = {
  title: "The One You Replay",
  type: "audio",
  src: "/memories/month1/AUDIO-2026-02-23-16-00-57.m4a",
  thumbnail: "/memories/month1/IMG_6230.PNG",
  caption: "The one you replay.",
  date: "Month 1",
  location: "Saved audio",
  funnyMetadata: "Hidden memory",
  tags: ["audio", "voice note", "intimate"]
};

const extraMirrorReceipt: Memory = {
  title: "Extra Mirror Receipt",
  type: "photo",
  src: "/memories/month1/a20ae329-f6d6-47a1-aabc-71ed7eda019a.JPG",
  thumbnail: "/memories/month1/a20ae329-f6d6-47a1-aabc-71ed7eda019a.JPG",
  caption: "Another tiny saved receipt from the speedrun era.",
  date: "Month 1",
  location: "Camera roll",
  funnyMetadata: "Archive filler but emotionally valid",
  tags: ["camera roll", "extra", "month 1"]
};

const monthOneArchive = [askOut, fastestLove, hoodie, callLogs[0], callLogs[1], officialEra[0], officialEra[1], softLaunch, audioMemory, extraMirrorReceipt];

const monthOneClusters = [
  {
    title: "Official In Record Time",
    caption: "The card, the words, and the immediate lack of subtlety.",
    items: [askOut, fastestLove, officialEra[0]]
  },
  {
    title: "Constant Contact Department",
    caption: "Calls, voice notes, and the routine forming way too quickly.",
    items: [callLogs[0], callLogs[1], audioMemory]
  },
  {
    title: "Soft Launch Evidence",
    caption: "The gift, the couple photos, and Close Friends doing early surveillance.",
    items: [hoodie, officialEra[1], softLaunch]
  }
];

const isPhoneScreenshot = (memory: Memory) => /\.(png|jpg)$/i.test(memory.thumbnail) && memory.thumbnail.includes("IMG_");

function TimelineMarker() {
  const steps = ["Asked out", "I love you", "Hoodie", "Constant calls", "Official era", "Soft launch", "Audio"];

  return (
    <div className="px-5 py-7 sm:px-12 lg:px-16">
      <div className="scrollbar-hide flex gap-3 overflow-x-auto border-y border-white/10 py-4 text-sm font-semibold text-zinc-400">
        {steps.map((step, index) => (
          <div key={step} className="flex shrink-0 items-center gap-3">
            <span className={index === 0 ? "text-netflix-red" : "text-zinc-300"}>{step}</span>
            {index < steps.length - 1 ? <span className="text-zinc-700">-&gt;</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function MemoryTile({ memory, onOpen, large = false }: { memory: Memory; onOpen: (memory: Memory) => void; large?: boolean }) {
  const phoneScreenshot = isPhoneScreenshot(memory);

  return (
    <button
      onClick={() => onOpen(memory)}
      className={`group relative overflow-hidden rounded-sm bg-[#181818] text-left shadow-xl outline-none transition hover:z-10 hover:scale-[1.035] focus:ring-2 focus:ring-white ${
        large ? "w-full max-w-5xl" : phoneScreenshot ? "min-w-[220px] max-w-[220px] sm:min-w-[270px] sm:max-w-[270px]" : "min-w-[290px] max-w-[290px] sm:min-w-[390px] sm:max-w-[390px]"
      }`}
    >
      <div className={`relative overflow-hidden bg-[linear-gradient(135deg,#2b2b2b,#080808)] ${large ? "aspect-[16/9]" : phoneScreenshot ? "aspect-[9/16]" : "aspect-[16/10]"}`}>
        <img
          src={memory.thumbnail}
          alt={memory.title}
          className={`h-full w-full opacity-95 transition duration-500 group-hover:scale-105 ${phoneScreenshot && !large ? "object-contain" : "object-cover"}`}
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
        {memory.type === "video" ? (
          <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-2xl transition group-hover:scale-110">
            <Play className="h-6 w-6 fill-black" />
          </span>
        ) : null}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-lg font-bold text-white">{memory.title}</p>
          <p className="mt-1 text-sm text-zinc-300">{memory.caption}</p>
          {memory.title === "The Hoodie" ? (
            <p className="mt-2 translate-y-2 text-sm font-medium text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              The hoodie she got me.
            </p>
          ) : null}
        </div>
      </div>
    </button>
  );
}

function Section({
  id,
  title,
  note,
  children,
  soft = false
}: {
  id: string;
  title: string;
  note: string;
  children: React.ReactNode;
  soft?: boolean;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`px-5 py-8 sm:px-12 lg:px-16 ${soft ? "bg-[radial-gradient(circle_at_24%_8%,rgba(255,157,93,.14),transparent_32%)]" : ""}`}
    >
      <div className="mb-5 max-w-3xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-400 sm:text-base">{note}</p>
      </div>
      {children}
    </motion.section>
  );
}

export function MonthOneEpisode({ era, onOpen }: { era: Era; onOpen: (memory: Memory) => void }) {
  return (
    <div className="relative overflow-hidden bg-[#141414]">
      <section className="relative min-h-[86vh] overflow-hidden bg-black px-5 pb-28 pt-28 sm:px-12 lg:px-16">
        <img
          src="/memories/month1/b0e78c7d-2392-4141-8d68-841f854a12c8.JPG"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-55"
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.86)_30%,rgba(5,5,5,.38)_64%,rgba(5,5,5,.12)_100%),linear-gradient(0deg,#141414_0%,rgba(20,20,20,.68)_16%,transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(229,9,20,.2),transparent_34%),radial-gradient(circle_at_28%_76%,rgba(255,157,93,.2),transparent_30%)]" />
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex min-h-[64vh] max-w-4xl flex-col justify-end"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-netflix-red">Month 1</p>
          <h1 className="text-5xl font-black leading-none text-white drop-shadow-2xl sm:text-7xl lg:text-8xl">Episode 2: The Speedrun</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-100 sm:text-xl sm:leading-8">
            Asked her out, said I love you instantly, and somehow it worked.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-zinc-300">
            <span className="font-bold text-green-400">{era.matchPercentage}% Match</span>
            <span>Episode 2</span>
            <span>Romance</span>
            <span>Speedrun</span>
            <span>Soft Launch</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#ask-out" className="inline-flex items-center gap-2 rounded bg-netflix-red px-8 py-3 text-lg font-bold text-white transition hover:bg-red-700">
              <Play className="h-6 w-6 fill-white" />
              Play Memories
            </a>
            <a href="#timeline-month1" className="inline-flex items-center gap-2 rounded bg-[#6d6d6eb3] px-7 py-3 text-lg font-bold text-white backdrop-blur transition hover:bg-[#6d6d6e66]">
              <Plus className="h-6 w-6" />
              View Timeline
            </a>
          </div>
        </motion.div>
      </section>

      <div id="timeline-month1" className="relative bg-[radial-gradient(circle_at_15%_10%,rgba(255,125,71,.14),transparent_30%),radial-gradient(circle_at_82%_42%,rgba(229,9,20,.13),transparent_28%)]">
        <TimelineMarker />

        <Section id="ask-out" title="The Ask-Out" note="The card that made it official.">
          <MemoryTile memory={askOut} onOpen={onOpen} large />
        </Section>

        <Section id="fastest-love" title="The Fastest “I Love You”" note="Subtle was never really our thing.">
          <MemoryTile memory={fastestLove} onOpen={onOpen} large />
        </Section>

        <Section id="hoodie" title="The Hoodie" note="First gift energy. The hoodie she got me." soft>
          <MemoryTile memory={hoodie} onOpen={onOpen} large />
        </Section>

        <Section id="calls" title="Call Logs & Constant Talking" note="Apparently we had nothing to say, so we talked for hours.">
          <div className="scrollbar-hide -mx-5 flex gap-3 overflow-x-auto px-5 pb-7 pt-2 sm:-mx-12 sm:px-12 lg:-mx-16 lg:px-16">
            {callLogs.map((memory) => (
              <MemoryTile key={memory.title} memory={memory} onOpen={onOpen} />
            ))}
          </div>
        </Section>

        <Section id="official-era" title="First Official Era" note="New label, same chaos." soft>
          <div className="scrollbar-hide -mx-5 flex gap-3 overflow-x-auto px-5 pb-7 pt-2 sm:-mx-12 sm:px-12 lg:-mx-16 lg:px-16">
            {officialEra.map((memory) => (
              <MemoryTile key={memory.title} memory={memory} onOpen={onOpen} />
            ))}
          </div>
        </Section>

        <Section id="soft-launch" title="Soft Launch" note="Close Friends knew before the world did.">
          <MemoryTile memory={softLaunch} onOpen={onOpen} large />
        </Section>

        <Section id="audio-memory" title="Voice Note / Audio Memory" note="The one you replay." soft>
          <button
            onClick={() => onOpen(audioMemory)}
            className="group flex w-full max-w-3xl items-center gap-5 rounded-sm border border-white/10 bg-[#181818] p-5 text-left shadow-xl transition hover:scale-[1.015] hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-black">
              <Headphones className="h-7 w-7" />
            </span>
            <span>
              <span className="block text-xl font-bold text-white">{audioMemory.title}</span>
              <span className="mt-1 block text-sm text-zinc-400">{audioMemory.caption}</span>
            </span>
          </button>
        </Section>

        <ArchiveMessageStrip
          title="Message Strip"
          note="The rapid receipts from the month where everything became official at concerning speed."
          memories={[fastestLove, callLogs[0], callLogs[1], softLaunch, audioMemory]}
          onOpen={onOpen}
        />

        <ArchiveMemoryWall
          title="Memory Wall"
          note="The full Month 1 archive. Cute, chaotic, slightly over-documented, exactly right."
          memories={monthOneArchive}
          onOpen={onOpen}
        />

        <ArchiveMiniClusters
          title="Mini Memory Clusters"
          note="Little piles of evidence from the speedrun."
          clusters={monthOneClusters}
          onOpen={onOpen}
        />

        <ArchiveFloatingStacks
          title="Floating Photo Stacks"
          note="Tiny saved fragments drifting back into view."
          stacks={[
            [askOut, fastestLove, officialEra[0]],
            [hoodie, extraMirrorReceipt, softLaunch],
            [callLogs[0], callLogs[1], audioMemory]
          ]}
          onOpen={onOpen}
        />

        <section className="relative px-5 py-20 text-center sm:px-12 lg:px-16">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-netflix-red">End Credits</p>
          <h2 className="text-4xl font-black sm:text-6xl">Thank you for watching.</h2>
          <p className="mt-4 text-2xl font-bold text-zinc-300">Renewed for another season.</p>
        </section>
      </div>
    </div>
  );
}

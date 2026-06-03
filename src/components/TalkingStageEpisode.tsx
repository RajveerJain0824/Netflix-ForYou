"use client";

import { motion } from "framer-motion";
import { Play, Plus } from "lucide-react";
import { Era, Memory } from "@/data/eras";
import { ArchiveFloatingStacks, ArchiveMemoryWall, ArchiveMessageStrip, ArchiveMiniClusters } from "@/components/ArchiveLayouts";

const firstTexts: Memory[] = [
  {
    title: "Instagram DMs",
    type: "photo",
    src: "/memories/talking-stage/IMG_7123.PNG",
    thumbnail: "/memories/talking-stage/IMG_7123.PNG",
    caption: "This is where it technically started.",
    date: "The beginning",
    location: "Instagram DMs",
    funnyMetadata: "Pilot episode energy",
    tags: ["first text", "instagram", "beginning"]
  },
  {
    title: "Missed Chance",
    type: "photo",
    src: "/memories/talking-stage/IMG_7124.PNG",
    thumbnail: "/memories/talking-stage/IMG_7124.PNG",
    caption: "Then I disappeared for a bit. Classic.",
    date: "The ghosting arc",
    location: "Instagram DMs",
    funnyMetadata: "Viewer discretion advised",
    tags: ["ghosted", "awkward", "receipts"]
  },
  {
    title: "Still There",
    type: "photo",
    src: "/memories/talking-stage/IMG_7125.PNG",
    thumbnail: "/memories/talking-stage/IMG_7125.PNG",
    caption: "The gap before the story picked itself back up.",
    date: "The ghosting arc",
    location: "Instagram DMs",
    funnyMetadata: "Missed chance department",
    tags: ["ghosted", "instagram", "prequel"]
  },
  {
    title: "This Aged Well",
    type: "photo",
    src: "/memories/talking-stage/IMG_7126.PNG",
    thumbnail: "/memories/talking-stage/IMG_7126.PNG",
    caption: "One of those messages that got funnier later.",
    date: "The ghosting arc",
    location: "Instagram DMs",
    funnyMetadata: "Foreshadowing",
    tags: ["instagram", "full circle"]
  }
];

const comeback: Memory[] = [
  {
    title: "WhatsApp Comeback",
    type: "photo",
    src: "/memories/talking-stage/IMG_7115.PNG",
    thumbnail: "/memories/talking-stage/IMG_7115.PNG",
    caption: "Somehow, the conversation found its way back.",
    date: "The return",
    location: "WhatsApp",
    funnyMetadata: "Renewed after cancellation",
    tags: ["comeback", "whatsapp", "chaos"]
  },
  {
    title: "Photo Evidence",
    type: "photo",
    src: "/memories/talking-stage/IMG_7114.PNG",
    thumbnail: "/memories/talking-stage/IMG_7114.PNG",
    caption: "The chat was active again, and the photos started entering the plot.",
    date: "The return",
    location: "WhatsApp",
    funnyMetadata: "Evidence submitted",
    tags: ["comeback", "photo", "whatsapp"]
  },
  {
    title: "Warm Again",
    type: "photo",
    src: "/memories/talking-stage/IMG_7116.PNG",
    thumbnail: "/memories/talking-stage/IMG_7116.PNG",
    caption: "The replies got warmer. The plot got obvious.",
    date: "Getting active again",
    location: "WhatsApp",
    funnyMetadata: "Slow burn confirmed",
    tags: ["warm", "flirty", "active again"]
  }
];

const flirtyEvidence: Memory[] = [
  {
    title: "Same Wavelength",
    type: "photo",
    src: "/memories/talking-stage/IMG_7115.PNG",
    thumbnail: "/memories/talking-stage/IMG_7115.PNG",
    caption: "Same wavelength",
    date: "Evidence folder",
    location: "WhatsApp",
    funnyMetadata: "Chemistry detected",
    tags: ["same wavelength", "flirty"]
  },
  {
    title: "Priority Is You",
    type: "photo",
    src: "/memories/talking-stage/IMG_7121.PNG",
    thumbnail: "/memories/talking-stage/IMG_7121.PNG",
    caption: "Priority detected",
    date: "Evidence folder",
    location: "WhatsApp",
    funnyMetadata: "Not subtle anymore",
    tags: ["priority", "obvious"]
  },
  {
    title: "Down Bad",
    type: "photo",
    src: "/memories/talking-stage/IMG_7120.PNG",
    thumbnail: "/memories/talking-stage/IMG_7120.PNG",
    caption: "Down bad evidence",
    date: "Evidence folder",
    location: "WhatsApp",
    funnyMetadata: "Award-winning delusion",
    tags: ["down bad", "receipts"]
  },
  {
    title: "Miss You Era",
    type: "photo",
    src: "/memories/talking-stage/IMG_7122.PNG",
    thumbnail: "/memories/talking-stage/IMG_7122.PNG",
    caption: "Miss you era",
    date: "Evidence folder",
    location: "WhatsApp",
    funnyMetadata: "Basically dating",
    tags: ["miss you", "soft"]
  },
  {
    title: "Late Night Honesty",
    type: "photo",
    src: "/memories/talking-stage/IMG_7117.PNG",
    thumbnail: "/memories/talking-stage/IMG_7117.PNG",
    caption: "Late-night honesty",
    date: "Evidence folder",
    location: "WhatsApp",
    funnyMetadata: "Contains feelings",
    tags: ["late night", "honest"]
  },
  {
    title: "Voice Call Era",
    type: "photo",
    src: "/memories/talking-stage/IMG_7118.PNG",
    thumbnail: "/memories/talking-stage/IMG_7118.PNG",
    caption: "Late-night honesty",
    date: "Evidence folder",
    location: "WhatsApp",
    funnyMetadata: "Calls got suspiciously normal",
    tags: ["voice call", "late night"]
  },
  {
    title: "Same Same",
    type: "photo",
    src: "/memories/talking-stage/IMG_7119.PNG",
    thumbnail: "/memories/talking-stage/IMG_7119.PNG",
    caption: "Late-night honesty",
    date: "Evidence folder",
    location: "WhatsApp",
    funnyMetadata: "Emotional attachment loading",
    tags: ["same same", "attachment"]
  }
];

const notOfficialYet: Memory[] = [
  {
    title: "Basically Dating",
    type: "photo",
    src: "/memories/talking-stage/4c6f8dfb-a457-47e8-bb18-8ce405c49d8b.JPG",
    thumbnail: "/memories/talking-stage/4c6f8dfb-a457-47e8-bb18-8ce405c49d8b.JPG",
    caption: "Before the label, after the feeling.",
    date: "Before official",
    location: "Somewhere that already felt like us",
    funnyMetadata: "Soft launch in progress",
    tags: ["not official yet", "couple photo", "warm"]
  },
  {
    title: "After The Feeling",
    type: "photo",
    src: "/memories/talking-stage/IMG_0652.JPG",
    thumbnail: "/memories/talking-stage/IMG_0652.JPG",
    caption: "No label yet, but the evidence was getting loud.",
    date: "Before official",
    location: "Almost us",
    funnyMetadata: "Romance arc loading",
    tags: ["almost dating", "nostalgic"]
  }
];

const directorsCut: Memory = {
  title: "Director's Cut",
  type: "video",
  src: "/memories/talking-stage/VIDEO-2026-06-02-23-33-36.mp4",
  thumbnail: "/memories/talking-stage/4c6f8dfb-a457-47e8-bb18-8ce405c49d8b.JPG",
  caption: "Yeah, we were cooked.",
  date: "Before official",
  location: "Behind the scenes",
  funnyMetadata: "No further questions",
  tags: ["video", "directors cut", "cooked"]
};

const talkingStageArchive = [...firstTexts, ...comeback, ...flirtyEvidence, ...notOfficialYet, directorsCut];

const talkingStageClusters = [
  {
    title: "Origin Receipts",
    caption: "The first messages, the disappearing act, and the prequel evidence.",
    items: [firstTexts[0], firstTexts[1], firstTexts[2]]
  },
  {
    title: "Comeback Energy",
    caption: "The chat found its way back and immediately started acting suspicious.",
    items: [comeback[0], comeback[1], comeback[2]]
  },
  {
    title: "Basically Dating Already",
    caption: "Flirty texts, soft proof, and the video that explained everything.",
    items: [flirtyEvidence[1], notOfficialYet[0], directorsCut]
  }
];

const isPhoneScreenshot = (memory: Memory) => memory.thumbnail.toLowerCase().endsWith(".png");

function TimelineMarker() {
  return (
    <div className="px-5 py-7 sm:px-12 lg:px-16">
      <div className="scrollbar-hide flex gap-3 overflow-x-auto border-y border-white/10 py-4 text-sm font-semibold text-zinc-400">
        {["First text", "Ghosted", "Came back", "Flirty evidence", "Basically dating"].map((step, index) => (
          <div key={step} className="flex shrink-0 items-center gap-3">
            <span className={index === 0 ? "text-netflix-red" : "text-zinc-300"}>{step}</span>
            {index < 4 ? <span className="text-zinc-700">-&gt;</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function StoryRow({
  id,
  title,
  note,
  memories,
  soft = false,
  onOpen
}: {
  id: string;
  title: string;
  note: string;
  memories: Memory[];
  soft?: boolean;
  onOpen: (memory: Memory) => void;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`px-5 py-7 sm:px-12 lg:px-16 ${soft ? "bg-[radial-gradient(circle_at_20%_10%,rgba(255,151,109,.13),transparent_30%)]" : ""}`}
    >
      <div className="mb-4 max-w-3xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-400 sm:text-base">{note}</p>
      </div>
      <div className="scrollbar-hide -mx-5 flex gap-3 overflow-x-auto px-5 pb-7 pt-2 sm:-mx-12 sm:px-12 lg:-mx-16 lg:px-16">
        {memories.map((memory) => (
          (() => {
            const phoneScreenshot = isPhoneScreenshot(memory);
            return (
          <button
            key={memory.title}
            onClick={() => onOpen(memory)}
            className={`group relative overflow-hidden rounded-sm bg-[#181818] text-left shadow-xl outline-none transition hover:z-10 hover:scale-[1.04] focus:ring-2 focus:ring-white ${
              phoneScreenshot ? "min-w-[220px] max-w-[220px] sm:min-w-[260px] sm:max-w-[260px]" : "min-w-[280px] max-w-[280px] sm:min-w-[370px] sm:max-w-[370px]"
            }`}
          >
            <div className={`relative overflow-hidden bg-[linear-gradient(135deg,#2b2b2b,#080808)] ${phoneScreenshot ? "aspect-[9/16]" : "aspect-[16/10]"}`}>
              <img
                src={memory.thumbnail}
                alt={memory.title}
                className={`h-full w-full opacity-95 transition duration-500 group-hover:scale-105 ${phoneScreenshot ? "object-contain" : "object-cover"}`}
                onError={(event) => {
                  event.currentTarget.style.opacity = "0";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-bold text-white">{memory.caption}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-netflix-red">{memory.funnyMetadata}</p>
              </div>
            </div>
            <div className="p-3">
              <h3 className="line-clamp-1 text-sm font-bold text-white sm:text-base">{memory.title}</h3>
              <p className="mt-1 line-clamp-1 text-xs text-zinc-500">{memory.location}</p>
            </div>
          </button>
            );
          })()
        ))}
      </div>
    </motion.section>
  );
}

export function TalkingStageEpisode({ era, onOpen }: { era: Era; onOpen: (memory: Memory) => void }) {
  return (
    <div className="relative overflow-hidden bg-[#141414]">
      <section className="relative min-h-[86vh] overflow-hidden bg-black px-5 pb-28 pt-28 sm:px-12 lg:px-16">
        <img
          src="/memories/talking-stage/4c6f8dfb-a457-47e8-bb18-8ce405c49d8b.JPG"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-55"
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.86)_30%,rgba(5,5,5,.38)_64%,rgba(5,5,5,.12)_100%),linear-gradient(0deg,#141414_0%,rgba(20,20,20,.66)_15%,transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(255,139,83,.25),transparent_34%)]" />
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex min-h-[64vh] max-w-4xl flex-col justify-end"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-netflix-red">{era.title}</p>
          <h1 className="text-5xl font-black leading-none text-white drop-shadow-2xl sm:text-7xl lg:text-8xl">Before We Were Us</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-100 sm:text-xl sm:leading-8">
            The texts, missed chances, late-night calls, and everything that gave it away.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-zinc-300">
            <span className="font-bold text-green-400">{era.matchPercentage}% Match</span>
            <span>Episode 1</span>
            <span>Flirty</span>
            <span>Nostalgic</span>
            <span>Chaotic Warmth</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#first-text" className="inline-flex items-center gap-2 rounded bg-netflix-red px-8 py-3 text-lg font-bold text-white transition hover:bg-red-700">
              <Play className="h-6 w-6 fill-white" />
              Play Memories
            </a>
            <a href="#timeline" className="inline-flex items-center gap-2 rounded bg-[#6d6d6eb3] px-7 py-3 text-lg font-bold text-white backdrop-blur transition hover:bg-[#6d6d6e66]">
              <Plus className="h-6 w-6" />
              View Timeline
            </a>
          </div>
        </motion.div>
      </section>

      <div id="timeline" className="relative bg-[radial-gradient(circle_at_15%_10%,rgba(255,125,71,.13),transparent_30%),radial-gradient(circle_at_82%_42%,rgba(229,9,20,.12),transparent_28%)]">
        <TimelineMarker />
        <StoryRow id="first-text" title="The First Text" note="This is where it technically started. Then I disappeared for a bit. Classic." memories={firstTexts} onOpen={onOpen} />
        <StoryRow id="comeback" title="The Comeback" note="Somehow, the conversation found its way back." memories={comeback} onOpen={onOpen} />
        <StoryRow id="flirty-evidence" title="The Flirty Evidence" note="The screenshots where subtlety left the chat." memories={flirtyEvidence} onOpen={onOpen} />
        <StoryRow id="not-official-yet" title="Not Official Yet" note="Before the label, after the feeling." memories={notOfficialYet} soft onOpen={onOpen} />

        <motion.section
          id="directors-cut"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-5 py-8 sm:px-12 lg:px-16"
        >
          <div className="mb-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Director&apos;s Cut</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400 sm:text-base">Yeah, we were cooked.</p>
          </div>
          <button
            onClick={() => onOpen(directorsCut)}
            className="group relative block w-full max-w-5xl overflow-hidden rounded-sm bg-[#181818] text-left shadow-2xl outline-none transition hover:scale-[1.015] focus:ring-2 focus:ring-white"
          >
            <div className="relative aspect-video bg-[linear-gradient(135deg,#2b2b2b,#050505)]">
              <img
                src={directorsCut.thumbnail}
                alt={directorsCut.title}
                className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
                onError={(event) => {
                  event.currentTarget.style.opacity = "0";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black">
                  <Play className="h-7 w-7 fill-black" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">{directorsCut.title}</h3>
                  <p className="mt-1 text-sm text-zinc-300">{directorsCut.caption}</p>
                </div>
              </div>
            </div>
          </button>
        </motion.section>

        <ArchiveMessageStrip
          title="Message Strip"
          note="Rapid-fire DMs and WhatsApps from the prequel folder. The beginning was messy, cropped, and very real."
          memories={[...firstTexts, ...comeback, ...flirtyEvidence]}
          onOpen={onOpen}
        />

        <ArchiveMemoryWall
          title="Memory Wall"
          note="Every Talking Stage receipt in one place: first texts, comeback screenshots, flirty evidence, almost-dating photos, and the Director's Cut."
          memories={talkingStageArchive}
          onOpen={onOpen}
        />

        <ArchiveMiniClusters
          title="Mini Memory Clusters"
          note="Tiny evidence piles from before the label."
          clusters={talkingStageClusters}
          onOpen={onOpen}
        />

        <ArchiveFloatingStacks
          title="Floating Photo Stacks"
          note="The prequel drifting back in little stacks: DMs, WhatsApps, and the photos that gave it away."
          stacks={[
            [firstTexts[0], firstTexts[1], firstTexts[3]],
            [comeback[0], flirtyEvidence[1], flirtyEvidence[2]],
            [notOfficialYet[0], notOfficialYet[1], directorsCut]
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

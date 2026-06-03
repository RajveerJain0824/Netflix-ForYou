"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Plane, Play, Sparkles } from "lucide-react";
import { ArchiveFloatingStacks, ArchiveMemoryWall, ArchiveMessageStrip, ArchiveMiniClusters } from "@/components/ArchiveLayouts";
import { Era, Memory } from "@/data/eras";

const base = "/memories/month3/month 3";

const fakeTurkey: Memory[] = [
  {
    title: "London to Istanbul",
    type: "photo",
    src: `${base}/IMG_6717.PNG`,
    thumbnail: `${base}/IMG_6717.PNG`,
    caption: "The fake Turkey flight looked just believable enough.",
    date: "15 Apr",
    location: "London to Istanbul",
    funnyMetadata: "Fake suspense build-up",
    tags: ["fake flight", "turkey", "lie"]
  },
  {
    title: "Choose A Booking Site",
    type: "photo",
    src: `${base}/IMG_6718.PNG`,
    thumbnail: `${base}/IMG_6718.PNG`,
    caption: "The lie had UI evidence. Very committed bit.",
    date: "15 Apr",
    location: "Fake booking screen",
    funnyMetadata: "Detective arc",
    tags: ["fake ticket", "misdirection", "istanbul"]
  }
];

const arrivals: Memory[] = [
  {
    title: "Mumbai Boarding",
    type: "photo",
    src: `${base}/IMG_6720.jpg`,
    thumbnail: `${base}/IMG_6720.jpg`,
    caption: "Hard cut. Real boarding pass. Mumbai.",
    date: "15 Apr",
    location: "Mumbai bound",
    funnyMetadata: "Distance collapsed",
    tags: ["boarding pass", "mumbai", "reveal"]
  },
  {
    title: "Sorry I'm Late",
    type: "photo",
    src: `${base}/IMG_6803.jpg`,
    thumbnail: `${base}/IMG_6803.jpg`,
    caption: "Worth the wait.",
    date: "Month 3",
    location: "Running back into the plot",
    funnyMetadata: "Title card moment",
    tags: ["sorry", "late", "transition"]
  }
];

const firstNight: Memory[] = [
  {
    title: "Bar Plot",
    type: "photo",
    src: `${base}/360CA0E6-48A9-41B3-815D-FE92522D9BA6.JPG`,
    thumbnail: `${base}/360CA0E6-48A9-41B3-815D-FE92522D9BA6.JPG`,
    caption: "The night got loud fast.",
    date: "Month 3",
    location: "Bar / party",
    funnyMetadata: "Energy spike",
    tags: ["bar", "mumbai", "night"]
  },
  {
    title: "Mumbai Night",
    type: "photo",
    src: `${base}/B06BBB98-DBCF-47BD-8AAC-57BFBE4F29C3.JPG`,
    thumbnail: `${base}/B06BBB98-DBCF-47BD-8AAC-57BFBE4F29C3.JPG`,
    caption: "Young, reckless, obsessed, very Mumbai night.",
    date: "Month 3",
    location: "Bar / party",
    funnyMetadata: "Camera flash required",
    tags: ["bar", "party", "chaos"]
  },
  {
    title: "Cheek Kiss Chaos",
    type: "photo",
    src: `${base}/ebcc11f8-6132-4e89-8a52-a58555bb129e.JPG`,
    thumbnail: `${base}/ebcc11f8-6132-4e89-8a52-a58555bb129e.JPG`,
    caption: "Blurry, loud, and very attached.",
    date: "Month 3",
    location: "Mumbai night",
    funnyMetadata: "Flashback material",
    tags: ["cheek kiss", "party", "low light"]
  },
  {
    title: "Raw Clip 1",
    type: "video",
    src: `${base}/IMG_6740.MOV`,
    thumbnail: `${base}/B06BBB98-DBCF-47BD-8AAC-57BFBE4F29C3.JPG`,
    caption: "A raw little memory clip that interrupts the page like it came back by itself.",
    date: "Month 3",
    location: "Mumbai",
    funnyMetadata: "Raw and alive",
    tags: ["video", "mumbai", "clip"]
  },
  {
    title: "Raw Clip 2",
    type: "video",
    src: `${base}/IMG_6767.MOV`,
    thumbnail: `${base}/ebcc11f8-6132-4e89-8a52-a58555bb129e.JPG`,
    caption: "Not polished. Better because of it.",
    date: "Month 3",
    location: "Mumbai",
    funnyMetadata: "Memory resurfaced",
    tags: ["video", "raw", "real"]
  }
];

const softHours: Memory[] = [
  {
    title: "Mirror Hug",
    type: "photo",
    src: `${base}/IMG_6726.jpg`,
    thumbnail: `${base}/IMG_6726.jpg`,
    caption: "Phone-world became real-world.",
    date: "Month 3",
    location: "Soft hours",
    funnyMetadata: "Physical presence arc",
    tags: ["mirror", "hug", "together"]
  },
  {
    title: "Soft Mirror",
    type: "photo",
    src: `${base}/IMG_6724.jpg`,
    thumbnail: `${base}/IMG_6724.jpg`,
    caption: "We were together now. That was the whole plot twist.",
    date: "Month 3",
    location: "Soft hours",
    funnyMetadata: "Distance collapsed",
    tags: ["mirror", "kiss", "comfort"]
  },
  {
    title: "Holding On",
    type: "photo",
    src: `${base}/IMG_6723.jpg`,
    thumbnail: `${base}/IMG_6723.jpg`,
    caption: "Two people accidentally becoming each other's routine.",
    date: "Month 3",
    location: "Soft hours",
    funnyMetadata: "Attached in person",
    tags: ["mirror", "comfort", "routine"]
  },
  {
    title: "Thumbs Up Candid",
    type: "photo",
    src: `${base}/IMG_6729.jpg`,
    thumbnail: `${base}/IMG_6729.jpg`,
    caption: "Accidental framing, very real feeling.",
    date: "Month 3",
    location: "Mumbai",
    funnyMetadata: "Imperfect crop supremacy",
    tags: ["candid", "room", "comfort"]
  }
];

const monthThreeArchive = [...fakeTurkey, ...arrivals, ...firstNight, ...softHours];

const monthThreeClusters = [
  {
    title: "The Lie",
    caption: "Fake Turkey flight, fake suspense, real commitment to the bit.",
    items: [fakeTurkey[0], fakeTurkey[1], arrivals[0]]
  },
  {
    title: "Mumbai Night",
    caption: "Bar photos, cheek kiss chaos, raw clips, and camera flash energy.",
    items: [firstNight[0], firstNight[1], firstNight[2]]
  },
  {
    title: "Soft Hours",
    caption: "Mirror hugs, messy crops, and being together in the actual room.",
    items: [softHours[0], softHours[1], softHours[2]]
  }
];

const isPhoneScreenshot = (memory: Memory) => memory.thumbnail.toLowerCase().endsWith(".png");

function Section({
  id,
  title,
  note,
  children,
  tone = "warm"
}: {
  id: string;
  title: string;
  note: string;
  children: ReactNode;
  tone?: "warm" | "flash" | "soft" | "suspense";
}) {
  const tones = {
    warm: "bg-[radial-gradient(circle_at_20%_12%,rgba(255,111,63,.12),transparent_34%)]",
    flash: "bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,.16),transparent_20%),radial-gradient(circle_at_80%_30%,rgba(229,9,20,.2),transparent_28%)]",
    soft: "bg-[radial-gradient(circle_at_24%_18%,rgba(255,191,138,.14),transparent_34%)]",
    suspense: "bg-[radial-gradient(circle_at_18%_14%,rgba(42,82,190,.15),transparent_34%)]"
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative px-5 py-10 sm:px-12 lg:px-16 ${tones[tone]}`}
    >
      <div className="mb-6 max-w-3xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-400 sm:text-base">{note}</p>
      </div>
      {children}
    </motion.section>
  );
}

function MemoryCard({ memory, onOpen, large = false, flash = false }: { memory: Memory; onOpen: (memory: Memory) => void; large?: boolean; flash?: boolean }) {
  const phone = isPhoneScreenshot(memory);

  return (
    <button
      onClick={() => onOpen(memory)}
      className={`group relative shrink-0 overflow-hidden rounded-sm border border-white/10 bg-[#15110f] text-left shadow-[0_24px_70px_rgba(0,0,0,.48)] outline-none transition duration-300 hover:z-10 hover:scale-[1.03] focus:ring-2 focus:ring-white ${
        large ? "w-full max-w-5xl" : phone ? "w-[230px] sm:w-[282px]" : "w-[292px] sm:w-[390px]"
      }`}
    >
      <div className={`relative overflow-hidden bg-black ${large ? "aspect-[16/9]" : phone ? "aspect-[9/16]" : "aspect-[4/5]"}`}>
        {memory.type === "video" ? (
          <video
            src={memory.src}
            poster={memory.thumbnail}
            className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
            autoPlay
            muted
            loop
            playsInline
            onMouseEnter={(event) => {
              event.currentTarget.muted = false;
            }}
            onMouseLeave={(event) => {
              event.currentTarget.muted = true;
            }}
          />
        ) : (
          <img
            src={memory.thumbnail}
            alt={memory.title}
            className={`h-full w-full opacity-90 transition duration-700 group-hover:scale-105 ${phone ? "object-contain" : "object-cover"}`}
            onError={(event) => {
              event.currentTarget.style.opacity = "0";
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        {flash ? <div className="pointer-events-none absolute inset-0 bg-white/0 transition duration-150 group-hover:bg-white/20" /> : null}
        {memory.type === "video" ? (
          <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-2xl transition group-hover:scale-110">
            <Play className="h-6 w-6 fill-black" />
          </span>
        ) : null}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-lg font-bold text-white">{memory.title}</p>
          <p className="mt-1 text-sm text-zinc-300">{memory.caption}</p>
        </div>
      </div>
    </button>
  );
}

function Row({ memories, onOpen, flash = false }: { memories: Memory[]; onOpen: (memory: Memory) => void; flash?: boolean }) {
  return (
    <div className="scrollbar-hide -mx-5 flex gap-3 overflow-x-auto px-5 pb-7 pt-2 sm:-mx-12 sm:px-12 lg:-mx-16 lg:px-16">
      {memories.map((memory) => (
        <MemoryCard key={`${memory.title}-${memory.src}`} memory={memory} onOpen={onOpen} flash={flash} />
      ))}
    </div>
  );
}

export function MonthThreeEpisode({ era, onOpen }: { era: Era; onOpen: (memory: Memory) => void }) {
  return (
    <div className="relative overflow-hidden bg-[#120b08] text-white">
      <section className="relative min-h-[92vh] overflow-hidden bg-black px-5 pb-28 pt-28 sm:px-12 lg:px-16">
        <video src={firstNight[3].src} poster={softHours[1].thumbnail} className="absolute inset-0 h-full w-full object-cover opacity-35" autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#080403_0%,rgba(8,4,3,.9)_32%,rgba(8,4,3,.48)_68%,rgba(8,4,3,.16)_100%),linear-gradient(0deg,#120b08_0%,rgba(18,11,8,.7)_18%,transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(255,90,48,.22),transparent_34%),radial-gradient(circle_at_22%_78%,rgba(255,255,255,.1),transparent_24%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_30%,white_0_1px,transparent_1px),radial-gradient(circle_at_70%_60%,white_0_1px,transparent_1px)] [background-size:39px_39px,61px_61px]" />

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex min-h-[68vh] max-w-5xl flex-col justify-end"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-netflix-red">Month 3</p>
          <h1 className="text-5xl font-black leading-none text-white drop-shadow-2xl sm:text-7xl lg:text-8xl">The Mumbai Plot Twist</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-100 sm:text-xl sm:leading-8">
            Distance collapsed. Phone-world became real-world. Holy shit, we actually did this.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-zinc-300">
            <span className="font-bold text-green-400">{era.matchPercentage}% Match</span>
            <span>Episode 4</span>
            <span>Airport Romance</span>
            <span>Mumbai Chaos</span>
            <span>Real-World Attachment</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#the-lie" className="inline-flex items-center gap-2 rounded bg-netflix-red px-8 py-3 text-lg font-bold text-white transition hover:bg-red-700">
              <Play className="h-6 w-6 fill-white" />
              Play Reveal
            </a>
            <a href="#arrivals" className="inline-flex items-center gap-2 rounded bg-[#6d6d6eb3] px-7 py-3 text-lg font-bold text-white backdrop-blur transition hover:bg-[#6d6d6e66]">
              <Plane className="h-6 w-6" />
              Arrivals
            </a>
          </div>
        </motion.div>
      </section>

      <div className="relative bg-[radial-gradient(circle_at_18%_8%,rgba(255,90,48,.16),transparent_32%),radial-gradient(circle_at_80%_22%,rgba(255,255,255,.06),transparent_26%)]">
        <div className="px-5 py-6 sm:px-12 lg:px-16">
          <div className="scrollbar-hide flex gap-3 overflow-x-auto border-y border-white/10 py-4 text-sm font-semibold text-zinc-400">
            {["The lie", "Hard cut", "Arrivals", "First night", "Soft hours", "Memory wall", "Attached"].map((step, index) => (
              <div key={step} className="flex shrink-0 items-center gap-3">
                <span className={index === 0 ? "text-netflix-red" : "text-zinc-300"}>{step}</span>
                {index < 6 ? <span className="text-zinc-700">-&gt;</span> : null}
              </div>
            ))}
          </div>
        </div>

        <Section id="the-lie" title="The Lie" note="Fake London to Istanbul screenshots first. Believable enough to build tension." tone="suspense">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
            <Row memories={fakeTurkey} onOpen={onOpen} />
            <div className="rounded-sm border border-blue-200/10 bg-black/30 p-5 shadow-[0_0_44px_rgba(42,82,190,.16)]">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-200">Detective Arc</p>
              <p className="mt-4 text-3xl font-black">London → Istanbul</p>
              <p className="mt-3 text-sm leading-6 text-zinc-400">The UI made the lie look real. That was the whole point.</p>
            </div>
          </div>
        </Section>

        <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden bg-black px-5 py-24 text-center sm:px-12 lg:px-16">
          <img src={arrivals[0].thumbnail} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-black/55" />
          <motion.div initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="relative z-10">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.4em] text-netflix-red">Hard Cut</p>
            <h2 className="text-5xl font-black sm:text-7xl">Mumbai.</h2>
            <p className="mt-4 text-xl font-bold text-zinc-200">Real boarding. Actual travel. Distance collapsed.</p>
          </motion.div>
        </section>

        <Section id="arrivals" title="Arrivals" note="Airport anticipation, Mumbai boarding, and the tiny title card that says it all." tone="warm">
          <MemoryCard memory={arrivals[1]} onOpen={onOpen} large />
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">worth the wait.</p>
        </Section>

        <Section id="first-night" title="First Night Energy" note="Bars, blurry selfies, cheek kisses, and Mumbai night chaos." tone="flash">
          <Row memories={firstNight} onOpen={onOpen} flash />
        </Section>

        <Section id="soft-hours" title="Soft Hours" note="Mirror pics, hugs, staying in. We’re together now." tone="soft">
          <div className="grid gap-4 lg:grid-cols-2">
            {softHours.map((memory, index) => (
              <motion.div key={memory.title} whileHover={{ y: -8, scale: 1.015 }} transition={{ type: "spring", stiffness: 220, damping: 20 }}>
                <MemoryCard memory={memory} onOpen={onOpen} large={index < 2} />
              </motion.div>
            ))}
          </div>
        </Section>

        <ArchiveMessageStrip title="Travel Receipts Strip" note="Fake flights, real boarding, party clips, mirror photos. The month kept leaving evidence." memories={monthThreeArchive} onOpen={onOpen} />
        <ArchiveMiniClusters title="Mini Memory Clusters" note="The lie, the Mumbai night, and the soft hours grouped like evidence piles." clusters={monthThreeClusters} onOpen={onOpen} />
        <ArchiveMemoryWall title="Mumbai Memory Wall" note="Everything in the folder: imperfect crops, screenshots, timestamps, raw clips, bar photos, and soft mirror moments." memories={monthThreeArchive} onOpen={onOpen} />
        <ArchiveFloatingStacks
          title="Floating Photo Stacks"
          note="Little fragments drifting back in: airport proof, night chaos, and becoming each other's routine."
          stacks={[
            [fakeTurkey[0], fakeTurkey[1], arrivals[0]],
            [firstNight[0], firstNight[1], firstNight[2]],
            [softHours[0], softHours[1], softHours[2]]
          ]}
          onOpen={onOpen}
        />

        <section className="relative px-5 py-24 text-center sm:px-12 lg:px-16">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <Sparkles className="mx-auto mb-5 h-8 w-8 text-netflix-red" />
          <p className="text-3xl font-black sm:text-5xl">We got way too attached.</p>
          <p className="mt-4 text-2xl font-bold text-zinc-300 sm:text-4xl">This time, in person.</p>
          <p className="mt-8 text-base font-semibold text-zinc-400">Two people accidentally becoming each other&apos;s routine.</p>
        </section>
      </div>
    </div>
  );
}

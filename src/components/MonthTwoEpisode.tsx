"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Moon, Phone, Play, Sparkles, TriangleAlert } from "lucide-react";
import { Era, Memory } from "@/data/eras";

const base = "/memories/month2/month 2 ";

const needVoice: Memory[] = [
  {
    title: "Need To Hear Your Voice",
    type: "photo",
    src: `${base}/IMG_7137.PNG`,
    thumbnail: `${base}/IMG_7137.PNG`,
    caption: "Calls became a personality trait.",
    date: "03:00-ish",
    location: "WhatsApp",
    funnyMetadata: "Attachment detected",
    tags: ["calls", "miss you", "late night"]
  },
  {
    title: "Call When You Can",
    type: "photo",
    src: `${base}/IMG_7137.PNG`,
    thumbnail: `${base}/IMG_7137.PNG`,
    caption: "We were genuinely incapable of acting normal.",
    date: "Month 2",
    location: "Airport mode, emotionally not",
    funnyMetadata: "Viewer discretion advised",
    tags: ["voice", "distance", "clingy"]
  }
];

const facetimeDomesticity: Memory[] = [
  {
    title: "FaceTime Skincare",
    type: "photo",
    src: `${base}/IMG_6471.PNG`,
    thumbnail: `${base}/IMG_6471.PNG`,
    caption: "Peak romance is watching someone do skincare.",
    date: "Month 2",
    location: "On call",
    funnyMetadata: "Living together lite",
    tags: ["facetime", "skincare", "comfort"]
  },
  {
    title: "Living Together Lite",
    type: "photo",
    src: `${base}/IMG_6435.PNG`,
    thumbnail: `${base}/IMG_6435.PNG`,
    caption: "We started treating FaceTime like living together lite.",
    date: "Month 2",
    location: "Bathroom call",
    funnyMetadata: "Domestic scene",
    tags: ["facetime", "ordinary", "real"]
  }
];

const obsession: Memory[] = [
  {
    title: "24/7",
    type: "photo",
    src: `${base}/IMG_7136.PNG`,
    thumbnail: `${base}/IMG_7136.PNG`,
    caption: "Healthy? Probably not. Cute? Unfortunately yes.",
    date: "03:58",
    location: "WhatsApp",
    funnyMetadata: "Unhealthy levels of attachment",
    tags: ["obsessed", "24/7", "delusion"]
  },
  {
    title: "Miss You Too Much",
    type: "photo",
    src: `${base}/IMG_7133.PNG`,
    thumbnail: `${base}/IMG_7133.PNG`,
    caption: "The emotional dependency subscription renewed itself.",
    date: "02:12",
    location: "WhatsApp",
    funnyMetadata: "Renewed for another season",
    tags: ["miss you", "attached", "late"]
  }
];

const drunkClub: Memory[] = [
  {
    title: "Shot 7",
    type: "photo",
    src: `${base}/IMG_7134.PNG`,
    thumbnail: `${base}/IMG_7134.PNG`,
    caption: "Alcohol amplified the attachment problem.",
    date: "04:51",
    location: "Night out",
    funnyMetadata: "Tipsy tipsy",
    tags: ["drunk texts", "club", "miss you"]
  },
  {
    title: "Tipsy Tipsy",
    type: "photo",
    src: `${base}/IMG_7131.PNG`,
    thumbnail: `${base}/IMG_7131.PNG`,
    caption: "Every night out somehow became about her.",
    date: "03:54",
    location: "Night out",
    funnyMetadata: "Shot 7",
    tags: ["tipsy", "chaos", "attachment"]
  },
  {
    title: "Club Hi",
    type: "video",
    src: `${base}/0A8A4628-8B9F-4103-AD22-7DCD701B0A84.MP4`,
    thumbnail: `${base}/IMG_7134.PNG`,
    caption: "A whole club night, somehow still about her.",
    date: "Month 2",
    location: "Club",
    funnyMetadata: "Saying hi from the chaos",
    tags: ["video", "club", "drunk affection"]
  }
];

const flirty: Memory[] = [
  {
    title: "Bad Ideas",
    type: "photo",
    src: `${base}/IMG_7133.PNG`,
    thumbnail: `${base}/IMG_7133.PNG`,
    caption: "Distance created bad ideas.",
    date: "04:09",
    location: "WhatsApp",
    funnyMetadata: "Tastefully blurred",
    tags: ["tension", "distance", "yearning"]
  },
  {
    title: "Mostly Respectfully",
    type: "photo",
    src: `${base}/IMG_7132.PNG`,
    thumbnail: `${base}/IMG_7132.PNG`,
    caption: "We missed each other respectfully. Mostly.",
    date: "04:15",
    location: "WhatsApp",
    funnyMetadata: "Viewer discretion advised",
    tags: ["flirty", "missing", "blurred"]
  }
];

const cameraRoll: Memory[] = [
  {
    title: "Mango Report",
    type: "photo",
    src: `${base}/PHOTO-2026-03-20-10-08-11.jpg`,
    thumbnail: `${base}/PHOTO-2026-03-20-10-08-11.jpg`,
    caption: "My entire gallery at this point.",
    date: "Month 2",
    location: "Her camera roll",
    funnyMetadata: "Screen time report",
    tags: ["mango", "saved", "missed her"]
  },
  {
    title: "Dog Cameo",
    type: "photo",
    src: `${base}/PHOTO-2026-03-29-19-13-24.jpg`,
    thumbnail: `${base}/PHOTO-2026-03-29-19-13-24.jpg`,
    caption: "She was basically my screen time report.",
    date: "Month 2",
    location: "Her camera roll",
    funnyMetadata: "Saved immediately",
    tags: ["dog", "cute", "camera roll"]
  }
];

const london: Memory = {
  title: "Hungary House London",
  type: "photo",
  src: `${base}/IMG_7135.PNG`,
  thumbnail: `${base}/IMG_7135.PNG`,
  caption: "Long distance but aggressively online.",
  date: "Month 2",
  location: "London",
  funnyMetadata: "International attachment",
  tags: ["london", "distance", "online"]
};

const heroMontage = [
  { label: "FaceTime skincare", src: `${base}/IMG_6471.PNG`, type: "image" },
  { label: "Need your voice", src: `${base}/IMG_7137.PNG`, type: "image" },
  { label: "Shot 7", src: `${base}/IMG_7134.PNG`, type: "image" },
  { label: "Club hi", src: `${base}/0A8A4628-8B9F-4103-AD22-7DCD701B0A84.MP4`, type: "video" }
];

const attachmentArchive: Memory[] = [
  facetimeDomesticity[0],
  obsession[0],
  needVoice[0],
  london,
  drunkClub[0],
  drunkClub[1],
  drunkClub[2],
  flirty[0],
  flirty[1],
  facetimeDomesticity[1],
  cameraRoll[0],
  cameraRoll[1]
];

const messageStrip: Memory[] = [needVoice[0], obsession[0], needVoice[1], drunkClub[0], drunkClub[1], flirty[0], flirty[1], london];

const memoryClusters = [
  {
    title: "3AM Call Dependency",
    caption: "A missed call, a needy text, and absolutely no chill.",
    items: [needVoice[0], obsession[0], facetimeDomesticity[0]]
  },
  {
    title: "Night Out, Still Attached",
    caption: "A drunk text, a club clip, and the same person on the brain.",
    items: [drunkClub[0], drunkClub[2], drunkClub[1]]
  },
  {
    title: "Saved Because I Missed Her",
    caption: "Random, candid, and somehow important.",
    items: [cameraRoll[0], cameraRoll[1], london]
  }
];

const isPhoneScreenshot = (memory: Memory) => memory.thumbnail.includes("IMG_");

function Section({
  id,
  title,
  note,
  children,
  tone = "blue"
}: {
  id: string;
  title: string;
  note: string;
  children: ReactNode;
  tone?: "blue" | "warm" | "neon";
}) {
  const tones = {
    blue: "bg-[radial-gradient(circle_at_18%_10%,rgba(70,120,255,.12),transparent_32%)]",
    warm: "bg-[radial-gradient(circle_at_28%_20%,rgba(255,198,136,.12),transparent_30%)]",
    neon: "bg-[radial-gradient(circle_at_22%_20%,rgba(255,54,169,.16),transparent_30%),radial-gradient(circle_at_82%_30%,rgba(95,78,255,.14),transparent_28%)]"
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
        <p className="mt-2 text-sm leading-6 text-blue-100/70 sm:text-base">{note}</p>
      </div>
      {children}
    </motion.section>
  );
}

function MemoryTile({
  memory,
  onOpen,
  large = false,
  blurred = false
}: {
  memory: Memory;
  onOpen: (memory: Memory) => void;
  large?: boolean;
  blurred?: boolean;
}) {
  const phone = isPhoneScreenshot(memory);

  return (
    <button
      onClick={() => onOpen(memory)}
      className={`group relative shrink-0 overflow-hidden rounded-sm border border-white/5 bg-[#101820] text-left shadow-[0_24px_70px_rgba(0,0,0,.45)] outline-none transition duration-300 hover:z-10 hover:scale-[1.035] hover:border-white/25 focus:ring-2 focus:ring-white ${
        large ? "w-full max-w-5xl" : phone ? "w-[230px] sm:w-[282px]" : "w-[292px] sm:w-[390px]"
      }`}
    >
      <div className={`relative overflow-hidden bg-black ${large ? "aspect-[16/9]" : phone ? "aspect-[9/16]" : "aspect-[4/5]"}`}>
        <img
          src={memory.thumbnail}
          alt={memory.title}
          className={`h-full w-full opacity-90 transition duration-500 group-hover:scale-105 ${phone ? "object-contain" : "object-cover"} ${blurred ? "blur-[2px] group-hover:blur-sm" : ""}`}
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02030a] via-[#02030a]/20 to-transparent" />
        {memory.type === "video" ? (
          <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-2xl transition group-hover:scale-110">
            <Play className="h-6 w-6 fill-black" />
          </span>
        ) : null}
        {blurred ? <div className="absolute inset-x-4 top-4 rounded bg-black/50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">Tastefully redacted</div> : null}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-lg font-bold text-white">{memory.title}</p>
          <p className="mt-1 text-sm text-blue-100/75">{memory.caption}</p>
        </div>
      </div>
    </button>
  );
}

function HorizontalRow({ memories, onOpen, blurred = false }: { memories: Memory[]; onOpen: (memory: Memory) => void; blurred?: boolean }) {
  return (
    <div className="scrollbar-hide -mx-5 flex gap-3 overflow-x-auto px-5 pb-7 pt-2 sm:-mx-12 sm:px-12 lg:-mx-16 lg:px-16">
      {memories.map((memory) => (
        <MemoryTile key={`${memory.title}-${memory.src}`} memory={memory} onOpen={onOpen} blurred={blurred} />
      ))}
    </div>
  );
}

function ArchivePreview({ memory, onOpen, index, compact = false }: { memory: Memory; onOpen: (memory: Memory) => void; index: number; compact?: boolean }) {
  const phone = isPhoneScreenshot(memory);

  return (
    <motion.button
      onClick={() => onOpen(memory)}
      whileHover={{ y: -8, rotate: index % 2 === 0 ? -1.4 : 1.4, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 230, damping: 20 }}
      className={`group relative overflow-hidden rounded-sm border border-white/10 bg-[#0c1220] text-left shadow-[0_20px_55px_rgba(0,0,0,.5)] outline-none focus:ring-2 focus:ring-white ${
        compact ? "aspect-[4/5]" : phone ? "aspect-[9/14]" : "aspect-[4/5]"
      }`}
      style={{ transform: `rotate(${(index % 5) - 2}deg)` }}
    >
      {memory.type === "video" ? (
        <video src={memory.src} className="h-full w-full object-cover opacity-90 grayscale-[.15] transition duration-500 group-hover:grayscale-0" muted loop playsInline />
      ) : (
        <img
          src={memory.thumbnail}
          alt={memory.title}
          className={`h-full w-full opacity-90 transition duration-500 group-hover:scale-105 ${phone ? "object-contain" : "object-cover"}`}
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
      {memory.type === "video" ? (
        <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-xl">
          <Play className="h-5 w-5 fill-black" />
        </span>
      ) : null}
      <div className="absolute inset-x-0 bottom-0 p-3">
        <p className="text-sm font-black text-white">{memory.title}</p>
        <p className="mt-1 line-clamp-2 text-xs text-blue-100/70">{memory.caption}</p>
      </div>
    </motion.button>
  );
}

function MessageStrip({ onOpen }: { onOpen: (memory: Memory) => void }) {
  return (
    <Section id="message-strip" title="Message Strip" note="Rapid-fire texts, receipts, late-night proof, and the exact kind of screenshots you save when you are not acting normal.">
      <div className="scrollbar-hide -mx-5 flex gap-3 overflow-x-auto px-5 pb-8 pt-2 sm:-mx-12 sm:px-12 lg:-mx-16 lg:px-16">
        {messageStrip.map((memory, index) => (
          <button
            key={`${memory.title}-strip-${index}`}
            onClick={() => onOpen(memory)}
            className="group relative h-[420px] w-[210px] shrink-0 overflow-hidden rounded-sm border border-blue-100/10 bg-black shadow-[0_18px_55px_rgba(0,0,0,.5)] transition hover:-translate-y-2 hover:scale-[1.025] focus:outline-none focus:ring-2 focus:ring-white sm:h-[520px] sm:w-[260px]"
          >
            {memory.type === "video" ? (
              <video src={memory.src} className="h-full w-full object-cover opacity-80" muted loop playsInline />
            ) : (
              <img src={memory.thumbnail} alt={memory.title} className="h-full w-full object-contain opacity-90 transition duration-500 group-hover:scale-105" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#03050c] via-transparent to-transparent" />
            <p className="absolute inset-x-0 bottom-0 p-3 text-left text-sm font-bold text-white">{memory.title}</p>
          </button>
        ))}
      </div>
    </Section>
  );
}

function MemoryWall({ onOpen }: { onOpen: (memory: Memory) => void }) {
  return (
    <Section id="memory-wall" title="Memory Wall" note="The full attachment archive. Messy, cropped, chaotic, and very real." tone="neon">
      <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] md:grid-cols-4 lg:grid-cols-6">
        {attachmentArchive.map((memory, index) => {
          const span = index === 0 || index === 6 ? "col-span-2 row-span-2" : index === 2 || index === 10 ? "col-span-2" : "";

          return (
            <div key={`${memory.title}-wall-${index}`} className={span}>
              <ArchivePreview memory={memory} onOpen={onOpen} index={index} compact />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function MiniMemoryClusters({ onOpen }: { onOpen: (memory: Memory) => void }) {
  return (
    <Section id="mini-clusters" title="Mini Memory Clusters" note="Tiny grouped evidence piles, because apparently every little thing needed archiving.">
      <div className="grid gap-5 lg:grid-cols-3">
        {memoryClusters.map((cluster, clusterIndex) => (
          <motion.div
            key={cluster.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: clusterIndex * 0.08, duration: 0.55 }}
            className="relative min-h-[410px] overflow-hidden rounded-sm border border-white/10 bg-blue-950/15 p-4 shadow-[0_24px_70px_rgba(0,0,0,.42)]"
          >
            <p className="relative z-10 text-xl font-black text-white">{cluster.title}</p>
            <p className="relative z-10 mt-2 text-sm leading-6 text-blue-100/70">{cluster.caption}</p>
            <div className="relative mt-5 h-[300px]">
              {cluster.items.map((memory, itemIndex) => (
                <button
                  key={`${cluster.title}-${memory.title}-${itemIndex}`}
                  onClick={() => onOpen(memory)}
                  className="absolute overflow-hidden rounded-sm border border-white/10 bg-black shadow-2xl transition hover:z-20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
                  style={{
                    width: itemIndex === 1 ? "58%" : "48%",
                    height: itemIndex === 1 ? "72%" : "58%",
                    left: itemIndex === 0 ? "0%" : itemIndex === 1 ? "28%" : "52%",
                    top: itemIndex === 0 ? "12%" : itemIndex === 1 ? "2%" : "34%",
                    transform: `rotate(${[-5, 3, -2][itemIndex]}deg)`
                  }}
                >
                  {memory.type === "video" ? (
                    <video src={memory.src} className="h-full w-full object-cover opacity-90" muted loop playsInline />
                  ) : (
                    <img src={memory.thumbnail} alt={memory.title} className="h-full w-full object-cover opacity-90" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <p className="absolute inset-x-0 bottom-0 p-2 text-left text-xs font-bold text-white">{memory.title}</p>
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function FloatingPhotoStacks({ onOpen }: { onOpen: (memory: Memory) => void }) {
  const stacks = [
    [facetimeDomesticity[0], facetimeDomesticity[1], cameraRoll[0]],
    [needVoice[0], obsession[0], obsession[1]],
    [drunkClub[0], drunkClub[2], cameraRoll[1]]
  ];

  return (
    <Section id="floating-stacks" title="Floating Photo Stacks" note="Little saved fragments drifting back in, like the month would not leave the phone alone." tone="warm">
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
            {stack.map((memory, itemIndex) => (
              <button
                key={`${memory.title}-floating-${itemIndex}`}
                onClick={() => onOpen(memory)}
                className="absolute left-1/2 top-1/2 h-[260px] w-[190px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-sm border border-white/10 bg-black shadow-[0_24px_70px_rgba(0,0,0,.48)] transition hover:z-20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
                style={{
                  transform: `translate(-50%, -50%) translate(${(itemIndex - 1) * 38}px, ${itemIndex * 18}px) rotate(${[-8, 3, 10][itemIndex]}deg)`
                }}
              >
                {memory.type === "video" ? (
                  <video src={memory.src} className="h-full w-full object-cover opacity-90" muted loop playsInline />
                ) : (
                  <img src={memory.thumbnail} alt={memory.title} className="h-full w-full object-cover opacity-90" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-3 text-left text-xs font-bold text-white">{memory.title}</p>
              </button>
            ))}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function WarningCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-6 max-w-2xl rounded-sm border border-red-500/40 bg-red-950/25 p-5 shadow-[0_0_50px_rgba(229,9,20,.18)] backdrop-blur"
    >
      <div className="mb-3 flex items-center gap-3 text-netflix-red">
        <TriangleAlert className="h-6 w-6" />
        <p className="text-sm font-black uppercase tracking-[0.22em]">Warning</p>
      </div>
      <p className="text-2xl font-black text-white">The following relationship may contain unhealthy levels of attachment.</p>
      <p className="mt-3 text-sm text-zinc-300">Healthy? Probably not. Cute? Unfortunately yes.</p>
    </motion.div>
  );
}

export function MonthTwoEpisode({ era, onOpen }: { era: Era; onOpen: (memory: Memory) => void }) {
  return (
    <div className="relative overflow-hidden bg-[#05070d] text-white">
      <section className="relative min-h-[92vh] overflow-hidden bg-black px-5 pb-28 pt-28 sm:px-12 lg:px-16">
        <video
          src={`${base}/0A8A4628-8B9F-4103-AD22-7DCD701B0A84.MP4`}
          poster={`${base}/IMG_6471.PNG`}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#03050c_0%,rgba(3,5,12,.9)_32%,rgba(3,5,12,.48)_68%,rgba(3,5,12,.14)_100%),linear-gradient(0deg,#05070d_0%,rgba(5,7,13,.72)_18%,transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(82,131,255,.22),transparent_34%),radial-gradient(circle_at_24%_80%,rgba(229,9,20,.12),transparent_32%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_30%,white_0_1px,transparent_1px),radial-gradient(circle_at_70%_60%,white_0_1px,transparent_1px)] [background-size:43px_43px,67px_67px]" />

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex min-h-[68vh] max-w-5xl flex-col justify-end"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-blue-200">Month 2</p>
          <h1 className="text-5xl font-black leading-none text-white drop-shadow-2xl sm:text-7xl lg:text-8xl">Episode 3: Distance Makes People Weird</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-xl sm:leading-8">No dates. Just calls, texts, delusion, and attachment issues.</p>
          <div className="mt-6 space-y-2 text-2xl font-black text-white sm:text-4xl">
            <p>We didn’t meet once this month.</p>
            <p className="text-blue-200">Somehow we got even closer.</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-zinc-300">
            <span className="font-bold text-green-400">{era.matchPercentage}% Match</span>
            <span>Long Distance</span>
            <span>Late Night Calls</span>
            <span>Attachment Issues</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#need-voice" className="inline-flex items-center gap-2 rounded bg-netflix-red px-8 py-3 text-lg font-bold text-white transition hover:bg-red-700">
              <Play className="h-6 w-6 fill-white" />
              Play Episode
            </a>
            <a href="#facetime" className="inline-flex items-center gap-2 rounded bg-[#6d6d6eb3] px-7 py-3 text-lg font-bold text-white backdrop-blur transition hover:bg-[#6d6d6e66]">
              <Phone className="h-6 w-6" />
              Open Calls
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="absolute right-5 top-24 hidden w-[360px] lg:block"
        >
          <div className="grid grid-cols-2 gap-3">
            {heroMontage.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.08, duration: 0.45 }}
                className="relative aspect-[9/13] overflow-hidden rounded-sm border border-blue-100/10 bg-blue-950/30 shadow-[0_0_40px_rgba(80,130,255,.16)] backdrop-blur"
              >
                {item.type === "video" ? (
                  <video src={item.src} className="h-full w-full object-cover opacity-80" autoPlay muted loop playsInline />
                ) : (
                  <img src={item.src} alt="" className="h-full w-full object-cover opacity-80" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-3 text-xs font-bold text-blue-50">{item.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 space-y-3">
            {["need to hear your voice", "miss you", "call when you can"].map((message, index) => (
              <div key={message} className="rounded-2xl border border-blue-200/10 bg-blue-950/35 px-4 py-3 text-sm text-blue-50 shadow-[0_0_34px_rgba(90,140,255,.18)] backdrop-blur" style={{ transform: `translateX(${index * 18}px)` }}>
                {message}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="relative bg-[radial-gradient(circle_at_15%_6%,rgba(80,120,255,.16),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,.06),transparent_26%)]">
        <div className="px-5 py-6 sm:px-12 lg:px-16">
          <div className="scrollbar-hide flex gap-3 overflow-x-auto border-y border-white/10 py-4 text-sm font-semibold text-blue-100/70">
            {["Need voice", "FaceTime domesticity", "Obsession", "Drunk texts", "Flirty", "Camera roll", "London", "To be continued"].map((step, index) => (
              <div key={step} className="flex shrink-0 items-center gap-3">
                <span className={index === 0 ? "text-blue-200" : ""}>{step}</span>
                {index < 7 ? <span className="text-blue-900">-&gt;</span> : null}
              </div>
            ))}
          </div>
        </div>

        <Section id="need-voice" title="The “Need To Hear Your Voice” Section" note="Calls became a personality trait. We were genuinely incapable of acting normal.">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
            <MemoryTile memory={needVoice[0]} onOpen={onOpen} large />
            <div className="flex flex-col justify-end rounded-sm border border-blue-200/10 bg-blue-950/20 p-5 shadow-[0_0_44px_rgba(75,125,255,.12)]">
              <Moon className="mb-4 h-8 w-8 text-blue-200" />
              <p className="text-2xl font-black">Sleep deprived. Clingy. Soft.</p>
              <p className="mt-3 text-sm leading-6 text-blue-100/70">Phone calls became the closest thing to being in the same room.</p>
            </div>
          </div>
        </Section>

        <MessageStrip onOpen={onOpen} />

        <Section id="facetime" title="FaceTime Domesticity" note="We got so comfortable so quickly. Not glamorous, not posed, just real." tone="warm">
          <div className="relative grid gap-4 md:grid-cols-2">
            {facetimeDomesticity.map((memory, index) => (
              <motion.div key={memory.title} whileHover={{ rotate: index === 0 ? -1.6 : 1.6, y: -8 }} transition={{ type: "spring", stiffness: 240, damping: 18 }}>
                <MemoryTile memory={memory} onOpen={onOpen} />
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="obsession" title="The Obsession Section" note="Animated evidence from the attachment department.">
          <WarningCard />
          <HorizontalRow memories={obsession} onOpen={onOpen} />
        </Section>

        <MemoryWall onOpen={onOpen} />

        <Section id="drunk-club" title="Drunk Texts / Club Section" note="Every night out somehow became about her. Alcohol amplified the attachment problem." tone="neon">
          <HorizontalRow memories={drunkClub} onOpen={onOpen} />
        </Section>

        <MiniMemoryClusters onOpen={onOpen} />

        <Section id="flirty" title="The Flirty Section" note="Distance created bad ideas. We missed each other respectfully. Mostly.">
          <HorizontalRow memories={flirty} onOpen={onOpen} blurred />
        </Section>

        <Section id="camera-roll" title="Her Camera Roll" note="Photos I saved because I missed her. My entire gallery at this point." tone="warm">
          <HorizontalRow memories={cameraRoll} onOpen={onOpen} />
        </Section>

        <Section id="london" title="The London Section" note="Trying to stay emotionally present from another country.">
          <MemoryTile memory={london} onOpen={onOpen} large />
        </Section>

        <FloatingPhotoStacks onOpen={onOpen} />

        <section className="relative px-5 py-24 text-center sm:px-12 lg:px-16">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/20 to-transparent" />
          <Sparkles className="mx-auto mb-5 h-8 w-8 text-blue-200" />
          <p className="text-3xl font-black sm:text-5xl">We spent an entire month apart.</p>
          <p className="mt-4 text-2xl font-bold text-blue-100/80 sm:text-4xl">Neither of us handled it normally.</p>
          <p className="mt-8 text-xl font-black uppercase tracking-[0.28em] text-netflix-red">To be continued...</p>
        </section>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { CalendarDays, Headphones, Lock, Play, Sparkles } from "lucide-react";
import { Era, EraChapter, Memory, MemorySection } from "@/data/eras";

const isPhoneAsset = (memory: Memory) =>
  memory.layout === "chat" ||
  memory.thumbnail.toLowerCase().endsWith(".png") ||
  memory.tags.some((tag) => ["chat", "screenshots", "crossword lore", "facetime"].includes(tag));

const isObjectAsset = (memory: Memory) => memory.layout === "object" || memory.layout === "sensitive";

const chapterTone = (era: Era, index: number) => {
  if (era.id === "summer-archive") {
    return index % 2 === 0
      ? "bg-[radial-gradient(circle_at_15%_8%,rgba(255,180,108,.14),transparent_32%),radial-gradient(circle_at_80%_24%,rgba(229,9,20,.12),transparent_30%)]"
      : "bg-[radial-gradient(circle_at_22%_12%,rgba(255,213,148,.10),transparent_28%),radial-gradient(circle_at_78%_22%,rgba(255,255,255,.07),transparent_26%)]";
  }

  if (era.id === "long-distance-fever") {
    return "bg-[radial-gradient(circle_at_18%_10%,rgba(70,120,255,.12),transparent_32%),radial-gradient(circle_at_82%_30%,rgba(255,54,169,.12),transparent_28%)]";
  }

  if (era.id === "mumbai-to-london") {
    return index % 2 === 0
      ? "bg-[radial-gradient(circle_at_18%_8%,rgba(255,90,48,.15),transparent_32%)]"
      : "bg-[radial-gradient(circle_at_20%_10%,rgba(255,196,130,.12),transparent_30%)]";
  }

  return "bg-[radial-gradient(circle_at_15%_10%,rgba(255,125,71,.13),transparent_30%),radial-gradient(circle_at_82%_42%,rgba(229,9,20,.12),transparent_28%)]";
};

function MediaVisual({ memory, className = "" }: { memory: Memory; className?: string }) {
  const phone = isPhoneAsset(memory);

  if (memory.type === "video") {
    return (
      <video
        src={memory.src}
        poster={memory.thumbnail}
        className={`h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 ${className}`}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  return (
    <img
      src={memory.thumbnail}
      alt={memory.title}
      className={`h-full w-full opacity-95 transition duration-500 group-hover:scale-105 ${
        phone ? "object-contain" : "object-cover"
      } ${className}`}
      onError={(event) => {
        event.currentTarget.style.opacity = "0";
      }}
    />
  );
}

function MemoryCard({
  memory,
  onOpen,
  variant = "row",
  index = 0
}: {
  memory: Memory;
  onOpen: (memory: Memory) => void;
  variant?: "feature" | "wide" | "grid" | "row" | "phone" | "small" | "polaroid";
  index?: number;
}) {
  const phone = isPhoneAsset(memory);
  const object = isObjectAsset(memory);
  const isFeature = variant === "feature";
  const disabled = Boolean(memory.smallOnly);
  const rotate = variant === "polaroid" ? ["-2.5deg", "1.5deg", "-1deg", "2deg"][index % 4] : "0deg";
  const sizeClass = isFeature
    ? phone
      ? "min-h-[520px] sm:min-h-[640px]"
      : "min-h-[360px] sm:min-h-[520px]"
    : variant === "grid"
      ? "h-full min-h-[180px] w-full min-w-0"
      : variant === "wide" || memory.type === "video"
      ? "aspect-video min-w-[300px] sm:min-w-[430px]"
      : variant === "phone" || phone
        ? "aspect-[9/15] min-w-[220px] sm:min-w-[270px]"
        : variant === "small" || object
          ? "aspect-[4/5] min-w-[190px] sm:min-w-[230px]"
          : "aspect-[4/5] min-w-[240px] sm:min-w-[310px]";

  return (
    <motion.button
      type="button"
      onClick={() => {
        if (!disabled) onOpen(memory);
      }}
      disabled={disabled}
      whileHover={disabled ? undefined : { y: -8, scale: 1.025, rotate: variant === "polaroid" ? 0 : undefined }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={`group relative overflow-hidden rounded-sm border border-white/10 bg-[#181818] text-left shadow-[0_24px_70px_rgba(0,0,0,.5)] outline-none transition focus:ring-2 focus:ring-white ${
        isFeature ? "w-full" : sizeClass
      } ${disabled ? "cursor-default" : "hover:border-white/30"}`}
      style={{ transform: `rotate(${rotate})` }}
      aria-label={disabled ? `${memory.title}, displayed small for privacy` : `Open ${memory.title}`}
    >
      <div className={`relative h-full w-full overflow-hidden bg-black ${isFeature ? (phone ? "aspect-[9/14] sm:aspect-[16/10]" : "aspect-[16/10]") : ""}`}>
        <MediaVisual memory={memory} className={memory.redacted ? "blur-[3px] group-hover:blur-sm" : ""} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        {memory.type === "video" ? (
          <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-xl sm:left-4 sm:top-4 sm:h-12 sm:w-12">
            <Play className="h-5 w-5 fill-black sm:h-6 sm:w-6" />
          </span>
        ) : null}
        {memory.type === "audio" ? (
          <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-xl">
            <Headphones className="h-5 w-5" />
          </span>
        ) : null}
        {memory.redacted ? (
          <span className="absolute left-3 top-3 rounded-sm bg-black/60 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/85 backdrop-blur">
            After dark
          </span>
        ) : null}
        {disabled ? (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-sm bg-black/70 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white/85 backdrop-blur">
            <Lock className="h-3 w-3" />
            Small only
          </span>
        ) : null}
        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
          <p className="line-clamp-2 text-base font-black leading-tight text-white sm:text-lg">{memory.title}</p>
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-zinc-300 sm:text-sm">{memory.caption}</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {memory.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-sm bg-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-zinc-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function HorizontalCards({
  items,
  onOpen,
  variant
}: {
  items: Memory[];
  onOpen: (memory: Memory) => void;
  variant?: "wide" | "phone" | "small" | "polaroid";
}) {
  return (
    <div className="scrollbar-hide -mx-5 flex gap-3 overflow-x-auto px-5 pb-7 pt-2 sm:-mx-12 sm:px-12 lg:-mx-16 lg:px-16">
      {items.map((memory, index) => (
        <MemoryCard key={`${memory.title}-${memory.src}`} memory={memory} onOpen={onOpen} variant={variant} index={index} />
      ))}
    </div>
  );
}

function SectionBlock({ section, onOpen }: { section: MemorySection; onOpen: (memory: Memory) => void }) {
  if (!section.items.length) return null;

  const layout = section.layout ?? "row";

  return (
    <section className="py-8 sm:py-10">
      <div className="mb-5 max-w-3xl">
        <h3 className="text-2xl font-black leading-tight text-white sm:text-3xl">{section.title}</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-400 sm:text-base">{section.description}</p>
      </div>

      {layout === "feature" ? (
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,.8fr)]">
          <MemoryCard memory={section.items[0]} onOpen={onOpen} variant="feature" />
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
            {section.items.slice(1, 5).map((memory, index) => (
              <MemoryCard key={`${memory.title}-${memory.src}`} memory={memory} onOpen={onOpen} variant={memory.smallOnly ? "small" : "grid"} index={index} />
            ))}
          </div>
        </div>
      ) : layout === "grid" ? (
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4">
          {section.items.map((memory, index) => {
            const span = index === 0 && !isPhoneAsset(memory) ? "col-span-2 row-span-2" : index % 7 === 0 ? "col-span-2" : "";
            return (
              <div key={`${memory.title}-${memory.src}`} className={span}>
                <MemoryCard memory={memory} onOpen={onOpen} variant={memory.smallOnly ? "small" : "grid"} index={index} />
              </div>
            );
          })}
        </div>
      ) : layout === "video" ? (
        <HorizontalCards items={section.items} onOpen={onOpen} variant="wide" />
      ) : layout === "chat" ? (
        <HorizontalCards items={section.items} onOpen={onOpen} variant="phone" />
      ) : layout === "objects" ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {section.items.map((memory, index) => (
            <MemoryCard key={`${memory.title}-${memory.src}`} memory={memory} onOpen={onOpen} variant="small" index={index} />
          ))}
        </div>
      ) : layout === "polaroids" ? (
        <HorizontalCards items={section.items} onOpen={onOpen} variant="polaroid" />
      ) : (
        <HorizontalCards items={section.items} onOpen={onOpen} />
      )}
    </section>
  );
}

function ChapterJump({ chapters, era }: { chapters: EraChapter[]; era: Era }) {
  return (
    <nav id="chapters" className="sticky top-[68px] z-20 border-y border-white/10 bg-black/[0.82] px-5 py-3 backdrop-blur-xl sm:px-12 lg:px-16">
      <div className="scrollbar-hide flex gap-3 overflow-x-auto">
        {chapters.map((chapter, index) => (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className={`group relative flex min-w-[210px] shrink-0 items-center gap-3 rounded-sm border border-white/10 p-3 text-left transition hover:border-white/40 ${
              era.id === "summer-archive" ? "bg-amber-200/[0.06]" : "bg-white/[0.04]"
            }`}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-netflix-red text-sm font-black text-white">{index + 1}</span>
            <span>
              <span className="block text-xs font-black uppercase tracking-[0.18em] text-zinc-500">{chapter.eyebrow}</span>
              <span className="mt-1 block text-sm font-bold text-white group-hover:text-white">{chapter.title}</span>
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}

function FeaturedMemory({ memory, onOpen }: { memory: Memory; onOpen: (memory: Memory) => void }) {
  return (
    <section id="featured" className="px-5 py-12 sm:px-12 lg:px-16">
      <div className="mb-5 flex items-end justify-between gap-5">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-netflix-red">Featured Memory</p>
          <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">{memory.title}</h2>
        </div>
        <p className="hidden max-w-sm text-right text-sm leading-6 text-zinc-500 sm:block">{memory.funnyMetadata}</p>
      </div>
      <MemoryCard memory={memory} onOpen={onOpen} variant="feature" />
    </section>
  );
}

function ChapterSection({
  era,
  chapter,
  index,
  onOpen
}: {
  era: Era;
  chapter: EraChapter;
  index: number;
  onOpen: (memory: Memory) => void;
}) {
  return (
    <motion.section
      id={chapter.id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={`relative scroll-mt-28 px-5 py-14 sm:px-12 sm:py-16 lg:px-16 ${chapterTone(era, index)}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(90deg,white_1px,transparent_1px),linear-gradient(0deg,white_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="relative">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-netflix-red">{chapter.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-black leading-none text-white sm:text-6xl">{chapter.title}</h2>
            <p className="mt-3 text-lg font-semibold text-zinc-200">{chapter.subtitle}</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">{chapter.intro}</p>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {chapter.tags.map((tag) => (
              <span key={tag} className="rounded-sm border border-white/10 bg-black/30 px-3 py-2 text-[11px] font-bold uppercase tracking-wide text-zinc-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {chapter.sections.slice(0, 3).map((section) => (
            <a key={section.title} href={`#${chapter.id}-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="rounded-sm border border-white/10 bg-black/25 p-4 transition hover:border-white/30 hover:bg-white/[0.06]">
              <span className="block text-xs font-black uppercase tracking-[0.2em] text-zinc-500">{section.items.length} cards</span>
              <span className="mt-2 block text-base font-bold text-white">{section.title}</span>
            </a>
          ))}
        </div>

        {chapter.sections.map((section) => (
          <div key={section.title} id={`${chapter.id}-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="scroll-mt-28">
            <SectionBlock section={section} onOpen={onOpen} />
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export function CollectionExperience({ era, onOpen }: { era: Era; onOpen: (memory: Memory) => void }) {
  const isSummer = era.id === "summer-archive";

  return (
    <div className={`relative overflow-hidden ${isSummer ? "bg-[#15100c]" : "bg-[#141414]"}`}>
      <section className="relative min-h-[88svh] overflow-hidden bg-black px-5 pb-28 pt-28 sm:px-12 lg:px-16">
        <img
          src={era.heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-50"
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.9)_34%,rgba(5,5,5,.42)_68%,rgba(5,5,5,.12)_100%),linear-gradient(0deg,#141414_0%,rgba(20,20,20,.72)_18%,transparent_62%)]" />
        <div className={isSummer ? "absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(255,178,92,.2),transparent_34%),radial-gradient(circle_at_24%_80%,rgba(229,9,20,.16),transparent_32%)]" : "absolute inset-0 bg-[radial-gradient(circle_at_74%_20%,rgba(229,9,20,.2),transparent_34%)]"} />

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex min-h-[66svh] max-w-5xl flex-col justify-end"
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-netflix-red">{era.subtitle}</p>
          <h1 className="text-5xl font-black leading-none text-white drop-shadow-2xl sm:text-7xl lg:text-8xl">{era.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-100 sm:text-xl sm:leading-8">{era.summary}</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-zinc-300">
            <span className="font-bold text-green-400">{era.matchPercentage}% Match</span>
            <span>{era.runtime}</span>
            {era.fakeGenres.slice(0, 4).map((genre) => (
              <span key={genre}>{genre}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onOpen(era.chapters[0].featured)}
              className="inline-flex items-center gap-2 rounded-sm bg-netflix-red px-7 py-3 text-base font-bold text-white transition hover:bg-red-700 sm:text-lg"
            >
              <Play className="h-5 w-5 fill-white sm:h-6 sm:w-6" />
              Play Featured
            </button>
            <a href="#chapters" className="inline-flex items-center gap-2 rounded-sm bg-[#6d6d6eb3] px-7 py-3 text-base font-bold text-white backdrop-blur transition hover:bg-[#6d6d6e66] sm:text-lg">
              <CalendarDays className="h-5 w-5 sm:h-6 sm:w-6" />
              View Chapters
            </a>
          </div>
        </motion.div>
      </section>

      <ChapterJump chapters={era.chapters} era={era} />
      <FeaturedMemory memory={era.chapters[0].featured} onOpen={onOpen} />

      {era.chapters.map((chapter, index) => (
        <ChapterSection key={chapter.id} era={era} chapter={chapter} index={index} onOpen={onOpen} />
      ))}

      <section className="relative px-5 py-20 text-center sm:px-12 lg:px-16">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <Sparkles className="mx-auto mb-5 h-8 w-8 text-netflix-red" />
        <p className="text-sm font-black uppercase tracking-[0.3em] text-netflix-red">End Credits</p>
        <h2 className="mt-4 text-4xl font-black sm:text-6xl">Renewed for another season.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-400">
          Relationship archive updated. Still chaotic, still soft, still very us.
        </p>
      </section>
    </div>
  );
}

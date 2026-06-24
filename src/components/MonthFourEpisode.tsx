"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Coffee, Play, SkipForward } from "lucide-react";
import { ArchiveFloatingStacks, ArchiveMemoryWall, ArchiveMiniClusters } from "@/components/ArchiveLayouts";
import { Era, Memory } from "@/data/eras";

const photoBase = "/memories/month 4/iloveimg-converted";
const dailyBase = "/memories/month 4/compressed";
const challengeBase = "/memories/month 4/month 4 vlog ";

const elevators: Memory[] = [
  {
    title: "Tongue-Out Lift",
    type: "photo",
    src: `${photoBase}/IMG_8312.jpg`,
    thumbnail: `${photoBase}/IMG_8312.jpg`,
    caption: "Strong opening lift energy.",
    date: "Month 4",
    location: "Elevator archives",
    funnyMetadata: "Candid on purpose",
    tags: ["lift", "playful", "candid"]
  },
  {
    title: "Bright Lift",
    type: "photo",
    src: `${photoBase}/FullSizeRender 2.jpg`,
    thumbnail: `${photoBase}/FullSizeRender 2.jpg`,
    caption: "One lift, another tiny episode.",
    date: "Month 4",
    location: "Elevator archives",
    funnyMetadata: "Main lift image",
    tags: ["lift", "couple", "bright"]
  },
  {
    title: "Playful Close-Up",
    type: "photo",
    src: `${photoBase}/IMG_8368.jpg`,
    thumbnail: `${photoBase}/IMG_8368.jpg`,
    caption: "The lift camera roll kept growing.",
    date: "Month 4",
    location: "Elevator archives",
    funnyMetadata: "Another floor, another photo",
    tags: ["lift", "close-up", "playful"]
  },
  {
    title: "Full-Length Lift",
    type: "photo",
    src: `${photoBase}/IMG_6848.jpg`,
    thumbnail: `${photoBase}/IMG_6848.jpg`,
    caption: "A taller receipt from the elevator archive.",
    date: "Month 4",
    location: "Elevator archives",
    funnyMetadata: "Full-body evidence",
    tags: ["lift", "mirror", "portrait"]
  }
];

const foodDates: Memory[] = [
  {
    title: "Pizza Bakers",
    type: "photo",
    src: `${photoBase}/IMG_6850.jpg`,
    thumbnail: `${photoBase}/IMG_6850.jpg`,
    caption: "Pizza slices, dip, and a proper food-date anchor.",
    date: "Month 4",
    location: "Pizza Bakers",
    funnyMetadata: "Main course episode",
    tags: ["pizza", "food date", "london"]
  },
  {
    title: "Ice Cream Outside",
    type: "photo",
    src: `${photoBase}/IMG_8359.jpg`,
    thumbnail: `${photoBase}/IMG_8359.jpg`,
    caption: "Happy, outside, holding dessert.",
    date: "Month 4",
    location: "London",
    funnyMetadata: "Dessert arc",
    tags: ["ice cream", "couple", "happy"]
  },
  {
    title: "Colourful Café Mirror",
    type: "photo",
    src: `${photoBase}/FullSizeRender.jpg`,
    thumbnail: `${photoBase}/FullSizeRender.jpg`,
    caption: "A London day out reflected back at us.",
    date: "Month 4",
    location: "London café",
    funnyMetadata: "Camera roll material",
    tags: ["café", "mirror", "london"]
  },
  {
    title: "Straw Engineering",
    type: "photo",
    src: `${photoBase}/IMG_8314.jpg`,
    thumbnail: `${photoBase}/IMG_8314.jpg`,
    caption: "A silly daytime detail, preserved correctly.",
    date: "Month 4",
    location: "Coffee stop",
    funnyMetadata: "Colourful straws department",
    tags: ["drink", "casual", "detail"]
  }
];

const goldenHour: Memory[] = [
  {
    title: "Golden Hour Deeya",
    type: "photo",
    src: `${photoBase}/IMG_6946.jpg`,
    thumbnail: `${photoBase}/IMG_6946.jpg`,
    caption: "London slowed down for a minute.",
    date: "Month 4",
    location: "Pub garden",
    funnyMetadata: "Golden-hour anchor",
    tags: ["golden hour", "portrait", "london"]
  },
  {
    title: "Camera Roll Detail",
    type: "photo",
    src: `${photoBase}/IMG_6853.jpg`,
    thumbnail: `${photoBase}/IMG_6853.jpg`,
    caption: "A small overhead candid from the London camera roll.",
    date: "Month 4",
    location: "Outside",
    funnyMetadata: "Editorial detail",
    tags: ["candid", "camera", "detail"]
  }
];

const afterHours: Memory = {
  title: "After Hours",
  type: "photo",
  src: `${photoBase}/FullSizeRender 3.jpg`,
  thumbnail: `${photoBase}/FullSizeRender 3.jpg`,
  caption: "Purple light, low visibility, very us.",
  date: "Month 4",
  location: "Night out",
  funnyMetadata: "Main night visual",
  tags: ["club", "night out", "purple"]
};

const dailyVlogs: Memory[] = [
  {
    title: "Carousel Cam",
    type: "video",
    src: `${dailyBase}/IMG_7061.mov`,
    thumbnail: `${photoBase}/IMG_8359.jpg`,
    caption: "A carousel ride with the camera already rolling.",
    date: "Month 4",
    location: "London day out",
    funnyMetadata: "Daily vlog",
    tags: ["carousel", "video", "day out"]
  },
  {
    title: "Starting The Day",
    type: "video",
    src: `${dailyBase}/IMG_6849.mov`,
    thumbnail: `${photoBase}/FullSizeRender.jpg`,
    caption: "Walking in, talking already, camera naturally on.",
    date: "Month 4",
    location: "London",
    funnyMetadata: "Daily vlog",
    tags: ["walk and talk", "video", "london"]
  },
  {
    title: "Sunny Brick-Wall Update",
    type: "video",
    src: `${dailyBase}/IMG_6900.mov`,
    thumbnail: `${photoBase}/IMG_6853.jpg`,
    caption: "A bright London update in the middle of the day.",
    date: "Month 4",
    location: "London street",
    funnyMetadata: "Daily vlog",
    tags: ["sunny", "street", "video"]
  },
  {
    title: "Street Commentary",
    type: "video",
    src: `${dailyBase}/IMG_7029.mov`,
    thumbnail: `${photoBase}/IMG_6946.jpg`,
    caption: "Deeya narrating the day while London keeps moving.",
    date: "Month 4",
    location: "London street",
    funnyMetadata: "Daily vlog",
    tags: ["commentary", "street", "video"]
  },
  {
    title: "Rajveer At Topgolf",
    type: "video",
    src: `${dailyBase}/IMG_7017.mov`,
    thumbnail: `${photoBase}/IMG_8312.jpg`,
    caption: "Night skyline, golf club, confidence pending.",
    date: "Month 4",
    location: "Topgolf",
    funnyMetadata: "Daily vlog",
    tags: ["topgolf", "night", "video"]
  },
  {
    title: "Deeya At Topgolf",
    type: "video",
    src: `${dailyBase}/IMG_7019.mov`,
    thumbnail: `${photoBase}/IMG_8368.jpg`,
    caption: "Same range, different swing, same running commentary.",
    date: "Month 4",
    location: "Topgolf",
    funnyMetadata: "Daily vlog",
    tags: ["topgolf", "night", "video"]
  },
  {
    title: "Lift Lobby Vlog",
    type: "video",
    src: `${dailyBase}/IMG_8371.mov`,
    thumbnail: `${photoBase}/FullSizeRender 2.jpg`,
    caption: "Even leaving the lift became a vlog segment.",
    date: "Month 4",
    location: "Lift lobby",
    funnyMetadata: "Daily vlog",
    tags: ["lift", "day out", "video"]
  },
  {
    title: "Ice Cream Walk",
    type: "video",
    src: `${dailyBase}/IMG_6956.mov`,
    thumbnail: `${photoBase}/IMG_8359.jpg`,
    caption: "Dessert in hand, camera still rolling.",
    date: "Month 4",
    location: "London",
    funnyMetadata: "Daily vlog",
    tags: ["ice cream", "walk", "video"]
  },
  {
    title: "Walk Home Outtake",
    type: "video",
    src: `${dailyBase}/IMG_6991.mov`,
    thumbnail: `${photoBase}/IMG_6853.jpg`,
    caption: "The kind of clip that exists because everything got documented.",
    date: "Month 4",
    location: "London",
    funnyMetadata: "Daily vlog",
    tags: ["walk", "outtake", "video"]
  }
];

const challengeSources = ["IMG_7093 2.MOV", "IMG_7094 2.MOV", "IMG_7095 2.MOV", "IMG_7096 2.MOV", "IMG_7097 2.MOV"];

const challengeMemories: Memory[] = challengeSources.map((filename, index) => ({
  title: `M&S Challenge — Part ${index + 1}`,
  type: "video",
  src: `${challengeBase}/${filename}`,
  thumbnail: `${photoBase}/IMG_6850.jpg`,
  caption: "Rock Paper Scissors decided another part of the meal.",
  date: "Month 4",
  location: "M&S",
  funnyMetadata: `Sequence ${index + 1} of 5`,
  tags: ["m&s", "challenge", "rock paper scissors"]
}));

const monthFourArchive = [...elevators, ...foodDates, ...goldenHour, afterHours, ...dailyVlogs, ...challengeMemories];

function VideoRow({ memories, onOpen }: { memories: Memory[]; onOpen: (memory: Memory) => void }) {
  return (
    <div className="scrollbar-hide -mx-5 flex gap-3 overflow-x-auto px-5 pb-7 pt-2 sm:-mx-12 sm:px-12 lg:-mx-16 lg:px-16">
      {memories.map((memory) => (
        <button key={memory.src} onClick={() => onOpen(memory)} className="group relative aspect-video w-[310px] shrink-0 overflow-hidden rounded-sm border border-white/10 bg-black text-left shadow-xl transition hover:z-10 hover:scale-[1.035] focus:outline-none focus:ring-2 focus:ring-white sm:w-[430px]">
          <video src={memory.src} poster={memory.thumbnail} className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105" autoPlay muted loop playsInline />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"><Play className="h-5 w-5 fill-black" /></span>
          <div className="absolute inset-x-0 bottom-0 p-4"><p className="font-bold text-white">{memory.title}</p><p className="mt-1 text-sm text-zinc-300">{memory.caption}</p></div>
        </button>
      ))}
    </div>
  );
}

function MAndSChallenge() {
  const [current, setCurrent] = useState(0);
  const memory = challengeMemories[current];

  return (
    <section className="relative bg-[radial-gradient(circle_at_20%_20%,rgba(50,150,90,.16),transparent_32%)] px-5 py-12 sm:px-12 lg:px-16">
      <div className="mb-6 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-green-400">Five-Part Special</p>
        <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">The M&S Challenge</h2>
        <p className="mt-3 leading-7 text-zinc-400">Rock Paper Scissors. The winner of each round chose one part of the meal: appetiser, main, dessert, or drink. The clips show what happened.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="overflow-hidden rounded-sm border border-white/10 bg-black shadow-2xl">
          <video key={memory.src} src={memory.src} className="max-h-[72vh] w-full bg-black object-contain" controls autoPlay playsInline onEnded={() => setCurrent((value) => Math.min(value + 1, challengeMemories.length - 1))} />
          <div className="flex items-center justify-between gap-3 p-4">
            <div><p className="font-bold text-white">Part {current + 1} of 5</p><p className="mt-1 text-sm text-zinc-400">Playing in the uploaded sequence.</p></div>
            <button onClick={() => setCurrent((value) => (value + 1) % challengeMemories.length)} className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black" aria-label="Next challenge clip"><SkipForward className="h-5 w-5 fill-black" /></button>
          </div>
        </div>
        <div className="space-y-2">
          {challengeMemories.map((item, index) => (
            <button key={item.src} onClick={() => setCurrent(index)} className={`flex w-full items-center gap-3 rounded-sm border p-3 text-left transition ${index === current ? "border-green-400 bg-green-400/10" : "border-white/10 bg-white/[0.03] hover:border-white/30"}`}>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white">{index + 1}</span>
              <span><span className="block text-sm font-bold text-white">Challenge Part {index + 1}</span><span className="mt-1 block text-xs text-zinc-500">{challengeSources[index]}</span></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MonthFourEpisode({ era, onOpen }: { era: Era; onOpen: (memory: Memory) => void }) {
  return (
    <div className="relative overflow-hidden bg-[#100d0c] text-white">
      <section className="relative min-h-[90vh] overflow-hidden bg-black px-5 pb-28 pt-28 sm:px-12 lg:px-16">
        <img src={foodDates[1].src} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070504_0%,rgba(7,5,4,.88)_34%,rgba(7,5,4,.38)_70%,transparent_100%),linear-gradient(0deg,#100d0c_0%,transparent_62%)]" />
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 flex min-h-[66vh] max-w-4xl flex-col justify-end">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-netflix-red">Month 4</p>
          <h1 className="mt-3 text-5xl font-black leading-none sm:text-7xl lg:text-8xl">Episode 5: The London Routine</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-200">Lifts, food dates, daily vlogs, Topgolf, M&S decisions, and documenting absolutely everything.</p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-zinc-300"><span className="text-green-400">{era.matchPercentage}% Match</span><span>London Days</span><span>Daily Vlogs</span><span>After Hours</span></div>
          <a href="#daily-vlogs" className="mt-8 inline-flex w-fit items-center gap-2 rounded bg-netflix-red px-8 py-3 text-lg font-bold"><Play className="h-6 w-6 fill-white" />Play Month 4</a>
        </motion.div>
      </section>

      <section className="px-5 py-12 sm:px-12 lg:px-16"><h2 className="text-3xl font-black">Elevator Archives</h2><p className="mt-2 text-zinc-400">Four lifts, four different frames, same running bit.</p><ArchiveMemoryWall title="Lift Contact Sheet" note="Playful, candid, and intentionally repetitive in the way real camera rolls are." memories={elevators} onOpen={onOpen} /></section>

      <section className="px-5 py-12 sm:px-12 lg:px-16"><div className="mb-6 flex items-center gap-3"><Coffee className="h-7 w-7 text-netflix-red" /><div><h2 className="text-3xl font-black">Coffee, Ice Cream & Pizza</h2><p className="mt-1 text-zinc-400">The food-date chapter.</p></div></div><ArchiveMemoryWall title="Table For Two" note="Pizza as the anchor, then the small details around it." memories={foodDates} onOpen={onOpen} /></section>

      <section className="relative min-h-[80vh] overflow-hidden px-5 py-20 sm:px-12 lg:px-16"><img src={goldenHour[0].src} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-[2000ms] hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent" /><div className="relative z-10 flex min-h-[58vh] max-w-xl flex-col justify-end"><p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300">Golden Hour</p><h2 className="mt-3 text-5xl font-black">London slowed down.</h2><p className="mt-4 text-zinc-200">A larger, quieter frame between all the vlogs.</p></div></section>

      <section id="daily-vlogs" className="px-5 py-12 sm:px-12 lg:px-16"><h2 className="text-3xl font-black">Daily Vlogs</h2><p className="mt-2 text-zinc-400">Nine clips, titled from what is actually on camera.</p><div className="mt-6"><VideoRow memories={dailyVlogs} onOpen={onOpen} /></div></section>

      <MAndSChallenge />

      <section className="relative min-h-[72vh] overflow-hidden px-5 py-20 sm:px-12 lg:px-16"><img src={afterHours.src} alt="" className="absolute inset-0 h-full w-full object-cover opacity-65" /><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,45,190,.22),transparent_35%),linear-gradient(90deg,rgba(0,0,0,.88),rgba(0,0,0,.25))]" /><div className="relative z-10 flex min-h-[50vh] max-w-xl flex-col justify-end"><p className="text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-300">After Hours</p><h2 className="mt-3 text-5xl font-black">The night-out cut.</h2><p className="mt-4 text-zinc-200">Purple light, low visibility, loud memory.</p></div></section>

      <ArchiveMiniClusters title="London Camera Roll" note="Lifts, food, street vlogs, and night clips grouped into the little routines they became." clusters={[
        { title: "Lift Lore", caption: "The elevator had recurring-character status.", items: [elevators[0], elevators[1], dailyVlogs[6]] },
        { title: "Eat, Walk, Repeat", caption: "Pizza, ice cream, then another London walk.", items: [foodDates[0], foodDates[1], dailyVlogs[7]] },
        { title: "Day Into Night", caption: "Golden hour, Topgolf, then after hours.", items: [goldenHour[0], dailyVlogs[4], afterHours] }
      ]} onOpen={onOpen} />
      <ArchiveMemoryWall title="Month 4 Memory Wall" note="Every still and every video, including the complete M&S sequence." memories={monthFourArchive} onOpen={onOpen} />
      <ArchiveFloatingStacks title="Floating London Stacks" note="The month returning in small piles: lifts, food dates, walks, and nights out." stacks={[[elevators[0], elevators[2], elevators[3]], [foodDates[0], foodDates[1], goldenHour[1]], [dailyVlogs[4], dailyVlogs[5], afterHours]]} onOpen={onOpen} />

      <section className="px-5 py-24 text-center sm:px-12 lg:px-16"><p className="text-sm font-black uppercase tracking-[0.3em] text-netflix-red">End Of Episode 5</p><h2 className="mt-4 text-4xl font-black sm:text-6xl">The routine was the romance.</h2><p className="mt-4 text-xl text-zinc-400">And apparently, everything needed a vlog.</p></section>
    </div>
  );
}

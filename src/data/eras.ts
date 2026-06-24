export type MemoryType = "photo" | "video" | "audio";

export type Memory = {
  title: string;
  type: MemoryType;
  src: string;
  thumbnail: string;
  song?: string;
  caption: string;
  date: string;
  location: string;
  funnyMetadata: string;
  tags: string[];
};

export type Era = {
  id: string;
  title: string;
  subtitle: string;
  profileImage: string;
  heroImage: string;
  matchPercentage: number;
  runtime: string;
  fakeGenres: string[];
  vibe: string;
  memories: Memory[];
  categories: {
    title: string;
    description: string;
    items: Memory[];
  }[];
};

// Replace media by putting your files in /public/memories/.
// Profile images and hero banners are controlled by profileImage and heroImage below.
// For each memory:
// - src is the full photo, video, or audio file.
// - thumbnail is the card image shown in the Netflix row.
// - song is optional and plays only when that memory is opened in the modal.
// - leave song undefined when you do not want background music for a memory.

const talkingStageEpisodes: Memory[] = [
  {
    title: "Instagram DMs",
    type: "photo",
    src: "/memories/talking-stage/IMG_7123.PNG",
    thumbnail: "/memories/talking-stage/IMG_7123.PNG",
    caption: "This is where it technically started.",
    date: "The beginning",
    location: "Instagram DMs",
    funnyMetadata: "Contains emotional damage",
    tags: ["first texts", "awkward", "canon event"]
  },
  {
    title: "The Comeback",
    type: "photo",
    src: "/memories/talking-stage/IMG_7115.PNG",
    thumbnail: "/memories/talking-stage/IMG_7115.PNG",
    caption: "Somehow, the conversation found its way back.",
    date: "The return",
    location: "WhatsApp",
    funnyMetadata: "Critically acclaimed by nobody",
    tags: ["late night", "calls", "soft launch"]
  },
  {
    title: "Director's Cut",
    type: "video",
    src: "/memories/talking-stage/VIDEO-2026-06-02-23-33-36.mp4",
    thumbnail: "/memories/talking-stage/4c6f8dfb-a457-47e8-bb18-8ce405c49d8b.JPG",
    caption: "Yeah, we were cooked.",
    date: "Before official",
    location: "Behind the scenes",
    funnyMetadata: "Award-winning delusion",
    tags: ["video", "directors cut", "cooked"]
  }
];

const talkingStageExtras: Memory[] = [
  {
    title: "Not Official Yet",
    type: "photo",
    src: "/memories/talking-stage/4c6f8dfb-a457-47e8-bb18-8ce405c49d8b.JPG",
    thumbnail: "/memories/talking-stage/4c6f8dfb-a457-47e8-bb18-8ce405c49d8b.JPG",
    caption: "Before the label, after the feeling.",
    date: "Before official",
    location: "Almost us",
    funnyMetadata: "Viewer discretion advised",
    tags: ["couple photo", "almost dating"]
  }
];

const month1Episodes: Memory[] = [
  {
    title: "The Ask-Out",
    type: "video",
    src: "/memories/month1/VIDEO-2026-02-06-12-30-21.mp4",
    thumbnail: "/memories/month1/b0e78c7d-2392-4141-8d68-841f854a12c8.JPG",
    caption: "The card that made it official.",
    date: "Month 1",
    location: "The card moment",
    funnyMetadata: "Renewed for another season",
    tags: ["ask out", "card", "official"]
  },
  {
    title: "The Fastest I Love You",
    type: "photo",
    src: "/memories/month1/IMG_7127.jpg",
    thumbnail: "/memories/month1/IMG_7127.jpg",
    caption: "Subtle was never really our thing.",
    date: "Month 1",
    location: "WhatsApp",
    funnyMetadata: "Critically acclaimed by nobody",
    tags: ["video", "playful", "movie moment"]
  },
  {
    title: "The One You Replay",
    type: "audio",
    src: "/memories/month1/AUDIO-2026-02-23-16-00-57.m4a",
    thumbnail: "/memories/month1/IMG_6230.PNG",
    caption: "The one you replay.",
    date: "Month 1",
    location: "Saved audio",
    funnyMetadata: "Contains emotional damage",
    tags: ["voice note", "replay"]
  }
];

const month1Extras: Memory[] = [];

const month2Base = "/memories/month2/month 2 ";

const month2Episodes: Memory[] = [
  {
    title: "Need To Hear Your Voice",
    type: "photo",
    src: `${month2Base}/IMG_7137.PNG`,
    thumbnail: `${month2Base}/IMG_7137.PNG`,
    caption: "Calls became a personality trait.",
    date: "Month 2",
    location: "WhatsApp",
    funnyMetadata: "Attachment detected",
    tags: ["calls", "miss you", "late night"]
  },
  {
    title: "FaceTime Skincare",
    type: "photo",
    src: `${month2Base}/IMG_6471.PNG`,
    thumbnail: `${month2Base}/IMG_6471.PNG`,
    caption: "Peak romance is watching someone do skincare.",
    date: "Month 2",
    location: "On call",
    funnyMetadata: "Living together lite",
    tags: ["facetime", "skincare", "comfort"]
  },
  {
    title: "Club Hi",
    type: "video",
    src: `${month2Base}/0A8A4628-8B9F-4103-AD22-7DCD701B0A84.MP4`,
    thumbnail: `${month2Base}/IMG_7134.PNG`,
    caption: "Every night out somehow became about her.",
    date: "Month 2",
    location: "Club",
    funnyMetadata: "Alcohol amplified the attachment problem",
    tags: ["video", "club", "drunk affection"]
  }
];

const month2Extras: Memory[] = [];

const month3Base = "/memories/month3/month 3";

const month3Episodes: Memory[] = [
  {
    title: "London to Istanbul",
    type: "photo",
    src: `${month3Base}/IMG_6717.PNG`,
    thumbnail: `${month3Base}/IMG_6717.PNG`,
    caption: "The fake Turkey flight looked just believable enough.",
    date: "15 Apr",
    location: "London to Istanbul",
    funnyMetadata: "Fake suspense build-up",
    tags: ["fake flight", "turkey", "lie"]
  },
  {
    title: "Mumbai Boarding",
    type: "photo",
    src: `${month3Base}/IMG_6720.jpg`,
    thumbnail: `${month3Base}/IMG_6720.jpg`,
    caption: "Hard cut. Real boarding pass. Mumbai.",
    date: "15 Apr",
    location: "Mumbai bound",
    funnyMetadata: "Distance collapsed",
    tags: ["boarding pass", "mumbai", "reveal"]
  },
  {
    title: "Mumbai Night",
    type: "video",
    src: `${month3Base}/IMG_6740.MOV`,
    thumbnail: `${month3Base}/B06BBB98-DBCF-47BD-8AAC-57BFBE4F29C3.JPG`,
    caption: "A raw little memory clip that interrupts the page like it came back by itself.",
    date: "Month 3",
    location: "Mumbai",
    funnyMetadata: "Raw and alive",
    tags: ["video", "mumbai", "clip"]
  }
];

const month3Extras: Memory[] = [];

const month4PhotoBase = "/memories/month 4/iloveimg-converted";
const month4DailyBase = "/memories/month 4/compressed";

const month4Episodes: Memory[] = [
  {
    title: "Elevator Archives",
    type: "photo",
    src: `${month4PhotoBase}/FullSizeRender 2.jpg`,
    thumbnail: `${month4PhotoBase}/FullSizeRender 2.jpg`,
    caption: "Four lifts, four frames, same running bit.",
    date: "Month 4",
    location: "London",
    funnyMetadata: "Recurring location",
    tags: ["lift", "couple", "archive"]
  },
  {
    title: "Pizza Bakers",
    type: "photo",
    src: `${month4PhotoBase}/IMG_6850.jpg`,
    thumbnail: `${month4PhotoBase}/IMG_6850.jpg`,
    caption: "Pizza slices, dip, and a proper food-date anchor.",
    date: "Month 4",
    location: "London",
    funnyMetadata: "Food-date episode",
    tags: ["pizza", "food", "date"]
  },
  {
    title: "Carousel Cam",
    type: "video",
    src: `${month4DailyBase}/IMG_7061.mov`,
    thumbnail: `${month4PhotoBase}/IMG_8359.jpg`,
    caption: "A carousel ride with the camera already rolling.",
    date: "Month 4",
    location: "London",
    funnyMetadata: "Daily vlog",
    tags: ["carousel", "vlog", "video"]
  }
];

const month4Extras: Memory[] = [];

const extrasRow = (items: Memory[]) => [
  {
    title: "Bloopers / Extra Memories",
    description: "A small shelf for the funny, chaotic, or not-quite-an-episode moments.",
    items
  }
];

export const eras: Era[] = [
  {
    id: "talking-stage",
    title: "Talking Stage",
    subtitle: "A dreamy prequel about overthinking, playlists, and the first sparks.",
    profileImage: "/memories/talking-stage/4c6f8dfb-a457-47e8-bb18-8ce405c49d8b.JPG",
    heroImage: "/memories/talking-stage/4c6f8dfb-a457-47e8-bb18-8ce405c49d8b.JPG",
    matchPercentage: 98,
    runtime: "Prequel",
    fakeGenres: ["Romance", "Chaos", "Late Night Calls", "Soft Launch"],
    vibe: "warm",
    memories: talkingStageEpisodes,
    categories: extrasRow(talkingStageExtras)
  },
  {
    id: "month-1",
    title: "Month 1",
    subtitle: "Exciting, playful, fast paced, and slightly ridiculous in the best way.",
    profileImage: "/memories/month1/324b13dd-4c51-44ab-bbfc-efdba698f37e.JPG",
    heroImage: "/memories/month1/b0e78c7d-2392-4141-8d68-841f854a12c8.JPG",
    matchPercentage: 99,
    runtime: "31 Days",
    fakeGenres: ["Romance", "Chaos", "Inside Jokes", "New Episodes"],
    vibe: "energetic",
    memories: month1Episodes,
    categories: extrasRow(month1Extras)
  },
  {
    id: "month-2",
    title: "Month 2",
    subtitle: "No dates. Just calls, texts, delusion, and attachment issues.",
    profileImage: `${month2Base}/IMG_6471.PNG`,
    heroImage: `${month2Base}/IMG_7137.PNG`,
    matchPercentage: 97,
    runtime: "29 Days",
    fakeGenres: ["Long Distance", "Late Night Calls", "Attachment Issues", "Drunk Affection"],
    vibe: "intimate",
    memories: month2Episodes,
    categories: extrasRow(month2Extras)
  },
  {
    id: "month-3",
    title: "Month 3",
    subtitle: "The surprise visit movie arc. Airport anticipation, Mumbai chaos, and becoming real-world attached.",
    profileImage: `${month3Base}/IMG_6724.jpg`,
    heroImage: `${month3Base}/IMG_6724.jpg`,
    matchPercentage: 100,
    runtime: "31 Days",
    fakeGenres: ["Surprise Visit", "Airport Romance", "Mumbai Chaos", "Soft Hours"],
    vibe: "polished",
    memories: month3Episodes,
    categories: extrasRow(month3Extras)
  },
  {
    id: "month-4",
    title: "Month 4",
    subtitle: "London routines, lift archives, food dates, daily vlogs, and one very serious M&S challenge.",
    profileImage: `${month4PhotoBase}/IMG_8359.jpg`,
    heroImage: `${month4PhotoBase}/IMG_8359.jpg`,
    matchPercentage: 99,
    runtime: "30 Days",
    fakeGenres: ["London Days", "Daily Vlogs", "Food Dates", "After Hours"],
    vibe: "warm",
    memories: month4Episodes,
    categories: extrasRow(month4Extras)
  }
];

export const getEra = (id: string) => eras.find((era) => era.id === id);

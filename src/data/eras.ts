export type MemoryType = "photo" | "video" | "audio";

export type MemoryLayout = "featured" | "wide" | "portrait" | "chat" | "object" | "video" | "scrapbook" | "sensitive";

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
  layout?: MemoryLayout;
  redacted?: boolean;
  smallOnly?: boolean;
};

export type MemorySection = {
  title: string;
  description: string;
  layout?: "feature" | "row" | "grid" | "video" | "chat" | "objects" | "polaroids";
  items: Memory[];
};

export type EraChapter = {
  id: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  intro: string;
  heroImage: string;
  featured: Memory;
  tags: string[];
  sections: MemorySection[];
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
  summary: string;
  memories: Memory[];
  categories: MemorySection[];
  chapters: EraChapter[];
};

const photo = (
  title: string,
  src: string,
  caption: string,
  tags: string[],
  options: Partial<Memory> = {}
): Memory => ({
  title,
  type: "photo",
  src,
  thumbnail: src,
  date: options.date ?? "Saved receipt",
  location: options.location ?? "Camera roll",
  funnyMetadata: options.funnyMetadata ?? "Archived correctly",
  tags,
  caption,
  layout: options.layout,
  redacted: options.redacted,
  smallOnly: options.smallOnly,
  song: options.song
});

const video = (
  title: string,
  src: string,
  thumbnail: string,
  caption: string,
  tags: string[],
  options: Partial<Memory> = {}
): Memory => ({
  title,
  type: "video",
  src,
  thumbnail,
  date: options.date ?? "Video memory",
  location: options.location ?? "Camera roll",
  funnyMetadata: options.funnyMetadata ?? "Playable evidence",
  tags,
  caption,
  layout: options.layout ?? "video",
  redacted: options.redacted,
  smallOnly: options.smallOnly,
  song: options.song
});

const audio = (
  title: string,
  src: string,
  thumbnail: string,
  caption: string,
  tags: string[],
  options: Partial<Memory> = {}
): Memory => ({
  title,
  type: "audio",
  src,
  thumbnail,
  date: options.date ?? "Audio memory",
  location: options.location ?? "Saved audio",
  funnyMetadata: options.funnyMetadata ?? "Replay material",
  tags,
  caption,
  layout: options.layout,
  song: options.song
});

const talkingBase = "/memories/talking-stage";
const month1Base = "/memories/month1";
const month2Base = "/memories/month2/month 2 ";
const month3Base = "/memories/month3/month 3";
const month4PhotoBase = "/memories/month 4/iloveimg-converted";
const month4DailyBase = "/memories/month 4/compressed";
const month4ChallengeBase = "/memories/month 4/month 4 vlog ";
const month5Base = "/memories/month 5 ";
const month6Base = "/memories/month 6 ";
const month7Base = "/memories/month 7 ";

const talkingTexts: Memory[] = [
  photo("Instagram DMs", `${talkingBase}/IMG_7123.PNG`, "This is where it technically started.", ["first texts", "instagram", "canon event"], {
    date: "The beginning",
    location: "Instagram DMs",
    funnyMetadata: "Pilot episode energy",
    layout: "chat"
  }),
  photo("Missed Chance", `${talkingBase}/IMG_7124.PNG`, "Then I disappeared for a bit. Classic.", ["ghosting arc", "prequel", "receipts"], {
    date: "The ghosting arc",
    location: "Instagram DMs",
    funnyMetadata: "Questionable strategy",
    layout: "chat"
  }),
  photo("Still There", `${talkingBase}/IMG_7125.PNG`, "The gap before the story picked itself back up.", ["prequel", "awkward", "receipts"], {
    date: "The ghosting arc",
    location: "Instagram DMs",
    funnyMetadata: "Foreshadowing",
    layout: "chat"
  }),
  photo("This Aged Well", `${talkingBase}/IMG_7126.PNG`, "One of those messages that got funnier later.", ["full circle", "instagram", "lore"], {
    date: "The ghosting arc",
    location: "Instagram DMs",
    funnyMetadata: "Aged suspiciously well",
    layout: "chat"
  })
];

const talkingComeback: Memory[] = [
  photo("WhatsApp Comeback", `${talkingBase}/IMG_7115.PNG`, "Somehow, the conversation found its way back.", ["comeback", "whatsapp", "chaos"], {
    date: "The return",
    location: "WhatsApp",
    funnyMetadata: "Renewed after cancellation",
    layout: "chat"
  }),
  photo("Photo Evidence", `${talkingBase}/IMG_7114.PNG`, "The photos started entering the plot.", ["photo evidence", "whatsapp", "soft launch"], {
    date: "The return",
    location: "WhatsApp",
    funnyMetadata: "Evidence submitted",
    layout: "chat"
  }),
  photo("Warm Again", `${talkingBase}/IMG_7116.PNG`, "The replies got warmer. The plot got obvious.", ["warm", "flirty", "active again"], {
    date: "The return",
    location: "WhatsApp",
    funnyMetadata: "Slow burn confirmed",
    layout: "chat"
  })
];

const talkingFlirty: Memory[] = [
  photo("Late-Night Honesty", `${talkingBase}/IMG_7117.PNG`, "The chat started sounding like feelings.", ["late night", "honest", "receipts"], {
    date: "Evidence folder",
    location: "WhatsApp",
    funnyMetadata: "Contains feelings",
    layout: "chat"
  }),
  photo("Voice Call Era", `${talkingBase}/IMG_7118.PNG`, "Calls got suspiciously normal.", ["voice call", "late night", "routine"], {
    date: "Evidence folder",
    location: "WhatsApp",
    funnyMetadata: "Basically dating",
    layout: "chat"
  }),
  photo("Same Same", `${talkingBase}/IMG_7119.PNG`, "Emotional attachment loading.", ["same wavelength", "attachment", "prequel"], {
    date: "Evidence folder",
    location: "WhatsApp",
    funnyMetadata: "Chemistry detected",
    layout: "chat"
  }),
  photo("Down Bad", `${talkingBase}/IMG_7120.PNG`, "Down bad evidence, respectfully archived.", ["down bad", "receipts", "flirty"], {
    date: "Evidence folder",
    location: "WhatsApp",
    funnyMetadata: "Not subtle anymore",
    layout: "chat"
  }),
  photo("Priority Detected", `${talkingBase}/IMG_7121.PNG`, "Priority detected. Nobody act surprised.", ["priority", "obvious", "soft"], {
    date: "Evidence folder",
    location: "WhatsApp",
    funnyMetadata: "The plot was loud",
    layout: "chat"
  }),
  photo("Miss You Era", `${talkingBase}/IMG_7122.PNG`, "Miss-you texts before the official label.", ["miss you", "soft", "almost us"], {
    date: "Evidence folder",
    location: "WhatsApp",
    funnyMetadata: "Basically dating",
    layout: "chat"
  })
];

const talkingAlmostUs: Memory[] = [
  photo("Basically Dating", `${talkingBase}/4c6f8dfb-a457-47e8-bb18-8ce405c49d8b.JPG`, "Before the label, after the feeling.", ["almost dating", "couple photo", "warm"], {
    date: "Before official",
    location: "Almost us",
    funnyMetadata: "Soft launch in progress",
    layout: "featured"
  }),
  photo("No Label Yet", `${talkingBase}/IMG_0652.JPG`, "No label yet, but the evidence was getting loud.", ["almost dating", "camera roll", "nostalgic"], {
    date: "Before official",
    location: "Almost us",
    funnyMetadata: "Romance arc loading",
    layout: "scrapbook"
  }),
  video("Director's Cut", `${talkingBase}/VIDEO-2026-06-02-23-33-36.mp4`, `${talkingBase}/4c6f8dfb-a457-47e8-bb18-8ce405c49d8b.JPG`, "Yeah, we were cooked.", ["video", "directors cut", "cooked"], {
    date: "Before official",
    location: "Behind the scenes",
    funnyMetadata: "No further questions"
  })
];

const askOut = video("The Ask-Out", `${month1Base}/VIDEO-2026-02-06-12-30-21.mp4`, `${month1Base}/b0e78c7d-2392-4141-8d68-841f854a12c8.JPG`, "The card that made it official.", ["ask out", "card", "official"], {
  date: "Month 1",
  location: "The card moment",
  funnyMetadata: "Season premiere"
});

const hoodie = photo("Gift Hoodie", `${month1Base}/6D584964-F926-4A20-93F6-D18F5EED81A7.JPG`, "The white hoodie she gave me, modelled with full mirror-selfie seriousness.", ["hoodie", "first gift", "soft"], {
  date: "Month 1",
  location: "Mirror selfie",
  funnyMetadata: "Gift hoodie confirmed",
  layout: "featured"
});

const month1Memories: Memory[] = [
  askOut,
  photo("The Fastest I Love You", `${month1Base}/IMG_7127.jpg`, "Subtle was never really our thing.", ["i love you", "speedrun", "romantic chaos"], {
    date: "Month 1",
    location: "WhatsApp",
    funnyMetadata: "Speedrun record",
    layout: "chat"
  }),
  hoodie,
  photo("Call Logs", `${month1Base}/IMG_7129.PNG`, "Apparently we had nothing to say, so we talked for hours.", ["calls", "routine", "hours"], {
    date: "Month 1",
    location: "WhatsApp",
    funnyMetadata: "Daily routine unlocked",
    layout: "chat"
  }),
  photo("Cute Calls", `${month1Base}/IMG_6230.PNG`, "One of those calls that just became part of the day.", ["video call", "cute", "daily"], {
    date: "Month 1",
    location: "Video call",
    funnyMetadata: "Nothing to say, somehow still talking",
    layout: "chat"
  }),
  photo("New Label", `${month1Base}/324b13dd-4c51-44ab-bbfc-efdba698f37e.JPG`, "New label, same chaos.", ["official", "couple", "month 1"], {
    date: "Month 1",
    location: "First official era",
    funnyMetadata: "Officially unserious",
    layout: "featured"
  }),
  photo("Same Chaos", `${month1Base}/b0e78c7d-2392-4141-8d68-841f854a12c8.JPG`, "Settled, but still not acting normal.", ["official", "warm", "chaos"], {
    date: "Month 1",
    location: "First official era",
    funnyMetadata: "Comfort arc started early",
    layout: "scrapbook"
  }),
  photo("Soft Launch", `${month1Base}/IMG_7128.PNG`, "Close Friends knew before the world did.", ["soft launch", "valentines", "close friends"], {
    date: "Valentine's Day",
    location: "Instagram story",
    funnyMetadata: "Public hint detected",
    layout: "chat"
  }),
  audio("The One You Replay", `${month1Base}/AUDIO-2026-02-23-16-00-57.m4a`, `${month1Base}/IMG_6230.PNG`, "The one you replay.", ["audio", "voice note", "intimate"], {
    date: "Month 1",
    location: "Saved audio",
    funnyMetadata: "Hidden memory"
  }),
  photo("Extra Mirror Receipt", `${month1Base}/a20ae329-f6d6-47a1-aabc-71ed7eda019a.JPG`, "Another tiny saved receipt from the speedrun era.", ["camera roll", "extra", "month 1"], {
    date: "Month 1",
    location: "Camera roll",
    funnyMetadata: "Emotionally valid filler",
    layout: "scrapbook"
  })
];

const month2Memories: Memory[] = [
  photo("Need To Hear Your Voice", `${month2Base}/IMG_7137.PNG`, "Miss you texts at criminal hours.", ["miss you", "calls", "late night"], {
    date: "03:00-ish",
    location: "WhatsApp",
    funnyMetadata: "Attachment detected",
    layout: "chat"
  }),
  photo("She Missed Me Proof", `${month2Base}/IMG_7133.PNG`, "She said she misses me and I obviously saved proof.", ["miss you", "attached", "late"], {
    date: "Month 2",
    location: "WhatsApp",
    funnyMetadata: "Evidence secured",
    layout: "chat"
  }),
  photo("24/7 Attachment", `${month2Base}/IMG_7136.PNG`, "Long distance but never quiet.", ["obsessed", "24/7", "delusion"], {
    date: "Month 2",
    location: "WhatsApp",
    funnyMetadata: "Unhealthy levels of cute",
    layout: "chat"
  }),
  photo("FaceTime Skincare", `${month2Base}/IMG_6471.PNG`, "Peak romance is watching someone do skincare.", ["facetime", "skincare", "comfort"], {
    date: "Month 2",
    location: "On call",
    funnyMetadata: "The FaceTime era",
    layout: "chat"
  }),
  photo("Living Together Lite", `${month2Base}/IMG_6435.PNG`, "We treated FaceTime like living together lite.", ["facetime", "ordinary", "real"], {
    date: "Month 2",
    location: "Bathroom call",
    funnyMetadata: "Domestic scene",
    layout: "chat"
  }),
  photo("Drunk Drunk Archives", `${month2Base}/IMG_7134.PNG`, "Alcohol amplified the attachment problem.", ["drunk texts", "club", "miss you"], {
    date: "04:51",
    location: "Night out",
    funnyMetadata: "Shot 7",
    layout: "chat"
  }),
  photo("Tipsy Tipsy", `${month2Base}/IMG_7131.PNG`, "Every night out somehow became about her.", ["tipsy", "chaos", "attachment"], {
    date: "03:54",
    location: "Night out",
    funnyMetadata: "Drunk affection",
    layout: "chat"
  }),
  video("Club Hello Transmission", `${month2Base}/0A8A4628-8B9F-4103-AD22-7DCD701B0A84.MP4`, `${month2Base}/IMG_7134.PNG`, "A whole club night, somehow still saying hi to her.", ["video", "club", "drunk affection"], {
    date: "Month 2",
    location: "Club",
    funnyMetadata: "Saying hi from the chaos"
  }),
  photo("After Dark: Mostly Respectfully", `${month2Base}/IMG_7132.PNG`, "We missed each other respectfully. Mostly.", ["after dark", "flirty", "blurred"], {
    date: "04:15",
    location: "WhatsApp",
    funnyMetadata: "Tastefully redacted",
    layout: "chat",
    redacted: true
  }),
  photo("Long Distance Fever", `${month2Base}/IMG_7135.PNG`, "Long distance but aggressively online.", ["long distance", "online", "missing"], {
    date: "Month 2",
    location: "London",
    funnyMetadata: "International attachment",
    layout: "chat"
  }),
  photo("Mango Report", `${month2Base}/PHOTO-2026-03-20-10-08-11.jpg`, "Cute picture saved because obviously.", ["mango", "saved", "missed her"], {
    date: "Month 2",
    location: "Her camera roll",
    funnyMetadata: "Screen time report",
    layout: "object"
  }),
  photo("Dog Cameo", `${month2Base}/PHOTO-2026-03-29-19-13-24.jpg`, "The dog files entered the archive early.", ["dog", "cute", "camera roll"], {
    date: "Month 2",
    location: "Her camera roll",
    funnyMetadata: "Saved immediately",
    layout: "object"
  })
];

const month3Memories: Memory[] = [
  photo("The Turkey Lie", `${month3Base}/IMG_6717.PNG`, "The fake London to Istanbul flight looked just believable enough.", ["fake flight", "turkey", "lie"], {
    date: "15 Apr",
    location: "London to Istanbul",
    funnyMetadata: "Fake suspense build-up",
    layout: "chat"
  }),
  photo("Fake Booking Screen", `${month3Base}/IMG_6718.PNG`, "The lie had UI evidence. Very committed bit.", ["fake ticket", "misdirection", "istanbul"], {
    date: "15 Apr",
    location: "Fake booking screen",
    funnyMetadata: "Detective arc",
    layout: "chat"
  }),
  photo("Mumbai Boarding", `${month3Base}/IMG_6720.jpg`, "Hard cut. Real boarding pass. Mumbai.", ["boarding pass", "mumbai", "reveal"], {
    date: "15 Apr",
    location: "Mumbai bound",
    funnyMetadata: "Distance collapsed",
    layout: "featured"
  }),
  photo("Sorry I'm Late", `${month3Base}/IMG_6803.jpg`, "Worth the wait.", ["sorry", "late", "title card"], {
    date: "Month 3",
    location: "Running back into the plot",
    funnyMetadata: "Title card moment",
    layout: "object"
  }),
  photo("Bar Plot", `${month3Base}/360CA0E6-48A9-41B3-815D-FE92522D9BA6.JPG`, "The night got loud fast.", ["bar", "mumbai", "night"], {
    date: "Month 3",
    location: "Bar / party",
    funnyMetadata: "Energy spike",
    layout: "scrapbook"
  }),
  photo("Mumbai Night", `${month3Base}/B06BBB98-DBCF-47BD-8AAC-57BFBE4F29C3.JPG`, "Young, reckless, obsessed, very Mumbai night.", ["bar", "party", "chaos"], {
    date: "Month 3",
    location: "Bar / party",
    funnyMetadata: "Camera flash required",
    layout: "scrapbook"
  }),
  photo("Cheek Kiss Chaos", `${month3Base}/ebcc11f8-6132-4e89-8a52-a58555bb129e.JPG`, "Blurry, loud, and very attached.", ["cheek kiss", "party", "low light"], {
    date: "Month 3",
    location: "Mumbai night",
    funnyMetadata: "Flashback material",
    layout: "scrapbook"
  }),
  video("Raw Mumbai Clip 1", `${month3Base}/IMG_6740.MOV`, `${month3Base}/B06BBB98-DBCF-47BD-8AAC-57BFBE4F29C3.JPG`, "A raw little memory clip that interrupts the page like it came back by itself.", ["video", "mumbai", "clip"], {
    date: "Month 3",
    location: "Mumbai",
    funnyMetadata: "Raw and alive"
  }),
  video("Raw Mumbai Clip 2", `${month3Base}/IMG_6767.MOV`, `${month3Base}/ebcc11f8-6132-4e89-8a52-a58555bb129e.JPG`, "Not polished. Better because of it.", ["video", "raw", "real"], {
    date: "Month 3",
    location: "Mumbai",
    funnyMetadata: "Memory resurfaced"
  }),
  photo("Mirror Hug", `${month3Base}/IMG_6726.jpg`, "Phone-world became real-world.", ["mirror", "hug", "together"], {
    date: "Month 3",
    location: "Soft hours",
    funnyMetadata: "Physical presence arc",
    layout: "featured"
  }),
  photo("Soft Mirror", `${month3Base}/IMG_6724.jpg`, "We were together now. That was the whole plot twist.", ["mirror", "kiss", "comfort"], {
    date: "Month 3",
    location: "Soft hours",
    funnyMetadata: "Distance collapsed",
    layout: "featured"
  }),
  photo("Holding On", `${month3Base}/IMG_6723.jpg`, "Two people accidentally becoming each other's routine.", ["mirror", "comfort", "routine"], {
    date: "Month 3",
    location: "Soft hours",
    funnyMetadata: "Attached in person",
    layout: "featured"
  }),
  photo("Thumbs Up Candid", `${month3Base}/IMG_6729.jpg`, "Accidental framing, very real feeling.", ["candid", "room", "comfort"], {
    date: "Month 3",
    location: "Mumbai",
    funnyMetadata: "Imperfect crop supremacy",
    layout: "scrapbook"
  })
];

const month4Photos: Memory[] = [
  photo("Tongue-Out Lift", `${month4PhotoBase}/IMG_8312.jpg`, "Strong opening lift energy.", ["lift", "playful", "candid"], {
    date: "Month 4",
    location: "Elevator archives",
    funnyMetadata: "Candid on purpose",
    layout: "scrapbook"
  }),
  photo("Bright Lift", `${month4PhotoBase}/FullSizeRender 2.jpg`, "One lift, another tiny episode.", ["lift", "couple", "bright"], {
    date: "Month 4",
    location: "Elevator archives",
    funnyMetadata: "Main lift image",
    layout: "featured"
  }),
  photo("Playful Close-Up", `${month4PhotoBase}/IMG_8368.jpg`, "The lift camera roll kept growing.", ["lift", "close-up", "playful"], {
    date: "Month 4",
    location: "Elevator archives",
    funnyMetadata: "Another floor, another photo",
    layout: "scrapbook"
  }),
  photo("Full-Length Lift", `${month4PhotoBase}/IMG_6848.jpg`, "A taller receipt from the elevator archive.", ["lift", "mirror", "portrait"], {
    date: "Month 4",
    location: "Elevator archives",
    funnyMetadata: "Full-body evidence",
    layout: "portrait"
  }),
  photo("Pizza Bakers", `${month4PhotoBase}/IMG_6850.jpg`, "Pizza slices, dip, and a proper food-date anchor.", ["pizza", "food date", "london"], {
    date: "Month 4",
    location: "Pizza Bakers",
    funnyMetadata: "Main course episode",
    layout: "object"
  }),
  photo("Ice Cream Outside", `${month4PhotoBase}/IMG_8359.jpg`, "Happy, outside, holding dessert.", ["ice cream", "couple", "happy"], {
    date: "Month 4",
    location: "London",
    funnyMetadata: "Dessert arc",
    layout: "featured"
  }),
  photo("Colourful Cafe Mirror", `${month4PhotoBase}/FullSizeRender.jpg`, "A London day out reflected back at us.", ["cafe", "mirror", "london"], {
    date: "Month 4",
    location: "London cafe",
    funnyMetadata: "Camera roll material",
    layout: "scrapbook"
  }),
  photo("Straw Engineering", `${month4PhotoBase}/IMG_8314.jpg`, "A silly daytime detail, preserved correctly.", ["drink", "casual", "detail"], {
    date: "Month 4",
    location: "Coffee stop",
    funnyMetadata: "Colourful straws department",
    layout: "object"
  }),
  photo("Golden Hour Deeya", `${month4PhotoBase}/IMG_6946.jpg`, "London slowed down for a minute.", ["golden hour", "portrait", "london"], {
    date: "Month 4",
    location: "Pub garden",
    funnyMetadata: "Golden-hour anchor",
    layout: "featured"
  }),
  photo("Camera Roll Detail", `${month4PhotoBase}/IMG_6853.jpg`, "A small overhead candid from the London camera roll.", ["candid", "camera", "detail"], {
    date: "Month 4",
    location: "Outside",
    funnyMetadata: "Editorial detail",
    layout: "scrapbook"
  }),
  photo("After Hours", `${month4PhotoBase}/FullSizeRender 3.jpg`, "Purple light, low visibility, very us.", ["club", "night out", "purple"], {
    date: "Month 4",
    location: "Night out",
    funnyMetadata: "Main night visual",
    layout: "featured"
  })
];

const month4Vlogs: Memory[] = [
  video("Carousel Cam", `${month4DailyBase}/IMG_7061.mov`, `${month4PhotoBase}/IMG_8359.jpg`, "A carousel ride with the camera already rolling.", ["carousel", "video", "day out"], { date: "Month 4", location: "London day out", funnyMetadata: "Daily vlog" }),
  video("Starting The Day", `${month4DailyBase}/IMG_6849.mov`, `${month4PhotoBase}/FullSizeRender.jpg`, "Walking in, talking already, camera naturally on.", ["walk and talk", "video", "london"], { date: "Month 4", location: "London", funnyMetadata: "Daily vlog" }),
  video("Sunny Brick-Wall Update", `${month4DailyBase}/IMG_6900.mov`, `${month4PhotoBase}/IMG_6853.jpg`, "A bright London update in the middle of the day.", ["sunny", "street", "video"], { date: "Month 4", location: "London street", funnyMetadata: "Daily vlog" }),
  video("Street Commentary", `${month4DailyBase}/IMG_7029.mov`, `${month4PhotoBase}/IMG_6946.jpg`, "Deeya narrating the day while London keeps moving.", ["commentary", "street", "video"], { date: "Month 4", location: "London street", funnyMetadata: "Daily vlog" }),
  video("Rajveer At Topgolf", `${month4DailyBase}/IMG_7017.mov`, `${month4PhotoBase}/IMG_8312.jpg`, "Night skyline, golf club, confidence pending.", ["topgolf", "night", "video"], { date: "Month 4", location: "Topgolf", funnyMetadata: "Daily vlog" }),
  video("Deeya At Topgolf", `${month4DailyBase}/IMG_7019.mov`, `${month4PhotoBase}/IMG_8368.jpg`, "Same range, different swing, same running commentary.", ["topgolf", "night", "video"], { date: "Month 4", location: "Topgolf", funnyMetadata: "Daily vlog" }),
  video("Lift Lobby Vlog", `${month4DailyBase}/IMG_8371.mov`, `${month4PhotoBase}/FullSizeRender 2.jpg`, "Even leaving the lift became a vlog segment.", ["lift", "day out", "video"], { date: "Month 4", location: "Lift lobby", funnyMetadata: "Daily vlog" }),
  video("Ice Cream Walk", `${month4DailyBase}/IMG_6956.mov`, `${month4PhotoBase}/IMG_8359.jpg`, "Dessert in hand, camera still rolling.", ["ice cream", "walk", "video"], { date: "Month 4", location: "London", funnyMetadata: "Daily vlog" }),
  video("Walk Home Outtake", `${month4DailyBase}/IMG_6991.mov`, `${month4PhotoBase}/IMG_6853.jpg`, "The kind of clip that exists because everything got documented.", ["walk", "outtake", "video"], { date: "Month 4", location: "London", funnyMetadata: "Daily vlog" })
];

const challengeSources = ["IMG_7093 2.MOV", "IMG_7094 2.MOV", "IMG_7095 2.MOV", "IMG_7096 2.MOV", "IMG_7097 2.MOV"];

const month4Challenge = challengeSources.map((filename, index) =>
  video(`M&S Challenge - Part ${index + 1}`, `${month4ChallengeBase}/${filename}`, `${month4PhotoBase}/IMG_6850.jpg`, "Rock Paper Scissors decided another part of the meal.", ["m&s", "challenge", "rock paper scissors"], {
    date: "Month 4",
    location: "M&S",
    funnyMetadata: `Round ${index + 1} evidence`
  })
);

const month4Memories = [...month4Photos, ...month4Vlogs, ...month4Challenge];

const month5Memories: Memory[] = [
  photo("Baby Deeya Unlocked", `${month5Base}/PHOTO-2026-06-26-18-50-59.jpg`, "Tiny tutti fruity lore. Very important archival material.", ["baby archive", "family archive", "soft"], {
    date: "Month 5",
    location: "Baby archive",
    funnyMetadata: "Baby Deeya unlocked",
    layout: "scrapbook"
  }),
  photo("Birthday Archive", `${month5Base}/PHOTO-2026-06-16-01-05-05.jpg`, "Old photo energy, family archive side quest.", ["family archive", "baby archive", "nostalgia"], {
    date: "Month 5",
    location: "Family archive",
    funnyMetadata: "Family archive side quest",
    layout: "scrapbook"
  }),
  photo("Long Distance Check-In", `${month5Base}/IMG_7280.PNG`, "Casual FaceTime check-in, maximum forehead, maximum comfort.", ["long distance", "facetime", "soft"], {
    date: "Month 5",
    location: "FaceTime",
    funnyMetadata: "Long distance leftovers",
    layout: "chat"
  }),
  photo("Bueno Ritual Spotted", `${month5Base}/2DAA08BA-3E81-4EC8-B39D-4D7D2131B46F.JPG`, "Bueno was our ritual. I saw it and thought of her.", ["food evidence", "ritual", "reminder"], {
    date: "Month 5",
    location: "Random reminder",
    funnyMetadata: "Bueno ritual spotted",
    layout: "object"
  }),
  photo("Dog Comfort File", `${month5Base}/PHOTO-2026-06-16-01-19-35.jpg`, "Her with the dog. Immediate comfort memory.", ["dog files", "comfort", "cute"], {
    date: "Month 5",
    location: "Dog files",
    funnyMetadata: "Comfort evidence",
    layout: "scrapbook"
  }),
  video("Pokemon Allegations", `${month5Base}/7ED0350F-03F7-4F10-BE91-F84B94720B50.MP4`, `${month5Base}/2DAA08BA-3E81-4EC8-B39D-4D7D2131B46F.JPG`, "Inferno reminded me of her because apparently Pokemon allegations were active.", ["video", "pokemon allegations", "random reminder"], {
    date: "Month 5",
    location: "Random reminder",
    funnyMetadata: "Pokemon allegations"
  }),
  photo("Sibling Cameo", `${month5Base}/PHOTO-2026-06-16-01-06-14.jpg`, "Old-family-memory softness entered the chat.", ["family archive", "siblings", "soft"], {
    date: "Month 5",
    location: "Family archive",
    funnyMetadata: "Family cameo",
    layout: "scrapbook"
  }),
  photo("Brothers Archive", `${month5Base}/PHOTO-2026-06-16-01-05-45.jpg`, "Family photo evidence, saved gently.", ["family archive", "brothers", "nostalgia"], {
    date: "Month 5",
    location: "Family archive",
    funnyMetadata: "Old photo sweetness",
    layout: "scrapbook"
  })
];

const month6Memories: Memory[] = [
  photo("Nail Inspo Department", `${month6Base}/PHOTO-2026-07-11-12-54-29.jpg`, "She showed me the nail plan. Obviously this became archival.", ["nail inspo", "tiny detail", "daily life"], {
    date: "Month 6",
    location: "Phone screen",
    funnyMetadata: "Nail committee",
    layout: "object"
  }),
  photo("Missed-You Tears", `${month6Base}/IMG_7432.PNG`, "I screenshotted her crying because I am sentimental and unserious.", ["missing", "facetime", "dramatic"], {
    date: "Month 6",
    location: "FaceTime",
    funnyMetadata: "Saved on purpose",
    layout: "chat"
  }),
  photo("Bombay Gymkhana Card", `${month6Base}/IMG_7473-web.jpg`, "Very valuable. Very funny. Displayed tiny for privacy.", ["bombay gym", "membership lore", "small only"], {
    date: "Month 6",
    location: "Bombay Gymkhana",
    funnyMetadata: "Tiny because private",
    layout: "sensitive",
    smallOnly: true
  }),
  photo("Pizza Research Update", `${month6Base}/IMG_7424-web.jpg`, "A food photo I wanted to send her because we talk about everything.", ["food evidence", "pizza", "daily update"], {
    date: "Month 6",
    location: "Food update",
    funnyMetadata: "Sent because obviously",
    layout: "object"
  }),
  photo("Wordle Ping", `${month6Base}/PHOTO-2026-08-05-09-36-28.jpg`, "The little game screenshot phase kept sneaking in.", ["wordle", "screenshot", "daily life"], {
    date: "Month 6",
    location: "Phone game",
    funnyMetadata: "Brain rot but cute",
    layout: "chat"
  }),
  photo("Three Cigarettes Together", `${month6Base}/IMG_7490-web.jpg`, "Iconic, chaotic, absolutely not normal.", ["party archive", "chaotic", "iconic"], {
    date: "Month 6",
    location: "Bombay Gym",
    funnyMetadata: "Three at once is a thesis",
    layout: "featured"
  }),
  photo("Dream Breakup Complaint", `${month6Base}/IMG_7434.PNG`, "She said I broke up with her in her dream. Ridiculous and canon.", ["dream breakup", "chat", "dramatic"], {
    date: "Month 6",
    location: "WhatsApp",
    funnyMetadata: "Dream me is on thin ice",
    layout: "chat"
  }),
  photo("After Dark Fight Club", `${month6Base}/IMG_7484.PNG`, "Play-fighting texts, tastefully filed under after dark.", ["after dark", "chat", "teasing"], {
    date: "Month 6",
    location: "WhatsApp",
    funnyMetadata: "Tastefully redacted",
    layout: "chat",
    redacted: true
  }),
  photo("Studying With Backup", `${month6Base}/PHOTO-2026-07-30-23-41-34.jpg`, "Studying, losing it, and tiny study supervision.", ["studying", "dog files", "daily life"], {
    date: "Month 6",
    location: "Study mode",
    funnyMetadata: "Academic survival",
    layout: "wide"
  }),
  photo("Stavyah's House Chill", `${month6Base}/1699c500-b397-463a-8ce9-039b7f0c6640.JPG`, "After work chill because my house was full or something.", ["domestic chaos", "house visit", "soft"], {
    date: "Month 6",
    location: "Stavyah's house",
    funnyMetadata: "Couch cameo",
    layout: "featured"
  }),
  photo("Notes And Losing It", `${month6Base}/PHOTO-2026-07-25-01-22-05.jpg`, "Medical notes, handwriting, and emotional collapse nearby.", ["studying", "notes", "dramatic"], {
    date: "Month 6",
    location: "Study mode",
    funnyMetadata: "She was losing it",
    layout: "object"
  }),
  photo("I Ruined Casper's With Research", `${month6Base}/PHOTO-2026-07-23-17-52-02.jpg`, "She wanted Casper's. I researched too hard. Date idea cancelled.", ["food evidence", "research", "inside joke"], {
    date: "Month 6",
    location: "Google search",
    funnyMetadata: "Restaurant ruined by research",
    layout: "chat"
  }),
  photo("Bombay Jam", `${month6Base}/IMG_7476-web.jpg`, "Bombay Gym moment after she spilled something. Naturally saved.", ["bombay gym", "food evidence", "chaotic"], {
    date: "Month 6",
    location: "Bombay Gym",
    funnyMetadata: "Bombay Jam moment",
    layout: "featured"
  }),
  photo("Chip The Handsome", `${month6Base}/PHOTO-2026-08-04-15-13-32.jpg`, "Chip is sweet and handsome and may still murder me.", ["dog files", "chip", "comfort"], {
    date: "Month 6",
    location: "Dog files",
    funnyMetadata: "Will sadly never meet me",
    layout: "featured"
  }),
  photo("Elle Kennedy Shelf", `${month6Base}/PHOTO-2026-07-20-18-00-49.jpg`, "Book series she likes, archived as character development.", ["books", "elle kennedy", "her taste"], {
    date: "Month 6",
    location: "Book lore",
    funnyMetadata: "Briar U syllabus",
    layout: "object"
  }),
  photo("Croffle Guys Sighting", `${month6Base}/PHOTO-2026-07-26-22-00-56.jpg`, "Croffle Guys sighted. Immediate Deeya association.", ["croffle guys", "food evidence", "ritual"], {
    date: "Month 6",
    location: "Croffle Guys",
    funnyMetadata: "She loves this place",
    layout: "object"
  }),
  photo("Chip Seat Theft", `${month6Base}/PHOTO-2026-08-05-16-53-56.jpg`, "Chip looking handsome and strategically in my future danger zone.", ["dog files", "chip", "comfort"], {
    date: "Month 6",
    location: "Dog files",
    funnyMetadata: "Handsome menace",
    layout: "portrait"
  }),
  photo("Random Food Update", `${month6Base}/IMG_7430-web.jpg`, "Another food update, because we talk about everything.", ["food evidence", "daily update", "random"], {
    date: "Month 6",
    location: "Food update",
    funnyMetadata: "Everything gets reported",
    layout: "object"
  })
];

const month7Memories: Memory[] = [
  photo("Boujee Sighting", `${month7Base}/7C2F39EC-34F8-4B2F-A85E-D4357E4B4E7B.JPG`, "She loves Boujee, so I take evidence when I see it.", ["boujee", "food evidence", "ritual"], {
    date: "Month 7",
    location: "Boujee Espresso Bar",
    funnyMetadata: "Boujee radar active",
    layout: "object"
  }),
  photo("Crossword Screenshot 1", `${month7Base}/54A97157-E3C2-44DD-AE45-EEAA1DCE7DBD.PNG`, "I never told her about this. I just weirdly screenshotted it and kept it.", ["crossword lore", "silent screenshots", "screenshots"], {
    date: "Month 7",
    location: "Crossword archive",
    funnyMetadata: "Unsent but saved",
    layout: "chat"
  }),
  photo("Crossword Screenshot 2", `${month7Base}/AD60E01A-1F62-4E6C-850E-50A9EE5247B2.PNG`, "Another clue I never sent her, just quietly saved for no clear reason.", ["crossword lore", "silent screenshots", "screenshots"], {
    date: "Month 7",
    location: "Crossword archive",
    funnyMetadata: "Clue became lore",
    layout: "chat"
  }),
  photo("Bathroom Party Strip", `${month7Base}/IMG_7580.jpg`, "Party photos migrate to the bathroom. Cinema.", ["party archive", "group photo", "chaos"], {
    date: "Month 7",
    location: "Party",
    funnyMetadata: "Borderline blackout universe",
    layout: "scrapbook"
  }),
  photo("Seven-Month Sofa Cuddle", `${month7Base}/0a9b70fe-9c7c-472e-8387-3e30b118a591.JPG`, "Both of us borderline blackout drunk, cuddling on a sofa, and somehow still cute.", ["party archive", "seven months", "sofa cuddle"], {
    date: "7 Sep",
    location: "Party",
    funnyMetadata: "Chaotic anniversary evidence",
    layout: "featured"
  }),
  photo("Crossword Screenshot 3", `${month7Base}/E99E6E28-2B51-443D-9CDC-7FCA1748C027.JPG`, "I do not know why I kept taking screenshots of these. I just did.", ["crossword lore", "silent screenshots", "screenshots"], {
    date: "Month 7",
    location: "Crossword archive",
    funnyMetadata: "Very normal behaviour",
    layout: "chat"
  }),
  photo("Ignored For One Day", `${month7Base}/IMG_7524.PNG`, "When she ignores me for one day: dramatic boyfriend edition.", ["meme", "dramatic boyfriend", "chat"], {
    date: "Month 7",
    location: "Screenshot archive",
    funnyMetadata: "Self-awareness arrived late",
    layout: "chat"
  }),
  photo("Deeya Was Right Again", `${month7Base}/D29F2D02-CBC4-4F6F-B0CD-1D143C884A5B.JPG`, "KitKat latte idea was bad. Deeya was right again.", ["kitkat latte", "food evidence", "funny"], {
    date: "Month 7",
    location: "Small object file",
    funnyMetadata: "Nescafe KitKat latte",
    layout: "object"
  }),
  photo("Living Room Committee", `${month7Base}/PHOTO-2026-09-02-14-43-14.jpg`, "Future house planning committee entered the chat.", ["future house planning", "interiors", "side quest"], {
    date: "Month 7",
    location: "Interior design side quest",
    funnyMetadata: "Planning the imaginary foyer",
    layout: "object"
  }),
  photo("Fluted Glass Agenda", `${month7Base}/PHOTO-2026-09-02-14-27-09.jpg`, "Fluted glass got promoted to relationship lore.", ["future house planning", "fluted glass", "interiors"], {
    date: "Month 7",
    location: "Interior design side quest",
    funnyMetadata: "Serious committee work",
    layout: "object"
  }),
  photo("My Beard At Inka", `${month7Base}/1ea31838-5113-4abf-bc47-f2274f91a9e3.JPG`, "Kissing Vian while Deeya smiles. My beard, lovingly documented.", ["inka", "party archive", "inside joke"], {
    date: "Month 7",
    location: "Inka",
    funnyMetadata: "Beard lore confirmed",
    layout: "featured"
  }),
  photo("Pinky Bua Approval", `${month7Base}/IMG_7501.PNG`, "Bandra, coffee, and very cute family approval.", ["family approval", "bandra", "coffee"], {
    date: "Month 7",
    location: "WhatsApp",
    funnyMetadata: "Approved by Pinky Bua",
    layout: "chat"
  }),
  photo("Mother's Closet Champion", `${month7Base}/IMG_7515.jpg`, "She fit into her mother's closet. A heroic spatial achievement.", ["closet lore", "funny", "tiny human"], {
    date: "Month 7",
    location: "Closet archive",
    funnyMetadata: "Closet side quest",
    layout: "featured"
  }),
  video("TikTok Evidence", `${month7Base}/VIDEO-2026-09-01-23-42-39.mp4`, `${month7Base}/IMG_7515.jpg`, "Her and Sonia trying to do TikToks. She hates it. I love it.", ["video", "tiktok evidence", "sonia"], {
    date: "Month 7",
    location: "Denied evidence folder",
    funnyMetadata: "She will deny this"
  }),
  photo("Main-Feed Inka Photo", `${month7Base}/d9edcd50-f8d4-429f-b0a9-82b1c33fe79b.JPG`, "The Inka picture important enough for the main.", ["inka", "main post", "couple"], {
    date: "Month 7",
    location: "Inka",
    funnyMetadata: "Main feed certified",
    layout: "featured"
  }),
  photo("Beena Aunty Warmth", `${month7Base}/IMG_7613.PNG`, "She was there the whole night and made the birthday special.", ["family approval", "birthday", "warmth"], {
    date: "Month 7",
    location: "WhatsApp",
    funnyMetadata: "Family warmth unlocked",
    layout: "chat"
  })
];

const beginningChapter: EraChapter = {
  id: "talking-stage-month-1",
  title: "Talking Stage + Month 1",
  eyebrow: "The Beginning",
  subtitle: "Before We Were Us, then immediately official.",
  intro: "The texts, the comeback, the card, the hoodie, and the speedrun that somehow became the whole show.",
  heroImage: `${talkingBase}/4c6f8dfb-a457-47e8-bb18-8ce405c49d8b.JPG`,
  featured: askOut,
  tags: ["first texts", "ask out card", "gift hoodie", "speedrun"],
  sections: [
    { title: "Origin Receipts", description: "The first messages, the disappearing act, and the prequel evidence.", layout: "chat", items: talkingTexts },
    { title: "The Comeback", description: "WhatsApp came back online and immediately started acting suspicious.", layout: "chat", items: talkingComeback },
    { title: "Basically Dating Already", description: "Flirty texts, soft proof, and the video that explained everything.", layout: "polaroids", items: [...talkingFlirty, ...talkingAlmostUs] },
    { title: "Official In Record Time", description: "The card, the words, the hoodie, and the first official receipts.", layout: "feature", items: [askOut, hoodie, ...month1Memories.filter((item) => item !== askOut && item !== hoodie)] }
  ]
};

const month2Chapter: EraChapter = {
  id: "month-2",
  title: "Month 2",
  eyebrow: "Long Distance Fever",
  subtitle: "We did not meet. The texts were still insane.",
  intro: "Long distance but never quiet: missing each other, late-night calls, drunk texts, FaceTimes, cute pictures, and a few after-dark cards kept tastefully blurred.",
  heroImage: `${month2Base}/IMG_6471.PNG`,
  featured: month2Memories[7],
  tags: ["long distance", "miss you", "drunk texts", "facetime"],
  sections: [
    { title: "Miss You Texts At Criminal Hours", description: "Screenshots saying the quiet part very loudly.", layout: "chat", items: month2Memories.slice(0, 3) },
    { title: "The FaceTime Era", description: "We were not together physically, so FaceTime became the room.", layout: "chat", items: month2Memories.slice(3, 5) },
    { title: "Drunk Drunk Archives", description: "Night out, still attached. A club hello transmission included.", layout: "video", items: month2Memories.slice(5, 8) },
    { title: "After Dark, Mostly Respectfully", description: "Cheeky receipts with the main page doing the polite blur.", layout: "chat", items: [month2Memories[8]] },
    { title: "Cute Camera Roll Proof", description: "Cute pictures, dog files, and small saved things because I missed her.", layout: "objects", items: month2Memories.slice(9) }
  ]
};

const month3Chapter: EraChapter = {
  id: "month-3",
  title: "Month 3: The Mumbai Plot Twist",
  eyebrow: "Mumbai",
  subtitle: "The prank turned into the chapter.",
  intro: "First the fake Turkey flight, then the real boarding pass, then Mumbai: bars, mirror selfies, food-date bits, and phone-world becoming real-world.",
  heroImage: `${month3Base}/IMG_6724.jpg`,
  featured: month3Memories[10],
  tags: ["turkey lie", "mumbai reveal", "party archive", "soft hours"],
  sections: [
    { title: "The Turkey Lie", description: "Fake London to Istanbul screenshots first. Very committed bit.", layout: "chat", items: month3Memories.slice(0, 2) },
    { title: "Actual Mumbai Reveal", description: "Hard cut to the real travel proof and the card that said everything.", layout: "feature", items: month3Memories.slice(2, 4) },
    { title: "Mumbai Night Pictures", description: "Party/night pictures, cheek-kiss chaos, and raw clips.", layout: "video", items: month3Memories.slice(4, 9) },
    { title: "Soft Mumbai Stuff", description: "Mirror selfies, couple photos, and being in the same room again.", layout: "grid", items: month3Memories.slice(9) }
  ]
};

const month4Chapter: EraChapter = {
  id: "month-4",
  title: "Month 4: London Days",
  eyebrow: "London",
  subtitle: "Daily vlogs, cute routine, and her being here.",
  intro: "Month 4 is all London routine: lift archives, food dates, daily vlogs, Topgolf clips, and the very serious M&S Challenge.",
  heroImage: `${month4PhotoBase}/IMG_8359.jpg`,
  featured: month4Photos[5],
  tags: ["london days", "daily vlogs", "m&s challenge", "routine"],
  sections: [
    { title: "Elevator Archives", description: "Four lifts, four frames, same running bit.", layout: "grid", items: month4Photos.slice(0, 4) },
    { title: "Food Dates And Small Details", description: "Pizza, ice cream, straws, golden hour, and tiny London anchors.", layout: "objects", items: month4Photos.slice(4, 10) },
    { title: "Daily Vlogs", description: "Nine clips because apparently everything needed a vlog.", layout: "video", items: month4Vlogs },
    { title: "The M&S Challenge", description: "Rock Paper Scissors decided appetiser, main, dessert, and drink. Serious cinema.", layout: "video", items: month4Challenge },
    { title: "After Hours", description: "Purple light, low visibility, loud memory.", layout: "feature", items: [month4Photos[10]] }
  ]
};

const month5Chapter: EraChapter = {
  id: "month-5",
  title: "Month 5: Quiet Long Distance",
  eyebrow: "Quiet Long Distance",
  subtitle: "Quiet month, loud missing.",
  intro: "She had gone home, so this month was quieter. Mostly missing her, random reminders, baby pictures, Bueno rituals, and small things that felt like her.",
  heroImage: `${month5Base}/PHOTO-2026-06-26-18-50-59.jpg`,
  featured: month5Memories[3],
  tags: ["long distance", "bueno ritual", "baby archive", "dog files"],
  sections: [
    { title: "Tiny Rituals And Random Reminders", description: "Bueno, Pokemon allegations, and the things that immediately felt like her.", layout: "video", items: [month5Memories[3], month5Memories[5], month5Memories[2]] },
    { title: "Baby Archive / Family Archive", description: "Soft old photos, baby Deeya unlocked, and family archive side quests.", layout: "polaroids", items: [month5Memories[0], month5Memories[1], month5Memories[6], month5Memories[7]] },
    { title: "Dog Comfort", description: "Cute comfort memory because the dog files always matter.", layout: "objects", items: [month5Memories[4]] }
  ]
};

const month6Chapter: EraChapter = {
  id: "month-6",
  title: "Month 6: Everyday Chaos",
  eyebrow: "Everyday Chaos",
  subtitle: "Food updates, dogs, studying, and dramatic evidence.",
  intro: "This month was everyday chaos. Food updates, missed-you tears, dream breakups, dogs, studying, Croffle Guys, and me ruining restaurants with research.",
  heroImage: `${month6Base}/1699c500-b397-463a-8ce9-039b7f0c6640.JPG`,
  featured: month6Memories[9],
  tags: ["domestic chaos", "food evidence", "dog files", "studying"],
  sections: [
    { title: "Missing Each Other, Dramatically", description: "Crying because she missed me, dream breakups, and redacted play-fight lore.", layout: "chat", items: [month6Memories[1], month6Memories[6], month6Memories[7]] },
    { title: "Domestic Chaos And Bombay Gym", description: "Stavyah's house, Bombay Jam, tiny membership-card lore, and one iconic cigarette photo.", layout: "feature", items: [month6Memories[9], month6Memories[12], month6Memories[2], month6Memories[5]] },
    { title: "Food Evidence", description: "Pizza updates, Croffle Guys, dumplings, and Casper's getting ruined by research.", layout: "objects", items: [month6Memories[3], month6Memories[17], month6Memories[15], month6Memories[11]] },
    { title: "Study Mode And Tiny Preferences", description: "Notes, nail inspo, Elle Kennedy, Wordle, and her losing it a little.", layout: "grid", items: [month6Memories[8], month6Memories[10], month6Memories[0], month6Memories[14], month6Memories[4]] },
    { title: "Chip Files", description: "Chip is sweet and handsome and, tragically, may never meet me.", layout: "polaroids", items: [month6Memories[13], month6Memories[16]] }
  ]
};

const month7Chapter: EraChapter = {
  id: "month-7",
  title: "Month 7: Seven Months Later",
  eyebrow: "Seven Months Later",
  subtitle: "Louder, more social, more normal-life us.",
  intro: "Seven months in, the archive got louder. Parties, family approvals, Boujee sightings, bad KitKat latte, crosswords, future house planning, and TikTok evidence she will deny.",
  heroImage: `${month7Base}/0a9b70fe-9c7c-472e-8387-3e30b118a591.JPG`,
  featured: month7Memories[4],
  tags: ["family approval", "crossword lore", "party archive", "future house planning"],
  sections: [
    { title: "Seven-Month Party Strip", description: "Borderline blackout, cuddling on a sofa, and very much part of the main story now.", layout: "grid", items: [month7Memories[4], month7Memories[3], month7Memories[10], month7Memories[14]] },
    { title: "Crossword Clues I Never Sent", description: "I never really told her about these. I just weirdly kept taking screenshots and I do not know why.", layout: "chat", items: [month7Memories[1], month7Memories[2], month7Memories[5]] },
    { title: "Family Approval Arc", description: "Pinky Bua, Bandra coffee, Beena Aunty warmth, and normal-life integration.", layout: "chat", items: [month7Memories[11], month7Memories[15]] },
    { title: "Things That Reminded Me Of Her", description: "Boujee sightings and the KitKat latte where Deeya was right again.", layout: "objects", items: [month7Memories[0], month7Memories[7]] },
    { title: "Future House Planning Committee", description: "Interior design side quest: living rooms, fluted glass, and serious imaginary-home work.", layout: "objects", items: [month7Memories[8], month7Memories[9]] },
    { title: "Funny Evidence", description: "Closet physics, dramatic boyfriend screenshots, and TikTok evidence she will deny.", layout: "video", items: [month7Memories[12], month7Memories[6], month7Memories[13]] }
  ]
};

const beginningMemories = [...talkingTexts, ...talkingComeback, ...talkingFlirty, ...talkingAlmostUs, ...month1Memories];
const mumbaiLondonMemories = [...month3Memories, ...month4Memories];
const summerMemories = [...month5Memories, ...month6Memories, ...month7Memories];

export const eras: Era[] = [
  {
    id: "the-beginning",
    title: "The Beginning",
    subtitle: "Talking Stage + Month 1",
    profileImage: `${month1Base}/324b13dd-4c51-44ab-bbfc-efdba698f37e.JPG`,
    heroImage: `${talkingBase}/4c6f8dfb-a457-47e8-bb18-8ce405c49d8b.JPG`,
    matchPercentage: 99,
    runtime: "Prequel + Month 1",
    fakeGenres: ["First Texts", "Ask-Out Card", "Gift Hoodie", "Speedrun"],
    vibe: "warm",
    summary: "The origin story: DMs, comeback energy, the card that made it official, the white hoodie, and one relationship speedrun with no subtlety.",
    memories: beginningMemories,
    categories: beginningChapter.sections,
    chapters: [beginningChapter]
  },
  {
    id: "long-distance-fever",
    title: "Long Distance Fever",
    subtitle: "Month 2",
    profileImage: `${month2Base}/IMG_6471.PNG`,
    heroImage: `${month2Base}/IMG_7137.PNG`,
    matchPercentage: 97,
    runtime: "29 Days",
    fakeGenres: ["Long Distance", "Late Night Calls", "Drunk Affection", "After Dark"],
    vibe: "intimate",
    summary: "We did not meet, but the texts were insane and adorable: miss-you receipts, FaceTimes, club hellos, drunk affection, cute pictures, and tasteful after-dark chaos.",
    memories: month2Memories,
    categories: month2Chapter.sections,
    chapters: [month2Chapter]
  },
  {
    id: "mumbai-to-london",
    title: "Mumbai to London",
    subtitle: "Months 3 + 4",
    profileImage: `${month3Base}/IMG_6724.jpg`,
    heroImage: `${month4PhotoBase}/IMG_8359.jpg`,
    matchPercentage: 100,
    runtime: "Two-City Special",
    fakeGenres: ["Turkey Lie", "Mumbai Reveal", "London Days", "M&S Challenge"],
    vibe: "polished",
    summary: "The prank became Mumbai, then Mumbai became London days: fake flights, real boarding, mirror selfies, daily vlogs, Topgolf, food dates, and the M&S Challenge.",
    memories: mumbaiLondonMemories,
    categories: [...month3Chapter.sections, ...month4Chapter.sections],
    chapters: [month3Chapter, month4Chapter]
  },
  {
    id: "summer-archive",
    title: "Summer Archive",
    subtitle: "Months 5 + 6 + 7",
    profileImage: `${month7Base}/d9edcd50-f8d4-429f-b0a9-82b1c33fe79b.JPG`,
    heroImage: `${month7Base}/d9edcd50-f8d4-429f-b0a9-82b1c33fe79b.JPG`,
    matchPercentage: 99,
    runtime: "Months 5-7",
    fakeGenres: ["Long Distance", "Food Evidence", "Family Approval", "Crossword Lore"],
    vibe: "scrapbook",
    summary: "Long distance, tiny rituals, dramatic texts, family cameos, food evidence, dogs, crosswords, and somehow seven months.",
    memories: summerMemories,
    categories: [...month5Chapter.sections, ...month6Chapter.sections, ...month7Chapter.sections],
    chapters: [month5Chapter, month6Chapter, month7Chapter]
  }
];

export const getEra = (id: string) => eras.find((era) => era.id === id);

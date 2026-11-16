// Meta rewrite (16 Nov 2026) — keyword-first titles + descriptions.
// Built from keyword-map-2026-11-16.csv (639 keywords). Rules:
// - Title <= 60 chars: primary keyword EXACT and FIRST, one supporting keyword if it fits.
// - Meta <= 160 chars: natural sentence with primary + 1-2 supporting keywords, exact wording.
// - Copy says "free, no sign-up" — NEVER "no ads" anywhere.
// - Only real map keywords used; no branded, typo, non-English or "best" terms.
// - /word-counter/, comparison and embed pages have 0 mapped keywords — written from
//   the page topic. Trust pages have no keyword data — topic-first, unchanged in spirit.
export const SITE_URL = "https://simpleclickcounter.net";

export const META = {
  "/": {
    title: "Click Counter – Free Online Counter & Tap Counter",
    description:
      "Click counter online — count anything with one tap. A free counter app and number counter with keyboard shortcuts, session stats and saved counts. No sign-up.",
  },
  "/tally-counter/": {
    title: "Tally Counter Online – Free Tally Marks & Tally App",
    description:
      "Tally counter online with tally marks grouped in fives. A tally marker and tally tracker for attendance, votes or stock — no sign-up, saves in your browser.",
  },
  "/word-counter/": {
    title: "Word Counter – Count Words, Characters & Sentences",
    description:
      "Free word counter online — count words, characters and sentences instantly as you type. Live word count, nothing uploaded, no sign-up.",
  },
  "/countdown-timer/": {
    title: "Countdown Timer Online – Click Counter Timer",
    description:
      "Free countdown timer online — set hours, minutes and seconds, or use it as a click counter timer. One click to start, no sign-up, works in your browser.",
  },
  "/score-counter/": {
    title: "Score Counter – 2-Player Scoreboard & Score Clicker",
    description:
      "Free score counter — a 2-player scoreboard and score clicker to track names, scores and win history. No sign-up, no download.",
  },
  "/multi-counter/": {
    title: "Multi Counter Online – Multiple Counter App",
    description:
      "Free multi counter online — a multiple counter app that runs several named counters at once for inventory, attendance or workouts. No sign-up.",
  },
  "/click-counter-vs-tally-counter/": {
    title: "Click Counter vs Tally Counter – Which to Use?",
    description:
      "Click counter vs tally counter — how they differ and when to use each for counting, teaching or voting. Both tools free, no sign-up.",
  },
  "/counter-embed/": {
    title: "Embed a Click Counter on Your Website – Free",
    description:
      "Embed a free click counter on your website in minutes — copy, paste, count. No sign-up, no code skills needed.",
  },
  "/about/": {
    title: "About Simple Click Counter – Free Counting Tools",
    description:
      "About Simple Click Counter — free online counting tools built to be simple, fast and private. No sign-up, no downloads.",
  },
  "/contact/": {
    title: "Contact Simple Click Counter",
    description:
      "Contact Simple Click Counter — questions, feedback or a tool request? Send us a message and we'll get back to you.",
  },
  "/privacy-policy/": {
    title: "Privacy Policy | Simple Click Counter",
    description:
      "Privacy Policy for Simple Click Counter — what data the tools store (in your browser only) and how we handle it.",
  },
  "/terms-of-service/": {
    title: "Terms of Service | Simple Click Counter",
    description:
      "Terms of Service for Simple Click Counter — the rules for using our free online counting tools.",
  },
  "/disclaimer/": {
    title: "Disclaimer | Simple Click Counter",
    description:
      "Disclaimer for Simple Click Counter — what our free counting tools do and don't guarantee.",
  },
  "/cookie-policy/": {
    title: "Cookie Policy | Simple Click Counter",
    description:
      "Cookie Policy for Simple Click Counter — which cookies (if any) the site uses and how to control them.",
  },
  "/gdpr-compliance/": {
    title: "GDPR Compliance | Simple Click Counter",
    description:
      "GDPR Compliance for Simple Click Counter — your data rights and how our browser-only tools respect them.",
  },
  "/dmca/": {
    title: "DMCA | Simple Click Counter",
    description:
      "DMCA notice for Simple Click Counter — how to report copyright concerns about content on this site.",
  },
};

export function pageMeta(path) {
  const m = META[path];
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: SITE_URL + path },
    openGraph: {
      title: m.title,
      description: m.description,
      url: SITE_URL + path,
      siteName: "Simple Click Counter",
      type: "website",
    },
  };
}

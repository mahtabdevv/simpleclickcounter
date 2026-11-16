import Link from "next/link";

export const TOOLS = [
  { href: "/", label: "Click Counter", desc: "Count anything with one tap" },
  {
    href: "/tally-counter/",
    label: "Tally Counter",
    desc: "Visual tally marks, grouped in fives",
  },
  {
    href: "/word-counter/",
    label: "Word Counter",
    desc: "Words, characters and sentences as you type",
  },
  {
    href: "/countdown-timer/",
    label: "Countdown Timer",
    desc: "Set hours, minutes and seconds",
  },
  {
    href: "/score-counter/",
    label: "Score Counter",
    desc: "2-player scoreboard with win history",
  },
  {
    href: "/multi-counter/",
    label: "Multi Counter",
    desc: "Several named counters at once",
  },
  {
    href: "/click-counter-vs-tally-counter/",
    label: "Click Counter vs Tally Counter",
    desc: "Which counter fits your job?",
  },
  {
    href: "/counter-embed/",
    label: "Embed a Click Counter",
    desc: "Put a click counter on your own website",
  },
];

export function ToolHub({ current }) {
  return (
    <section className="hub" aria-label="All counting tools">
      <h2>All free counting tools</h2>
      <ul>
        {TOOLS.filter((t) => t.href !== current).map((t) => (
          <li key={t.href}>
            <Link href={t.href}>
              {t.label}
              <span>{t.desc}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Faq({ items }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return (
    <section className="faq">
      <h2>Frequently asked questions</h2>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {items.map((i) => (
        <details key={i.q}>
          <summary>{i.q}</summary>
          <p>{i.a}</p>
        </details>
      ))}
    </section>
  );
}

export function UseCases({ cases }) {
  return (
    <section aria-label="Ways to use this tool">
      <h2>Ways to use it</h2>
      <div className="use-cases">
        {cases.map((c) => (
          <div className="use-case" key={c.title}>
            <span className="use-case-icon" aria-hidden="true">
              {c.emoji}
            </span>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export const SPORTS_CASES = [
  {
    emoji: "🏋️",
    title: "Fitness & workouts",
    text: "Count reps, sets and laps without losing track mid-workout. A digital counter beats a pen and paper when your hands are busy.",
  },
  {
    emoji: "🏫",
    title: "Classroom & attendance",
    text: "Take attendance, count raised hands or track participation. Teachers use the tally counter for headcounts on trips too, and this works as an attendance counter app and a clicker to count attendance — an attendance counter clicker and an attendance clicker for the classroom.",
  },
  {
    emoji: "📦",
    title: "Inventory & stock",
    text: "Count items on a shelf, boxes in a delivery or products at a market stall. Use the multi counter when you count several items at once.",
  },
  {
    emoji: "🎉",
    title: "Events & people counting",
    text: "Count guests at the door, votes at a meeting or visitors at a stall. People counting is faster with one big tap button than with a paper list — a people counting app and a people clicker for events, a people counter online, counting people at the door, a people counter clicker for events, and a guest counter for weddings and parties.",
  },
  {
    emoji: "📞",
    title: "Calls & tasks",
    text: "Track calls made, tasks finished or customers served in a day. Set a daily goal and watch the progress bar fill up.",
  },
  {
    emoji: "🎲",
    title: "Games & scorekeeping",
    text: "Keep score in board games, card games and sports. The 2-player scoreboard remembers who won last time. Use it as a round counter for rounds in a match, a win counter for friendly games, or a point clicker for games.",
  },
];

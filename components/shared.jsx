import Link from "next/link";

export const TOOLS = [
  { href: "/", label: "Click Counter", desc: "One big button. Tap, count, done.", icon: "tap" },
  { href: "/tally-counter/", label: "Tally Counter", desc: "Tally marks grouped in fives", icon: "tally" },
  { href: "/multi-counter/", label: "Multi Counter", desc: "Several named counters at once", icon: "grid" },
  { href: "/score-counter/", label: "Score Counter", desc: "2-player scoreboard with wins", icon: "trophy" },
  { href: "/countdown-timer/", label: "Countdown Timer", desc: "Hours, minutes, seconds, beep", icon: "timer" },
  { href: "/word-counter/", label: "Word Counter", desc: "Words, characters, reading time", icon: "text" },
];

export const GUIDES = [
  { href: "/click-counter-vs-tally-counter/", label: "Click vs tally counter", desc: "Which one fits your job" },
  { href: "/counter-embed/", label: "Embed a counter", desc: "Put a click counter on your site" },
];

/* ---------- Icons — one authored set, 24px grid, 1.75 stroke ---------- */
const PATHS = {
  tap: <><circle cx="12" cy="12" r="8" /><path d="M12 8v8M8 12h8" /></>,
  tally: <><path d="M6 5v14M10 5v14M14 5v14M18 5v14" /><path d="M3.5 16.5 20.5 7.5" /></>,
  grid: <><rect x="4" y="4" width="7" height="7" rx="1.5" /><rect x="13" y="4" width="7" height="7" rx="1.5" /><rect x="4" y="13" width="7" height="7" rx="1.5" /><rect x="13" y="13" width="7" height="7" rx="1.5" /></>,
  trophy: <><path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" /><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7" /></>,
  timer: <><circle cx="12" cy="13" r="7" /><path d="M12 13V9.5M10 3h4M18.5 6.5 17 8" /></>,
  text: <><path d="M5 6h14M5 10h14M5 14h9M5 18h6" /></>,
  reps: <><path d="M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10" /></>,
  class: <><path d="M3 9 12 5l9 4-9 4-9-4Z" /><path d="M7 11v4c0 1.5 2.2 3 5 3s5-1.5 5-3v-4" /></>,
  stock: <><path d="M4 8 12 4l8 4v8l-8 4-8-4V8Z" /><path d="m4 8 8 4 8-4M12 12v8" /></>,
  people: <><circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><path d="M16 5.5a3 3 0 0 1 0 5M17.5 14a5 5 0 0 1 3 5" /></>,
  calls: <><path d="M6 4h3l1.5 4-2 1.5a10 10 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 4 6a2 2 0 0 1 2-2Z" /></>,
  games: <><rect x="4" y="4" width="16" height="16" rx="3" /><circle cx="9" cy="9" r="1" /><circle cx="15" cy="15" r="1" /><circle cx="15" cy="9" r="1" /><circle cx="9" cy="15" r="1" /></>,
  vote: <><path d="M4 13h16v7H4z" /><path d="m8 9 3 3 5-6" /></>,
  write: <><path d="M4 20h4L19 9l-4-4L4 16v4Z" /><path d="m13.5 6.5 4 4" /></>,
  social: <><path d="M4 5h16v11H9l-5 4V5Z" /></>,
  study: <><path d="M4 5h6a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4V5ZM20 5h-6a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h6V5Z" /></>,
  cook: <><path d="M5 11h14v3a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-3ZM3 11h18M9 4c0 2 2 2 2 4M14 4c0 2 2 2 2 4" /></>,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r=".5" /></>,
  code: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  lock: <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  bolt: <path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z" />,
  device: <><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

export function Icon({ name, size = 22 }) {
  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name] || PATHS.tap}
    </svg>
  );
}

/* ---------- Page shell: tool fills the hero, intro follows ---------- */
export function ToolPage({ title, lede, points = [], keys, tool, children, current }) {
  return (
    <>
      <section className="tool-hero">
        <h1>{title}</h1>
        <div className="tool-slot">{tool}</div>
      </section>
      <section className="tool-about" aria-label="About this tool">
        <p className="lede">{lede}</p>
        <div>
          {points.length > 0 && (
            <ul className="points">
              {points.map((p) => (
                <li key={p}><Icon name="check" size={18} />{p}</li>
              ))}
            </ul>
          )}
          {keys && <p className="keys">{keys}</p>}
        </div>
      </section>
      <div className="page-body">
        <article className="prose">{children}</article>
        <ToolRail current={current} />
      </div>
    </>
  );
}

export function ToolRail({ current }) {
  return (
    <aside className="rail" aria-label="More free tools">
      <p className="rail-title">More free tools</p>
      <ul>
        {TOOLS.filter((t) => t.href !== current).map((t) => (
          <li key={t.href}>
            <Link href={t.href}>
              <Icon name={t.icon} size={20} />
              <span><b>{t.label}</b>{t.desc}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="rail-title">Guides</p>
      <ul>
        {GUIDES.filter((t) => t.href !== current).map((t) => (
          <li key={t.href}>
            <Link href={t.href}>
              <Icon name="arrow" size={20} />
              <span><b>{t.label}</b>{t.desc}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

/* Kept for simple pages (legal, contact) — same rail, full width */
export function ToolHub({ current }) {
  return (
    <section className="hub" aria-label="All counting tools">
      <h2>Free counting tools</h2>
      <ul>
        {TOOLS.filter((t) => t.href !== current).map((t) => (
          <li key={t.href}>
            <Link href={t.href}>
              <Icon name={t.icon} />
              <span><b>{t.label}</b>{t.desc}</span>
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
      <h2>Questions people ask</h2>
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

export function UseCases({ cases, title = "What people count with it" }) {
  return (
    <section aria-label="Ways to use this tool">
      <h2>{title}</h2>
      <ul className="use-cases">
        {cases.map((c) => (
          <li className="use-case" key={c.title}>
            <span className="use-case-icon"><Icon name={c.icon} /></span>
            <div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Steps({ items }) {
  return (
    <ol className="steps">
      {items.map((s) => (
        <li key={s.t}>
          <b>{s.t}</b>
          <span>{s.d}</span>
        </li>
      ))}
    </ol>
  );
}

export const SPORTS_CASES = [
  { icon: "reps", title: "Reps, sets and laps", text: "Keep your hands on the bar, not on a notebook. Tap between sets and the number is waiting when you look back." },
  { icon: "class", title: "Classroom and attendance", text: "Headcounts on a school trip, raised hands, participation points. One tap per student, no paper register." },
  { icon: "stock", title: "Stock and inventory", text: "Walk the shelf and tap per item. Count by 6 or 12 with the step setting when stock comes in cases." },
  { icon: "people", title: "People at the door", text: "Guests in, visitors through, capacity checks. Set the venue limit as your goal and watch the bar fill." },
  { icon: "calls", title: "Calls and daily tasks", text: "Calls made, tickets closed, customers served. Set a daily target and the progress bar keeps you honest." },
  { icon: "games", title: "Games and click tests", text: "Rounds played, points scored, or how fast you can hit 100. Export the session as CSV to compare runs." },
];

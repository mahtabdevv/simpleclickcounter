import Link from "next/link";
import { TallyCounter } from "../../components/tools";
import { ToolPage, Faq, UseCases, Steps } from "../../components/shared";
import { pageMeta } from "../../lib/meta";

export const metadata = pageMeta("/tally-counter/");

const CASES = [
  { icon: "class", title: "Attendance and headcounts", text: "Mark each student or guest as they arrive. Groups of five mean anyone can check the total without recounting." },
  { icon: "vote", title: "Votes and quick polls", text: "Tally a show of hands or a club vote. Open a tab per option, or use the multi counter to run them side by side." },
  { icon: "stock", title: "Stock walks", text: "Walk the shelves and add a mark per item. The marks make it easy to see where you paused." },
  { icon: "reps", title: "Laps, reps and rounds", text: "See progress as shape, not just a number — four bars and a slash is one set of five done." },
];

const ROWS = [
  [1, "|", "One mark"],
  [2, "||", "Two marks"],
  [3, "|||", "Three marks"],
  [4, "||||", "Four marks"],
  [5, "||||/", "Four marks crossed by a fifth — one full group"],
  [6, "||||/ |", "One group plus one"],
  [8, "||||/ |||", "One group plus three"],
  [10, "||||/ ||||/", "Two full groups"],
  [13, "||||/ ||||/ |||", "Two groups plus three"],
  [20, "||||/ ||||/ ||||/ ||||/", "Four full groups"],
];

export default function TallyCounterPage() {
  return (
    <ToolPage
      current="/tally-counter/"
      title="Free Tally Counter Online"
      lede="Every tap draws a tally mark, and every fifth mark closes the group. Read your count at a glance — for attendance, votes, stock or laps."
      points={[
        "Marks group into fives automatically",
        "The total sits under the marks, so you never have to add them up",
        "Saved on this device — close the tab and come back later",
        "Reset by mistake? Undo it within six seconds",
      ]}
      keys={<>On a laptop, press <kbd>Space</kbd> to add a mark and <kbd>↓</kbd> to remove one.</>}
      tool={<TallyCounter />}
    >
      <h2>Why tally marks still work</h2>
      <p>
        A plain number tells you the total. Tally marks show you how you got
        there. Because the marks fall into groups of five, you can check a
        count of 37 in a second — seven closed groups and two loose marks —
        and so can anyone looking over your shoulder. That is why teachers,
        event staff and survey takers have used tallies for centuries, and
        why they still beat a single number when the count has to be shared.
      </p>

      <UseCases cases={CASES} />

      <h2 id="tally-marks">How to read tally marks</h2>
      <Steps
        items={[
          { t: "One vertical mark per item", d: "Draw |, then ||, then |||, then ||||." },
          { t: "The fifth mark crosses the four", d: "A diagonal line through the group closes it. That bundle always means five." },
          { t: "Start a new group", d: "The sixth item begins a fresh group next to the first." },
          { t: "Count groups, then add the leftovers", d: "Two closed groups and three loose marks: 5 + 5 + 3 = 13." },
        ]}
      />

      <h3>Tally chart: 1 to 20</h3>
      <p>
        A tally chart puts tally marks next to their numbers. Teachers are
        welcome to copy this one for worksheets.
      </p>
      <div className="table-wrap table--nums"><table>
        <thead>
          <tr><th>Number</th><th>Tally marks</th><th>How to read it</th></tr>
        </thead>
        <tbody>
          {ROWS.map(([n, m, r]) => (
            <tr key={n}><td>{n}</td><td className="mark">{m}</td><td>{r}</td></tr>
          ))}
        </tbody>
      </table></div>
      <p className="tiny">In the chart, “/” stands for the diagonal fifth mark.</p>

      <h2>Tally counter or click counter?</h2>
      <p>
        Use the tally counter when the count needs to be checked by someone
        else — a register, a vote, a stock sheet. Use the{" "}
        <Link href="/">click counter</Link> when you only need the number and
        want maximum speed. Counting several options at once? The{" "}
        <Link href="/multi-counter/">multi counter</Link> gives each one its
        own total. There is a full side-by-side in{" "}
        <Link href="/click-counter-vs-tally-counter/">click counter vs tally counter</Link>.
      </p>

      <Faq
        items={[
          { q: "What is a tally counter?", a: "A tally counter is a counting tool that records each item as a tally mark and groups the marks in fives, so the total is easy to read and check." },
          { q: "How do tally marks work?", a: "Draw one vertical mark per item. After four marks, the fifth is drawn diagonally across them to close a group of five. To read the total, count the groups in fives and add the loose marks." },
          { q: "What is a tally chart?", a: "A table that shows numbers next to their tally marks. The chart on this page covers 1 to 20." },
          { q: "Is this tally counter free and private?", a: "Yes. It is free with no sign-up, and your tally is stored only in your browser on this device." },
          { q: "Can I use it on my phone?", a: "Yes. It works in any phone browser. Tap “Add mark” for each item; the button is large enough to use one-handed." },
          { q: "What happens with very large counts?", a: "The counter keeps going. To stay readable, it shows the most recent 200 marks and notes how many earlier ones there are; the total underneath is always exact." },
          { q: "Can I tally more than one thing at once?", a: "Use the multi counter. Give each option its own named counter and see every total, plus the grand total, in one place." },
        ]}
      />
    </ToolPage>
  );
}

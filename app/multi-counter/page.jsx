import Link from "next/link";
import { MultiCounter } from "../../components/tools";
import { ToolPage, Faq, UseCases, Steps } from "../../components/shared";
import { pageMeta } from "../../lib/meta";

export const metadata = pageMeta("/multi-counter/");

const CASES = [
  { icon: "stock", title: "Inventory in one pass", text: "One counter per product — boxes, bottles, bags. Count the whole shelf without starting over." },
  { icon: "people", title: "Attendance by group", text: "Adults and children, members and guests. See each group and the grand total together." },
  { icon: "vote", title: "Votes with several options", text: "One counter per option. The totals sit side by side so the leader is obvious." },
  { icon: "reps", title: "Multi-exercise workouts", text: "Push-ups, squats, pull-ups. Track each exercise without juggling three tabs." },
];

export default function MultiCounterPage() {
  return (
    <ToolPage
      current="/multi-counter/"
      title="Free Multi Counter Online"
      lede="Run as many named counters as you need on one screen, with a live grand total. Made for stock, headcounts, votes and workouts."
      points={[
        "Name every counter — “Adults”, “Boxes”, “Option A”",
        "Grand total across all counters, always visible",
        "Reset or delete a single counter without touching the rest",
        "Every counter is saved on this device",
      ]}
      tool={<MultiCounter />}
    >
      <h2>How to use the multi counter</h2>
      <Steps
        items={[
          { t: "Name your counters", d: "Rename the two starters, or type a name in the box and tap “Add counter”." },
          { t: "Tap + 1 to count", d: "Each counter has its own buttons. Use − to correct a slip." },
          { t: "Watch the total", d: "The grand total at the top adds up every counter as you go." },
          { t: "Tidy up", d: "Reset a single counter with the circular arrow, or remove it with the bin." },
        ]}
      />

      <UseCases cases={CASES} />

      <h2>One counter or many?</h2>
      <p>
        Counting just one thing? The <Link href="/">click counter</Link> has a
        bigger button and keyboard shortcuts. Need others to check your
        count? The <Link href="/tally-counter/">tally counter</Link> shows it
        as tally marks. Two players and a winner? Use the{" "}
        <Link href="/score-counter/">score counter</Link>.
      </p>

      <Faq
        items={[
          { q: "Is this multi counter free?", a: "Yes. It is free with no sign-up and no download." },
          { q: "How many counters can I add?", a: "As many as you need. Each has its own name and total, and the grand total is shown at the top." },
          { q: "Are my counters saved?", a: "Yes. Names and counts are saved in your browser, so they are still there when you return on the same device." },
          { q: "Can I use it as a multiple tally counter for a vote?", a: "Yes. Create one counter per option and tap as votes come in. The totals sit side by side so you can compare them instantly." },
          { q: "When should I use a single click counter instead?", a: "When you are counting only one thing and want the biggest possible button, keyboard shortcuts, a goal bar and CSV export." },
        ]}
      />
    </ToolPage>
  );
}

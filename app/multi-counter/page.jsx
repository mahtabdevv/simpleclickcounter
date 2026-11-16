import { MultiCounter } from "../../components/tools";
import { ToolHub, Faq, UseCases } from "../../components/shared";
import { pageMeta } from "../../lib/meta";

export const metadata = pageMeta("/multi-counter/");

const CASES = [
  {
    emoji: "📦",
    title: "Inventory — several items at once",
    text: "Count boxes, bottles and bags in one pass with the multi counter. Name one counter per item and count them side by side.",
  },
  {
    emoji: "🏫",
    title: "Attendance by group",
    text: "Count adults and children, or boys and girls, on separate counters. The multi counter shows the total across all counters too.",
  },
  {
    emoji: "🗳️",
    title: "Votes for several options",
    text: "Run one counter per option in a vote. Multiple counters online make it easy to compare options as votes come in.",
  },
  {
    emoji: "🏋️",
    title: "Workouts — several exercises",
    text: "Track reps for several exercises at once with the multi counter, instead of juggling one click counter per exercise.",
  },
];

export default function MultiCounterPage() {
  return (
    <>
      <h1>Free Multi Counter Online</h1>
      <p className="lede">
        This free multi counter runs several named counters at once — for
        inventory, attendance, votes or workouts. No sign-up, and all your
        counters are saved in your browser. It is a multiple counter app
        that runs in your browser.
      </p>

      <MultiCounter />

      <p>
        A multi counter is for the jobs where one click counter is not enough.
        Counting several things at the same time — adults and children at an
        event, three products on a shelf, four options in a vote — needs
        multiple counters online in one place, each with its own name and its
        own total. Add a counter, name it, and tap +1. The total across all
        counters is shown at the bottom.
      </p>

      <UseCases cases={CASES} />

      <h2>How to use the multi counter</h2>
      <ol>
        <li>Type a name — for example “Adults” — and tap “Add counter”.</li>
        <li>Tap +1 on a counter to count it, −1 to correct a mistake.</li>
        <li>Reset one counter, or delete it when you are done with it.</li>
        <li>
          All counters are saved in your browser, so your multiple counters
          are still there when you come back.
        </li>
      </ol>
      <p>
        Counting just one thing? The <a href="/">click counter</a> is faster.
        Counting with tally marks? Use the{" "}
        <a href="/tally-counter/">tally counter</a>. Keeping score in a game?
        Use the <a href="/score-counter/">score counter</a>.
      </p>

      <Faq
        items={[
          {
            q: "Is this multi counter free?",
            a: "Yes. This multi counter is free, with no sign-up and no download.",
          },
          {
            q: "How many counters can I add to the multi counter?",
            a: "As many as you need. Each counter has its own name and total, and the multi counter shows the combined total at the bottom.",
          },
          {
            q: "Are my counters saved?",
            a: "Yes. The multi counter saves every counter and its count in your browser, so they are still there when you return.",
          },
          {
            q: "When should I use a multi counter instead of a click counter?",
            a: "Use a multi counter when you count several things at the same time — for example adults and children, or three products. Use a click counter when you count one thing only.",
          },
          {
            q: "Is this a multiple counter app?",
            a: "Yes. This is a multiple counter app — add a counter, name it, and tap +1. It runs multiple counters online in one place, each with its own name and total.",
          },
          {
            q: "Can I use it as a multiple tally counter online?",
            a: "Yes. Name one counter per tally option and count them side by side — it works as a multiple tally counter online for votes, stock and attendance. You can run an online tally counter multiple people can use at once, one counter per person.",
          },
        ]}
      />

      <ToolHub current="/multi-counter/" />
    </>
  );
}

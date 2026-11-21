import Link from "next/link";
import { ClickCounter } from "../components/tools";
import { ToolPage, Faq, UseCases, Steps, SPORTS_CASES } from "../components/shared";
import { pageMeta } from "../lib/meta";

export const metadata = pageMeta("/");

export default function HomePage() {
  return (
    <ToolPage
      current="/"
      title="Free Click Counter Online"
      lede="Tap the button, the number goes up. Count reps, people, stock or votes on any phone or laptop — no sign-up, no download."
      points={[
        "Your count is saved on this device, even if you close the tab",
        "Count by 2, 5 or 12 with the step setting",
        "Set a goal and watch the progress bar fill",
        "Export every tap, timestamped, as a CSV file",
      ]}
      keys={<>On a laptop, press <kbd>Space</kbd> to count, <kbd>↓</kbd> to subtract and <kbd>R</kbd> to reset.</>}
      tool={<ClickCounter />}
    >
      <h2>A counter that stays out of your way</h2>
      <p>
        Most counter apps make you install something, create an account or
        wade through settings before you can count to one. This click
        counter opens straight to a big number and a bigger button. The
        button sits where your thumb lands on a phone, and on a laptop you
        never have to touch the mouse — <kbd>Space</kbd> counts.
      </p>
      <p>
        Nothing you count is sent anywhere. The number is stored in your
        browser, so it is still there tomorrow, and nobody else can see it.
        Hit Reset by accident? You get six seconds to undo it.
      </p>

      <UseCases cases={SPORTS_CASES} />

      <h2>How to use the click counter</h2>
      <Steps
        items={[
          { t: "Tap “+ Count” or press Space", d: "Each tap adds one. Made a mistake? Tap − or press the down arrow." },
          { t: "Set a step if you count in groups", d: "A step of 6 or 12 is quicker for cases of stock; 2 works for pairs." },
          { t: "Add a goal to track progress", d: "Enter a target — 100 reps, a venue limit of 250 — and the bar shows how close you are." },
          { t: "Export when you need a record", d: "Export CSV downloads every tap in this session with its exact time." },
        ]}
      />

      <h2>Which counter do you need?</h2>
      <p>
        The click counter is the fastest way to count one thing. If your job
        looks different, one of these will fit better:
      </p>
      <div className="table-wrap"><table>
        <thead>
          <tr><th>If you need to…</th><th>Use</th></tr>
        </thead>
        <tbody>
          <tr><td>Count one thing as fast as possible</td><td>Click counter (this page)</td></tr>
          <tr><td>Show the count so anyone can check it at a glance</td><td><Link href="/tally-counter/">Tally counter</Link></td></tr>
          <tr><td>Count several things at once — adults and children, three products</td><td><Link href="/multi-counter/">Multi counter</Link></td></tr>
          <tr><td>Keep score between two players or teams</td><td><Link href="/score-counter/">Score counter</Link></td></tr>
          <tr><td>Time a round, a rest or a study block</td><td><Link href="/countdown-timer/">Countdown timer</Link></td></tr>
          <tr><td>Check the length of an essay or a post</td><td><Link href="/word-counter/">Word counter</Link></td></tr>
        </tbody>
      </table></div>
      <p>
        Want this counter on your own page? The{" "}
        <Link href="/counter-embed/">embed code</Link> takes one copy and paste.
      </p>

      <Faq
        items={[
          { q: "Is this click counter really free?", a: "Yes. It is free with no sign-up, no download and no limit on how high you count." },
          { q: "Will my count still be there if I close the page?", a: "Yes. The count is saved in your browser's local storage. Come back on the same device and browser and it will be waiting. Clearing your browser data or using a private window will remove it." },
          { q: "Does it work on my phone?", a: "Yes. It works in any modern browser on iPhone, Android, tablets and computers. The count button is sized for one-handed use. On a phone you can add the page to your home screen so it opens like an app." },
          { q: "Can I count by more than one?", a: "Yes. Set the step to any number from 1 to 100 and every tap adds that amount." },
          { q: "I hit Reset by mistake. Can I get my count back?", a: "Yes, if you are quick. After a reset an Undo button appears for six seconds and restores the count exactly as it was." },
          { q: "Can I use it to test my click speed?", a: "Yes. Set a goal of 100, tap as fast as you can, and check the session stats. Export CSV gives you every tap with a timestamp, so you can work out taps per second." },
          { q: "What is the difference between a click counter and a tally counter?", a: "A click counter shows one big number and is the fastest for counting. A tally counter draws marks grouped in fives, which makes the count easy for other people to check. See the full click counter vs tally counter comparison." },
          { q: "Is there an app to download?", a: "No — and you do not need one. The counter runs in your browser, so it works the same on Android, iPhone, Windows and Mac without installing anything." },
        ]}
      />
    </ToolPage>
  );
}

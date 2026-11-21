import Link from "next/link";
import { CountdownTimer } from "../../components/tools";
import { ToolPage, Faq, UseCases, Steps } from "../../components/shared";
import { pageMeta } from "../../lib/meta";

export const metadata = pageMeta("/countdown-timer/");

const CASES = [
  { icon: "reps", title: "Workouts and rest", text: "Time a plank, a round or the rest between sets. One-tap presets mean no fiddling with sweaty hands." },
  { icon: "study", title: "Focused study blocks", text: "Use the 25-minute preset for a classic focus session, then a 5-minute break." },
  { icon: "cook", title: "Cooking", text: "Pasta, eggs, tea, bread. The beep means you can walk away from the screen." },
  { icon: "games", title: "Turns and rounds", text: "Give every player the same time per turn and keep game night moving." },
];

export default function CountdownTimerPage() {
  return (
    <ToolPage
      current="/countdown-timer/"
      title="Free Countdown Timer Online"
      lede="Set hours, minutes and seconds — or tap a preset — and press Start. It beeps when time is up."
      points={[
        "Presets for 1, 5, 10, 25 minutes and 1 hour",
        "Pause and resume without losing your place",
        "Remaining time shows in the browser tab title",
        "Up to 23 hours, 59 minutes and 59 seconds",
      ]}
      tool={<CountdownTimer />}
    >
      <h2>How to use the countdown timer</h2>
      <Steps
        items={[
          { t: "Choose a time", d: "Type hours, minutes and seconds, or tap a preset." },
          { t: "Press Start", d: "The time counts down on screen and in the tab title, so you can check it from another tab." },
          { t: "Pause or reset", d: "Pause holds your place; Resume carries on. Reset clears the timer." },
          { t: "Listen for the beep", d: "Two beeps at zero. Make sure your device volume is up." },
        ]}
      />

      <UseCases cases={CASES} />

      <div className="callout">
        <h3>Counting while the clock runs?</h3>
        <p>
          Open the <Link href="/">click counter</Link> in a second tab to count
          reps or taps against the timer, or the{" "}
          <Link href="/score-counter/">score counter</Link> for a timed match.
          The timer keeps running in the background tab.
        </p>
      </div>

      <Faq
        items={[
          { q: "Is this countdown timer free?", a: "Yes. It is free with no sign-up and no download." },
          { q: "Does it keep running if I switch tabs?", a: "Yes, as long as the tab stays open. The remaining time is shown in the tab title so you can keep an eye on it. Closing the tab stops the timer." },
          { q: "Will it make a sound at the end?", a: "Yes — two beeps when it reaches zero. Check that your device is not muted." },
          { q: "What is the longest time I can set?", a: "23 hours, 59 minutes and 59 seconds." },
          { q: "Can I use it with a counter?", a: "Yes. Open the click counter in another tab and count while the timer runs — handy for timed rep tests or click-speed challenges." },
        ]}
      />
    </ToolPage>
  );
}

import { CountdownTimer } from "../../components/tools";
import { ToolHub, Faq, UseCases } from "../../components/shared";
import { pageMeta } from "../../lib/meta";

export const metadata = pageMeta("/countdown-timer/");

const CASES = [
  {
    emoji: "🏋️",
    title: "Workouts and intervals",
    text: "Set a countdown timer for a workout round, a rest period or a plank hold. Presets for 1, 5, 10 and 30 minutes are one tap away.",
  },
  {
    emoji: "📚",
    title: "Study sessions",
    text: "Study in focused blocks with a countdown timer — 25 minutes on, 5 minutes off. The timer beeps when time is up.",
  },
  {
    emoji: "🍳",
    title: "Cooking",
    text: "Time pasta, baking or tea with a countdown timer that runs in your browser while you cook.",
  },
  {
    emoji: "🎲",
    title: "Games and turns",
    text: "Give each player a fixed time per turn with the countdown timer, so games keep moving.",
  },
];

export default function CountdownTimerPage() {
  return (
    <>
      <h1>Free Countdown Timer Online</h1>
      <p className="lede">
        This free countdown timer counts down from any time you set — hours,
        minutes and seconds. No sign-up, no download, and it works in your
        browser. Use it as a countdown clicker for workouts, study sessions
        and games.
      </p>

      <CountdownTimer />

      <p>
        Set the hours, minutes and seconds, press Start, and the countdown
        timer does the rest. Pause it any time, reset it in one tap, or use a
        preset for 1, 5, 10 or 30 minutes. When the countdown timer reaches
        zero it beeps, so you do not have to watch the screen.
      </p>

      <p>
        Use it as a countdown clicker for timed rounds — set the time, press
        Start, and the beep tells you when to stop. Need a tap counter with
        timer? Open the click counter and the countdown timer side by side
        for a click counter with timer setup, or pair the timer with the
        click counter for a click counter timer, a click timer counter, or a
        clicker counter with timer.
      </p>

      <UseCases cases={CASES} />

      <h2>How to use the countdown timer</h2>
      <ol>
        <li>Enter hours, minutes and seconds — or tap a preset.</li>
        <li>Press Start. The countdown timer runs in your browser tab.</li>
        <li>Press Pause to stop it, Start again to continue, Reset to clear it.</li>
        <li>When it hits 00:00:00 it beeps twice.</li>
      </ol>
      <p>
        Counting something instead of timing it? Use the{" "}
        <a href="/">click counter</a> for taps, the{" "}
        <a href="/tally-counter/">tally counter</a> for tally marks, or the{" "}
        <a href="/score-counter/">score counter</a> to keep score while the
        timer runs.
      </p>

      <Faq
        items={[
          {
            q: "Is this countdown timer free?",
            a: "Yes. This countdown timer is free, with no sign-up and no download.",
          },
          {
            q: "Does the countdown timer work if I switch tabs?",
            a: "Yes, the countdown timer keeps running while the tab is open. Keep the tab open until it finishes — closing the tab stops it.",
          },
          {
            q: "Does the countdown timer make a sound when it finishes?",
            a: "Yes. When the countdown timer reaches zero it beeps twice. Make sure your device sound is on.",
          },
          {
            q: "What is the longest time I can set?",
            a: "You can set up to 23 hours, 59 minutes and 59 seconds on this countdown timer.",
          },
          {
            q: "Can I use it as a click counter with timer?",
            a: "Yes — pair this countdown timer with the click counter for a click counter with timer setup. It works as a tap counter with timer for workouts, a click timer counter for games, and a clicker counter with timer for timed counting sessions. Set the time on this click counter timer and count while it runs.",
          },
        ]}
      />

      <ToolHub current="/countdown-timer/" />
    </>
  );
}

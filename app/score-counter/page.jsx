import Link from "next/link";
import { ScoreCounter } from "../../components/tools";
import { ToolPage, Faq, UseCases, Steps } from "../../components/shared";
import { pageMeta } from "../../lib/meta";

export const metadata = pageMeta("/score-counter/");

const CASES = [
  { icon: "games", title: "Board and card games", text: "Rename the players, add points as you go, and bank each game so the rivalry has a record." },
  { icon: "target", title: "Darts, pool and quiz night", text: "Set “Play to” for the match length and keep the running win count for the evening." },
  { icon: "trophy", title: "Table tennis and badminton", text: "First to 11 or 21. Big buttons mean you can score rally by rally without stopping." },
  { icon: "people", title: "Teams and classrooms", text: "Two teams, two names, one scoreboard everyone can see on a laptop or projector." },
];

export default function ScoreCounterPage() {
  return (
    <ToolPage
      current="/score-counter/"
      title="Free Score Counter – 2-Player Scoreboard"
      lede="Two players, two big buttons and a running win history. Keep score for any game on one screen."
      points={[
        "Tap a name to rename a player or team",
        "Set the winning score — first to 10, 11 or 21",
        "Bank a win and the next game starts at 0–0",
        "Scores and wins are saved on this device",
      ]}
      tool={<ScoreCounter />}
    >
      <h2>How to keep score</h2>
      <Steps
        items={[
          { t: "Name the players", d: "Tap “Player 1” and type a name. Teams work too." },
          { t: "Set “Play to”", d: "The scoreboard flags a player as soon as they reach the target." },
          { t: "Tap + 1 for every point", d: "Use − to fix a mistake. Both scores stay visible side by side." },
          { t: "Bank the win", d: "Tap “Win for …” to add one to that player’s wins and reset both scores for the next game." },
        ]}
      />

      <UseCases cases={CASES} title="Games it works for" />

      <p>
        More than two players? Use the{" "}
        <Link href="/multi-counter/">multi counter</Link> and name one counter
        per player. Need a time limit per round? Open the{" "}
        <Link href="/countdown-timer/">countdown timer</Link> alongside.
      </p>

      <Faq
        items={[
          { q: "Is this score counter free?", a: "Yes. The scoreboard is free with no sign-up and no download." },
          { q: "Can I rename the players?", a: "Yes. Tap a player’s name and type. Names, scores and wins are saved in your browser." },
          { q: "How does the win history work?", a: "When a game ends, tap “Win for …”. That player’s win count goes up by one and both scores reset to 0 for the next game. “Reset everything” clears names, scores and wins." },
          { q: "Can I use it for more than two players?", a: "This scoreboard is built for two. For three or more, use the multi counter with one named counter per player." },
          { q: "Does it work on a tablet in the middle of the table?", a: "Yes. The layout keeps both scores side by side on phones, tablets and laptops so everyone can see them." },
        ]}
      />
    </ToolPage>
  );
}

import { ScoreCounter } from "../../components/tools";
import { ToolHub, Faq, UseCases } from "../../components/shared";
import { pageMeta } from "../../lib/meta";

export const metadata = pageMeta("/score-counter/");

const CASES = [
  {
    emoji: "🎲",
    title: "Board games and card games",
    text: "Keep score in any board game or card game with this score counter. Rename the players, tap to add points, and the 2-player scoreboard remembers who won.",
  },
  {
    emoji: "⚽",
    title: "Sports and matches",
    text: "Track goals, sets or rounds with the score counter. Set a target — first to 10, first to 21 — and award the win in one tap.",
  },
  {
    emoji: "🎯",
    title: "Darts and pub games",
    text: "Use the score counter as a tally score keeper for darts, pool or quiz nights. The win history shows the running tally score across games.",
  },
  {
    emoji: "🏓",
    title: "Table tennis and badminton",
    text: "Count points rally by rally. The score counter keeps the tally scoreboard honest when the game gets fast.",
  },
];

export default function ScoreCounterPage() {
  return (
    <>
      <h1>Free Score Counter – 2-Player Scoreboard</h1>
      <p className="lede">
        This free score counter is a 2-player scoreboard for any game. Track
        names, scores and win history — no sign-up, no download, and your
        scores are saved in your browser.
      </p>

      <ScoreCounter />

      <p>
        A score counter should be simple: two players, two big score buttons,
        and a clear winner. Use it as a score counter clicker — tap +1 to
        add a point — or as a score clicker for fast games. Tap a player’s
        name to rename them, tap +1 to add a point, and tap “wins this game”
        to record the win in the win history and start the next game at 0–0.
        The tally score on this page is the running record — who is leading
        now, and who has won the most games so far. Check the score tally at
        a glance, or use it as a tally scoreboard for fast games.
      </p>

      <UseCases cases={CASES} />

      <h2>How to use the score counter</h2>
      <ol>
        <li>Tap a player’s name to rename them.</li>
        <li>Tap +1 when they score, −1 to correct a mistake.</li>
        <li>
          Set “Play to” — for example 10 or 21. When a player reaches it,
          tap “wins this game” to record the win and reset the scores.
        </li>
        <li>
          The win history stays saved in your browser, so the rivalry survives
          a page refresh.
        </li>
      </ol>
      <p>
        Counting instead of scoring? The <a href="/">click counter</a> counts
        anything with one tap, the{" "}
        <a href="/tally-counter/">tally counter</a> counts with tally marks,
        and the <a href="/multi-counter/">multi counter</a> counts several
        things at once.
      </p>

      <Faq
        items={[
          {
            q: "Is this score counter free?",
            a: "Yes. This score counter and 2-player scoreboard are free, with no sign-up and no download.",
          },
          {
            q: "Can I rename the players on the score counter?",
            a: "Yes. Tap a player’s name and type a new one. Names, scores and win history are saved in your browser.",
          },
          {
            q: "How does the win history work?",
            a: "When a player wins a game, tap “wins this game”. Their win count goes up by one and both scores reset to 0 for the next game.",
          },
          {
            q: "Can I use the score counter for more than 2 players?",
            a: "This score counter is built for 2 players. For more players, use the multi counter and name one counter per player.",
          },
          {
            q: "Is this a score clicker?",
            a: "Yes. This score counter works as a score clicker — tap +1 when a player scores. It is a score counter clicker for board games, card games and sports, and a tally score keeper for darts, pool and quiz nights. The tally scoreboard shows the score tally across games.",
          },
        ]}
      />

      <ToolHub current="/score-counter/" />
    </>
  );
}

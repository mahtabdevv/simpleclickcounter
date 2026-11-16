import { ToolHub } from "../../components/shared";
import { pageMeta } from "../../lib/meta";

export const metadata = pageMeta("/about/");

export default function AboutPage() {
  return (
    <>
      <h1>About Simple Click Counter</h1>
      <p className="lede">
        Simple Click Counter is a set of free online counting tools built to
        be simple, fast and private. No sign-up, no downloads.
      </p>
      <p>
        Everything started with one tool — a free click counter for counting
        anything with one tap. Then came the tools people kept asking for: a
        tally counter with visual tally marks, a word counter, a countdown
        timer, a score counter and a multi counter. Each tool does one job,
        does it well, and stays out of your way.
      </p>
      <h2>How the tools work</h2>
      <ul>
        <li>
          <strong>Free, no sign-up.</strong> Every tool on this site is free
          to use. There is no account to create and nothing to install.
        </li>
        <li>
          <strong>Private by design.</strong> Counts, words and scores are
          saved in your own browser with localStorage. Nothing is uploaded to
          a server — see the <a href="/privacy-policy/">privacy policy</a>.
        </li>
        <li>
          <strong>Fast on any device.</strong> The tools are plain web pages
          that work on a phone, a tablet or a computer.
        </li>
        <li>
          <strong>One hub, every tool.</strong> The click counter, tally
          counter, word counter, countdown timer, score counter and multi
          counter all link to each other, so you are never more than one tap
          from the right tool.
        </li>
      </ul>
      <p>
        Questions, feedback or a tool request? Visit the{" "}
        <a href="/contact/">contact</a> page.
      </p>
      <ToolHub current="/about/" />
    </>
  );
}

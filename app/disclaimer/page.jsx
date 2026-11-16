import { ToolHub } from "../../components/shared";
import { pageMeta } from "../../lib/meta";

export const metadata = pageMeta("/disclaimer/");

export default function DisclaimerPage() {
  return (
    <>
      <h1>Disclaimer</h1>
      <p className="lede">
        What the free counting tools on Simple Click Counter do — and what
        they do not guarantee.
      </p>
      <p><em>Last updated: November 2026.</em></p>
      <h2>The tools</h2>
      <p>
        The click counter, tally counter, word counter, countdown timer, score
        counter and multi counter are provided free of charge, “as is”, without
        warranties of any kind. They are simple counting aids, not professional
        measurement, accounting or legal tools.
      </p>
      <h2>Your counts</h2>
      <p>
        Counts are stored only in your browser. If your browser data is
        cleared, if you use a different device, or if you browse in private
        mode, your saved counts may not be there. Do not rely on this website
        as the only record of anything important — export a CSV or write the
        number down when it matters.
      </p>
      <h2>Accuracy</h2>
      <p>
        We aim for the tools to count correctly, but we do not guarantee that
        every count, word total or timer is error-free. Check important
        results yourself before acting on them.
      </p>
      <ToolHub current="/disclaimer/" />
    </>
  );
}

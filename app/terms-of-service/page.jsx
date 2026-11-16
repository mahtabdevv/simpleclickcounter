import { ToolHub } from "../../components/shared";
import { pageMeta } from "../../lib/meta";

export const metadata = pageMeta("/terms-of-service/");

export default function TermsPage() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p className="lede">
        These are the rules for using the free online counting tools on Simple
        Click Counter.
      </p>
      <p><em>Last updated: November 2026.</em></p>
      <h2>Using the tools</h2>
      <p>
        The click counter, tally counter, word counter, countdown timer, score
        counter and multi counter are free to use for personal and commercial
        counting. You may embed the click counter on your own website using
        the code on the <a href="/counter-embed/">counter embed</a> page.
      </p>
      <h2>What you must not do</h2>
      <ul>
        <li>Do not use the tools to break the law or to harm others.</li>
        <li>
          Do not present the tools as your own work, and do not resell access
          to them.
        </li>
        <li>
          Do not try to disrupt the website or to access parts of it you were
          not given access to.
        </li>
      </ul>
      <h2>Availability</h2>
      <p>
        The tools are provided “as is”, without any guarantee that they will
        always be available or error-free. Counts are stored in your browser
        only — if you clear your browser data, your counts are gone, and we
        cannot recover them.
      </p>
      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. Continued use of the site
        after a change means you accept the updated terms.
      </p>
      <ToolHub current="/terms-of-service/" />
    </>
  );
}

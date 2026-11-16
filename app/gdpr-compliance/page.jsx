import { ToolHub } from "../../components/shared";
import { pageMeta } from "../../lib/meta";

export const metadata = pageMeta("/gdpr-compliance/");

export default function GdprPage() {
  return (
    <>
      <h1>GDPR Compliance</h1>
      <p className="lede">
        Your data rights under the GDPR — and how the browser-only tools on
        Simple Click Counter respect them.
      </p>
      <p><em>Last updated: November 2026.</em></p>
      <h2>What personal data we hold</h2>
      <p>
        Almost none. You do not need an account to use the click counter,
        tally counter, word counter, countdown timer, score counter or multi
        counter, so we do not hold your name, email or password. Counts and
        text are stored in your own browser only — they are never sent to our
        servers, so we cannot access, share or sell them.
      </p>
      <h2>Your rights</h2>
      <p>
        Under the GDPR you have the right to access, correct and delete your
        personal data, and to object to its processing. Because your data
        lives only in your browser, you can exercise those rights yourself at
        any time: clear your browser’s site data for
        simpleclickcounter.net, or use the Reset button on any tool. If you
        contact us through the <a href="/contact/">contact</a> page, the only
        personal data involved is what you choose to send in your message —
        and you can ask us to delete it.
      </p>
      <h2>Lawful basis</h2>
      <p>
        The tools run entirely in your browser, so no personal data is
        processed on our servers for counting. Any message you send us is
        processed only to answer you.
      </p>
      <ToolHub current="/gdpr-compliance/" />
    </>
  );
}

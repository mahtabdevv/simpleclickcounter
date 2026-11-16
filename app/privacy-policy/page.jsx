import { ToolHub } from "../../components/shared";
import { pageMeta } from "../../lib/meta";

export const metadata = pageMeta("/privacy-policy/");

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="lede">
        Simple Click Counter is built to be private. This page explains what
        data our tools store — in your browser only — and how we handle it.
      </p>
      <p><em>Last updated: November 2026.</em></p>
      <h2>What the tools store</h2>
      <p>
        The click counter, tally counter, score counter and multi counter save
        your counts in your own browser using localStorage. The word counter
        keeps your text in your browser while you type. Nothing you count or
        type is uploaded to a server, and we cannot see it.
      </p>
      <h2>What we do not collect</h2>
      <p>
        We do not ask you to sign up, so we do not collect names, email
        addresses or passwords. The tools do not use tracking cookies, and
        there is no advertising on this site at the time of writing — see the{" "}
        <a href="/cookie-policy/">cookie policy</a>.
      </p>
      <h2>Your control</h2>
      <p>
        You can clear everything a tool has saved by clearing your browser’s
        site data for simpleclickcounter.net, or by using the Reset button on
        each tool. If analytics or advertising is added later, this policy
        will be updated and the change will be noted here.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy? Use the{" "}
        <a href="/contact/">contact</a> page.
      </p>
      <ToolHub current="/privacy-policy/" />
    </>
  );
}

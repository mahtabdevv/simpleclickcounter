import { ToolHub } from "../../components/shared";
import { pageMeta } from "../../lib/meta";

export const metadata = pageMeta("/cookie-policy/");

export default function CookiePage() {
  return (
    <>
      <h1>Cookie Policy</h1>
      <p className="lede">
        Which cookies (if any) Simple Click Counter uses — and how to control
        them.
      </p>
      <p><em>Last updated: November 2026.</em></p>
      <h2>What this site uses</h2>
      <p>
        At the time of writing, this website does not set tracking cookies.
        The counting tools save your counts in your browser using localStorage
        — that is browser storage, not a cookie, and it never leaves your
        device. See the <a href="/privacy-policy/">privacy policy</a> for the
        full picture.
      </p>
      <h2>If that changes</h2>
      <p>
        If analytics or advertising is added in future, this page will be
        updated to list exactly which cookies are used, what they do, and how
        to opt out. Any advertising would follow the advertising provider’s
        own cookie rules, which would be linked from here.
      </p>
      <h2>How to control cookies</h2>
      <p>
        You can block or delete cookies in your browser settings at any time.
        Blocking cookies will not break the counting tools — they do not need
        cookies to work.
      </p>
      <ToolHub current="/cookie-policy/" />
    </>
  );
}

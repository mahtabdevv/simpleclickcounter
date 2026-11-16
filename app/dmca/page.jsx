import { ToolHub } from "../../components/shared";
import { pageMeta } from "../../lib/meta";

export const metadata = pageMeta("/dmca/");

export default function DmcaPage() {
  return (
    <>
      <h1>DMCA</h1>
      <p className="lede">
        How to report copyright concerns about content on Simple Click Counter.
      </p>
      <p><em>Last updated: November 2026.</em></p>
      <h2>Notice</h2>
      <p>
        If you believe content on this website infringes your copyright, send
        a notice through the <a href="/contact/">contact</a> page with:
      </p>
      <ul>
        <li>The work you believe is infringed, and where it was published.</li>
        <li>The page on this site where the material appears.</li>
        <li>Your name, email address and a way to reach you.</li>
        <li>
          A statement that you believe in good faith the use is not authorised
          by the copyright owner, and that the information in your notice is
          accurate.
        </li>
      </ul>
      <h2>What happens next</h2>
      <p>
        We review every notice we receive. Content found to infringe will be
        removed or disabled, and repeat infringers will lose access to the
        site.
      </p>
      <h2>Counter-notice</h2>
      <p>
        If your content was removed after a notice and you believe the removal
        was a mistake, you may send a counter-notice through the same{" "}
        <a href="/contact/">contact</a> page with the same details and an
        explanation of why the content should be restored.
      </p>
      <ToolHub current="/dmca/" />
    </>
  );
}

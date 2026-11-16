import { EmbedSnippet } from "../../components/tools";
import { ToolHub, Faq } from "../../components/shared";
import { pageMeta } from "../../lib/meta";

export const metadata = pageMeta("/counter-embed/");

export default function EmbedPage() {
  return (
    <>
      <h1>Embed a Click Counter on Your Website – Free</h1>
      <p className="lede">
        Embed a free click counter on your website in minutes — no sign-up,
        no code skills needed. Copy the code below, paste it into your page,
        and your visitors get a working click counter.
      </p>

      <EmbedSnippet />

      <h2>How to embed a click counter</h2>
      <ol>
        <li>Copy the embed code above.</li>
        <li>
          Paste it into your website where you want the click counter to
          appear — most website builders have an “embed” or “HTML” block for
          this.
        </li>
        <li>Publish the page. The click counter appears and works right away.</li>
      </ol>

      <h2>Where an embedded click counter helps</h2>
      <ul>
        <li>
          <strong>Teachers:</strong> put a click counter on a class page for
          attendance and participation.
        </li>
        <li>
          <strong>Event pages:</strong> let visitors count guests, votes or
          sign-ups with a click counter on the page.
        </li>
        <li>
          <strong>Bloggers:</strong> add a click counter to a post about
          counting, tally marks or scorekeeping.
        </li>
        <li>
          <strong>Shop owners:</strong> a click counter on a stock page helps
          you tally items as they arrive.
        </li>
      </ul>
      <p>
        The embedded click counter is the same free click counter from the{" "}
        <a href="/">click counter</a> homepage. Visitors count on your page;
        nothing is installed on your website and no sign-up is needed. For
        tally marks instead, link your visitors to the{" "}
        <a href="/tally-counter/">tally counter</a>.
      </p>

      <Faq
        items={[
          {
            q: "Is it free to embed a click counter?",
            a: "Yes. Embedding this click counter is free, with no sign-up. Copy the code, paste it on your website, and it works.",
          },
          {
            q: "Do I need to know code to embed a click counter?",
            a: "No. Copy the code above and paste it into an embed or HTML block on your website. Most website builders support that in one click.",
          },
          {
            q: "Will the embedded click counter slow down my website?",
            a: "The embed is a small frame that loads the click counter from simpleclickcounter.net. It does not add any code or tracking to your own website.",
          },
          {
            q: "Can I embed the tally counter instead?",
            a: "The embed code loads the click counter. To share the tally counter, link to the tally counter page from your website.",
          },
        ]}
      />

      <ToolHub current="/counter-embed/" />
    </>
  );
}

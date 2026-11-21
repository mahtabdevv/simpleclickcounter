import Link from "next/link";
import { WordCounter } from "../../components/tools";
import { ToolPage, Faq, UseCases } from "../../components/shared";
import { pageMeta } from "../../lib/meta";

export const metadata = pageMeta("/word-counter/");

const CASES = [
  { icon: "write", title: "Essays and assignments", text: "Hit the word limit before you submit, not after. Paste the draft and trim until the number is right." },
  { icon: "social", title: "Posts with a character limit", text: "Check characters with and without spaces, so you know exactly how a platform will count them." },
  { icon: "study", title: "Articles and reports", text: "Watch length and reading time together. Most readers manage about 200 words a minute." },
  { icon: "calls", title: "Emails and scripts", text: "Keep a cold email short, or time a speech: 130 words is roughly a minute spoken aloud." },
];

export default function WordCounterPage() {
  return (
    <ToolPage
      current="/word-counter/"
      title="Free Word Counter Online"
      lede="Paste or type your text and see words, characters, sentences and reading time update with every keystroke."
      points={[
        "Characters counted with and without spaces",
        "Sentences, paragraphs and reading time included",
        "Nothing is uploaded — your text stays on this device",
        "Your draft is kept if you close the tab by mistake",
      ]}
      tool={<WordCounter />}
    >
      <h2>Exactly what gets counted</h2>
      <div className="table-wrap"><table>
        <thead><tr><th>Number</th><th>How it is worked out</th></tr></thead>
        <tbody>
          <tr><td><strong>Words</strong></td><td>Anything separated by spaces or line breaks. Extra spaces never add words.</td></tr>
          <tr><td><strong>Characters</strong></td><td>Every letter, number, space and punctuation mark.</td></tr>
          <tr><td><strong>No spaces</strong></td><td>The same, minus spaces and line breaks.</td></tr>
          <tr><td><strong>Sentences</strong></td><td>Text that ends in a full stop, question mark or exclamation mark.</td></tr>
          <tr><td><strong>Paragraphs</strong></td><td>Blocks of text separated by a line break.</td></tr>
          <tr><td><strong>Reading time</strong></td><td>Words ÷ 200, rounded up to the next minute.</td></tr>
        </tbody>
      </table></div>

      <UseCases cases={CASES} title="When length matters" />

      <h2>Private by default</h2>
      <p>
        Many online word counters send your text to a server. This one
        doesn’t. Counting happens in your browser, and the draft is kept only
        in this browser’s storage so a closed tab doesn’t cost you your work.
        Press <strong>Clear text</strong> and it is gone.
      </p>
      <p>
        Need to count something other than words? Try the{" "}
        <Link href="/">click counter</Link> for taps or the{" "}
        <Link href="/countdown-timer/">countdown timer</Link> for timed writing
        sprints.
      </p>

      <Faq
        items={[
          { q: "Is this word counter free?", a: "Yes. It is free with no sign-up and no limit on text length." },
          { q: "Is my text uploaded anywhere?", a: "No. Everything is counted in your browser. Nothing you type or paste is sent to a server." },
          { q: "How are words counted?", a: "Text is split on spaces and line breaks. Hyphenated words such as “well-known” count as one word, and extra spaces never add to the count." },
          { q: "Does it count characters without spaces?", a: "Yes. You get both totals — with spaces and without — because platforms and assignments use different rules." },
          { q: "How is reading time calculated?", a: "Your word count divided by 200 words per minute, a typical silent reading speed, rounded up." },
        ]}
      />
    </ToolPage>
  );
}

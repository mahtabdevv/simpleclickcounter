import { WordCounter } from "../../components/tools";
import { ToolHub, Faq, UseCases } from "../../components/shared";
import { pageMeta } from "../../lib/meta";

export const metadata = pageMeta("/word-counter/");

const CASES = [
  {
    emoji: "✍️",
    title: "Essays and assignments",
    text: "Check your word count before you submit. This word counter shows words, characters and sentences as you type.",
  },
  {
    emoji: "📝",
    title: "Social media posts",
    text: "Keep posts under a character limit. The word counter shows characters with and without spaces, so you always know where you stand.",
  },
  {
    emoji: "📄",
    title: "Reports and articles",
    text: "Track the length of a report or article and estimate reading time at about 200 words per minute.",
  },
  {
    emoji: "💬",
    title: "Emails and messages",
    text: "Paste a draft into the word counter to see its length before you send it.",
  },
];

export default function WordCounterPage() {
  return (
    <>
      <h1>Free Word Counter Online</h1>
      <p className="lede">
        This free word counter counts words, characters and sentences
        instantly as you type. No sign-up, nothing uploaded — your text stays
        in your browser.
      </p>

      <WordCounter />

      <p>
        A word counter is useful whenever length matters: essays with a word
        limit, posts with a character limit, or articles you want to keep
        tight. Paste your text above and the word counter updates with every
        keystroke — words, characters with spaces, characters without spaces,
        sentences, paragraphs and an estimated reading time.
      </p>

      <UseCases cases={CASES} />

      <h2>How the word counter counts</h2>
      <ul>
        <li>
          <strong>Words</strong> — text split on spaces. “Hello world” is 2
          words.
        </li>
        <li>
          <strong>Characters</strong> — every letter, number, space and
          punctuation mark.
        </li>
        <li>
          <strong>Characters (no spaces)</strong> — the same count with spaces
          removed, which is what most character limits use.
        </li>
        <li>
          <strong>Sentences</strong> — text ending in a full stop, question
          mark or exclamation mark.
        </li>
        <li>
          <strong>Reading time</strong> — words divided by 200 words per
          minute, rounded up.
        </li>
      </ul>
      <p>
        Need to count something else? The{" "}
        <a href="/">click counter</a> counts taps, the{" "}
        <a href="/tally-counter/">tally counter</a> counts with tally marks,
        and the <a href="/multi-counter/">multi counter</a> counts several
        things at once.
      </p>

      <Faq
        items={[
          {
            q: "Is this word counter free?",
            a: "Yes. This word counter is free, with no sign-up and no download.",
          },
          {
            q: "Is my text uploaded anywhere?",
            a: "No. The word counter runs entirely in your browser. Nothing you type or paste is uploaded or stored on a server.",
          },
          {
            q: "How does the word counter count words?",
            a: "Words are counted by splitting your text on spaces. Extra spaces and blank lines do not create extra words.",
          },
          {
            q: "Does the word counter count characters without spaces?",
            a: "Yes — it shows both totals: characters with spaces and characters without spaces.",
          },
        ]}
      />

      <ToolHub current="/word-counter/" />
    </>
  );
}

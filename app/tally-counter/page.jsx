import { TallyCounter } from "../../components/tools";
import { ToolHub, Faq, UseCases } from "../../components/shared";
import { pageMeta } from "../../lib/meta";

export const metadata = pageMeta("/tally-counter/");

const CASES = [
  {
    emoji: "🏫",
    title: "Attendance and people counting",
    text: "Count students, guests or visitors as they arrive. A tally counter with visual tally marks makes a headcount easy to check at a glance. Use it for counting people at the door — a tally marker online that shows the total as you go.",
  },
  {
    emoji: "🗳️",
    title: "Votes and surveys",
    text: "Tally votes in a meeting, a classroom poll or a club election. Groups of five keep the tally marks readable when the count gets big, and keeping tally of every option is easy — one tally list per option.",
  },
  {
    emoji: "📦",
    title: "Stock and inventory",
    text: "Count boxes, items on a shelf or products at a stall. Use this tally counter as a hand tally counter when you walk the shelves, or as an electronic tally counter that never runs out of paper. It works as a handheld tally counter for stock walks.",
  },
  {
    emoji: "🏋️",
    title: "Reps and laps",
    text: "Count reps, sets or laps in a workout. The tally marks show your progress without you having to remember a number. Use it to tally points in a game, keep tally of laps, or keep a tally of scores.",
  },
];

export default function TallyCounterPage() {
  return (
    <>
      <h1>Free Tally Counter Online</h1>
      <p className="lede">
        This free tally counter shows visual tally marks grouped in fives, so
        you can read your count at a glance. Count attendance, votes, stock
        or people counting — no sign-up, and your count is saved in your
        browser. Use it as a tally app on your phone, a tally counter app in
        any browser, or as a hand tally counter on a clipboard walk. This
        online tally counter is a tally tracker for events, votes and stock —
        a digital tally counter you can open anywhere.
      </p>

      <TallyCounter />

      <p>
        A tally counter is the oldest counting tool there is — and still the
        clearest. Instead of one big number, you see tally marks: four
        straight marks, then a diagonal mark across them to make a group of
        five. That is why a tally counter beats a plain click counter for
        attendance and votes: you can check the count without counting the
        marks one by one.
      </p>

      <p>
        Use it as a tally marker you can read at a glance, a tally mark
        counter for classes and clubs, or a tally keeper for scores and
        votes. It is a tally clicker you tap, a tally clicker counter for
        fast counting, and a free tally counter with no sign-up. Teachers use
        it as a tally maker for lessons, event staff use it as a tally board
        at the door, and anyone can use this tally website as an online tally
        for votes, a tally tool for events, or a tallying app on their phone.
        Keep a tally count of anything — a running tally of votes, a tally
        count app for surveys, or tally numbers at a glance. Teams use tally
        counters for headcounts, and it works as a counter tally for votes
        and a tally counter for attendance.
      </p>

      <UseCases cases={CASES} />

      <h2 id="tally-marks">What are tally marks?</h2>
      <p>
        Tally marks are a simple way to count by hand. You draw one vertical
        mark for each thing you count. After four marks, the fifth mark is a
        diagonal line across the group — so every group of five is easy to
        spot. That is the whole system: tally marks turn a long count into
        small groups of five that anyone can read. Counting tally marks is
        easy once you know the groups of five.
      </p>
      <p>
        Tally marks are used for attendance, votes, stock counts, survey
        results and scorekeeping. Teachers use tally marks in class, event
        staff use tally marks at the door, and shop owners use tally marks to
        count stock. If you are counting people, tally marks are usually
        faster than writing numbers down.
      </p>

      <h3>Tally chart example</h3>
      <p>
        A tally chart is a table that turns tally marks into numbers. Here is
        a tally chart for counting from 1 to 10 — the tally marks online in
        this chart match the marks in the tool. This tally chart online shows
        the same marks you will see when you count, and a tally mark maker
        for teachers can copy it for class. Teachers can use it as a tally
        mark generator and a tally maker online for class worksheets.
      </p>
      <div className="table-wrap table--nums"><table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Tally marks</th>
            <th>How to read it</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>|</td><td>One mark</td></tr>
          <tr><td>2</td><td>||</td><td>Two marks</td></tr>
          <tr><td>3</td><td>|||</td><td>Three marks</td></tr>
          <tr><td>4</td><td>||||</td><td>Four marks</td></tr>
          <tr><td>5</td><td>|||| with a diagonal mark</td><td>One full group of five</td></tr>
          <tr><td>6</td><td>One group of five, plus |</td><td>Five plus one</td></tr>
          <tr><td>7</td><td>One group of five, plus ||</td><td>Five plus two</td></tr>
          <tr><td>8</td><td>One group of five, plus |||</td><td>Five plus three</td></tr>
          <tr><td>9</td><td>One group of five, plus ||||</td><td>Five plus four</td></tr>
          <tr><td>10</td><td>Two groups of five</td><td>Ten in total</td></tr>
        </tbody>
      </table></div>

      <h2>How to count tally marks</h2>
      <ol>
        <li>Draw one tally mark for each item you count.</li>
        <li>
          After four marks, draw the fifth mark diagonally across the group —
          that closes a group of five.
        </li>
        <li>Start a new group for the next five.</li>
        <li>
          To read the total, count the groups of five, then add the marks in
          the last open group. Two full groups plus three marks is 13.
        </li>
      </ol>
      <p>
        This tally counter does the grouping for you: every five taps, the
        tally marks close into a group automatically. It is a tally counter
        digital tool and a tally calculator that adds the marks for you —
        click tally, and a mark appears. You can also use the{" "}
        <a href="/">click counter</a> when you want one big number instead of
        tally marks, or the <a href="/multi-counter/">multi counter</a> when
        you count several things at once — a multiple tally counter for
        several options, or a multiple tally counter online for votes.
        Keeping a tally score keeper for games? Use the{" "}
        <a href="/score-counter/">score counter</a> as a score tally counter
        and check the tally score at a glance. Not sure which fits? Read{" "}
        <a href="/click-counter-vs-tally-counter/">
          click counter vs tally counter
        </a>
        .
      </p>

      <Faq
        items={[
          {
            q: "What is a tally counter?",
            a: "A tally counter is a counting tool that shows your count as tally marks grouped in fives. It is used for attendance, votes, stock and people counting.",
          },
          {
            q: "How do tally marks work?",
            a: "You draw one mark per item. Four straight marks, then a diagonal fifth mark closes a group of five. Count the groups of five, then add the marks in the last group.",
          },
          {
            q: "What is a tally chart?",
            a: "A tally chart is a table that lists tally marks next to their numbers — for example, five tally marks in one group means 5. The tally chart example on this page shows 1 to 10.",
          },
          {
            q: "Is this tally counter free?",
            a: "Yes. This tally counter is free, with no sign-up. Your count is saved in your browser.",
          },
          {
            q: "Can I use this tally counter on my phone?",
            a: "Yes. It works as a tally app in any browser — open this page on your phone and tap to count.",
          },
          {
            q: "When should I use a tally counter instead of a click counter?",
            a: "Use a tally counter when you want to read the count at a glance — attendance, votes and stock. Use a click counter when you only need one big number and maximum speed.",
          },
          {
            q: "What is a tally marker?",
            a: "A tally marker is one mark in a tally — four straight marks and a diagonal fifth mark make a group of five. This tool draws each tally marker for you: tap the tally button and a mark appears. It works as a tally marker online, a tally marker app on your phone, or an online tally marker in any browser. You can also use it as a tally mark app, a tally mark online tool, or a tally mark counter for classes. It works as a tally mark tracker for classes and clubs.",
          },
          {
            q: "Is this an online tally counter?",
            a: "Yes — a free online tally counter with no sign-up. This online tally counter runs in your browser: a tally counter online, a tally online counter and an online tally counter free to use. It is a tally counter website and a tally site you can open on any device, a tally number you can read at a glance, and a tally online tool for attendance, votes and stock. It is a tally counter online free to use — no sign-up, no download — and an online counter tally for votes.",
          },
          {
            q: "Can I use it as a tally tracker?",
            a: "Yes. Use it as a tally tracker for events, a tally tracker app on your phone, a tally counting app, or a tally app counter for surveys. It works as a free tally app and tally apps for phones, or a tally marks app for your phone. As a tally generator it starts a fresh tally in one tap, and as an electric tally counter it never needs paper.",
          },
          {
            q: "What else can I count with it?",
            a: "Almost anything you can count by hand. Use it as a tally board for the classroom, a tally board online for remote votes, a digital tally for stock, or a tally clicker online for fast counting. It is a tally system anyone can learn, a tally marks counter for surveys, a tally online counter for events, and a point tally for games. Count tally marks for attendance, keep a tally point for each score, use it as a tally machine in your pocket, or run a call tally for phone work and a number tally or number tally counter for stock. It is tally counting for events, votes and stock — or a tally counter clicker for fast counting, a clicker tally counter for fast counting, and a tally ticker for live counts.",
          },
        ]}
      />

      <ToolHub current="/tally-counter/" />
    </>
  );
}

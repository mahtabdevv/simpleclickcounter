import { ClickCounter } from "../components/tools";
import { ToolHub, Faq, UseCases, SPORTS_CASES } from "../components/shared";
import { pageMeta } from "../lib/meta";

export const metadata = pageMeta("/");

export default function HomePage() {
  return (
    <div className="home-wide">
      <h1>Free Click Counter Online</h1>
      <p className="lede">
        This free click counter counts anything with one tap — no sign-up, no
        download, and it works on any device. Use this online counter for
        reps, attendance, stock, votes or people counting. It works as a
        counter app on your phone and as a free online counter on any
        computer. As a counting app it keeps your numbers in one place, and
        your count is saved in your browser, so you can close the page and
        come back to it.
      </p>

      <ClickCounter />

      <p>
        A click counter is the simplest counting tool there is: tap, and the
        number goes up. This counter online also works with your keyboard —
        press <kbd>Space</kbd> to count — and it keeps session stats so you
        can see how many clicks you made today. As a counter tool it is built
        for speed: one big button, no menus, no login. If you want a digital
        counter that just works, this is it.
      </p>

      <p>
        People call this tool many things — a clicker, a tap counter, a
        clicker counter or a number counter — and it works the same way for
        all of them. One click counter, one big button: count click by click,
        or set the step and count faster. It is an interactive counter: you
        tap, it counts. Use it as a mouse clicker counter to test click speed
        and count clicks in a speed test, as a count tracker for daily tasks,
        or as a click tracker that shows your tap count for the day and the
        number of clicks you made. It is a simple counter for counting reps
        at the gym, calls at work or items on a shelf, an incremental counter
        that adds one per tap, and a digital counter that never needs
        batteries, paper or a download. Some people call it a count clicker
        or a counting clicker, others a clicking counter for fast tapping
        tests — a clicker that counts, a digital clicker in your browser, and
        a smart counter that saves your count. It is one of the simplest
        click counters and online counters you can use, an easy counter for
        anyone, an easy count for anyone, a rapid counter for fast tapping,
        and a thing counter for anything at all. An up counter that only goes
        up, a digit counter and digital number counter with one big number,
        and an online counter clicker that is a counting app free to use.
        Keep it open as a tab counter while you work. Just tap and count.
        Click to count: one tap, one number.
      </p>

      <UseCases cases={SPORTS_CASES} />

      <h2>Click counter, tally counter and more — pick your counter tool</h2>
      <div className="table-wrap"><table>
        <thead>
          <tr>
            <th>Counter tool</th>
            <th>Best for</th>
            <th>Open it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Click counter</td>
            <td>Fast counting of anything, one tap at a time</td>
            <td>You are here</td>
          </tr>
          <tr>
            <td>Tally counter</td>
            <td>Visual tally marks, attendance and votes</td>
            <td><a href="/tally-counter/">Tally counter</a></td>
          </tr>
          <tr>
            <td>Word counter</td>
            <td>Words, characters and sentences in any text</td>
            <td><a href="/word-counter/">Word counter</a></td>
          </tr>
          <tr>
            <td>Countdown timer</td>
            <td>Timed tasks, workouts and study sessions</td>
            <td><a href="/countdown-timer/">Countdown timer</a></td>
          </tr>
          <tr>
            <td>Score counter</td>
            <td>2-player scoreboard for games and sports</td>
            <td><a href="/score-counter/">Score counter</a></td>
          </tr>
          <tr>
            <td>Multi counter</td>
            <td>Counting several things at the same time</td>
            <td><a href="/multi-counter/">Multi counter</a></td>
          </tr>
        </tbody>
      </table></div>

      <h2>How to use this click counter online</h2>
      <p>
        At work, use it as an online clicker and a call counter for calls
        made, a task counter for jobs finished, an item counter for stock, or
        an attendance counter for a headcount. It is a live counter — the
        number updates with every tap — and a quick counter for counting on
        the go. Use it to count people at the door with a head count clicker,
        keep count across the day, or run a yes no counter for quick votes.
        Keep a number count of reps, calls or items, or use it as a piece
        counter for parts on a line, a head counter for events, or an entry
        counter for sign-ins. This counter website runs entirely in
        your browser, and as a counting website it needs no account — no
        counter download, nothing to install. It is a counter free to use, a
        free counter and a counting tool that stays simple, a web counter
        that runs in any browser, and an online counting tool with no
        sign-up. Use it as a counter tracker for daily goals, a count tool
        for daily jobs, free counters for every job, counters online for
        every kind of counting, an online click counter for daily counting,
        or an online counter tool for your team.
        This counter site needs no login, and as a click counter website it
        is open, tap, done.
      </p>
      <ol>
        <li>
          <strong>Tap the big button</strong> — or press <kbd>Space</kbd> on
          your keyboard. Every tap adds one to your click counter.
        </li>
        <li>
          <strong>Set a step or a goal</strong> — count by 2s or 5s, or set a
          daily goal and watch the progress bar fill up.
        </li>
        <li>
          <strong>Come back any time</strong> — your count is saved in your
          browser, so it is still there tomorrow.
        </li>
        <li>
          <strong>Export your session</strong> — download a CSV of your clicks
          when you need a record.
        </li>
      </ol>

      <p>
        Your counter set — step, goal and sound — is saved in your browser
        too, so the next time you open the page it is ready to count.
      </p>

      <p>
        Need a different kind of counter? Try the{" "}
        <a href="/tally-counter/">tally counter</a> for visual tally marks,
        the <a href="/word-counter/">word counter</a> for text, or the{" "}
        <a href="/counter-embed/">click counter embed</a> to put this click
        counter on your own website as a website counter and widget counter.
        The embed is a counting widget you can paste anywhere, and a counter
        for website use. Need a tool counter for your own site? The embed
        page shows how.
      </p>

      <Faq
        items={[
          {
            q: "Is this click counter really free?",
            a: "Yes. This click counter is free to use, with no sign-up and no download. There is no limit on how much you count.",
          },
          {
            q: "Does the click counter save my count?",
            a: "Yes — your count is saved in your browser with localStorage. Close the tab and come back later, and your click counter will show the same number.",
          },
          {
            q: "Can I use the click counter on my phone?",
            a: "Yes. This online counter works on any device with a browser — phone, tablet or computer. The tap button is big enough for one-handed counting.",
          },
          {
            q: "What is the difference between a click counter and a tally counter?",
            a: "A click counter shows one big number and is fastest for quick counting. A tally counter shows visual tally marks grouped in fives, which is easier to read at a glance for attendance, votes and stock. See the full comparison on the click counter vs tally counter page.",
          },
          {
            q: "Can I count by more than one at a time?",
            a: "Yes. Set the step to 2, 5 or 10 and each tap adds that much to your click counter.",
          },
          {
            q: "Is this a tap counter or a clicker counter?",
            a: "Both. Some people call it a tap counter, others a clicker counter, a tap clicker counter or a clicker — the tool is the same. Tap the button with your finger or mouse, or press Space. It works as a tap counter online and a tap counter app on your phone, an online tap counter in any browser, and a count clicker online for phones. Use it as a finger tap counter online, a tap screen counter for touchscreens, or a screen tap counter on a tablet. It also works as a clicker counter online, a counter clicker online, or an online clicker counter in any browser.",
          },
          {
            q: "Can I use it as a number counter?",
            a: "Yes. Use it as a number counter for inventory, a number clicker for counting items one by one, or a number clicker counter when you count by hand and want a running total. Count numbers in groups by setting the step to 2, 5 or 10, count numbers online from any device, or use it as a number counter app and a number counting app. Run number counters for several shelves at once with the multi counter, or use manual counters for stock and attendance. Teachers and shop owners use it as a number clicker online and a number counter tool. It also works as a number counter clicker for fast counting by hand, and a number counter online from any device — count number by number, or set the step and count numbers in groups.",
          },
          {
            q: "Is it a counting machine?",
            a: "Not a physical one. A counting machine counts with hardware; this is a digital counter that runs in your browser — a counter tool for counting without a counting device to buy, charge or carry. It is a manual counter: you tap, it counts. Think of it as a count machine in your pocket, a counter machine you never plug in, and a counter device that lives in your browser. It counts taps, not time — it is not a tick counter or a timer, and not an analog counter with moving parts. No counting machines to buy, charge or carry.",
          },
          {
            q: "How do I count my clicks?",
            a: "Tap the button and the session stats show your tap count for the day, your button count, and the number of clicks you made. That makes it a handy click tracker for testing click speed, a count tracker for daily goals, and a counting tracker for habits. It is a clicks counter for the day, a count keeper and counter keeper for daily totals, and a keep count app for streaks — a number keeper that remembers your totals. The counter number is always on screen: your click count for the day, your clicker count, and a simple tracker for daily totals.",
          },
          {
            q: "Can I use it as a button counter?",
            a: "Yes — the big button is the whole tool. Use it as a button counter on your phone, a counter button on a touchscreen, or a counting button you can tap all day. It works as a push counter you press, a push button counter, a click button counter, a button click counter, a simple counter button, or a tap button counter. The count button is the big one in the middle. Every counter click adds one, every counter tap adds one — a button clicker counter and a press counter you can press all day.",
          },
          {
            q: "Can I test my click speed with it?",
            a: "Yes. Use it as a mouse clicker counter to test how fast you can click, a left click counter for mouse tests, or a click counter game for speed tests. Set a goal of 100 — a counter to 100 for speed tests — and tap to 100 as fast as you can. It works as a timed click counter for speed runs, an attempt counter for practice, and a test counter for warm-ups. Count mouse clicks in a test, and use click trackers for speed tests to compare your results. It works as a mouse click counter on any computer, a clicker tracker for speed tests, and a clicker counter game for speed tests.",
          },
          {
            q: "Is there a counter app Android version?",
            a: "There is no app to install. It is a counter app online — open it in your browser on Android or iPhone, no install needed. It works as a count app on your phone, a free counter app, a clicker app for counting, an app for counting anything, an app to count anything, an app that counts anything, and an app that counts things. Unlike counter apps that need an install, this is a free counting app and an online counter app that just works. On desktop it is a desktop counter; on your phone it is a phone counter. No click counter app to install — it is a simple counter app that needs no install.",
          },
        ]}
      />

      <ToolHub current="/" />
    </div>
  );
}

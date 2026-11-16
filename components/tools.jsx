"use client";

import { useCallback, useEffect, useRef, useState } from "react";

function useLocalStorage(key, initial) {
  const [value, setValue] = useState(initial);
  const loaded = useRef(false);
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) setValue(JSON.parse(raw));
    } catch {}
    loaded.current = true;
  }, [key]);
  useEffect(() => {
    if (!loaded.current) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }, [key, value]);
  return [value, setValue];
}

function beep(freq = 880, ms = 90) {
  try {
    const Ctx =
      window.AudioContext || window.webkitAudioContext;
    const ctx = new Ctx();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = freq;
    g.gain.value = 0.08;
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + ms / 1000);
    o.onended = () => ctx.close();
  } catch {}
}

/* ---------------- Click Counter ---------------- */

export function ClickCounter() {
  const [count, setCount] = useLocalStorage("scc-click-count", 0);
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState(100);
  const [sound, setSound] = useState(false);
  const [sessionClicks, setSessionClicks] = useState(0);
  const [sessionStart] = useState(() => Date.now());
  const [log, setLog] = useState([]);

  const increment = useCallback(() => {
    setCount((c) => c + step);
    setSessionClicks((s) => s + 1);
    setLog((l) => [...l.slice(-999), new Date().toISOString()]);
    if (sound) beep();
  }, [step, sound, setCount]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.target && ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName))
        return;
      if (e.code === "Space" || e.key === "ArrowUp") {
        e.preventDefault();
        increment();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setCount((c) => Math.max(0, c - step));
      } else if (e.key === "r" || e.key === "R") {
        setCount(0);
        setSessionClicks(0);
        setLog([]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [increment, step, setCount]);

  const exportCsv = () => {
    const csv = ["time,count"].join("\n") + "\n" + log.map((t, i) => `${t},${i + 1}`).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "click-counter-session.csv";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const mins = Math.max(0, Math.round((Date.now() - sessionStart) / 60000));
  const pct = goal > 0 ? Math.min(100, Math.round((count / goal) * 100)) : 0;

  return (
    <div className="tool-card">
      <div className={`count-display digits-${Math.min(String(count).length, 6)}`} aria-live="polite">{count}</div>
      <button className="btn big" onClick={increment} aria-label="Count one">
        + Count
      </button>
      <div className="btn-row">
        <button className="btn ghost" onClick={() => setCount((c) => Math.max(0, c - step))}>− 1</button>
        <button className="btn ghost" onClick={() => { setCount(0); setSessionClicks(0); setLog([]); }}>Reset</button>
        <button className="btn ghost" onClick={() => setSound((s) => !s)}>
          Sound: {sound ? "On" : "Off"}
        </button>
        <button className="btn ghost" onClick={exportCsv} disabled={log.length === 0}>
          Export CSV
        </button>
      </div>
      <div className="field-row">
        <label>
          Step{" "}
          <input type="number" min="1" max="100" value={step} onChange={(e) => setStep(Math.max(1, Number(e.target.value) || 1))} />
        </label>
        <label>
          Goal{" "}
          <input type="number" min="0" max="1000000" value={goal} onChange={(e) => setGoal(Math.max(0, Number(e.target.value) || 0))} />
        </label>
      </div>
      {goal > 0 && (
        <div className="progress" role="progressbar" aria-valuenow={pct} aria-valuemin="0" aria-valuemax="100">
          <div style={{ width: `${pct}%` }} />
        </div>
      )}
      {goal > 0 && <p className="kbd-hint">{pct}% of your goal of {goal}</p>}
      <div className="stats">
        <span>Session clicks: <b>{sessionClicks}</b></span>
        <span>Session time: <b>{mins} min</b></span>
        <span>Saved in your browser</span>
      </div>
      <p className="kbd-hint">
        Keyboard: <kbd>Space</kbd> or <kbd>↑</kbd> to count, <kbd>↓</kbd> to
        subtract, <kbd>R</kbd> to reset.
      </p>
    </div>
  );
}

/* ---------------- Tally Counter ---------------- */

function TallyMarks({ count }) {
  const groups = [];
  let remaining = count;
  while (remaining > 0) {
    const take = Math.min(5, remaining);
    groups.push(take);
    remaining -= take;
  }
  if (groups.length === 0) return <p className="tally-marks">No tally marks yet — tap Count to start.</p>;
  return (
    <div className="tally-marks" aria-label={`${count} in tally marks`}>
      {groups.map((n, gi) => (
        <span className="tally-group" key={gi}>
          {"|".repeat(Math.min(n, 4))}
          {n === 5 && <span className="slash">/</span>}
        </span>
      ))}
    </div>
  );
}

export function TallyCounter() {
  const [count, setCount] = useLocalStorage("scc-tally-count", 0);
  const [goal, setGoal] = useState(50);
  const pct = goal > 0 ? Math.min(100, Math.round((count / goal) * 100)) : 0;
  return (
    <div className="tool-card">
      <TallyMarks count={count} />
      <div className={`count-display digits-${Math.min(String(count).length, 6)}`} aria-live="polite">{count}</div>
      <button className="btn big" onClick={() => setCount((c) => c + 1)}>
        + Count
      </button>
      <div className="btn-row">
        <button className="btn ghost" onClick={() => setCount((c) => Math.max(0, c - 1))}>− 1</button>
        <button className="btn ghost" onClick={() => setCount(0)}>Reset</button>
      </div>
      <div className="field-row">
        <label>
          Goal{" "}
          <input type="number" min="0" max="1000000" value={goal} onChange={(e) => setGoal(Math.max(0, Number(e.target.value) || 0))} />
        </label>
      </div>
      {goal > 0 && (
        <div className="progress" role="progressbar" aria-valuenow={pct} aria-valuemin="0" aria-valuemax="100">
          <div style={{ width: `${pct}%` }} />
        </div>
      )}
      <div className="stats">
        <span>Groups of five: <b>{Math.floor(count / 5)}</b></span>
        <span>Saved in your browser</span>
      </div>
      <p className="kbd-hint">
        Tally marks are grouped in fives — four straight marks, then one
        diagonal mark across them.
      </p>
    </div>
  );
}

/* ---------------- Word Counter ---------------- */

export function WordCounter() {
  const [text, setText] = useLocalStorage("scc-word-text", "");
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, "").length;
  const sentences = (text.match(/[^.!?]+[.!?]+/g) || []).length;
  const paragraphs = text.trim() === "" ? 0 : text.split(/\n+/).filter((p) => p.trim() !== "").length;
  const readingMins = Math.max(1, Math.ceil(words / 200));
  return (
    <div className="tool-card tool-card--light">
      <label htmlFor="wc-text" className="field-label">
        Type or paste your text:
      </label>
      <textarea
        id="wc-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing — words, characters and sentences are counted instantly."
      />
      <div className="btn-row btn-row--start">
        <button className="btn ghost" onClick={() => setText("")}>Clear text</button>
        <button
          className="btn ghost"
          onClick={() => navigator.clipboard?.writeText(text)}
          disabled={text.length === 0}
        >
          Copy text
        </button>
      </div>
      <div className="stats stats--start">
        <span>Words: <b>{words}</b></span>
        <span>Characters: <b>{chars}</b></span>
        <span>Characters (no spaces): <b>{charsNoSpaces}</b></span>
        <span>Sentences: <b>{sentences}</b></span>
        <span>Paragraphs: <b>{paragraphs}</b></span>
        <span>Reading time: <b>~{readingMins} min</b></span>
      </div>
      <p className="kbd-hint">Nothing is uploaded — your text stays in your browser.</p>
    </div>
  );
}

/* ---------------- Countdown Timer ---------------- */

export function CountdownTimer() {
  const [h, setH] = useState(0);
  const [m, setM] = useState(5);
  const [s, setS] = useState(0);
  const [left, setLeft] = useState(0);
  const [total, setTotal] = useState(0);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setLeft((v) => {
        if (v <= 1) {
          setRunning(false);
          setDone(true);
          beep(880, 400);
          setTimeout(() => beep(880, 400), 500);
          return 0;
        }
        return v - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  const start = () => {
    const secs = h * 3600 + m * 60 + s;
    if (secs <= 0) return;
    setTotal(secs);
    setLeft(secs);
    setDone(false);
    setRunning(true);
  };
  const fmt = (v) => {
    const hh = Math.floor(v / 3600);
    const mm = Math.floor((v % 3600) / 60);
    const ss = v % 60;
    return [hh, mm, ss].map((n) => String(n).padStart(2, "0")).join(":");
  };
  const pct = total > 0 ? Math.round((left / total) * 100) : 0;

  return (
    <div className="tool-card">
      <div className="timer-display" aria-live="polite">
        {running || left > 0 || done ? fmt(left) : fmt(h * 3600 + m * 60 + s)}
      </div>
      {done && <p className="check">Time is up!</p>}
      <div className="field-row">
        <label>
          Hours{" "}
          <input type="number" min="0" max="23" value={h} disabled={running} onChange={(e) => setH(Math.max(0, Math.min(23, Number(e.target.value) || 0)))} />
        </label>
        <label>
          Minutes{" "}
          <input type="number" min="0" max="59" value={m} disabled={running} onChange={(e) => setM(Math.max(0, Math.min(59, Number(e.target.value) || 0)))} />
        </label>
        <label>
          Seconds{" "}
          <input type="number" min="0" max="59" value={s} disabled={running} onChange={(e) => setS(Math.max(0, Math.min(59, Number(e.target.value) || 0)))} />
        </label>
      </div>
      <div className="btn-row">
        {!running ? (
          <button className="btn" onClick={start}>Start</button>
        ) : (
          <button className="btn" onClick={() => setRunning(false)}>Pause</button>
        )}
        <button className="btn ghost" onClick={() => { setRunning(false); setLeft(0); setTotal(0); setDone(false); }}>Reset</button>
      </div>
      <div className="btn-row">
        {[
          [0, 1, 0, "1 minute"],
          [0, 5, 0, "5 minutes"],
          [0, 10, 0, "10 minutes"],
          [0, 30, 0, "30 minutes"],
        ].map(([hh, mm, ss, label]) => (
          <button
            key={label}
            className="btn ghost"
            disabled={running}
            onClick={() => { setH(hh); setM(mm); setS(ss); }}
          >
            {label}
          </button>
        ))}
      </div>
      {total > 0 && (
        <div className="progress">
          <div style={{ width: `${pct}%` }} />
        </div>
      )}
    </div>
  );
}

/* ---------------- Score Counter (2-player scoreboard) ---------------- */

export function ScoreCounter() {
  const [players, setPlayers] = useLocalStorage("scc-score-players", [
    { name: "Player 1", score: 0, wins: 0 },
    { name: "Player 2", score: 0, wins: 0 },
  ]);
  const [target, setTarget] = useState(10);

  const bump = (i, d) =>
    setPlayers((ps) => ps.map((p, j) => (j === i ? { ...p, score: Math.max(0, p.score + d) } : p)));
  const setName = (i, name) =>
    setPlayers((ps) => ps.map((p, j) => (j === i ? { ...p, name: name || `Player ${i + 1}` } : p)));
  const awardWin = (i) =>
    setPlayers((ps) => ps.map((p, j) => (j === i ? { ...p, wins: p.wins + 1, score: 0 } : { ...p, score: 0 })));
  const leader = players[0].score === players[1].score ? null : players[0].score > players[1].score ? 0 : 1;

  return (
    <div className="tool-card">
      <div className="scoreboard">
        {players.map((p, i) => (
          <div className="player" key={i}>
            <input type="text" value={p.name} aria-label={`Name of player ${i + 1}`} onChange={(e) => setName(i, e.target.value)} />
            <div className="score" aria-live="polite">{p.score}</div>
            <p>
              {leader === i ? "Leading" : leader === null ? "Tied" : "Behind"} · Wins: <b>{p.wins}</b>
            </p>
            <div className="btn-row">
              <button className="btn" onClick={() => bump(i, 1)}>+ 1</button>
              <button className="btn ghost" onClick={() => bump(i, -1)}>− 1</button>
            </div>
            <div className="btn-row">
              <button className="btn ghost" onClick={() => awardWin(i)}>
                {p.name} wins this game
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="field-row">
        <label>
          Play to{" "}
          <input type="number" min="1" max="100" value={target} onChange={(e) => setTarget(Math.max(1, Number(e.target.value) || 1))} />
        </label>
        <button
          className="btn ghost"
          onClick={() => setPlayers((ps) => ps.map((p) => ({ ...p, score: 0 })))}
        >
          Reset scores
        </button>
        <button
          className="btn ghost"
          onClick={() =>
            setPlayers([
              { name: "Player 1", score: 0, wins: 0 },
              { name: "Player 2", score: 0, wins: 0 },
            ])
          }
        >
          Reset everything
        </button>
      </div>
      <p className="kbd-hint">
        First to {target} wins the game — tap “wins this game” to record it in
        the win history. Scores and win history are saved in your browser.
      </p>
    </div>
  );
}

/* ---------------- Multi Counter ---------------- */

export function MultiCounter() {
  const [counters, setCounters] = useLocalStorage("scc-multi-counters", [
    { id: 1, name: "Counter 1", count: 0 },
    { id: 2, name: "Counter 2", count: 0 },
  ]);
  const [newName, setNewName] = useState("");
  const add = () => {
    const name = newName.trim() || `Counter ${counters.length + 1}`;
    setCounters((cs) => [...cs, { id: Date.now(), name, count: 0 }]);
    setNewName("");
  };
  return (
    <div className="tool-card tool-card--light">
      {counters.map((c) => (
        <div className="counter-row" key={c.id}>
          <input
            type="text"
            value={c.name}
            aria-label="Counter name"
            onChange={(e) =>
              setCounters((cs) => cs.map((x) => (x.id === c.id ? { ...x, name: e.target.value } : x)))
            }
            className="counter-name"
          />
          <span className="val">{c.count}</span>
          <button className="btn" onClick={() => setCounters((cs) => cs.map((x) => (x.id === c.id ? { ...x, count: x.count + 1 } : x)))}>+ 1</button>
          <button className="btn ghost" onClick={() => setCounters((cs) => cs.map((x) => (x.id === c.id ? { ...x, count: Math.max(0, x.count - 1) } : x)))}>− 1</button>
          <button className="btn ghost" onClick={() => setCounters((cs) => cs.map((x) => (x.id === c.id ? { ...x, count: 0 } : x)))}>Reset</button>
          <button className="btn ghost" onClick={() => setCounters((cs) => cs.filter((x) => x.id !== c.id))} aria-label={`Delete ${c.name}`}>✕</button>
        </div>
      ))}
      <div className="field-row field-row--start">
        <input
          type="text"
          value={newName}
          placeholder="New counter name (e.g. Adults)"
          onChange={(e) => setNewName(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") add(); }}
          className="field-input-wide"
        />
        <button className="btn" onClick={add}>Add counter</button>
      </div>
      <p className="kbd-hint">
        Total across all counters: <b>{counters.reduce((a, c) => a + c.count, 0)}</b> · Saved in your browser.
      </p>
    </div>
  );
}

/* ---------------- Embed snippet ---------------- */

export function EmbedSnippet() {
  const [copied, setCopied] = useState(false);
  const code = `<iframe src="https://simpleclickcounter.net/" width="100%" height="420" style="border:1px solid #e2e8f0;border-radius:12px;" title="Free Click Counter Online"></iframe>`;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };
  return (
    <div className="tool-card tool-card--light">
      <pre className="code">{code}</pre>
      <div className="btn-row btn-row--start">
        <button className="btn" onClick={copy}>{copied ? "Copied!" : "Copy embed code"}</button>
      </div>
      <p className="kbd-hint">
        The embedded click counter runs on simpleclickcounter.net — visitors
        count on your page, and the counter itself is the free click counter.
      </p>
    </div>
  );
}

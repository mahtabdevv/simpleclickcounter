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

/* Reset with a 6-second undo — a stray tap should never cost a count. */
function useUndo() {
  const [undo, setUndo] = useState(null);
  const timer = useRef(null);
  const offer = (label, restore) => {
    clearTimeout(timer.current);
    setUndo({ label, restore });
    timer.current = setTimeout(() => setUndo(null), 6000);
  };
  useEffect(() => () => clearTimeout(timer.current), []);
  const run = () => {
    if (undo) undo.restore();
    clearTimeout(timer.current);
    setUndo(null);
  };
  return [undo, offer, run];
}

function UndoBar({ undo, onUndo }) {
  if (!undo) return null;
  return (
    <div className="undo-bar" role="status">
      <span>{undo.label}</span>
      <button type="button" onClick={onUndo}>Undo</button>
    </div>
  );
}

/* Re-triggers a short "bump" class on the number each time it changes */
function useBump(value) {
  const [bump, setBump] = useState(0);
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    setBump((b) => b + 1);
  }, [value]);
  return bump;
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
  const [undo, offerUndo, runUndo] = useUndo();

  const reset = useCallback(() => {
    const prev = { count, sessionClicks, log };
    if (prev.count === 0 && prev.sessionClicks === 0) return;
    setCount(0);
    setSessionClicks(0);
    setLog([]);
    offerUndo(`Reset from ${prev.count}`, () => {
      setCount(prev.count);
      setSessionClicks(prev.sessionClicks);
      setLog(prev.log);
    });
  }, [count, sessionClicks, log, setCount]);

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
      } else if ((e.key === "r" || e.key === "R") && !e.metaKey && !e.ctrlKey) {
        reset();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [increment, reset, step, setCount]);

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
  const bump = useBump(count);

  return (
    <div className="tool-card">
      <div className="readout">
        <span className="readout-label">Count</span>
        <span className="readout-meta">{step > 1 ? `+${step} per tap` : "Saved automatically"}</span>
      </div>
      <div key={bump} className={`count-display digits-${Math.min(String(count).length, 6)}`} aria-live="polite">{count}</div>
      {goal > 0 && (
        <div className="goal">
          <div className="progress" role="progressbar" aria-label="Progress to goal" aria-valuenow={pct} aria-valuemin="0" aria-valuemax="100">
            <div style={{ width: `${pct}%` }} />
          </div>
          <span>{pct >= 100 ? "Goal reached" : `${pct}% of ${goal.toLocaleString()}`}</span>
        </div>
      )}
      <div className="primary-row">
        <button className="btn minus" onClick={() => setCount((c) => Math.max(0, c - step))} aria-label={`Subtract ${step}`}>−</button>
        <button className="btn big" onClick={increment} aria-label={`Count ${step}`}>
          + Count
        </button>
      </div>
      <UndoBar undo={undo} onUndo={runUndo} />
      <div className="settings">
        <label>
          Step
          <input type="number" min="1" max="100" value={step} onChange={(e) => setStep(Math.max(1, Number(e.target.value) || 1))} />
        </label>
        <label>
          Goal
          <input type="number" min="0" max="1000000" value={goal} onChange={(e) => setGoal(Math.max(0, Number(e.target.value) || 0))} />
        </label>
        <button className="btn ghost" aria-pressed={sound} onClick={() => setSound((s) => !s)}>
          Sound {sound ? "on" : "off"}
        </button>
        <button className="btn ghost" onClick={exportCsv} disabled={log.length === 0}>
          Export CSV
        </button>
        <button className="btn ghost danger" onClick={reset}>Reset</button>
      </div>
      <div className="stats">
        <span>This session <b>{sessionClicks}</b> taps</span>
        <span><b>{mins}</b> min</span>
      </div>
      <p className="kbd-hint">
        <kbd>Space</kbd> count · <kbd>↓</kbd> subtract · <kbd>R</kbd> reset
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
  if (groups.length === 0) return <p className="tally-marks tally-empty">No marks yet. Tap “Add mark” to start your tally.</p>;
  const shown = groups.slice(-40);
  return (
    <div className="tally-marks" role="img" aria-label={`${count} in tally marks`}>
      {groups.length > shown.length && <span className="tally-more">+{(groups.length - shown.length) * 5} earlier</span>}
      {shown.map((n, gi) => (
        <span className="tally-group" key={gi}>
          {"|".repeat(Math.min(n, 4))}
          {n === 5 && <span className="slash" aria-hidden="true" />}
        </span>
      ))}
    </div>
  );
}

export function TallyCounter() {
  const [count, setCount] = useLocalStorage("scc-tally-count", 0);
  const [goal, setGoal] = useState(50);
  const [undo, offerUndo, runUndo] = useUndo();
  const pct = goal > 0 ? Math.min(100, Math.round((count / goal) * 100)) : 0;
  const bump = useBump(count);

  useEffect(() => {
    const onKey = (e) => {
      if (e.target && ["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(e.target.tagName)) return;
      if (e.code === "Space" || e.key === "ArrowUp") { e.preventDefault(); setCount((c) => c + 1); }
      else if (e.key === "ArrowDown") { e.preventDefault(); setCount((c) => Math.max(0, c - 1)); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setCount]);

  const reset = () => {
    if (count === 0) return;
    const prev = count;
    setCount(0);
    offerUndo(`Reset from ${prev}`, () => setCount(prev));
  };

  return (
    <div className="tool-card">
      <div className="readout">
        <span className="readout-label">Tally</span>
        <span className="readout-meta">{Math.floor(count / 5)} full group{Math.floor(count / 5) === 1 ? "" : "s"} of five</span>
      </div>
      <TallyMarks count={count} />
      <div key={bump} className={`count-display count-display--sm digits-${Math.min(String(count).length, 6)}`} aria-live="polite">{count}</div>
      {goal > 0 && (
        <div className="goal">
          <div className="progress" role="progressbar" aria-label="Progress to goal" aria-valuenow={pct} aria-valuemin="0" aria-valuemax="100">
            <div style={{ width: `${pct}%` }} />
          </div>
          <span>{pct >= 100 ? "Goal reached" : `${pct}% of ${goal.toLocaleString()}`}</span>
        </div>
      )}
      <div className="primary-row">
        <button className="btn minus" onClick={() => setCount((c) => Math.max(0, c - 1))} aria-label="Remove one mark">−</button>
        <button className="btn big" onClick={() => setCount((c) => c + 1)}>
          + Add mark
        </button>
      </div>
      <UndoBar undo={undo} onUndo={runUndo} />
      <div className="settings">
        <label>
          Goal
          <input type="number" min="0" max="1000000" value={goal} onChange={(e) => setGoal(Math.max(0, Number(e.target.value) || 0))} />
        </label>
        <button className="btn ghost danger" onClick={reset}>Reset</button>
      </div>
      <p className="kbd-hint">
        <kbd>Space</kbd> add a mark · <kbd>↓</kbd> remove one
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
        Type or paste your text
      </label>
      <textarea
        id="wc-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste an essay, a post or an email. Every number below updates as you type."
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
      <dl className="stat-grid">
        <div><dt>Words</dt><dd>{words.toLocaleString()}</dd></div>
        <div><dt>Characters</dt><dd>{chars.toLocaleString()}</dd></div>
        <div><dt>No spaces</dt><dd>{charsNoSpaces.toLocaleString()}</dd></div>
        <div><dt>Sentences</dt><dd>{sentences.toLocaleString()}</dd></div>
        <div><dt>Paragraphs</dt><dd>{paragraphs.toLocaleString()}</dd></div>
        <div><dt>Reading time</dt><dd>{words === 0 ? "0" : `~${readingMins}`} min</dd></div>
      </dl>
      <p className="kbd-hint">Nothing is uploaded. Your text stays on this device.</p>
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
    if (left > 0 && !done) { setRunning(true); return; }
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

  useEffect(() => {
    if (!running && !done) return;
    const base = document.title;
    document.title = done ? "Time is up!" : `${fmt(left)} · Countdown`;
    return () => { document.title = base; };
  }, [left, running, done]);

  return (
    <div className="tool-card">
      <div className="readout">
        <span className="readout-label">{running ? "Running" : done ? "Finished" : left > 0 ? "Paused" : "Set a time"}</span>
        <span className="readout-meta">Beeps at zero</span>
      </div>
      <div className="timer-display" aria-live="polite">
        {running || left > 0 || done ? fmt(left) : fmt(h * 3600 + m * 60 + s)}
      </div>
      {done && <p className="done-msg" role="alert">Time is up!</p>}
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
          <button className="btn big" onClick={start}>{left > 0 && !done ? "Resume" : "Start"}</button>
        ) : (
          <button className="btn big" onClick={() => setRunning(false)}>Pause</button>
        )}
        <button className="btn ghost" onClick={() => { setRunning(false); setLeft(0); setTotal(0); setDone(false); }}>Reset</button>
      </div>
      <div className="btn-row presets">
        {[
          [0, 1, 0, "1 min"],
          [0, 5, 0, "5 min"],
          [0, 10, 0, "10 min"],
          [0, 25, 0, "25 min"],
          [1, 0, 0, "1 hour"],
        ].map(([hh, mm, ss, label]) => (
          <button
            key={label}
            className="btn ghost"
            disabled={running}
            onClick={() => { setH(hh); setM(mm); setS(ss); setLeft(0); setTotal(0); setDone(false); }}
          >
            {label}
          </button>
        ))}
      </div>
      {total > 0 && (
        <div className="progress progress--timer" aria-hidden="true">
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
            {p.score >= target && <p className="win-flag">Reached {target} — record the win</p>}
            <p>
              {leader === i ? "Leading" : leader === null ? "Tied" : "Behind"} · Wins: <b>{p.wins}</b>
            </p>
            <div className="primary-row">
              <button className="btn minus" onClick={() => bump(i, -1)} aria-label={`Subtract a point from ${p.name}`}>−</button>
              <button className="btn big" onClick={() => bump(i, 1)} aria-label={`Add a point to ${p.name}`}>+ 1</button>
            </div>
            <button className="btn ghost win-btn" onClick={() => awardWin(i)}>
              Win for {p.name}
            </button>
          </div>
        ))}
      </div>
      <div className="settings">
        <label>
          Play to
          <input type="number" min="1" max="100" value={target} onChange={(e) => setTarget(Math.max(1, Number(e.target.value) || 1))} />
        </label>
        <button
          className="btn ghost"
          onClick={() => setPlayers((ps) => ps.map((p) => ({ ...p, score: 0 })))}
        >
          Reset scores
        </button>
        <button
          className="btn ghost danger"
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
        First to {target} wins. Tap “Win for…” to bank the game and start the
        next one at 0–0. Tap a name to rename a player.
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
      <div className="multi-head">
        <span>{counters.length} counter{counters.length === 1 ? "" : "s"}</span>
        <span>Total <b>{counters.reduce((a, c) => a + c.count, 0).toLocaleString()}</b></span>
      </div>
      {counters.length === 0 && <p className="empty">No counters yet. Name one below — “Adults”, “Boxes”, “Option A”.</p>}
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
          <button className="btn ghost icon-btn" onClick={() => setCounters((cs) => cs.map((x) => (x.id === c.id ? { ...x, count: 0 } : x)))} aria-label={`Reset ${c.name}`} title="Reset">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12a8 8 0 1 0 2.5-5.8M4 4v4h4" /></svg>
          </button>
          <button className="btn ghost icon-btn" onClick={() => setCounters((cs) => cs.filter((x) => x.id !== c.id))} aria-label={`Delete ${c.name}`} title="Delete">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 7h14M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3" /></svg>
          </button>
          <div className="row-count">
            <button className="btn minus" onClick={() => setCounters((cs) => cs.map((x) => (x.id === c.id ? { ...x, count: Math.max(0, x.count - 1) } : x)))} aria-label={`Subtract one from ${c.name}`}>−</button>
            <span className="val" aria-live="polite">{c.count}</span>
            <button className="btn" onClick={() => setCounters((cs) => cs.map((x) => (x.id === c.id ? { ...x, count: x.count + 1 } : x)))} aria-label={`Add one to ${c.name}`}>+ 1</button>
          </div>
        </div>
      ))}
      <div className="add-row">
        <input
          type="text"
          value={newName}
          placeholder="New counter name" aria-label="New counter name"
          onChange={(e) => setNewName(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") add(); }}
          className="field-input-wide"
        />
        <button className="btn" onClick={add}>Add counter</button>
      </div>
      <p className="kbd-hint">Every counter is saved on this device as you go.</p>
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

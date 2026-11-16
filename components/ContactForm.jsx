"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Simple Click Counter — message from ${name || "a visitor"}`
    );
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:employeesxfinity@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="tool-card form-card">
      <form onSubmit={submit}>
        <p>
          <label htmlFor="c-name">Your name</label><br />
          <input id="c-name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </p>
        <p>
          <label htmlFor="c-email">Your email</label><br />
          <input id="c-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </p>
        <p>
          <label htmlFor="c-msg">Message</label><br />
          <textarea id="c-msg" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </p>
        <button className="btn" type="submit">Send message</button>
        {sent && (
          <p className="kbd-hint">
            Your email app should have opened with your message ready to send.
            Nothing is stored on this website.
          </p>
        )}
      </form>
    </div>
  );
}

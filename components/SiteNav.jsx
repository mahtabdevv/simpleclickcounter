"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TOOLS, GUIDES, Icon } from "./shared";

const norm = (p) => (p || "/").replace(/\/$/, "") || "/";

export default function SiteNav() {
  const pathname = norm(usePathname());
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.classList.add("menu-open");
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <>
      <nav className="main-nav" aria-label="Tools">
        {TOOLS.map((t) => {
          const active = norm(t.href) === pathname;
          return (
            <Link key={t.href} href={t.href} className={active ? "active" : undefined} aria-current={active ? "page" : undefined}>
              {t.label}
            </Link>
          );
        })}
      </nav>
      <button
        type="button"
        className="menu-btn"
        aria-expanded={open}
        aria-controls="tool-menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="menu-lines" aria-hidden="true" />
        {open ? "Close" : "Tools"}
      </button>
      <div id="tool-menu" className="menu-sheet" data-open={open} hidden={!open}>
        <ul>
          {TOOLS.map((t) => {
            const active = norm(t.href) === pathname;
            return (
              <li key={t.href}>
                <Link href={t.href} aria-current={active ? "page" : undefined}>
                  <Icon name={t.icon} />
                  <span><b>{t.label}</b>{t.desc}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="menu-guides">
          {GUIDES.map((g) => (
            <Link key={g.href} href={g.href}>{g.label}</Link>
          ))}
        </div>
      </div>
    </>
  );
}

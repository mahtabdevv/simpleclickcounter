import "./globals.css";
import Link from "next/link";
import { Instrument_Sans, Bricolage_Grotesque } from "next/font/google";
import { SITE_URL } from "../lib/meta";
import SiteNav from "../components/SiteNav";
import { TOOLS, GUIDES } from "../components/shared";

const ui = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-ui-face",
  display: "swap",
});
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display-face",
  display: "swap",
  weight: ["500", "700", "800"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  verification: {
    google: "ill0ZPe1K9dsacBuTqWlLJbN0k_TAHesbUow2ZEzXZI",
  },
  title: {
    default: "Free Click Counter Online – No Sign-Up",
    template: "%s",
  },
};

function Brand({ light = false }) {
  return (
    <Link href="/" className={light ? "brand brand--light" : "brand"}>
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round">
          <path d="M6 5v14M10 5v14M14 5v14M18 5v14M3.5 16.5 20.5 7.5" />
        </svg>
      </span>
      <span className="brand-word">
        Simple<span>ClickCounter</span>
      </span>
    </Link>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ui.variable} ${display.variable}`}>
      <body>
        <header className="site-header">
          <div className="header-inner">
            <Brand />
            <SiteNav />
          </div>
        </header>
        <main className="wrap">{children}</main>
        <footer className="site-footer">
          <div className="wrap">
            <div className="footer-grid">
              <div className="footer-brand">
                <Brand light />
                <p>
                  Fast, free counting tools that open instantly on any phone
                  or laptop. No account, no app to install — and your counts
                  never leave your browser.
                </p>
              </div>
              <nav aria-label="Tools">
                <p className="footer-heading">Tools</p>
                {TOOLS.map((t) => (
                  <Link key={t.href} href={t.href}>
                    {t.label}
                  </Link>
                ))}
              </nav>
              <nav aria-label="Learn and compare">
                <p className="footer-heading">Learn &amp; Compare</p>
                {GUIDES.map((g) => (
                  <Link key={g.href} href={g.href}>
                    {g.label}
                  </Link>
                ))}
              </nav>
              <nav aria-label="Company and legal">
                <p className="footer-heading">Company &amp; Legal</p>
                <Link href="/about/">About</Link>
                <Link href="/contact/">Contact</Link>
                <Link href="/privacy-policy/">Privacy Policy</Link>
                <Link href="/terms-of-service/">Terms of Service</Link>
                <Link href="/disclaimer/">Disclaimer</Link>
                <Link href="/cookie-policy/">Cookie Policy</Link>
                <Link href="/gdpr-compliance/">GDPR Compliance</Link>
                <Link href="/dmca/">DMCA</Link>
              </nav>
            </div>
            <div className="footer-bottom">
              <p>
                © {new Date().getFullYear()} Simple Click Counter. Every tool
                runs entirely in your browser.
              </p>
              <p>Free · No sign-up · Private by design</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

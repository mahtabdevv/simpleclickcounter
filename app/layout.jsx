import "./globals.css";
import Link from "next/link";
import { Inter, Space_Grotesk } from "next/font/google";
import { SITE_URL } from "../lib/meta";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
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

const NAV = [
  { href: "/", label: "Click Counter" },
  { href: "/tally-counter/", label: "Tally Counter" },
  { href: "/word-counter/", label: "Word Counter" },
  { href: "/countdown-timer/", label: "Countdown Timer" },
  { href: "/score-counter/", label: "Score Counter" },
  { href: "/multi-counter/", label: "Multi Counter" },
];

const TOOLS = [
  { href: "/tally-counter/", label: "Tally Counter" },
  { href: "/word-counter/", label: "Word Counter" },
  { href: "/countdown-timer/", label: "Countdown Timer" },
  { href: "/score-counter/", label: "Score Counter" },
  { href: "/multi-counter/", label: "Multi Counter" },
];

function Brand({ light = false }) {
  return (
    <Link href="/" className={light ? "brand brand--light" : "brand"}>
      <span className="brand-mark" aria-hidden="true">
        1
      </span>
      <span className="brand-word">
        Simple<span>ClickCounter</span>
      </span>
    </Link>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>
        <header className="site-header">
          <div className="header-inner">
            <Brand />
            <nav className="main-nav" aria-label="Tools">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href}>
                  {n.label}
                </Link>
              ))}
            </nav>
            <Link href="/" className="header-cta">
              Start Counting
            </Link>
          </div>
        </header>
        <main className="wrap">{children}</main>
        <footer className="site-footer">
          <div className="wrap">
            <div className="footer-grid">
              <div className="footer-brand">
                <Brand light />
                <p>
                  Free online counting tools. Free, no sign-up, nothing
                  uploaded. Your counts are saved in your own browser only.
                </p>
              </div>
              <nav aria-label="Tools">
                <p className="footer-heading">Tools</p>
                <Link href="/">Click Counter</Link>
                {TOOLS.map((t) => (
                  <Link key={t.href} href={t.href}>
                    {t.label}
                  </Link>
                ))}
              </nav>
              <nav aria-label="Learn and compare">
                <p className="footer-heading">Learn &amp; Compare</p>
                <Link href="/click-counter-vs-tally-counter/">
                  Click Counter vs Tally Counter
                </Link>
                <Link href="/counter-embed/">Embed a Click Counter</Link>
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
                © {new Date().getFullYear()} Simple Click Counter. All tools
                run entirely in your browser.
              </p>
              <p>Free, no sign-up.</p>
            </div>
          </div>
        </footer>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var p=location.pathname.replace(/\\/$/,'')||'/';var l=document.querySelectorAll('.main-nav a');for(var i=0;i<l.length;i++){var h=l[i].getAttribute('href').replace(/\\/$/,'')||'/';if(h===p){l[i].classList.add('active');l[i].setAttribute('aria-current','page');}}})();",
          }}
        />
      </body>
    </html>
  );
}

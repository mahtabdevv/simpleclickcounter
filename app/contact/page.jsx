import ContactForm from "../../components/ContactForm";
import { ToolHub } from "../../components/shared";
import { pageMeta } from "../../lib/meta";

export const metadata = pageMeta("/contact/");

export default function ContactPage() {
  return (
    <>
      <h1>Contact Simple Click Counter</h1>
      <p className="lede">
        Questions, feedback or a tool request? Send us a message and we will
        get back to you.
      </p>
      <ContactForm />
      <p>
        The form above opens your own email app — your message is never stored
        on this website. For tool help, see the{" "}
        <a href="/">click counter</a>,{" "}
        <a href="/tally-counter/">tally counter</a> and{" "}
        <a href="/word-counter/">word counter</a> pages first.
      </p>
      <ToolHub current="/contact/" />
    </>
  );
}

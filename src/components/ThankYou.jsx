import { useState } from "react";
import Reveal from "./Reveal";
function ThankYou() {
  const [opened, setOpened] = useState(false);
  return <section className="thankyou-section" id="thank-you"><Reveal className="thankyou-card">
    <p className="section-label">With heartfelt gratitude</p><button className={`letter-envelope ${opened ? "letter-envelope-open" : ""}`} onClick={() => setOpened((value) => !value)} aria-expanded={opened} aria-label={opened ? "Close thank-you letter" : "Open thank-you letter"}><span className="envelope-flap"/><span className="envelope-heart">♥</span></button>
    <h2>Thank You</h2><p className="thankyou-intro">Your love and duas mean the world to us.</p>
    <div className={`thankyou-letter ${opened ? "thankyou-letter-open" : ""}`} aria-hidden={!opened}><p>May Allah bless you for sharing in our happiness. We look forward to celebrating this beautiful beginning with you.</p><p>With love and duas,<br/><strong>Mohammed Areeb Ozair &amp; Syeda Arfiya Nazish</strong></p></div>
    <button className="text-button" onClick={() => setOpened((value) => !value)}>{opened ? "Close letter" : "Open our letter"}</button>
  </Reveal></section>;
}
export default ThankYou;

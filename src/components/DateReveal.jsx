import { useState } from "react";
import wedding from "../data/wedding";
import Reveal from "./Reveal";
function DateReveal() {
  const [revealed, setRevealed] = useState(false);
  const date = new Date(wedding.weddingDate);
  return <section className="date-reveal-section" id="date">
    <Reveal className="section-heading"><p className="section-label">A day to remember</p><h2>Our Wedding Date</h2><p className="section-description">Tap a heart to reveal our special day.</p></Reveal>
    <div className="date-hearts" aria-label="Reveal wedding date">
      {[0,1,2].map((n) => <button className={`date-heart ${revealed ? "date-heart-revealed" : ""}`} key={n} onClick={() => setRevealed(true)} aria-label={`Reveal wedding date ${n+1}`}><span>♥</span></button>)}
    </div>
    <div className={`date-reveal-result ${revealed ? "is-revealed" : ""}`} aria-live="polite">
      {revealed ? <><p className="date-day">{date.toLocaleDateString("en-IN", { day: "numeric" })}</p><p className="date-month">{date.toLocaleDateString("en-IN", { month: "long", year: "numeric" })}</p><p className="date-time">{date.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", hour12: true })}</p></> : <p>With love, a date to cherish</p>}
    </div>
  </section>;
}
export default DateReveal;

import wedding from "../data/wedding";
import Reveal from "./Reveal";

function CoupleCards() {
  return (
    <section className="couple-section" id="couple">
      <Reveal className="section-heading">
        <p className="section-label">The couple</p>
        <h2>Two Hearts, One Beginning</h2>
        <p className="section-description">With the love and blessings of our families.</p>
      </Reveal>
      <div className="couple-grid">
        <Reveal className="couple-card">
          <span className="couple-flourish" aria-hidden="true">❦</span>
          <p className="section-label">The Groom</p>
          <h3>{wedding.groom.name}</h3>
          <span className="couple-divider">✦</span>
        </Reveal>
        <Reveal className="couple-card">
          <span className="couple-flourish" aria-hidden="true">❦</span>
          <p className="section-label">The Bride</p>
          <h3>{wedding.bride.name}</h3>
          <span className="couple-divider">✦</span>
        </Reveal>
      </div>
    </section>
  );
}
export default CoupleCards;

import wedding from "../data/wedding";

function Hero() {
  return (
    <section className="hero" id="home">
      <img className="hero-floral hero-floral-left" src="/images/decorations/floral-corner.svg" alt="" aria-hidden="true" />
      <img className="hero-floral hero-floral-right" src="/images/decorations/floral-corner.svg" alt="" aria-hidden="true" />
      <img className="hero-chandelier" src="/images/decorations/chandelier.svg" alt="" aria-hidden="true" />
      <div className="hero-decoration">✦</div>

      <p className="hero-subtitle">
        Together with their families
      </p>

      <h1 className="hero-title">
        <span className="hero-name">{wedding.groom.name}</span>

        <span className="hero-and">&</span>

        <span className="hero-name">{wedding.bride.name}</span>
      </h1>

      <div className="hero-divider">
        <span></span>
        <span>✦</span>
        <span></span>
      </div>

      <p className="hero-date">
  {new Date(wedding.weddingDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })}
</p>

      <p className="hero-scroll">
        Scroll to explore
        <span>↓</span>
      </p>
    </section>
  );
}

export default Hero;
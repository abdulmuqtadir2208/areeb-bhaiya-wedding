import wedding from "../data/wedding";
import Reveal from "./Reveal";

function Venue() {
  return (
    <section className="venue section-shell" id="venue">
      <Reveal className="section-heading">
        <p className="section-label">The gathering</p>
        <h2>Join Us</h2>
        <p className="section-description">Venue details will be shared as soon as they are confirmed.</p>
      </Reveal>
      <div className="venue-grid">
        {wedding.events.map((event) => (
          <Reveal className="venue-card" key={event.id}>
            <div className="venue-symbol" aria-hidden="true">✦</div>
            <p className="section-label">{event.id === "nikah" ? "Ceremony" : "Reception"}</p>
            <h3>{event.name}</h3>
            <p className="venue-address">{event.venue}</p>
            <p className="venue-address">{event.address}</p>
            <p className="venue-date">{event.date} · {event.time}</p>
            {event.mapsUrl && <a href={event.mapsUrl} target="_blank" rel="noopener noreferrer" className="venue-button">Get Directions</a>}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
export default Venue;

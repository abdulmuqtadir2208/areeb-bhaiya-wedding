import wedding from "../data/wedding";
import Reveal from "./Reveal";

function Events() {
  return (
    <section className="events section-shell" id="events">
      <Reveal className="section-heading">
        <p className="section-label">Save the occasion</p>
        <h2>Wedding Celebrations</h2>
        <p className="section-description">Two special gatherings, and one beautiful beginning.</p>
      </Reveal>
      <div className="events-list">
        {wedding.events.map((event, index) => (
          <Reveal className="event-card" key={event.id}>
            <span className="event-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="event-content">
              <p className="section-label">{event.id === "nikah" ? "The marriage ceremony" : "The celebration"}</p>
              <h3>{event.name}</h3>
              <p className="event-date">{event.date}</p>
              <p>{event.time}</p>
              <p>{event.venue}</p>
              <p className="event-address">{event.address}</p>
              {event.mapsUrl && <a href={event.mapsUrl} target="_blank" rel="noopener noreferrer" className="event-button">View Location</a>}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
export default Events;

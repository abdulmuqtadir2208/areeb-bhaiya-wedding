import { useState } from "react";
import Reveal from "./Reveal";
function Wishes() {
  const [wish, setWish] = useState("");
  const [saved, setSaved] = useState(false);
  return <section className="wishes-section" id="wishes"><Reveal className="wishes-card">
    <p className="section-label">A little note of love</p><h2>Send Your Best Wishes</h2><p className="section-description">Share a kind message for the couple.</p>
    <form onSubmit={(event) => { event.preventDefault(); setSaved(true); }} className="wishes-form">
      <label className="sr-only" htmlFor="wish-message">Your wishes</label><textarea id="wish-message" value={wish} onChange={(event) => { setWish(event.target.value); setSaved(false); }} placeholder="Write your wishes here…" rows="4" maxLength="500" required />
      <button className="wedding-button" type="submit">Preview wishes</button>
    </form>
    {saved && <p className="form-note" role="status">Your message is ready to copy, but it has not been sent to the hosts.</p>}
    {saved && <button className="text-button" type="button" onClick={() => navigator.clipboard?.writeText(wish)}>Copy message</button>}
  </Reveal></section>;
}
export default Wishes;

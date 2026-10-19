import Reveal from "./Reveal";
function Bismillah() {
  return <section className="ornate-section bismillah-section" id="invitation">
    <Reveal className="ornate-card">
      <span className="ornament ornament-top" aria-hidden="true">❧ ✦ ❧</span>
      <p className="arabic-bismillah" lang="ar" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
      <p className="translation">In the name of Allah, the Most Compassionate, the Most Merciful.</p>
      <span className="ornament" aria-hidden="true">❦</span>
      <h2>You Are Warmly Invited</h2>
      <p>With gratitude to Allah and the love of our families, we invite you to share in the joy of this blessed occasion.</p>
    </Reveal>
  </section>;
}
export default Bismillah;

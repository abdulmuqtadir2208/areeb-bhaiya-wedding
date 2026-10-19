import Reveal from "./Reveal";
function MarriageAyah() {
  return <section className="ayah-section">
    <Reveal className="ayah-card">
      <p className="section-label">A blessing for marriage</p>
      <p className="arabic-ayah" lang="ar" dir="rtl">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً</p>
      <p className="ayah-translation">“And among His signs is that He created for you spouses from among yourselves so that you may find comfort in them, and He has placed between you affection and mercy.”</p>
      <p className="ayah-reference">Qur’an 30:21 · Surah Ar-Rum</p>
    </Reveal>
  </section>;
}
export default MarriageAyah;

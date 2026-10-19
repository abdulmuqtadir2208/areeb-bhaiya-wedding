import { useEffect, useState } from "react";

// Lightweight decorative petals: CSS-rendered, so no extra image downloads are needed.
const PETALS = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 9) % 100}%`,
  delay: `${-((index * 1.7) % 18)}s`,
  duration: `${14 + ((index * 7) % 11)}s`,
  size: `${9 + ((index * 3) % 8)}px`,
  drift: `${((index % 2 ? 1 : -1) * (18 + (index * 13) % 48))}px`,
  rotate: `${(index * 43) % 180}deg`,
}));

export default function ScrollDecorations() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        setActive(scrollable > 0 && window.scrollY > 80);
        frame = 0;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className={`scroll-decorations${active ? " scroll-decorations-active" : ""}`} aria-hidden="true">
      <div className="petal-glow petal-glow-one" />
      <div className="petal-glow petal-glow-two" />
      {PETALS.map((petal) => (
        <span
          className="floating-petal"
          key={petal.id}
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            width: petal.size,
            height: `calc(${petal.size} * 1.45)`,
            "--petal-drift": petal.drift,
            "--petal-rotate": petal.rotate,
          }}
        />
      ))}
    </div>
  );
}

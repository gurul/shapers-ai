import { useEffect, useRef, useState } from "react";
import { MorphIcon, type MorphHandle } from "morphicons/react";

// Original 24 × 24 stroke paths: asterisk, six-petal flower, four-point sparkle.
const shapes = [
  "M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9",
  "M12 8C7 0 3 5 7 10C-1 10 1 17 8 15C5 23 12 25 14 17C20 24 25 18 18 14C27 11 23 4 17 9C19 1 12-1 12 8Z",
  "M12 2C12 8 8 12 2 12C8 12 12 16 12 22C12 16 16 12 22 12C16 12 12 8 12 2Z",
];

export default function MorphingMark() {
  const container = useRef<HTMLDivElement>(null);
  const morph = useRef<MorphHandle>(null);
  const current = useRef(0);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduced(preference.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updatePreference();
    updateVisibility();
    preference.addEventListener("change", updatePreference);
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (container.current) observer.observe(container.current);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", updatePreference);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (reduced || !visible || !pageVisible) {
      morph.current?.set(shapes[current.current]);
      return;
    }
    const timer = window.setInterval(() => {
      current.current = (current.current + 1) % shapes.length;
      setIndex(current.current);
    }, 1600);
    return () => window.clearInterval(timer);
  }, [reduced, visible, pageVisible]);

  return (
    <div
      ref={container}
      className="contact-morph"
      aria-hidden="true"
      data-shape={index}
    >
      <MorphIcon
        ref={morph}
        icon={shapes[index]}
        size="100%"
        strokeWidth={0.65}
        spring="snappy"
        reducedMotion={reduced ? "always" : "user"}
      />
    </div>
  );
}

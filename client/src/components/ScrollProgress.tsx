"use client";

import { useEffect, useState } from "react";

import { ACCENT_FOREST_GREEN, ACCENT_FOREST_GREEN_TINT } from "@/const";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress(Math.min(scrollTop / scrollHeight, 1));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-[80px] left-0 z-40 h-0.5 w-full"
      style={{ backgroundColor: ACCENT_FOREST_GREEN_TINT }}
    >
      <div
        className="h-full origin-left"
        style={{
          transform: `scaleX(${progress})`,
          backgroundColor: ACCENT_FOREST_GREEN,
        }}
      />
    </div>
  );
}

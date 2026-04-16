"use client";

import { useEffect, useState } from "react";

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
      className="fixed top-14 left-0 z-40 h-0.5 w-full"
      style={{ backgroundColor: "rgba(25, 73, 138, 0.12)" }}
    >
      <div
        className="h-full origin-left transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: `scaleX(${progress})`,
          backgroundColor: "#19498a",
        }}
      />
    </div>
  );
}

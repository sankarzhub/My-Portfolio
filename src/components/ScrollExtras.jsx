import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollExtras.css";

// Reading progress bar along the top edge plus a back-to-top button.
const ScrollExtras = () => {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      setShowTop(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <button
        className={`back-to-top ${showTop ? "visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0 })}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default ScrollExtras;

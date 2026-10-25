import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import ScrollExtras from "../components/ScrollExtras";
import Ticker from "../components/Ticker";
import { ticker } from "../data/profile";
import "../sections/Sections.css";

const Home = () => {
  const { hash } = useLocation();

  // Scroll to the requested section when arriving via a /#section link or redirect
  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  // Fade sections in as they scroll into view
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Cursor glow on every card, plus a slight 3D tilt on [data-tilt] elements (mouse only)
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const canTilt = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = [...document.querySelectorAll(".card, [data-tilt]")];

    const onMove = (e) => {
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
      if (canTilt && el.hasAttribute("data-tilt")) {
        const rx = (y / r.height - 0.5) * -8;
        const ry = (x / r.width - 0.5) * 8;
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      }
    };
    const onLeave = (e) => {
      e.currentTarget.style.transform = "";
    };

    els.forEach((el) => {
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
    });
    return () =>
      els.forEach((el) => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      });
  }, []);

  return (
    <>
      <ScrollExtras />
      <Hero />
      <Ticker items={ticker} label="Currently" />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
};

export default Home;

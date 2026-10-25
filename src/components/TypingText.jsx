import React, { useEffect, useState } from "react";

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Types each word out, pauses, deletes it and moves on to the next.
const TypingText = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reducedMotion() ? words[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion()) return;
    const word = words[index % words.length];
    let delay = deleting ? 45 : 90;
    if (!deleting && text === word) delay = 1600;
    if (deleting && text === "") delay = 300;

    const id = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, index, words]);

  return (
    <span className="typing">
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true">{text}</span>
      <span className="typing-caret" aria-hidden="true" />
    </span>
  );
};

export default TypingText;

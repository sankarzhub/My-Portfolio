import React from "react";
import "./Ticker.css";

// Breaking-news style band. The list is rendered twice so the -50% translate loops seamlessly.
const Ticker = ({ items, label, reverse = false, variant = "news" }) => (
  <div className={`ticker ticker-${variant}`}>
    {label && (
      <span className="ticker-label">
        <span className="ticker-live" />
        {label}
      </span>
    )}
    <div className="ticker-viewport">
      <div className={`ticker-track ${reverse ? "reverse" : ""}`}>
        {[0, 1].map((copy) => (
          <ul className="ticker-list" key={copy} aria-hidden={copy === 1}>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  </div>
);

export default Ticker;

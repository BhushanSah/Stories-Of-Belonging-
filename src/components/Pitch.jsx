import React, { useState } from 'react';
import pitch from '../data/pitch.json';
import './Pitch.css';

export default function Pitch() {
  const [openFeedback, setOpenFeedback] = useState(null);

  return (
    <section id="pitch" className="section-alt">
      <div className="container">
        <p className="eyebrow-light">Project Pitch</p>
        <h2 className="section-title">The Vision</h2>

        <div className="pitch__grid">
          <div className="pitch__main">
            <p className="pitch__vision">{pitch.vision}</p>

            <div className="thread-divider" style={{ color: 'var(--rose)' }}>
              <div className="thread-dot" />
              <div className="thread-dot" />
              <div className="thread-dot" />
            </div>

            <h3 className="pitch__subhead">Theory of Change</h3>
            <p className="pitch__body">{pitch.theoryOfChange}</p>

            <h3 className="pitch__subhead" style={{ marginTop: '1.5rem' }}>What Motivated This</h3>
            <p className="pitch__body">{pitch.motivation}</p>
          </div>

          <div className="pitch__sidebar">
            <div className="pitch__taglines-card">
              <p className="eyebrow-light">Taglines</p>
              <ul className="pitch__taglines" role="list">
                {pitch.taglines.map((t, i) => (
                  <li key={i} className="pitch__tagline">
                    <span className="pitch__tagline-mark" aria-hidden="true">&#x2014;</span>
                    <em>{t}</em>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pitch__feedback-card">
              <p className="eyebrow-light">Peer &amp; Professor Feedback</p>
              <div className="pitch__feedback-list">
                {pitch.peerFeedback.map((f, i) => (
                  <div key={i} className="pitch__feedback-item">
                    <button
                      className="pitch__feedback-toggle"
                      aria-expanded={openFeedback === i}
                      onClick={() => setOpenFeedback(openFeedback === i ? null : i)}
                    >
                      <span>{f.theme}</span>
                      <span className="pitch__arrow" aria-hidden="true">
                        {openFeedback === i ? '−' : '+'}
                      </span>
                    </button>
                    {openFeedback === i && (
                      <p className="pitch__feedback-note">{f.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

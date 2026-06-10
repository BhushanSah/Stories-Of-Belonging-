import React, { useState, useEffect, useRef } from 'react';
import './Journey.css';

const stages = [
  {
    key: 'HOMEPLACE',
    desc: 'Every intellectual journey starts somewhere. Mine started with the smell of incense, the sound of Tihar, and the question of what home means when you carry it across an ocean.',
  },
  {
    key: 'QUESTIONING',
    desc: 'Reading bell hooks, Sara Ahmed, and Patty Krawec put language to things I had observed but never named. The questions got bigger: Whose stories count? Whose labor is invisible? Whose land is this?',
  },
  {
    key: 'SOCIAL LOCATION',
    desc: 'I learned that where you stand shapes what you can see. Naming my own position — Nepalese, Hindu, immigrant, first-generation — is not a limitation. It is honesty.',
  },
  {
    key: 'FEMINIST HOMEWORK',
    desc: 'Ahmed taught me that feminism is not a belief you hold once and move on. It is work you do every day, in how you listen, who you acknowledge, what labor you name.',
  },
  {
    key: 'BECOMING GOOD RELATIVES',
    desc: 'Krawec\'s invitation to become kin across difference — to unforgetting, to responsibility, to relationships that ask something of you — changed how I think about belonging.',
  },
  {
    key: 'ACTION',
    desc: 'This project is one answer to the question those books kept asking: What are you going to do with what you now know?',
  },
];

export default function Journey() {
  const [active, setActive] = useState(null);
  const [revealed, setRevealed] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          stages.forEach((_, i) => {
            setTimeout(() => setRevealed(r => [...r, i]), i * 150);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="journey-section">
      <div className="journey-grain" aria-hidden="true" />
      <div className="container">
        <p className="eyebrow">The Journey</p>
        <h2 className="section-title" style={{ color: 'var(--parchment)' }}>A Path Through the Course</h2>
        <p className="section-subtitle-light">The intellectual journey this semester asked of me.</p>

        <div className="journey-path" ref={ref} role="list">
          {stages.map((stage, i) => (
            <React.Fragment key={stage.key}>
              <div
                className={`journey-stage ${revealed.includes(i) ? 'journey-stage--visible' : ''} ${active === i ? 'journey-stage--active' : ''}`}
                role="listitem"
              >
                <button
                  className="journey-stage__btn"
                  onClick={() => setActive(active === i ? null : i)}
                  aria-expanded={active === i}
                  aria-label={`${stage.key} — click to expand`}
                >
                  <div className="journey-stage__marker" aria-hidden="true">
                    <div className="journey-stage__ring" />
                    <div className="journey-stage__dot" />
                  </div>
                  <span className="journey-stage__label">{stage.key}</span>
                </button>
                {active === i && (
                  <p className="journey-stage__desc">{stage.desc}</p>
                )}
              </div>
              {i < stages.length - 1 && (
                <div className={`journey-connector ${revealed.includes(i) ? 'journey-connector--visible' : ''}`} aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

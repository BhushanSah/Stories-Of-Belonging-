import React, { useState } from 'react';
import './Places.css';

const places = [
  {
    name: 'Nepal',
    years: 'Origins',
    reflection: 'Where many of my earliest ideas about family, religion, and responsibility were formed. The mountains, the festivals, the kalawa tied at the wrist — these were not just traditions. They were a way of understanding what it means to be in relationship with others.',
  },
  {
    name: 'Kathmandu',
    years: 'Childhood',
    reflection: 'A city that holds contradictions easily — ancient temples beside modern traffic, caste alongside aspiration. Growing up here taught me that the past and the present are never fully separate.',
  },
  {
    name: 'Berea',
    years: 'Now',
    reflection: 'A small town in Kentucky that carries its own complicated history around labor, race, and education. Being here forced me to ask different questions about belonging — whose history am I standing inside, and what does that ask of me?',
  },
];

export default function Places() {
  const [active, setActive] = useState(0);

  return (
    <section id="places" className="places-section">
      <div className="places-grain" aria-hidden="true" />
      <div className="container">
        <p className="eyebrow-light">Places That Shaped This Project</p>
        <h2 className="section-title" style={{ color: 'var(--parchment)' }}>A Geography of Belonging</h2>

        <div className="places-layout">
          <nav className="places-nav" aria-label="Place navigation">
            {places.map((p, i) => (
              <button
                key={p.name}
                className={`places-nav__btn ${active === i ? 'places-nav__btn--active' : ''}`}
                onClick={() => setActive(i)}
                aria-current={active === i ? 'true' : undefined}
              >
                <div className="places-nav__line" aria-hidden="true" />
                <div className="places-nav__dot" aria-hidden="true" />
                <div className="places-nav__info">
                  <span className="places-nav__name">{p.name}</span>
                  <span className="places-nav__years">{p.years}</span>
                </div>
              </button>
            ))}
          </nav>

          <div className="places-panel" aria-live="polite">
            <h3 className="places-panel__name">{places[active].name}</h3>
            <p className="places-panel__years">{places[active].years}</p>
            <div className="thread-divider" style={{ color: 'var(--rose)' }}>
              <div className="thread-dot" /><div className="thread-dot" />
            </div>
            <p className="places-panel__text">{places[active].reflection}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

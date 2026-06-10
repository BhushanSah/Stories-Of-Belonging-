import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      {/* Background woven pattern */}
      <div className="hero__pattern" aria-hidden="true">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="hero__thread" style={{ '--delay': `${(i * 0.15) % 2}s` }} />
        ))}
      </div>

      <div className="hero__content container fade-up">
        <p className="eyebrow-light">A Decolonial Feminist Project</p>
        <h1 className="hero__headline">
          Decolonization<br />
          <em>starts at home.</em>
        </h1>
        <p className="hero__sub">
          I left Nepal carrying more than a suitcase. I carried stories, rituals, expectations, and questions. This project is a collection of reflections on home, migration, faith, feminism, and what it means to become a good relative.
        </p>

        <div className="hero__taglines" aria-label="Project taglines">
          <span>"We become human in relationship." — Patty Krawec</span>
          <span className="hero__divider" aria-hidden="true"></span>
          <span>"The recovery of ourselves and our self-determination must begin at home." — bell hooks</span>
        </div>

        <div className="hero__actions">
          <a href="#stories" className="btn btn--primary">Read the Stories</a>
          <a href="#contribute" className="btn btn--outline">Share Yours</a>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}

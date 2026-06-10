import React, { useState } from 'react';
import stories from '../data/stories.json';
import './Stories.css';

const BADGE_COLORS = {
  'Homeplace': '#6B4A2A',
  'Migration': '#3A5A4A',
  'Faith': '#4A3A6B',
  'Kinship': '#2A5A4A',
  'Feminist Homework': '#6B3A3A',
  'Social Location': '#4A5A2A',
};

function ThemeBadge({ theme }) {
  const bg = BADGE_COLORS[theme] || '#3A4A3A';
  return (
    <span className="story-badge" style={{ background: bg }} aria-label={`Theme: ${theme}`}>
      {theme}
    </span>
  );
}

function StoryModal({ story, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={story.title}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close story">&#x2715;</button>
        <div className="modal__meta">
          <ThemeBadge theme={story.theme} />
          <span className="modal__author">{story.author} &middot; {story.date}</span>
        </div>
        <h3 className="modal__title">{story.title}</h3>
        <div className="thread-divider"><div className="thread-dot" /><div className="thread-dot" /></div>

        <p className="modal__content">{story.content}</p>

        <div className="modal__footer">
          <div className="modal__cta modal__cta--reflect">
            <p className="modal__cta-label">Reflect</p>
            <p className="modal__cta-text">{story.reflectionQuestion}</p>
          </div>
          <div className="modal__cta modal__cta--act">
            <p className="modal__cta-label">Act</p>
            <p className="modal__cta-text">{story.actionStep}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Stories() {
  const [active, setActive] = useState(null);

  const prompts = [
    'How does your story embody "decolonization starts at home"?',
    'What does intersectional feminism look like in your daily life?',
    'What object, memory, or tradition connects you to where you come from?',
    'Who taught you something about responsibility or kinship?',
  ];

  return (
    <section id="stories" className="section-cream">
      <div className="container">
        <p className="eyebrow">Reflections &amp; Stories</p>
        <h2 className="section-title">What We Carry</h2>
        <p className="section-subtitle">
          Personal narratives are not separate from politics. They are where politics live.
          These stories are offered as an invitation — to read, to reflect, and to share your own.
        </p>
        <p className="stories__tagline">Part archive. Part journal. Part invitation.</p>

        <div className="stories__grid">
          {stories.map((story, i) => (
            <article
              key={story.id}
              className={`story-card fade-up fade-up-delay-${i % 3 + 1}`}
              aria-label={`Story: ${story.title}`}
            >
              <div className="story-card__top">
                <ThemeBadge theme={story.theme} />
                <span className="story-card__date">{story.date}</span>
              </div>
              <h3 className="story-card__title">{story.title}</h3>
              <p className="story-card__preview">{story.preview}</p>
              <div className="story-card__bottom">
                <span className="story-card__author">{story.author}</span>
                <button
                  className="story-card__read"
                  onClick={() => setActive(story)}
                  aria-label={`Read full story: ${story.title}`}
                >
                  Read in full <span aria-hidden="true">&#8594;</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="stories__prompts">
          <p className="eyebrow">Story Prompts for Contributors</p>
          <p className="stories__prompts-intro">Not sure where to start? Any of these can be an entry point.</p>
          <ul className="stories__prompt-list" role="list">
            {prompts.map((p, i) => (
              <li key={i} className="stories__prompt-item">
                <span className="stories__prompt-mark" aria-hidden="true">&#10022;</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <a href="#contribute" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>Submit Your Story</a>
        </div>
      </div>

      {active && <StoryModal story={active} onClose={() => setActive(null)} />}
    </section>
  );
}

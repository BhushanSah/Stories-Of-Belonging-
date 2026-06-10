import React, { useState, useEffect } from 'react';
import './FeministHomework.css';

const TASKS = [
  { id: 'elder',     text: 'Interview an elder about home' },
  { id: 'interfaith',text: 'Attend an interfaith event' },
  { id: 'land',      text: 'Learn whose land you live on' },
  { id: 'location',  text: 'Reflect on your social location' },
  { id: 'story',     text: 'Share a story about belonging' },
  { id: 'read',      text: 'Read a work by an author outside your own tradition' },
];

const STORAGE_KEY = 'fh_checked';

export default function FeministHomework() {
  const [checked, setChecked] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(checked)); } catch {}
  }, [checked]);

  function toggle(id) {
    setChecked(c => c.includes(id) ? c.filter(x => x !== id) : [...c, id]);
  }

  const done = checked.length;

  return (
    <section id="feminist-homework" className="fh-section">
      <div className="fh-grain" aria-hidden="true" />
      <div className="container">
        <p className="eyebrow">Feminist Homework</p>
        <h2 className="section-title fh-title">Small practices that continue after the reading ends.</h2>

        <div className="fh-progress" aria-live="polite" aria-label={`${done} of ${TASKS.length} practices completed`}>
          <div className="fh-progress__bar">
            <div
              className="fh-progress__fill"
              style={{ width: `${(done / TASKS.length) * 100}%` }}
            />
          </div>
          <p className="fh-progress__label">{done} of {TASKS.length}</p>
        </div>

        <ul className="fh-list" role="list">
          {TASKS.map(task => {
            const isChecked = checked.includes(task.id);
            return (
              <li key={task.id} className={`fh-item ${isChecked ? 'fh-item--done' : ''}`}>
                <label className="fh-label">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggle(task.id)}
                    aria-label={task.text}
                    className="fh-checkbox"
                  />
                  <span className="fh-custom-check" aria-hidden="true">
                    {isChecked && <span className="fh-check-mark">&#10003;</span>}
                  </span>
                  <span className="fh-item-text">{task.text}</span>
                </label>
              </li>
            );
          })}
        </ul>

        {done === TASKS.length && (
          <p className="fh-complete" aria-live="polite">
            The homework never fully ends. But this is a beginning.
          </p>
        )}
      </div>
    </section>
  );
}

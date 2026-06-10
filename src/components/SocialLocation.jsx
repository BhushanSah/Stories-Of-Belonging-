import React, { useEffect, useRef, useState } from 'react';
import './SocialLocation.css';

const identities = [
  'Nepali',
  'Hindu',
  'First-Generation Student',
  'International Student',
  'CS & Mathematics Student',
  'Immigrant',
];

export default function SocialLocation() {
  const [visible, setVisible] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          identities.forEach((_, i) => {
            setTimeout(() => setVisible(v => [...v, i]), i * 180);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="social-location" className="sl-section">
      <div className="sl-grain" aria-hidden="true" />
      <div className="container">
        <div className="sl-inner">
          <div className="sl-text">
            <p className="eyebrow">My Social Location</p>
            <h2 className="section-title sl-title">Where I Stand</h2>
            <p className="sl-reflection">
              Every story on this website comes from a particular social location.
              These identities do not fully define me, but they shape how I understand
              home, belonging, faith, feminism, and responsibility. This project begins
              by acknowledging where I stand before asking others to share where they stand.
            </p>
          </div>

          <div className="sl-pathway" ref={ref} aria-label="Identity pathway">
            {identities.map((id, i) => (
              <React.Fragment key={id}>
                <div className={`sl-node ${visible.includes(i) ? 'sl-node--visible' : ''}`}>
                  <div className="sl-node__dot" aria-hidden="true" />
                  <span className="sl-node__label">{id}</span>
                </div>
                {i < identities.length - 1 && (
                  <div className={`sl-connector ${visible.includes(i) ? 'sl-connector--visible' : ''}`} aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import './About.css';

const terms = [
  {
    term: 'Settler Colonialism',
    def: 'A form of colonialism in which settlers come to stay. Unlike extractive colonialism, it works through the permanent replacement of Indigenous peoples and their relationships to land. Krawec writes that "colonialism destroys in order to replace" — structures, languages, stories, and kinship systems are dismantled and substituted with European ones.',
    source: 'Krawec, Becoming Kin'
  },
  {
    term: 'Intersectionality',
    def: 'The idea that systems of oppression — race, gender, class, sexuality — do not operate separately but reinforce and shape each other. bell hooks showed that feminism which ignores race and class speaks only for privileged women. The Combahee River Collective named it plainly: you cannot separate Black women\'s experience of race from their experience of gender.',
    source: 'hooks, Feminism is for Everybody; Combahee River Collective Statement'
  },
  {
    term: 'Kinship as Resistance',
    def: 'Krawec\'s framing of Indigenous kinship — the understanding that "everything in creation is connected" and that relationships carry responsibilities — as a direct counter to colonial individualism. Becoming kin is not a feeling; it is a practice of accountability across difference.',
    source: 'Krawec, Becoming Kin'
  },
  {
    term: 'Feminist Homework',
    def: 'Sara Ahmed\'s phrase for feminism as daily, relational practice rather than only a political position. Feminism is how we listen, how we treat people, how we examine our own assumptions. "Feminism: how we pick each other up."',
    source: 'Ahmed, Living a Feminist Life'
  },
  {
    term: 'Decolonial Feminism',
    def: 'A feminist framework that takes settler colonialism, Indigenous sovereignty, and land dispossession seriously alongside gender and sexuality. It insists that liberation cannot be partial — that ending sexist oppression requires also ending colonial structures that produced and maintain it.',
    source: 'Course framework'
  },
];

const questions = [
  'What is home?',
  'Who do we belong to?',
  'What responsibilities come with belonging?',
  'How do we become good relatives?',
];

export default function About() {
  const [open, setOpen] = useState(null);

  return (
    <section id="about" className="section">
      <div className="container">
        <p className="eyebrow">About &amp; Context</p>
        <h2 className="section-title">What Makes This Decolonial Feminist</h2>
        <p className="section-subtitle">
          The project draws on a semester of reading, discussion, and reflection.
          These are the ideas that shaped it.
        </p>

        <div className="about__grid">
          <div className="about__terms">
            <p className="about__terms-label">Key Concepts</p>
            {terms.map((t, i) => (
              <div key={i} className="about__term">
                <button
                  className="about__term-toggle"
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span>{t.term}</span>
                  <span className="about__arrow" aria-hidden="true">{open === i ? '−' : '+'}</span>
                </button>
                {open === i && (
                  <div className="about__term-body">
                    <p>{t.def}</p>
                    <p className="about__source">Source: <em>{t.source}</em></p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="about__statement">
            {/* How This Course Changed Me */}
            <div className="about__quote-card">
              <p className="about__quote-mark" aria-hidden="true">&ldquo;</p>
              <p className="about__quote-eyebrow">How This Course Changed Me</p>
              <blockquote className="about__quote">
                Before this course, I mostly understood feminism through conversations about equality.
                Through the work of bell hooks, Sara Ahmed, Patty Krawec, and the Combahee River Collective,
                I began seeing how gender, race, land, history, belonging, and responsibility are interconnected.
                This project is one way I am continuing that work.
              </blockquote>
            </div>

            <div className="about__readings">
              <p className="eyebrow">Texts That Shaped This Work</p>
              <ul className="about__readings-list" role="list">
                {[
                  'Patty Krawec, Becoming Kin',
                  'bell hooks, Feminism is for Everybody',
                  'Sara Ahmed, Living a Feminist Life',
                  'Raoul Peck, Exterminate All the Brutes',
                  'Combahee River Collective Statement',
                ].map((r, i) => (
                  <li key={i} className="about__reading-item">
                    <span className="about__reading-dot" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Questions This Project Carries */}
            <div className="about__questions">
              <p className="eyebrow">Questions This Project Carries</p>
              <ul className="about__questions-list" role="list">
                {questions.map((q, i) => (
                  <li key={i} className="about__question">
                    <span className="about__question-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import './Footer.css';

const questions = [
  'What is home?',
  'Who do we belong to?',
  'What responsibilities come with belonging?',
  'How do we become good relatives?',
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grain" aria-hidden="true" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">Stories of Belonging</p>
          <p className="footer__tagline">
            A decolonial feminist storytelling project.
          </p>
          <p className="footer__note">
            Inspired by a semester of reading, reflection, and the belief that
            the stories we carry can either reproduce colonial systems or help
            us dismantle them — one honest reflection at a time.
          </p>
        </div>

        <div className="footer__nav">
          <p className="footer__nav-heading">Navigate</p>
          <ul role="list">
            {[
              ['#home', 'Home'],
              ['#social-location', 'Social Location'],
              ['#journey', 'The Journey'],
              ['#pitch', 'Project Pitch'],
              ['#stories', 'Stories'],
              ['#feminist-homework', 'Feminist Homework'],
              ['#places', 'Places'],
              ['#about', 'About'],
              ['#contribute', 'Contribute'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="footer__link">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__credits">
          <p className="footer__nav-heading">Acknowledgments</p>
          <p className="footer__credit-text">
            Course: Intro: Decolonizing Feminism<br />
            Instructor: Dr. dp Patrick<br />
            Berea College
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__bottom-text">
            <em>"Decolonization starts at home."</em>
          </p>
          <p className="footer__bottom-note">
            This site was built as a class project and is not affiliated with any institution.
          </p>
        </div>
      </div>
    </footer>
  );
}

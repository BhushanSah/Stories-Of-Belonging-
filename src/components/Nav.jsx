import React, { useState, useEffect } from 'react';
import './Nav.css';

const links = [
  { href: '#home',              label: 'Home' },
  { href: '#social-location',   label: 'My Location' },
  { href: '#stories',           label: 'Stories' },
  { href: '#feminist-homework', label: 'Homework' },
  { href: '#places',            label: 'Places' },
  { href: '#about',             label: 'About' },
  { href: '#contribute',        label: 'Contribute' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} aria-label="Main navigation">
      <div className="nav__inner container">
        <a href="#home" className="nav__logo" aria-label="Stories of Belonging home">
          {/* <span className="nav__logo-mark">&#10006;</span> */}
          <span className="nav__logo-text">Stories of Belonging</span>
        </a>

        <button
          className={`nav__burger ${open ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav__links ${open ? 'nav__links--open' : ''}`} role="list">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav__link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

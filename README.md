# Becoming Kin — Decolonial Feminist Storytelling Project

A React web application built as a final project for *Intro: Decolonizing Feminism* at Gettysburg College (Dr. dp Patrick).
Link to website- https://stories-of-belonging.netlify.app/ 

## What This Is

A digital storytelling platform where feminism, decolonization, and personal narrative meet. Built around the course taglines:

- *Decolonization starts at home.*
- *Become good relatives.*
- *Feminism: how we pick each other up.* — Sara Ahmed

Theoretical grounding draws on Patty Krawec's *Becoming Kin*, bell hooks's *Feminism is for Everybody*, Sara Ahmed's *Living a Feminist Life*, Raoul Peck's *Exterminate All the Brutes*, and the Combahee River Collective Statement.

---

## Running Locally

**Requirements:** Node.js 16+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start
```

The app will open at `http://localhost:3000`.

---

## Project Structure

```
src/
  components/
    Nav.jsx / Nav.css          — Fixed navigation bar
    Hero.jsx / Hero.css        — Full-screen landing section
    Pitch.jsx / Pitch.css      — Project pitch, theory of change, feedback
    Stories.jsx / Stories.css  — Story cards with modal reader
    About.jsx / About.css      — Key concepts accordion + context
    Contribute.jsx / Contribute.css — Submission form with validation
    Footer.jsx / Footer.css    — Acknowledgments and links
  data/
    stories.json               — Story content (add new entries here)
    pitch.json                 — Pitch vision, theory, peer feedback
  styles/
    global.css                 — Design tokens, typography, utilities
  App.jsx                      — Root component
  index.js                     — React entry point
public/
  index.html                   — HTML shell with Google Fonts
```

---

## Adding New Stories

Open `src/data/stories.json` and add a new object:

```json
{
  "id": 4,
  "title": "Your Story Title",
  "author": "Your Name",
  "date": "Month Year",
  "preview": "A short excerpt that appears on the card (2–3 sentences).",
  "content": "The full story text shown in the modal when a reader clicks."
}
```

Save and the site updates automatically in dev mode.

---

## Design System

| Token | Value | Use |
|---|---|---|
| `--forest` | `#1B3A2D` | Backgrounds, nav |
| `--parchment` | `#F2EBD9` | Main background |
| `--terracotta` | `#C4622D` | Accent, CTAs |
| `--rose` | `#C49090` | Secondary accent, quotes |
| `--charcoal` | `#2C2C2C` | Body text |

Fonts: **Playfair Display** (headings) + **Inter** (body).

The signature design element is the woven thread pattern in the hero — referencing *kalawa*, the sacred thread that appears in the project's personal narrative writing.

---

## Future Enhancements

- **Backend integration:** Connect the contribution form to a Node/Express or Firebase backend to persist submitted stories and enable admin review.
- **CMS:** Use a headless CMS (Contentful, Sanity) so stories can be added without touching code.
- **Authentication:** Allow contributors to manage their own submissions.
- **Offline/Zine connection:** Add a section for PDF zine downloads or workshop event listings.
- **Multilingual support:** Add Nepali language option in honor of the project's origins.
- **Search and filter:** Let readers filter stories by theme or prompt.

---

## Community Agreements Embedded in the Design

The contribution form enforces care and consent through:
- Explicit consent checkbox
- Anonymous submission option
- Moderation note before stories go live
- Contribution guidelines centered on marginalized voices

These reflect the community agreements from the course: reciprocity, respect for diverse knowledge systems, and creating a safe space for sharing.

---

*Built with React 18, React Router v6, and plain CSS modules. No UI framework dependency.*

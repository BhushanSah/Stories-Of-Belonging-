import React, { useState } from 'react';
import './Contribute.css';

const guidelines = [
  'Center your own experience. You do not need to speak for anyone but yourself.',
  'Consent matters. Do not share others\' stories without their permission.',
  'Marginalized voices are the heart of this project. All stories are welcome; none are required.',
  'You may submit anonymously. The form will note that option.',
  'Stories will be reviewed before being added to the site, with care and respect.',
];

const initialForm = {
  name: '',
  anonymous: false,
  title: '',
  prompt: '',
  story: '',
  consent: false,
};

export default function Contribute() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!form.anonymous && !form.name.trim()) e.name = 'Please enter your name, or check the anonymous option.';
    if (!form.title.trim()) e.title = 'A title helps readers find your story.';
    if (form.story.trim().length < 50) e.story = 'Your story should be at least a few sentences.';
    if (!form.consent) e.consent = 'Please confirm you have read the contribution guidelines.';
    return e;
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // In production this would POST to a backend
    console.log('Submission:', form);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="contribute" className="section-alt">
        <div className="container contribute__thanks">
          <p className="eyebrow-light">Thank you</p>
          <h2 className="section-title">Your Story Was Received</h2>
          <p className="section-subtitle-light">
            It will be reviewed with care and added to the site once confirmed.
            Kinship is built one honest story at a time.
          </p>
          <button className="btn btn--outline" onClick={() => { setSubmitted(false); setForm(initialForm); }}>
            Submit Another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contribute" className="section-alt">
      <div className="container">
        <p className="eyebrow-light">Get Involved</p>
        <h2 className="section-title">Share Your Story</h2>
        <p className="section-subtitle-light">
          This platform grows through contribution. If you have a story, reflection,
          or memory that connects to these themes, it belongs here.
        </p>

        <div className="contribute__grid">
          <div className="contribute__guidelines">
            <p className="eyebrow-light">Before You Submit</p>
            <ul className="contribute__guidelines-list" role="list">
              {guidelines.map((g, i) => (
                <li key={i} className="contribute__guideline">
                  <span className="contribute__guideline-num" aria-hidden="true">{i + 1}</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
            <div className="contribute__offline">
              <p className="eyebrow-light" style={{ marginTop: '2rem' }}>Connect Offline</p>
              <p className="contribute__offline-text">
                Digital storytelling is a starting point, not the whole project.
                Reach out if you are interested in workshops, study circles, or
                zine exchanges.
              </p>
              <a href="mailto:bhushan@kinproject.org" className="contribute__email">
                bhushan@kinproject.org
              </a>
            </div>
          </div>

          <form
            className="contribute__form"
            onSubmit={handleSubmit}
            aria-label="Story submission form"
            noValidate
          >
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your Name {form.anonymous && <span className="form-optional">(optional if anonymous)</span>}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                aria-describedby={errors.name ? 'name-err' : undefined}
                disabled={form.anonymous}
              />
              {errors.name && <p className="form-error" id="name-err" role="alert">{errors.name}</p>}
              <label className="form-check">
                <input
                  type="checkbox"
                  name="anonymous"
                  checked={form.anonymous}
                  onChange={handleChange}
                />
                Submit anonymously
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="title" className="form-label">Story Title</label>
              <input
                id="title"
                name="title"
                type="text"
                className={`form-input ${errors.title ? 'form-input--error' : ''}`}
                value={form.title}
                onChange={handleChange}
                placeholder="Give your story a title"
                aria-describedby={errors.title ? 'title-err' : undefined}
              />
              {errors.title && <p className="form-error" id="title-err" role="alert">{errors.title}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="prompt" className="form-label">
                Which prompt speaks to you? <span className="form-optional">(optional)</span>
              </label>
              <select
                id="prompt"
                name="prompt"
                className="form-input"
                value={form.prompt}
                onChange={handleChange}
              >
                <option value="">Choose a prompt, or leave blank</option>
                <option>How does your story embody "decolonization starts at home"?</option>
                <option>What does intersectional feminism look like in your daily life?</option>
                <option>What object, memory, or tradition connects you to where you come from?</option>
                <option>Who taught you something about responsibility or kinship?</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="story" className="form-label">Your Story</label>
              <textarea
                id="story"
                name="story"
                className={`form-input form-textarea ${errors.story ? 'form-input--error' : ''}`}
                value={form.story}
                onChange={handleChange}
                rows={8}
                placeholder="Write your reflection here..."
                aria-describedby={errors.story ? 'story-err' : undefined}
              />
              {errors.story && <p className="form-error" id="story-err" role="alert">{errors.story}</p>}
              <p className="form-hint">{form.story.length} characters</p>
            </div>

            <div className="form-group">
              <label className={`form-check ${errors.consent ? 'form-check--error' : ''}`}>
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  aria-describedby={errors.consent ? 'consent-err' : undefined}
                />
                I have read the contribution guidelines and consent to sharing this story.
              </label>
              {errors.consent && <p className="form-error" id="consent-err" role="alert">{errors.consent}</p>}
            </div>

            <button type="submit" className="btn btn--primary contribute__submit">
              Submit Story
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

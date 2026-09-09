import heroPortrait from '../assets/hero-portrait.png';
import Reveal from './Reveal.jsx';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Customers',
    desc: 'Real problems. Real context.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: 'Product',
    desc: 'Turn ideas into working solutions.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Teams',
    desc: 'Bridging gaps, not creating them.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
    title: 'Impact',
    desc: 'Useful, not just busy.',
  },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="hero-kicker">Good products start with real conversations.</span>
            <h1 className="hero-name">Hi, I&apos;m Sultan.</h1>
            <p className="hero-statement">
              I spend a lot of my time somewhere between customers, product decisions, QA, engineers, and the
              occasional &quot;how did that get into production?&quot; moment.
            </p>
            <p className="hero-intro">
              I work in fintech, across product management, product operations, QA, Scrum and technical delivery.
              Most days that means talking to customers, digging into data, writing requirements, breaking things
              on purpose, and making sure what we ship actually does what it&apos;s supposed to.
            </p>
            <span className="hero-cv-line">This isn&apos;t really my CV. It&apos;s how I think about products.</span>
            <div className="hero-cta hero-buttons">
              <a href="#question" className="btn accent">Explore my thinking ↓</a>
              <a href="#example" className="btn">Skip to the good stuff</a>
            </div>
          </div>

          <div className="hero-illustration hero-photo">
            <img
              src={heroPortrait}
              alt="Illustrated portrait of Sultan Kirigha, smiling, standing with hands in pockets"
              width="846"
              height="843"
            />
            <div className="hero-photo-caption">
              <div className="hero-photo-name">Sultan Kirigha</div>
              <div className="hero-photo-role">Product · QA · Scrum · Technical Delivery</div>
            </div>
          </div>
        </div>

        <div className="feature-strip">
          {features.map((f, i) => (
            <Reveal as="div" className="feature-item" delay={Math.min(i * 90, 360)} key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

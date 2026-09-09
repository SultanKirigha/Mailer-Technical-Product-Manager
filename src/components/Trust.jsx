import Reveal from './Reveal.jsx';

export default function Trust() {
  return (
    <section id="trust">
      <div className="wrap">
        <Reveal as="div" className="prose">
          <div className="icon-accent">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              <path d="m9 16 2 2 4-4" />
            </svg>
          </div>
          <span className="eyebrow"><span className="num">02.</span> Trust, safety &amp; fraud</span>
          <h2 className="eyebrow-free-heading">Trust is part of the product.</h2>
          <p>
            I&apos;ll be upfront: my background is in fintech products, not a dedicated Trust &amp; Safety role.
            But when you work with financial systems, data integrity, permissions, validation, transaction accuracy
            and user access stop being someone else&apos;s problem. They&apos;re just part of the job.
          </p>
          <p>
            A lot of that comes from QA. Once you&apos;ve spent enough time trying to break things on purpose, you
            start asking the same questions automatically, in every feature conversation:
          </p>
          <ul className="plain">
            <li>What happens if someone uses this differently from how we expected?</li>
            <li>Who should actually be allowed to perform this action?</li>
            <li>What happens to existing data when this changes?</li>
            <li>Can the system end up in a state that shouldn&apos;t be possible?</li>
            <li>What&apos;s the financial or customer impact if this fails quietly?</li>
          </ul>
          <span className="caption-line">Security and usability can (and should) coexist.</span>
        </Reveal>
      </div>
    </section>
  );
}

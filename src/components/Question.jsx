import { Fragment } from 'react';
import Reveal from './Reveal.jsx';

const processSteps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    title: 'Understand the problem',
    desc: 'What issue does it solve, and who actually experiences it?',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
      </svg>
    ),
    title: 'Gather evidence',
    desc: 'Customer data, support conversations, business priorities, technical constraints.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
    title: 'Assess impact',
    desc: 'Weigh value, urgency and confidence against each other.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21v-7" />
        <path d="M4 10V3" />
        <path d="M12 21v-9" />
        <path d="M12 8V3" />
        <path d="M20 21v-5" />
        <path d="M20 12V3" />
        <path d="M1 14h6" />
        <path d="M9 8h6" />
        <path d="M17 16h6" />
      </svg>
    ),
    title: 'Evaluate effort & risk',
    desc: 'Bring engineering and QA in early, before the estimate is final.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    title: 'Make the decision',
    desc: 'If it\u2019s close: "if we don\u2019t ship this, what happens?"',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="0.5" fill="currentColor" />
      </svg>
    ),
    title: 'Measure and learn',
    desc: 'Check the outcome and feed it into the next decision.',
    done: true,
  },
];

export default function Question() {
  return (
    <section id="question">
      <div className="wrap">
        <Reveal as="div" className="prose">
          <span className="eyebrow"><span className="num">01.</span> Prioritisation</span>
          <h2 className="eyebrow-free-heading">Three important features. One release slot. What now?</h2>
          <p>I wouldn&apos;t start by asking which one sounds the most exciting.</p>
          <p>
            First, I&apos;d want to know what problem each feature actually solves, who runs into that problem, how
            often it happens, and what happens if we simply do nothing about it. That last one gets skipped more
            than it should.
          </p>
          <p>
            Then I&apos;d look at evidence: customer conversations, support tickets, product data, technical
            constraints, business priorities, and compare the three using impact, urgency, confidence, effort and
            risk. Not gut feeling, and definitely not whoever asked most recently.
          </p>
          <p>
            I&apos;d bring engineering and QA in early. A feature that looks small on a roadmap can look completely
            different once someone maps out the dependencies and the regression risk.
          </p>
          <p>
            If it&apos;s still close, there&apos;s one question that usually settles it:{' '}
            <em>&quot;If we don&apos;t ship this in the next release, what happens?&quot;</em> The answer tends to
            make the real priority obvious.
          </p>
        </Reveal>

        <div className="process">
          {processSteps.map((step, i) => (
            <Fragment key={step.title}>
              <Reveal as="div" className="process-step" delay={Math.min(i * 90, 360)}>
                <div className={`process-icon${step.done ? ' done' : ''}`}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </Reveal>
              {i < processSteps.length - 1 && <span className="process-arrow">→</span>}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

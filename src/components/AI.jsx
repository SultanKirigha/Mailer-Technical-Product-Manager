import Reveal from './Reveal.jsx';

const aiUses = [
  'Turning messy meeting notes into a list of actions someone can actually follow',
  'Exploring requirements and edge cases before a ticket gets written',
  'Drafting first pass QA scenarios I can then pick apart',
  'Stress testing assumptions before development even starts',
  'Researching product areas I\u2019m not yet familiar with',
  'Tightening up technical documentation',
  'Prototyping ideas quickly',
  'Spotting repetitive work that could probably be automated',
  'Supporting personal product projects and small experiments',
];

export default function AI() {
  return (
    <section id="ai">
      <div className="wrap">
        <Reveal as="div" className="prose">
          <div className="icon-accent dark-accent">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="8" width="16" height="12" rx="3" />
              <path d="M12 8V4" />
              <circle cx="12" cy="3" r="1" fill="currentColor" stroke="none" />
              <path d="M9 13v1" />
              <path d="M15 13v1" />
              <path d="M9 18h6" />
            </svg>
          </div>
          <span className="eyebrow"><span className="num">03.</span> AI in my product work</span>
          <h2 className="eyebrow-free-heading">AI is already part of my toolbox.</h2>
          <p>Not in a vague &quot;I&apos;m exploring AI&quot; way. I use it for specific, unglamorous things, most days:</p>
          <ul className="plain">
            {aiUses.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p style={{ marginTop: '24px' }}>
            AI gives me speed, not the final decision. I still verify what it gives me, push back on it, and make
            the actual product judgement myself.
          </p>
          <span className="annotation">AI can suggest the test case. It still doesn&apos;t get to mark it Passed. 🙂</span>
        </Reveal>
      </div>
    </section>
  );
}

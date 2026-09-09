import Reveal from './Reveal.jsx';

const steps = [
  { name: 'Listen', desc: 'Talk to customers and the people closest to the problem.' },
  { name: 'Investigate', desc: 'Look at support issues, behaviour, workflows, existing solutions and available data.' },
  { name: 'Define', desc: 'Separate the requested feature from the underlying problem.' },
  { name: 'Challenge', desc: 'Ask whether we actually need to build something at all.' },
  { name: 'Validate', desc: 'Test assumptions through conversations, prototypes, technical investigation or small experiments.' },
  { name: 'Build', desc: 'Work closely with engineering and QA.' },
  { name: 'Learn', desc: 'Look at what happened after release, and feed that back into the next decision.' },
];

export default function Discovery() {
  return (
    <section id="discovery">
      <div className="wrap">
        <Reveal as="div" className="prose">
          <span className="eyebrow"><span className="num">05.</span> Product discovery</span>
          <h2 className="eyebrow-free-heading">Before building anything, I want to understand the problem.</h2>
          <p className="pull-quote">A customer asking for a feature is evidence. It isn&apos;t automatically the solution.</p>
        </Reveal>

        <div className="steps">
          {steps.map((s, i) => (
            <Reveal as="div" className="step" delay={Math.min(i * 90, 360)} key={s.name}>
              <div className="step-name">{s.name}</div>
              <div className="step-desc">{s.desc}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

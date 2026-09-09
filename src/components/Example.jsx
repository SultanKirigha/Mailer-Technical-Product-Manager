import Reveal from './Reveal.jsx';

const caseRows = [
  {
    label: 'The problem',
    text: "On a Salesforce based loan servicing platform, our Payment Allocation Template (PAT) engine (the logic that decides how a member's repayment splits across principal, interest, and arrears) kept misallocating payments in edge cases: rescheduled loans, undone reschedules, arrears with missing balance fields. Seven separate bugs, spread across the sprint board, each looking unrelated.",
  },
  {
    label: 'What I discovered',
    text: "Digging into them one by one, a pattern emerged: the allocation rules weren't broken individually. They were all running against stale balance data. A rule would fire before the true state of the loan had settled, so it allocated correctly against numbers that were already out of date.",
  },
  {
    label: 'The decision',
    text: 'Instead of patching each symptom, we built a shared "Stale Balance Guard" (a precondition check in the allocation engine that every rule runs through before allocating) alongside fixes to the specific rule types it had been masking (residual balance collection, arrears handling, written off loans).',
  },
  {
    label: 'What happened',
    text: "That sprint shipped 22 issues, the seven PAT fixes among them, the broadest single sprint delivery in that project's recent history, with the burndown trending cleanly to zero. More importantly, allocation defects in that subsystem dropped off almost entirely afterward.",
  },
];

export default function Example() {
  return (
    <section id="example">
      <div className="wrap">
        <Reveal as="div" className="prose">
          <span className="eyebrow"><span className="num">06.</span> A real example</span>
          <h2 className="eyebrow-free-heading">Here&apos;s what this looks like in real life.</h2>
        </Reveal>

        <div className="case">
          {caseRows.map((row, i) => (
            <Reveal as="div" className="case-row" delay={Math.min(i * 90, 360)} key={row.label}>
              <div className="case-label">{row.label}</div>
              <div className="case-fill">{row.text}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

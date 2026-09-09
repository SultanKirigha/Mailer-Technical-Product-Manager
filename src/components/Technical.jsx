import Reveal from './Reveal.jsx';

export default function Technical() {
  return (
    <section id="technical">
      <div className="wrap">
        <Reveal as="div" className="prose">
          <span className="eyebrow"><span className="num">04.</span> Working with technical teams</span>
          <h2 className="eyebrow-free-heading">I like being close to how things actually work.</h2>
          <p>
            I work closely with developers, QA engineers and technical stakeholders, around Salesforce based
            products, sandbox and production environments, releases, upgrades, bugs, regression testing, APIs,
            technical documentation and customer issues.
          </p>
          <p>A lot of my role sits in the middle of a chain, making sure information doesn&apos;t get lost as it moves along it:</p>
        </Reveal>

        <Reveal as="div" className="chain">
          <span className="chain-node">Customer</span><span className="chain-link">↔</span>
          <span className="chain-node">Product</span><span className="chain-link">↔</span>
          <span className="chain-node">Engineering</span><span className="chain-link">↔</span>
          <span className="chain-node">QA</span>
        </Reveal>
        <span className="caption-line">Different perspectives. A better product.</span>

        <Reveal as="div" className="prose" style={{ marginTop: '24px' }}>
          <p>
            I don&apos;t need to be the one writing every line of production code to have a useful technical
            conversation. I want to understand the dependencies, the constraints, the risks, and why something
            behaves the way it does.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

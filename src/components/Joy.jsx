import joyPeek from '../assets/joy-peek.png';
import Reveal from './Reveal.jsx';

export default function Joy() {
  return (
    <section className="joy" id="joy">
      <img className="joy-peek" src={joyPeek} alt="Illustrated Sultan standing and waving hello" />
      <div className="wrap">
        <h2 className="eyebrow-free-heading">Enough product talk.</h2>
        <div className="sub">Something that makes me happy.</div>

        <Reveal as="div" className="joy-body">
          <div className="joy-text">
            <p>
              This space is deliberately empty. It&apos;s yours to fill with something real. A hobby, a song you
              can&apos;t stop playing, a story that has nothing to do with product management.
            </p>
            <span className="line">Products are important. Having a life outside Jira is also important.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

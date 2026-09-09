import Reveal from './Reveal.jsx';

export default function Closing() {
  return (
    <section className="closing" id="closing">
      <div className="wrap">
        <Reveal as="div" className="prose">
          <h2>So, that&apos;s me.</h2>
          <p>
            I like complicated problems, curious people, and products that genuinely make someone&apos;s day
            easier. I&apos;m happiest when I can understand a problem deeply, work with good people to solve it,
            and then actually go back and check whether what we built worked.
          </p>
          <p className="thanks">Thanks for scrolling all the way down.</p>
          <div className="closing-links">
            <a href="https://www.linkedin.com/in/sultan-kirigha/" className="btn" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:sultankirigha@gmail.com" className="btn">Email</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

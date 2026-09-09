export default function Nav() {
  return (
    <>
      <a className="skip-link" href="#top">Skip to content</a>

      <nav className="sitenav" aria-label="Page sections">
        <div className="wrap sitenav-inner">
          <a href="#top" className="navbrand">
            <span className="logo-mark" aria-hidden="true">SK</span>
            <span className="navbrand-name">Sultan Kirigha</span>
          </a>
          <div className="sitenav-links">
            <a href="#top">Home</a>
            <a href="#question">My approach</a>
            <a href="#technical">Experience</a>
            <a href="#joy">A bit more me</a>
          </div>
          <a href="#closing" className="nav-cta">Let&apos;s connect →</a>
        </div>
      </nav>
    </>
  );
}

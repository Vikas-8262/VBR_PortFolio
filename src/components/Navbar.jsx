const Navbar = () => {
  return (
    <nav className="navbar glass-panel">
      <div className="nav-logo text-gradient">
        VR.
      </div>
      <div className="nav-links">
        <a href="#about" className="nav-link">About</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#skills" className="nav-link">Skills</a>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <a href="/resume.pdf" download="Vikas_Rathod_Resume.pdf" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>Resume</a>
        <a href="#contact" className="btn btn-outline">Let's Talk</a>
      </div>
    </nav>
  );
};

export default Navbar;

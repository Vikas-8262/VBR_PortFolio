import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import './App.css';

function App() {
  return (
    <SmoothScroll>
      <div className="app-container">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
      </div>
    </SmoothScroll>
  );
}

export default App;

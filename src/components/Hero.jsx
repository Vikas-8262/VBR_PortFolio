import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import ThreeModel from './ThreeModel';
import TextDecode from './TextDecode';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="hero-section" id="home">
      <div className="hero-canvas-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ThreeModel />
        </Canvas>
      </div>

      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          style={{ y, display: 'flex', flexDirection: 'column' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <TextDecode text="ENGINEER" />
          <TextDecode text="SYSTEMS" style={{ marginLeft: '2rem' }} />
        </motion.h1>

        <motion.p 
          style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', maxWidth: '450px', margin: '0 auto', textAlign: 'center', color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Python Developer specializing in LLM systems, conversational AI, and automation pipelines. Digitizing operations and eliminating manual workflows with AI.
        </motion.p>
      </div>

      <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', display: 'flex', gap: '2rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>↓ SCROLL</span>
        <span>Delivered 6 production systems</span>
      </div>
      <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
        #1
      </div>
    </section>
  );
};

export default Hero;

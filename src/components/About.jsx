import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import AboutThreeModel from './AboutThreeModel';
import TextDecode from './TextDecode';
import ScrollVelocityText from './ScrollVelocityText';

const About = () => {
  return (
    <section className="grid-section" id="about" style={{ padding: 0 }}>
      <div className="section-label">↓ ABOUT ME</div>
      <div className="section-index">#2</div>
      
      <div className="crosshair bottom-left"></div>
      <div className="crosshair bottom-right"></div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 2fr', gap: '4rem', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: '100%', height: '500px', border: '1px solid var(--border-subtle)', overflow: 'hidden', background: 'transparent', borderRadius: '1rem' }}>
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <AboutThreeModel />
          </Canvas>
        </div>
        
        <div>
          <motion.h2 
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1, marginBottom: '2rem', display: 'flex', flexDirection: 'column' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ScrollVelocityText>
              <TextDecode text="KNOW" />
              <TextDecode text="ME MORE" />
            </ScrollVelocityText>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-secondary)', maxWidth: '400px' }}
          >
            <p>
              Python Developer with production experience in LLM systems, conversational AI, and automation pipelines. I've delivered 6 major automation projects across HRMS, Sales, Finance, and Customer Engagement.
            </p>
            <p>
              By eliminating manual work, I've successfully digitized ~95% of HR processes and enabled 24×7 customer handling via WhatsApp AI chatbots.
            </p>
            
            <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '2rem', marginTop: '2rem', color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1.2rem', flexWrap: 'wrap' }}>
              <span>PYTHON</span>
              <span>LLM</span>
              <span>FLASK</span>
              <span>AUTOMATION</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

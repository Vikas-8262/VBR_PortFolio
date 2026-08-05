import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import TextDecode from './TextDecode';
import ScrollVelocityText from './ScrollVelocityText';

const ProjectCard = ({ proj, index }) => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [15, -15]);
  const rotateY = useTransform(x, [0, 400], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(200);
    y.set(200);
  };

  return (
    <motion.div
      className="project-cell"
      style={{
        gridRow: proj.size === 'large' ? 'span 2' : 'span 1',
        background: `linear-gradient(135deg, var(--bg-surface), #3a0ca3)`,
        perspective: '1000px',
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Dynamic Glare */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle at center, rgba(204, 255, 0, 0.15) 0%, transparent 40%)',
          pointerEvents: 'none',
          x: useTransform(x, [0, 400], ['-10%', '10%']),
          y: useTransform(y, [0, 400], ['-10%', '10%']),
        }}
      />
      <div style={{ transform: 'translateZ(40px)', marginTop: 'auto', display: 'flex', flexDirection: 'column' }}>
        <h3 className="project-title" style={{ zIndex: 2, margin: 0 }}>{proj.title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', zIndex: 2, margin: 0, marginTop: '0.5rem' }}>{proj.cat}</p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    { title: 'AI HRMS & ATS', cat: 'AI / Platform', size: 'large' },
    { title: 'WhatsApp AI Bot', cat: 'NLP / API', size: 'small' },
    { title: 'Payment Ledger', cat: 'Automation', size: 'small' },
    { title: 'Live Dashboards', cat: 'Data / UI', size: 'large' }
  ];

  return (
    <section className="grid-section" id="projects">
      <div className="section-label">↓ PORTFOLIO</div>
      <div className="section-index">#4</div>
      
      <div className="crosshair bottom-left"></div>
      <div className="crosshair bottom-right"></div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr', gap: '4rem', marginBottom: '4rem' }}>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <ProjectCard key={i} proj={proj} index={i} />
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.h2 
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1, marginBottom: '2rem', display: 'flex', flexDirection: 'column' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ScrollVelocityText>
              <TextDecode text="MY" />
              <TextDecode text="WORK" />
            </ScrollVelocityText>
          </motion.h2>
          <motion.p
            style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            My portfolio showcases a curated selection of my best architectural systems, highlighting my expertise in crafting robust software solutions for enterprise environments.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

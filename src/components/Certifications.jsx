import React from 'react';
import { motion } from 'framer-motion';
import TextDecode from './TextDecode';

const Certifications = () => {
  const certs = [
    { title: 'Using Python to Interact with the Operating System', issuer: 'Coursera', date: 'Coursera', id: 'PY-OS-01', link: 'https://www.coursera.org/account/accomplishments/verify/PN95SYAG3G7C' },
    { title: 'Web Development with Python', issuer: 'Coursera', date: 'Coursera', id: 'WEB-PY-02', link: 'https://www.coursera.org/account/accomplishments/verify/2KBF6MP21M6I' },
    { title: 'Foundations of Data Structures & Algorithms in Python', issuer: 'Coursera', date: 'Coursera', id: 'DSA-PY-03', link: 'https://www.coursera.org/account/accomplishments/verify/R4BWDTRJ8UJC' }
  ];

  return (
    <section className="grid-section" id="certifications">
      <div className="section-label">↓ CERTIFICATIONS</div>
      <div className="section-index">#5</div>
      
      <div className="crosshair bottom-left"></div>
      <div className="crosshair bottom-right"></div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', marginBottom: '4rem' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '2rem' }}>
          <motion.h2 
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1, display: 'flex', flexDirection: 'column', margin: 0 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <TextDecode text="MY" />
            <TextDecode text="CREDENTIALS" />
          </motion.h2>
          
          <motion.p
            style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '300px', margin: 0, textAlign: 'right' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Validated expertise through industry-recognized platforms.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              onClick={() => window.open(cert.link, '_blank')}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
              style={{
                padding: '2rem',
                border: '1px solid var(--border-subtle)',
                background: 'rgba(255,255,255,0.01)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer' // Use pointer for clickable elements
              }}
              whileHover={{ 
                borderColor: '#ccff00',
                background: 'rgba(204,255,0,0.03)'
              }}
            >
              {/* Decorative Tech Accents */}
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', color: '#ccff00', fontSize: '0.7rem', fontFamily: 'var(--font-display)', opacity: 0.5 }}>
                {cert.id}
              </div>
              <div style={{ position: 'absolute', bottom: '0', left: '0', width: '20px', height: '2px', background: '#ccff00' }}></div>
              <div style={{ position: 'absolute', bottom: '0', left: '0', width: '2px', height: '20px', background: '#ccff00' }}></div>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff', paddingRight: '3rem' }}>{cert.title}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{cert.issuer}</span>
                <span style={{ color: '#ccff00', fontSize: '0.85rem', fontFamily: 'var(--font-display)' }}>{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;

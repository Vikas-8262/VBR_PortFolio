import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'Python Developer',
      company: 'Conatus Enterprise (Tostem Studio)',
      duration: 'Dec 2025 – Present',
      description: 'Developed an AI-powered HRMS & ATS platform. Launched six crucial automation systems within HRMS, Sales, Finance, and Customer Engagement using Python, Flask, and AI.'
    },
    {
      role: 'Web Development Intern',
      company: 'Arcelor Technology Pvt. Ltd.',
      duration: '2024 (45 days)',
      description: 'Completed company-led industrial training. Built and debugged 8+ responsive UI components and gained hands-on SDLC experience.'
    }
  ];

  return (
    <section className="grid-section" id="experience">
      <div className="section-label">↓ PROCESS</div>
      <div className="section-index">#5</div>
      
      <div className="crosshair bottom-left"></div>
      <div className="crosshair bottom-right"></div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
        <div>
          <motion.h2 
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1, marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            MY<br />JOURNEY
          </motion.h2>
          <motion.p
            style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            I believe in a structured yet creative approach to deliver exceptional AI systems and backend pipelines tailored to your needs.
          </motion.p>
        </div>

        <div style={{ borderLeft: '1px solid var(--border-subtle)', paddingLeft: '4rem' }}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              style={{ position: 'relative', paddingBottom: '4rem', borderBottom: index !== experiences.length - 1 ? '1px solid var(--border-subtle)' : 'none', marginBottom: index !== experiences.length - 1 ? '4rem' : 0 }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Timeline marker line */}
              <div style={{ position: 'absolute', left: '-4rem', top: '10px', width: '2rem', height: '1px', background: 'var(--accent-primary)' }}></div>
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>{exp.role}</h3>
              <div style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
                {exp.company} &nbsp;|&nbsp; {exp.duration}
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

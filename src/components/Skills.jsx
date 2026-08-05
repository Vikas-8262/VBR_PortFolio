import { motion } from 'framer-motion';
import SkillsThreeBackground from './SkillsThreeBackground';
import TextDecode from './TextDecode';

const Skills = () => {
  const skillCategories = [
    { title: 'AI & GenAI', subtitle: 'Gemini, LLMs, NLP', num: '01' },
    { title: 'Backend', subtitle: 'Python, Flask, SQL', num: '02' },
    { title: 'Automation', subtitle: 'Workflows, Scripts', num: '03' },
    { title: 'Architecture', subtitle: 'Docker, Cloud', num: '04' }
  ];

  return (
    <section className="grid-section" id="skills" style={{ position: 'relative' }}>
      <SkillsThreeBackground />
      <div className="section-label" style={{ zIndex: 1 }}>↓ MY SKILLS</div>
      <div className="section-index" style={{ zIndex: 1 }}>#3</div>
      
      <div className="crosshair bottom-left"></div>
      <div className="crosshair bottom-right"></div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6rem', zIndex: 1, position: 'relative' }}>
        <motion.h2 
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1, display: 'flex', flexDirection: 'column' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <TextDecode text="WHAT" />
          <TextDecode text="I DO" />
        </motion.h2>
        
        <motion.p
          style={{ maxWidth: '400px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          My technical stack showcases a curated selection of architectural systems I've mastered, highlighting my expertise in crafting unique digital solutions for a variety of industries.
        </motion.p>
      </div>

      <div className="skills-container" style={{ zIndex: 1, position: 'relative' }}>
        {skillCategories.map((cat, index) => (
          <motion.div 
            key={index}
            className="skill-column"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, transformOrigin: 'top' }}
          >
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#fff' }}>{cat.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{cat.subtitle}</p>
            
            <div className="skill-index">/{cat.num}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

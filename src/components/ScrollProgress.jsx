import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div style={{
      position: 'fixed',
      right: '2rem',
      bottom: '2rem',
      width: '50px',
      height: '50px',
      zIndex: 9998,
      pointerEvents: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <svg width="50" height="50" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', position: 'absolute' }}>
        <circle 
          cx="50" cy="50" r="45" 
          stroke="rgba(255, 255, 255, 0.1)" 
          strokeWidth="4" 
          fill="none" 
        />
        <motion.circle 
          cx="50" cy="50" r="45" 
          stroke="#ccff00" 
          strokeWidth="6" 
          fill="none" 
          strokeDasharray="283" 
          style={{ pathLength: scaleY }}
        />
      </svg>
      <div style={{
        color: '#ccff00',
        fontSize: '0.8rem',
        fontFamily: 'var(--font-display)',
        fontWeight: 'bold',
        textShadow: '0 0 10px rgba(204,255,0,0.5)'
      }}>
        ↓
      </div>
    </div>
  );
};

export default ScrollProgress;

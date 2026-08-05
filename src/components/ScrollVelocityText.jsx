import React from 'react';
import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';

const ScrollVelocityText = ({ children, style }) => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  const skewVelocity = useTransform(smoothVelocity, [-1000, 1000], [-10, 10]);
  const skewY = useSpring(skewVelocity, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div style={{ ...style, skewY, display: 'inline-block', transformOrigin: 'center left' }}>
      {children}
    </motion.div>
  );
};

export default ScrollVelocityText;

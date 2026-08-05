import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const chars = '!<>-_\\/[]{}—=+*^?#_';

const TextDecode = ({ text, style }) => {
  // Initialize with randomized characters of the same length to preserve layout height
  const [displayText, setDisplayText] = useState(
    text.split('').map(l => l === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]).join('')
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (letter === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3; // Controls speed of decoding
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, text]);

  return (
    <motion.span ref={ref} style={style}>
      {displayText}
    </motion.span>
  );
};

export default TextDecode;

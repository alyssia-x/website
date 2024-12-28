'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const MathWave = () => {
  const WAVE_POINTS = 50;
  const points = Array.from({ length: WAVE_POINTS }, (_, i) => i);

  return (
    <motion.div 
      className="h-24 mb-12 flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <svg className="w-full h-full" viewBox="0 0 1000 100">
        {points.map((i) => {
          const x = (i / WAVE_POINTS) * 1000;
          return (
            <motion.circle
              key={i}
              cx={x}
              initial={{ cy: 50 }}
              animate={{
                cy: [50, 20, 80, 50],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: i * 0.05,
              }}
              r="2"
              className="fill-gray-400 dark:fill-gray-500"
            />
          );
        })}
      </svg>
    </motion.div>
  );
}; 
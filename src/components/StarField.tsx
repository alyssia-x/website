'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Star = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-white rounded-full"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ opacity: 0.1 }}
    animate={{ opacity: [0.1, 0.8, 0.1] }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export const StarField = () => {
  const STAR_COUNT = 50;
  const stars = Array.from({ length: STAR_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

  return (
    <div className="fixed inset-0 hidden dark:block pointer-events-none">
      {stars.map((star) => (
        <Star key={star.id} x={star.x} y={star.y} delay={star.delay} />
      ))}
    </div>
  );
}; 
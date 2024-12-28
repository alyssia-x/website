'use client';

import React, { useEffect, useState } from 'react';
import { StarField } from './StarField';
import { DarkModeToggle } from './DarkModeToggle';
import { MathWave } from './MathWave';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [minHeight, setMinHeight] = useState<string>('100vh');

  useEffect(() => {
    // Set initial minimum height to prevent layout shifts
    setMinHeight(`${window.innerHeight}px`);
  }, []);

  return (
    <div 
      className="min-h-screen bg-white dark:bg-gray-900 transition-colors"
      style={{ minHeight }}
    >
      <StarField />
      <main className="max-w-4xl mx-auto p-8 font-mono relative">
        <DarkModeToggle />
        <MathWave />
        {children}
      </main>
    </div>
  );
}; 
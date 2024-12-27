'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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

const StarField = () => {
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

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('theme') === null) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="fixed top-4 right-4 flex items-center gap-2 z-10">
      <span className="text-sm text-gray-600 dark:text-gray-400 hidden sm:inline">
        {isDark ? 'Dark mode' : 'Light mode'}
      </span>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
        aria-label="Toggle dark mode"
      >
        {isDark ? '☀️' : '🌙'}
      </button>
    </div>
  );
};

const MathWave = () => {
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

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-12 hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-lg transition-colors">
    <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">{title}</h2>
    <div className="pl-4 space-y-2 text-gray-700 dark:text-gray-300">
      {children}
    </div>
  </section>
);

const ImageModal = ({ photo, onClose }: { photo: { src: string; alt: string }; onClose: () => void }) => {
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full h-[80vh] rounded-lg overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={1200}
          height={800}
          className="object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
          sizes="90vw"
          priority
        />
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; alt: string } | null>(null);
  const photos = [
    { src: '/images/archery.jpeg', alt: 'Archery training in Korea' },
    { src: '/images/practice.jpeg', alt: 'Practice session' },
    { src: '/images/happy-place.jpeg', alt: 'Happy place' },
    { src: '/images/yosegi-puzzle.jpeg', alt: 'Yosegi puzzle box' },
    { src: '/images/tako.jpeg', alt: 'Tako' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <StarField />
      <main className="max-w-4xl mx-auto p-8 font-mono relative">
        <DarkModeToggle />
        <MathWave />
        
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">About</h1>
        
        <div className="space-y-8">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
            Hi! I'm Alyssia
          </p>

          <Section title="[Current]">
            • Independent AI Researcher<br/>
            • UK AI Safety Institute - building dangerous capability evaluations<br/>
            • International Space Station, Deep Space Biology & MD Anderson Cancer Center - T-Cell Microgravity Research<br/>
            • NASA Multi-Omics & AI/ML Analysis Working Group<br/>
            • Oxford ARBOx<br/>
            • Olympic Recurve Archery (aiming for 2028/2032 olympics!)<br/>
            • Annual charity payloads w/ SpaceX - engraving names & dreams of cancer patients on space missions
          </Section>

          <Section title="[Some former lives]">
            • Various contract roles & advisory<br/>  
            • YC W21, 2021 Interact Fellowship<br/>
            • Microsoft - Federated Learning / Personalization<br/>
            • Google - Smart Compose/Gmail Intelligence Team<br/>
            • Stanford - Remote CS106A Instructor<br/>
            • Montreal Institute for Learning Algorithms (MILA)<br/>
            • International Quant Championship - Team Canada, North American Champions (Ranked 3rd out of 18,000 teams across 131 countries)<br/>
            • Founded Canada's largest hackathon for change<br/>
            • Computing education initiatives in low-income neighborhoods<br/>
            • Miss Universe Canada
          </Section>

          <Section title="[Other random things / interests]">
            • Olympic recurve archery (I usually train in Korea!)<br/>
            • Pilates (certified beginner/intermediate instructor)<br/>
            • Diving (advanced open water)<br/>
            • Personal color analysis (certified in both Western and Korean color theory - can consult on request!)<br/>
            • Reading<br/>
            • Music production & singing<br/>
            • Almost competed against Magnus Carlsen (4x world chess champion)<br/>
            • Canadian<br/>
            • Known for frequent laughter :)
          </Section>

          <Section title="[Blog]">
            • Coming soon!
          </Section>

          <Section title="[Contact]">
            <a href="https://x.com/alyssiajovella" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              • [Twitter]
            </a>
            <br/>
            <a href="mailto:alyssia.jovellanos@gmail.com" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              • [Email]
            </a>
          </Section>

          <section className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {photos.map((photo, i) => (
                <figure 
                  key={i} 
                  className="group cursor-pointer"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <div className="w-full aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 45vw, 30vw"
                      priority={i < 2}
                    />
                  </div>
                </figure>
              ))}
            </div>
          </section>
        </div>
      </main>
      {selectedPhoto && (
        <ImageModal 
          photo={selectedPhoto} 
          onClose={() => setSelectedPhoto(null)} 
        />
      )}
    </div>
  );
};

export default Portfolio;

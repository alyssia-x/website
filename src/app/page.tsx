'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MainLayout } from '@/components/MainLayout';
import { useScrollPosition } from '@/hooks/useScrollPosition';

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
  useScrollPosition();
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; alt: string } | null>(null);
  const photos = [
    { src: '/images/archery.jpeg', alt: 'Archery training in Korea' },
    { src: '/images/practice.jpeg', alt: 'Practice session' },
    { src: '/images/happy-place.jpeg', alt: 'Happy place' },
    { src: '/images/yosegi-puzzle.jpeg', alt: 'Yosegi puzzle box' },
    { src: '/images/tako.jpeg', alt: 'Tako' },
  ];

  const blogPosts = [
    {
      title: "My First Blog Post",
      date: "December 1, 2023",
      slug: "first-post",
      excerpt: "A sample blog post demonstrating the styling and structure."
    }
  ];

  return (
    <MainLayout>
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
          {blogPosts.map((post) => (
            <div key={post.slug} className="mb-6">
              <Link 
                href={`/blog/${post.slug}`}
                className="block hover:bg-gray-100 dark:hover:bg-gray-800 p-4 rounded-lg transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {post.title}
                </h3>
                <time className="text-sm text-gray-600 dark:text-gray-400 mb-2 block">
                  {post.date}
                </time>
                <p className="text-gray-700 dark:text-gray-300">
                  {post.excerpt}
                </p>
              </Link>
            </div>
          ))}
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

      {selectedPhoto && (
        <ImageModal 
          photo={selectedPhoto} 
          onClose={() => setSelectedPhoto(null)} 
        />
      )}
    </MainLayout>
  );
};

export default Portfolio;

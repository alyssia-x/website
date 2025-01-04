'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MainLayout } from '@/components/MainLayout';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { formatReadingTime } from '@/utils/readingTime';
import { Tabs } from '@/components/Tabs';
import { AudioPlayer } from '@/components/AudioPlayer';

const Section = ({ children }: { children: React.ReactNode }) => (
  <div className="space-y-2 text-gray-700 dark:text-gray-300">
    {children}
  </div>
);

const ImageModal = ({ photo, onClose }: { photo: { src: string; alt: string; type: 'image' | 'video' }; onClose: () => void }) => {
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
        {photo.type === 'image' ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            width={1200}
            height={800}
            className="object-contain w-full h-full grayscale-0 transition-all duration-300"
            sizes="90vw"
            priority
          />
        ) : (
          <video
            src={photo.src}
            className="object-contain w-full h-full grayscale-0"
            controls
            autoPlay
            loop
            playsInline
            muted
          />
        )}
      </div>
    </div>
  );
};

const Portfolio = () => {
  useScrollPosition();
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; alt: string; type: 'image' | 'video' } | null>(null);
  const [activeTab, setActiveTab] = useState('current');

  useEffect(() => {
    // Get the initial tab from URL hash or default to 'current'
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.slice(1);
      if (hash && tabs.some(tab => tab.id === hash)) {
        setActiveTab(hash);
      }
    }
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (typeof window !== 'undefined') {
      // Use history.pushState to update hash without scrolling
      history.pushState(null, '', `#${tabId}`);
    }
  };

  // Function to preserve hash when navigating to blog posts
  const getBlogUrl = (slug: string) => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    return `/blog/${slug}${hash}`;
  };

  type MediaItem = {
    src: string;
    alt: string;
    type: 'image' | 'video';
  };

  const photos: MediaItem[] = [
    { src: '/images/archery.jpeg', alt: 'Archery training in Korea', type: 'image' },
    { src: '/images/practice.jpeg', alt: 'Practice session', type: 'image' },
    { src: '/images/happy-place.jpeg', alt: 'Happy place', type: 'image' },
    { src: '/images/yosegi-puzzle.jpeg', alt: 'Yosegi puzzle box', type: 'image' },
    { src: '/images/tako.jpeg', alt: 'Tako', type: 'image' },
    { src: '/images/cubesat-render.png', alt: 'CubeSat Render', type: 'image' },
    { src: '/images/yc-reunion-party.mp4', alt: 'YC Reunion Party', type: 'video' },
    { src: '/images/desert-shoot.jpg', alt: 'Desert photoshoot', type: 'image' },
    { src: '/images/pnw.jpg', alt: 'Pacific Northwest', type: 'image' },
  ];

  const blogPosts = [
    {
      title: "Beyond ARC: Reimagining Abstract Reasoning Benchmarks for the Next Generation of AI",
      date: "Dec 27, 2024",
      slug: "beyond-arc-abstract-reasoning",
      excerpt: "A deep dive into the evolution of AI benchmarks and what the future holds for testing artificial intelligence.",
      readingTime: 18
    },
    {
      title: "Why AI Safety Needs More Science Fiction: Proposing the AI Safety Fiction Challenge",
      date: "Dec 26, 2024",
      slug: "ai-safety-fiction-challenge",
      excerpt: "Exploring how science fiction can contribute to solving AI alignment challenges and proposing a new writing initiative to bridge technical research with imaginative exploration.",
      readingTime: 7
    }
  ];

  const tabs = [
    {
      id: 'current',
      label: 'Current',
      content: (
        <Section>
          • Independent AI Researcher<br/>
          • UK AI Safety Institute - building dangerous capability evaluations<br/>
          • International Space Station, Deep Space Biology & MD Anderson Cancer Center - T-Cell Microgravity Research<br/>
          • NASA Multi-Omics & AI/ML Analysis Working Group<br/>
          • Incoming: Oxford Alignment Research Bootcamp, Experimental Curriculum Designer @ BlueDot Impact<br/>
          • Olympic Recurve Archery (aiming for 2028/2032 olympics!)<br/>
          • Annual charity payloads w/ SpaceX - engraving names & dreams of cancer patients on space missions
        </Section>
      ),
    },
    {
      id: 'former',
      label: 'Former',
      content: (
        <Section>
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
      ),
    },
    {
      id: 'other',
      label: 'Other',
      content: (
        <Section>
          • Olympic recurve archery (I usually train in Korea!)<br/>
          • Pilates (certified beginner/intermediate instructor)<br/>
          • Diving (advanced open water)<br/>
          • Personal color analysis (certified in both Western and Korean color theory - can consult on request!)<br/>
          • Reading<br/>
          • Music production & singing - currently working on <Link href="/audio/hold-on-were-going-home-ally" className="text-blue-600 dark:text-blue-400 hover:underline">this</Link> cover!<br/>
          • Almost competed against Magnus Carlsen (4x world chess champion)<br/>
          • Canadian<br/>
          • Known for frequent laughter :)
        </Section>
      ),
    },
    {
      id: 'blog',
      label: 'Blog',
      content: (
        <Section>
          {blogPosts.map((post) => (
            <div key={post.slug} className="mb-6">
              <Link 
                href={getBlogUrl(post.slug)}
                className="block hover:bg-gray-100 dark:hover:bg-gray-800 p-4 rounded-lg transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {post.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <time>{post.date}</time>
                  <span>·</span>
                  <span>{formatReadingTime(post.readingTime)}</span>
                </div>
              </Link>
            </div>
          ))}
        </Section>
      ),
    },
    {
      id: 'contact',
      label: 'Contact',
      content: (
        <Section>
          <a href="mailto:alyssia.jovellanos@gmail.com" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            • [Email]
          </a>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic">
            Move in space with minimum waste, maximum joy
          </div>
        </Section>
      ),
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-12">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/images/blog/aly-headshot.png"
              alt="Alyssia Jovellanos"
              width={80}
              height={80}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Hi, I'm Alyssia!</h1>
        </div>

        <Tabs 
          tabs={tabs} 
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {photos.map((photo, i) => (
            <figure 
              key={i} 
              className="group cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="w-full aspect-square relative rounded-lg overflow-hidden">
                {photo.type === 'image' ? (
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={400}
                    height={400}
                    className={`object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105 ${
                      photo.src === '/images/archery.jpeg' ? 'object-top' : 'object-center'
                    }`}
                    sizes="(max-width: 768px) 45vw, 30vw"
                    priority={i < 2}
                  />
                ) : (
                  <video
                    src={photo.src}
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={photo.src + '?t=0.1'}
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  />
                )}
              </div>
            </figure>
          ))}
        </div>
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

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MainLayout } from './MainLayout';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { formatReadingTime } from '@/utils/readingTime';

interface BlogPostProps {
  children: React.ReactNode;
  title: string;
  date: string;
  readingTime: number;
  authorName?: string;
  authorImage?: string;
}

export const BlogPost = ({ children, title, date, readingTime, authorName, authorImage }: BlogPostProps) => {
  useScrollPosition();
  const [hash, setHash] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHash(window.location.hash);
    }
  }, []);

  const backLink = `/${hash}`;

  return (
    <MainLayout>
      <div className="mb-8">
        <Link 
          href={backLink}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline hover:no-underline transition-colors"
        >
          <span className="mr-2">←</span>
          Back to home
        </Link>
      </div>
      
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <header className="not-prose mb-12 border-b border-gray-200 dark:border-gray-700 pb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>
          {(authorName || authorImage) && (
            <div className="flex items-center space-x-4 mb-4">
              {authorImage && (
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={authorImage} 
                    alt={authorName || 'Author'} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {authorName && (
                <div className="text-lg font-medium text-gray-900 dark:text-white">
                  {authorName}
                </div>
              )}
            </div>
          )}
          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <time>{date}</time>
            <span>·</span>
            <span>{formatReadingTime(readingTime)}</span>
          </div>
        </header>
        
        {children}

        <footer className="not-prose mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            href={backLink}
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline hover:no-underline transition-colors"
          >
            ← Back to home
          </Link>
        </footer>
      </article>
    </MainLayout>
  );
}; 
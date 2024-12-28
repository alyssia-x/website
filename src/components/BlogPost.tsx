'use client';

import React from 'react';
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

  return (
    <MainLayout>
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          <span className="mr-2">←</span>
          Back to home
        </Link>
      </div>
      
      <article className="prose dark:prose-invert prose-gray lg:prose-lg max-w-none">
        <header className="not-prose mb-12 border-b border-gray-200 dark:border-gray-700 pb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h1>
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
        
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          {children}
        </div>

        <footer className="not-prose mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link 
            href="/" 
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            ← Back to home
          </Link>
        </footer>
      </article>
    </MainLayout>
  );
}; 
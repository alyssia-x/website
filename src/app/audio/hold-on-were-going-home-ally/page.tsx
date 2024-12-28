'use client';

import React from 'react';
import Link from 'next/link';
import { MainLayout } from '@/components/MainLayout';
import { AudioPlayer } from '@/components/AudioPlayer';

export default function AudioPage() {
  return (
    <MainLayout>
      <div className="mb-8">
        <Link 
          href="/#other" 
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          <span className="mr-2">←</span>
          Back to home
        </Link>
      </div>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Hold On, We're Going Home (Cover)
        </h1>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
          <AudioPlayer 
            src="/audio/hold-on-we're-going-home-aly.m4a"
            className="w-full max-w-none" 
          />
        </div>
      </div>
    </MainLayout>
  );
} 
'use client';

import React from 'react';

interface AudioPlayerProps {
  src: string;
  className?: string;
}

export const AudioPlayer = ({ src, className = '' }: AudioPlayerProps) => {
  return (
    <audio 
      controls 
      preload="metadata"
      className={`w-full max-w-xs ${className}`}
    >
      <source src={src} type="audio/m4a" />
      <source src={src} type="audio/mp4" />
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}; 
import React from 'react';

interface PlaceholderImageProps {
  text: string;
  width?: number;
  height?: number;
}

export const PlaceholderImage = ({ text, width = 800, height = 400 }: PlaceholderImageProps) => {
  const svgString = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f0f0"/>
      <text 
        x="50%" 
        y="40%" 
        font-family="system-ui" 
        font-size="24" 
        text-anchor="middle" 
        dominant-baseline="middle"
        fill="#666"
      >
        🖼️ Placeholder Image
      </text>
      <text 
        x="50%" 
        y="50%" 
        font-family="system-ui" 
        font-size="16" 
        text-anchor="middle" 
        dominant-baseline="middle"
        fill="#666"
      >
        (This is a fallback - the actual image should be at)
      </text>
      <text 
        x="50%" 
        y="60%" 
        font-family="system-ui" 
        font-size="14" 
        text-anchor="middle" 
        dominant-baseline="middle"
        fill="#888"
      >
        ${text}
      </text>
    </svg>
  `;

  const base64 = Buffer.from(svgString).toString('base64');
  
  return `data:image/svg+xml;base64,${base64}`;
}; 
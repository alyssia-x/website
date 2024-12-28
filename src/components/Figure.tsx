import React, { useState } from 'react';
import Image from 'next/image';
import { PlaceholderImage } from './PlaceholderImage';

interface FigureProps {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
}

export const Figure: React.FC<FigureProps> = ({ src, alt, caption, width = 800, height = 400 }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const placeholderSrc = PlaceholderImage({ text: src, width, height });

  return (
    <figure className="my-6">
      <div className="relative w-full p-2">
        <div className="relative w-full min-h-[200px] h-auto">
          <Image
            src={imgSrc}
            alt={alt}
            width={width}
            height={height}
            className="object-contain w-full h-auto"
            onError={() => setImgSrc(placeholderSrc)}
          />
        </div>
      </div>
      <figcaption className="text-xs text-gray-600 dark:text-gray-400 text-center">
        {caption}
      </figcaption>
    </figure>
  );
}; 
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
    <figure className="my-8">
      <div className="relative w-full aspect-[2/1] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        <Image
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          className="object-contain"
          onError={() => setImgSrc(placeholderSrc)}
        />
      </div>
      <figcaption className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
        {caption}
      </figcaption>
    </figure>
  );
}; 
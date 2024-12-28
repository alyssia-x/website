'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SCROLL_POSITIONS = new Map<string, number>();

export const useScrollPosition = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Save scroll position before unmounting
    return () => {
      SCROLL_POSITIONS.set(pathname, window.scrollY);
    };
  }, [pathname]);

  useEffect(() => {
    // Restore scroll position when component mounts
    const savedPosition = SCROLL_POSITIONS.get(pathname);
    if (savedPosition !== undefined) {
      // Wait for next frame and add a small delay to ensure content is rendered
      requestAnimationFrame(() => {
        setTimeout(() => {
          window.scrollTo({
            top: savedPosition,
            behavior: 'instant'
          });
          // Clear the saved position after restoring
          SCROLL_POSITIONS.delete(pathname);
        }, 100);
      });
    }
  }, [pathname]);
}; 
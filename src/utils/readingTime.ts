const WORDS_PER_MINUTE = 200; // Average adult reading speed
const WORDS_PER_FIGURE = 30; // Estimated additional words for processing each figure/image

export function getReadingTime(text: string, numberOfFigures: number = 0): number {
  // Remove HTML tags and clean up the text
  const cleanText = text.replace(/<[^>]*>/g, ' ')
                       .replace(/\s+/g, ' ')
                       .replace(/[\r\n]+/g, ' ')
                       .trim();
  
  // Count words (split by whitespace)
  const words = cleanText.split(/\s+/).length;
  
  // Add time for figures (each figure takes about 30 words worth of time to process)
  const totalWords = words + (numberOfFigures * WORDS_PER_FIGURE);
  
  // Calculate reading time in minutes
  const minutes = Math.ceil(totalWords / WORDS_PER_MINUTE);
  
  return minutes;
}

export function formatReadingTime(minutes: number): string {
  if (minutes < 1) {
    return 'Less than a minute';
  } else if (minutes === 1) {
    return '1 minute';
  } else {
    return `${minutes} minutes`;
  }
} 
'use client';

import React from 'react';
import { BlogPost } from '@/components/BlogPost';

export default function FirstPost() {
  return (
    <BlogPost
      title="My First Blog Post"
      date="December 1, 2023"
    >
      <h2>Introduction</h2>
      <p>
        This is a sample blog post that demonstrates the styling and structure of the blog.
        It includes various elements like headings, paragraphs, and lists.
      </p>

      <h3>Subheading Example</h3>
      <p>
        Here's how subheadings and paragraphs look in the blog post.
        The styling is consistent with the main website's theme.
      </p>

      <ul>
        <li>First bullet point</li>
        <li>Second bullet point</li>
        <li>Third bullet point</li>
      </ul>

      <blockquote>
        This is how blockquotes appear in the blog post.
        They're styled to stand out from regular paragraphs.
      </blockquote>

      <p>
        <em>Emphasized text looks like this</em>, and <strong>strong text looks like this</strong>.
      </p>
    </BlogPost>
  );
} 
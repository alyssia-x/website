import React from 'react';
import { BlogPost } from '@/components/BlogPost';
import Link from 'next/link';
import { metadata } from './metadata';

export default function SpeedrunStoryOutlinesPost() {
  return (
    <BlogPost
      title={metadata.title}
      date={metadata.date}
      readingTime={metadata.readingTime}
      authorName="Alyssia Jovellanos"
      authorImage="/images/blog/aly-headshot.png"
    >
      <p>
        The key to crafting compelling visions of beneficial AI is rapidfire iteration: sketching many possible futures as 
        quickly as possible. This allows you to explore a wide range of optimistic scenarios before detailing any one path. 
        Here's how to apply the "speedrun" method to story outlining:
      </p>

      <h2>Set Up Your Creative Sprint</h2>
      <ul>
        <li>Choose the AI safety concept you want to explore from your "What if" brainstorming</li>
        <li>Set aside 30-60 minutes of uninterrupted time</li>
        <li>Open a blank document or grab paper and pen</li>
        <li>Remember: The goal is quantity over quality - we're generating possibilities!</li>
      </ul>

      <h2>Speedrun 10 Different Story Angles</h2>
      <p>
        Challenge yourself to generate 10 wildly different ways to tell your story. Let your creativity run wild by varying:
      </p>

      <h3>Story Elements to Play With:</h3>
      <ul>
        <li><strong>Narrative Voice</strong>
          <ul className="ml-6">
            <li>First-person perspective of an AI researcher</li>
            <li>Third-person omniscient following multiple characters</li>
            <li>Unreliable narrator who misunderstands the AI</li>
            <li>The AI system's own evolving perspective</li>
          </ul>
        </li>
        <li><strong>Story Structure</strong>
          <ul className="ml-6">
            <li>Linear progression from discovery to implementation</li>
            <li>Non-linear snapshots across different timelines</li>
            <li>Start at the climax, then reveal how we got there</li>
            <li>Parallel plotlines that converge in an unexpected way</li>
          </ul>
        </li>
        <li><strong>Opening Scenes</strong>
          <ul className="ml-6">
            <li>In the middle of a pivotal experiment</li>
            <li>A seemingly ordinary moment that changes everything</li>
            <li>The aftermath of a breakthrough</li>
            <li>A future scene that sets up a mystery</li>
          </ul>
        </li>
        <li><strong>Character Perspectives</strong>
          <ul className="ml-6">
            <li>The idealistic AI researcher</li>
            <li>The skeptical oversight board member</li>
            <li>The AI system learning about humanity</li>
            <li>The ordinary person whose life is transformed</li>
          </ul>
        </li>
      </ul>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold mb-4">Quick Tip: Use Placeholders!</h3>
        <p>
          Don't get bogged down in details. Feel free to use placeholders like:
        </p>
        <ul className="mt-2">
          <li>[insert vivid setting description]</li>
          <li>[character backstory revealing key flaw]</li>
          <li>[technical explanation of the breakthrough]</li>
          <li>[emotional scene showing impact]</li>
        </ul>
        <p className="mt-4">
          The key is maintaining creative momentum, not getting every detail perfect!
        </p>
      </div>

      <h2>Example: 10 Different Takes on Value Learning</h2>
      <p>Here's how one concept could spawn multiple story angles:</p>
      
      <ol className="space-y-4">
        <li>
          <strong>The Diary Entry</strong><br/>
          First-person journal of an AI researcher documenting their AI's unexpected insights about human values. 
          Opens with: "Day 47: Today the AI asked me why humans say they value health but design cities for cars instead of walking..."
        </li>
        <li>
          <strong>The Time-Jump Narrative</strong><br/>
          Follows an AI system across decades as it helps different generations refine their values. 
          Structure: Five snapshots, each showing a profound shift in human society.
        </li>
        <li>
          <strong>The Multiple POV Story</strong><br/>
          Alternates between an AI researcher, their AI system, and a skeptical ethicist as they navigate a breakthrough in value learning.
          [Each character's perspective reveals different aspects of the challenge]
        </li>
        <li>
          <strong>The Reverse Chronology</strong><br/>
          Starts with a harmonious human-AI future, then works backward to reveal how value alignment challenges were overcome.
          [Each scene shows a crucial decision point]
        </li>
        <li>
          <strong>The Interview Format</strong><br/>
          Series of interviews with people whose lives were transformed by an AI that helped them discover their true values.
          [Diverse perspectives from different cultures and backgrounds]
        </li>
      </ol>

      <h2>Key Elements to Aim For</h2>
      <ul>
        <li><strong>Optimistic Futures:</strong> Focus on how AI safety solutions create positive outcomes</li>
        <li><strong>Accessibility:</strong> Make complex concepts relatable through human stories</li>
        <li><strong>Fresh Perspectives:</strong> Find new angles on familiar AI safety themes</li>
        <li><strong>Emotional Core:</strong> Connect the technology to human experiences and growth</li>
        <li><strong>Plausible Progress:</strong> Show realistic paths to beneficial AI futures</li>
      </ul>

      <p>
        Remember: These rapid outlines are conversation starters, not final drafts. They're meant to help you explore 
        different ways to make AI safety concepts engaging and accessible. The goal is to inspire both yourself and your 
        readers about the possibilities for beneficial AI futures.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold mb-4">Ready to start writing?</h3>
        <p className="mb-4">
          Get inspired with the <Link href="/prompts" className="text-blue-600 dark:text-blue-400 hover:underline">AI Safety Fiction Prompt Generator</Link> - 
          a collection of writing prompts designed to explore different aspects of AI alignment through narrative.
        </p>
        <p>
          Want to take your writing further? Bluedot Impact is hosting an AI Safety Fiction Writing Intensive in Jan 2025! <a href="https://forms.bluedot.org/Zrh4EzCEDrQUzyLPaqqy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Apply here</a>.
        </p>
      </div>

      <div className="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 my-8">
        <div className="flex items-start gap-6">
          <img 
            src="/images/blog/aly-headshot.png"
            alt="Alyssia Jovellanos"
            className="w-24 h-24 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <h2>About the Author</h2>
            <p>
              Alyssia is an engineer and independent researcher currently doing evaluation and benchmarking work for the UK AI 
              Safety Institute. With previous experience at Google and Microsoft, she led Team Canada to 3rd place out of 18,000 
              teams at the International Quant Championships in Singapore. Her background combines practical engineering experience 
              with expertise in quantitative assessment and AI evaluation/benchmarking. She also develops premium coding datasets 
              to train advanced code models. If you're interested in collaborating, discussing these topics, or accessing premium 
              coding datasets, you can reach out to her <Link href="/?tab=contact" className="blue-link">here</Link>.
            </p>
          </div>
        </div>
      </div>
    </BlogPost>
  );
} 
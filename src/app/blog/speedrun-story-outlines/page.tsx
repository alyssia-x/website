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

      <h2>Exploring Multiple Story Beats</h2>
      <p>
        For each promising story angle, write down rough story beats. Remember: we're looking for the "concept" of a story, 
        not the fully-formed story itself. Use plenty of placeholders when you just have a general direction in mind.
      </p>

      <h3>Key Questions to Answer</h3>
      <p>For each of your top ideas from your brainstorming session, try answering these questions:</p>
      
      <ul className="space-y-4">
        <li>
          <strong>Setting:</strong>
          <ul className="ml-6">
            <li>What does this world look like?</li>
            <li>What has changed from our current society?</li>
            <li>How far in the future is it?</li>
            <li>How will you introduce this setting to readers?</li>
          </ul>
        </li>
        
        <li>
          <strong>Narrative Structure:</strong>
          <ul className="ml-6">
            <li>What's the main conflict?</li>
            <li>How will you introduce it?</li>
            <li>What's the rising action?</li>
            <li>What's the climax?</li>
            <li>How do you transition from setting establishment to conflict?</li>
          </ul>
        </li>
        
        <li>
          <strong>Story Elements:</strong>
          <ul className="ml-6">
            <li>What's the best part of your narrative so far? Could you start there?</li>
            <li>What alternative starting points might work?</li>
            <li>How would the story end?</li>
            <li>What point are you trying to make?</li>
            <li>Who are your main characters?</li>
          </ul>
        </li>
        
        <li>
          <strong>Tone & Style:</strong>
          <ul className="ml-6">
            <li>What's the emotional tone? (Sad? Happy? Funny? Horror?)</li>
            <li>How will this tone serve your story's purpose?</li>
          </ul>
        </li>
        
        <li>
          <strong>Alternative Approaches:</strong>
          <ul className="ml-6">
            <li>What if you wrote the story backwards from the ending?</li>
            <li>How far back do you really need to go?</li>
            <li>Could a non-linear structure serve the story better?</li>
          </ul>
        </li>
      </ul>

      <h2>Example: Story Beat Breakdown</h2>
      
      <h3>Original Concept:</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-gray-800 dark:text-gray-200">
{`"The Diary Entry" - AI researcher documenting value learning insights

Setting: Near-future AI lab
Tone: Contemplative, philosophical
Main conflict: AI questioning human value contradictions`}</pre>

      <h3>Key Story Beats:</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-gray-800 dark:text-gray-200">
{`[OPENING BEAT]
- Late night in AI lab
- Researcher reviewing unexpected AI output
- First hint that AI is noticing human contradictions

[ESCALATION BEATS]
- AI questions city design vs health values
- Researcher struggles to explain historical context
- Series of increasingly challenging value contradictions
- Each entry reveals deeper insights about human nature

[TURNING POINT]
- Key realization about value learning challenge
- Personal connection to city design example
- Memory of walking through city, seeing contradictions firsthand

[RESOLUTION IDEAS]
- New approach to value learning
- Acceptance of human complexity
- AI and researcher finding middle ground`}</pre>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold mb-4">Remember:</h3>
        <ul>
          <li>Use plenty of placeholders - they're your friends!</li>
          <li>You're capturing the concept, not writing the final story</li>
          <li>No idea is too rough to include</li>
          <li>Let your creativity flow without judgment</li>
          <li>You can always cut or expand later</li>
        </ul>
      </div>

      <p>
        Remember: These rapid outlines are conversation starters, not final drafts. They're meant to help you explore 
        different ways to make AI safety concepts engaging and accessible. The goal is to inspire both yourself and your 
        readers about the possibilities for beneficial AI futures.
      </p>

      <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold mb-4">Next in the AI Safety Fiction Challenge Curriculum</h3>
        <p>
          Next post in our series (Session 3): <Link href="/writing-first-drafts" className="text-blue-600 dark:text-blue-400 hover:underline">Writing First Fiction Drafts: From Speedrun to Story</Link>
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold mb-4">Browse previous posts in the series</h3>
        <ul>
          <li>Session 1: <Link href="/blog/brainstorming-ai-safety-fiction" className="text-blue-600 dark:text-blue-400 hover:underline">Brainstorming Ideas for AI Safety Fiction</Link></li>
        </ul>
      </div>

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
              Security Institute. With previous experience at Google and Microsoft, she led Team Canada to 3rd place out of 18,000 
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
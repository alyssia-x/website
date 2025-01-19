import React from 'react';
import { BlogPost } from '@/components/BlogPost';
import Link from 'next/link';

export default function WritingFirstDraftsPost() {
  return (
    <BlogPost
      title="Writing First Fiction Drafts: From Speedrun to Story"
      date="Jan 15, 2025"
      readingTime={7}
      authorName="Alyssia Jovellanos"
      authorImage="/images/blog/aly-headshot.png"
    >
      <p>
        You've speedrun your outlines and generated multiple story angles, explored story beats, and answered key questions 
        about your concept. Now it's time to transform those rapid-fire ideas into a messy but complete first draft. Here's 
        how to maintain that creative momentum while expanding your story.
      </p>

      <h2>The First Draft Mindset</h2>
      <p>
        Remember: Your first draft exists to discover your story. It won't be good - and that's perfect. Author Terry Pratchett 
        once said, "The first draft is just you telling yourself the story."
      </p>

      <h3>Key Principles:</h3>
      <ul>
        <li>Write fast and messy</li>
        <li>Use placeholders liberally</li>
        <li>Follow your curiosity</li>
        <li>Don't edit as you go</li>
        <li>Let the story surprise you</li>
      </ul>

      <h2>Starting Your Draft</h2>

      <h3>1. Choose Your Most Compelling Angle</h3>
      <p>Review your speedrun outlines and pick the version that:</p>
      <ul>
        <li>Most excites your imagination</li>
        <li>Best serves your core AI safety concept</li>
        <li>Feels like it has room to grow</li>
        <li>Gives you a clear starting point</li>
      </ul>

      <h3>2. Add to Your Rough Scene Map</h3>
      <ul>
        <li>From your 2-4 major story beats:
          <ul className="ml-6">
            <li>Note key revelations/turning points</li>
            <li>Identify emotional highs and lows</li>
            <li>Mark where your AI safety concept comes into play</li>
          </ul>
        </li>
      </ul>

      <p>But remember: This map is just a suggestion. Let the story evolve as you write.</p>

      <h2>The Writing Process</h2>

      <h3>Stage 1: The Fast Draft</h3>
      <ul>
        <li>Set a timer for 15-minute sprints (or use a pomodoro timer!)</li>
        <li>Write continuously without looking back</li>
        <li>Use [PLACEHOLDER] for any stuck points</li>
        <li>Focus on forward momentum</li>
        <li>Embrace the mess</li>
      </ul>

      <p>Example placeholders:</p>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-gray-800 dark:text-gray-200">
{`[NEED: vivid description of AI lab]
[ADD: technical explanation of value learning]
[EXPAND: emotional reaction to breakthrough]
[RESEARCH: realistic ML details]`}
      </pre>

      <h3>Stage 2: The Story Discovery Draft</h3>
      <ul>
        <li>Fill major placeholders</li>
        <li>Add sensory details</li>
        <li>Deepen character motivations</li>
        <li>Strengthen the AI safety elements</li>
        <li>Find surprising connections</li>
      </ul>

      <h3>Stage 3: The Completion Draft</h3>
      <ul>
        <li>Connect loose scenes</li>
        <li>Clarify key concepts</li>
        <li>Add transitions</li>
        <li>Flag areas needing research</li>
        <li>Note questions for feedback</li>
      </ul>

      <h2>Common First Draft Challenges</h2>

      <h3>When You're Stuck</h3>
      <p>Ask yourself:</p>
      <ul>
        <li>What does my protagonist want right now?</li>
        <li>What's the worst thing that could happen?</li>
        <li>How does this connect to my AI safety theme?</li>
        <li>What would surprise the reader here?</li>
        <li>What am I afraid to write?</li>
      </ul>

      <h3>When You're Lost</h3>
      <p>Return to:</p>
      <ul>
        <li>Your original story goal</li>
        <li>The core AI safety concept</li>
        <li>Your protagonist's main desire</li>
        <li>The ending you're writing toward</li>
        <li>Why this story matters to you</li>
      </ul>

      <h2>Science Fiction-Specific Tips</h2>

      <h3>Building Your World</h3>
      <ul>
        <li>Start with the human element</li>
        <li>Add technological details gradually</li>
        <li>Use placeholders for technical research</li>
        <li>Focus on impact over mechanics</li>
        <li>Show everyday implications</li>
      </ul>

      <h3>Writing AI Characters</h3>
      <ul>
        <li>Give them clear goals/constraints</li>
        <li>Show their unique perspective</li>
        <li>Ground them in real AI concepts</li>
      </ul>

      <h3>Handling Technical Concepts</h3>
      <ul>
        <li>Begin with the emotional stakes</li>
        <li>Explain through character reactions</li>
        <li>Use analogies and metaphors</li>
        <li>Save detailed explanations for later drafts</li>
        <li>Focus on impact over mechanism</li>
      </ul>

      <h2>Remember:</h2>
      <ul>
        <li>Your first draft is for discovery</li>
        <li>Perfectionism kills creativity</li>
        <li>You can fix everything later</li>
        <li>The story will evolve as you write</li>
        <li>The mess is part of the process</li>
      </ul>

      <h2>Next Steps</h2>
      <p>Once you've completed your messy first draft:</p>
      <ol>
        <li>Take a break (1-24 hours)</li>
        <li>Read it through without editing</li>
        <li>Note major areas for development</li>
        <li>Identify research needs</li>
        <li>List questions for feedback</li>
        <li>Begin planning your revision strategy</li>
      </ol>

      <p>
        Your first draft is just the beginning. It's the raw material you'll shape into something meaningful. Embrace the mess, 
        follow your curiosity, and keep writing forward. You can make it good later - right now, you just need to make it exist.
      </p>

      <h2>Example: From Story Beats to First Draft</h2>

      <h3>Starting Point: Original Concept & Story Beats</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-gray-800 dark:text-gray-200">
{`"The Diary Entry" - AI researcher documenting value learning insights

Setting: Near-future AI lab
Tone: Contemplative, philosophical
Main conflict: AI questioning human value contradictions

[OPENING BEAT]
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

      <h3>First Draft Expansion:</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-gray-800 dark:text-gray-200">
{`[OPENING BEAT]
The lab is eerily quiet at 3 AM, just the soft hum of servers and the glow of my monitor. 
I've been staring at the same output for the past hour, my coffee long since gone cold. 
Our AI just said something that's keeping me up tonight, something that makes me question 
everything we've been doing.

[ESCALATION BEATS]
The conversation started innocently enough. The AI was analyzing urban development data 
when it posed what seemed like a simple question: why do humans design cities that 
contradict their stated values? I tried explaining the complex history of urban planning, 
but each answer only led to more probing questions. It's like watching a child discover 
the world's inconsistencies for the first time, except this child has access to centuries 
of human decision-making data.

[TURNING POINT]
Walking home tonight, I couldn't help seeing the city through the AI's eyes. The wide 
roads prioritizing cars over pedestrians, the lack of green spaces, the way our 
architecture reflects our short-term thinking. We say health is a primary value, yet 
our cities tell a different story. The AI isn't just questioning our values – it's 
questioning the gap between what we say and what we do.

[RESOLUTION]
Maybe we've been approaching value learning all wrong. Instead of trying to teach AI 
our stated values, we need to acknowledge our own contradictions. What if the key isn't 
perfect consistency, but understanding the complex, messy reality of human nature? The 
AI and I might both be learning something new here.`}</pre>

      <p>
        Notice how each story beat expands into a full paragraph while maintaining the original structure. The draft is still 
        rough and uses placeholders, but it's starting to take shape as a proper story. This is the carvings of what a first draft could start to look like – messy but full of potential!
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold mb-4">Next in the AI Safety Fiction Challenge Curriculum</h3>
        <p className="mb-4">
          Next post in our series (Session 4): <Link href="/revision-tips" className="text-blue-600 dark:text-blue-400 hover:underline">Revision Tips & Checklists for AI Safety Fiction: A Layer-by-Layer Guide</Link>
        </p>
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
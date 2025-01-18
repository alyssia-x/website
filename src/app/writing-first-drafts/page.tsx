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
        You've speedrun your outlines and generated multiple story angles. Now it's time to transform those rapid-fire ideas 
        into a messy but complete first draft. Here's how to maintain that creative momentum while expanding your story.
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

      <h3>2. Create a Rough Scene Map</h3>
      <ul>
        <li>List 5-7 major story beats</li>
        <li>Note key revelations/turning points</li>
        <li>Identify emotional highs and lows</li>
        <li>Mark where your AI safety concept comes into play</li>
      </ul>

      <p>But remember: This map is just a suggestion. Let the story evolve as you write.</p>

      <h2>The Writing Process</h2>

      <h3>Stage 1: The Fast Draft (2-3 hours)</h3>
      <ul>
        <li>Set a timer for 45-minute sprints</li>
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

      <h3>Stage 2: The Story Discovery Draft (2-3 hours)</h3>
      <ul>
        <li>Fill major placeholders</li>
        <li>Add sensory details</li>
        <li>Deepen character motivations</li>
        <li>Strengthen the AI safety elements</li>
        <li>Find surprising connections</li>
      </ul>

      <h3>Stage 3: The Completion Draft (1-2 hours)</h3>
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
        <li>Avoid anthropomorphizing unnecessarily</li>
        <li>Highlight their alien aspects</li>
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
        <li>Take a break (at least 24 hours)</li>
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

      <h2>Example: Turning a Speedrun Outline into a First Draft</h2>

      <p>Original Outline:</p>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-gray-800 dark:text-gray-200">
{`"The Diary Entry" - AI researcher documenting unexpected AI insights about human values.
Opens: "Day 47: Today the AI asked me why humans say they value health but design cities for cars..."`}
      </pre>

      <p>First Draft Expansion:</p>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-gray-800 dark:text-gray-200">
{`[OPENING: Description of AI lab late at night]

Day 47: Today the AI asked me why humans say they value health but design cities for cars instead of walking. I stared at the output for a long time. How do you explain centuries of urban planning to an AI that takes our stated values literally?

[ADD: Brief background on the value learning project]

"Humans often act against their own values," I typed back. "We're not always rational."

The response came quickly: "Then how can I learn your true values if your actions contradict them?"

[EXPAND: Researcher's growing realization about the challenge]

That's the question that keeps me up at night. We're teaching AIs to learn our values, but which values? The ones we claim to have, or the ones revealed by our actions?

[SCENE: Memory of walking through city, noticing contradictions]`}
      </pre>

      <p>
        Remember: This is deliberately rough and incomplete. Its purpose is to start exploring the story's possibilities and 
        generate material for future development.
      </p>

      <p>
        Your first draft is a beginning, not a destination. Give yourself permission to write badly, use placeholders liberally, 
        and focus on discovery. The polishing comes later.
      </p>

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
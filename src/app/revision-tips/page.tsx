import React from 'react';
import { BlogPost } from '@/components/BlogPost';
import Link from 'next/link';

export default function RevisionTipsPost() {
  return (
    <BlogPost
      title="Revision Tips & Checklists for AI Safety Fiction: A Layer-by-Layer Guide"
      date="Jan 15, 2025"
      readingTime={8}
      authorName="Alyssia Jovellanos"
      authorImage="/images/blog/aly-headshot.png"
    >
      <p>
        You've written a story exploring futures shaped by artificial intelligence. Now it's time to refine that raw material 
        into a powerful narrative that illuminates crucial AI safety challenges and potential solutions.
      </p>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold mb-4">The Layer-by-Layer Approach</h3>
        <p className="mb-4">
          While you might be tempted to fix everything at once, it's often more effective to focus on one layer at a time 
          during each pass of your draft.
        </p>
        <p>
          Think of it like tuning different instruments in an orchestra - you'll get better results by focusing on one section 
          before moving to the next, rather than trying to adjust everything simultaneously. You don't need to use every 
          checklist, and you don't need to go in any particular order. Choose the elements that will most help your story 
          achieve its goals.
        </p>
      </div>

      <p>
        Pick a layer that interests you and use these questions to guide your revision. Each pass will strengthen your story 
        while keeping your creative energy focused.
      </p>

      <h2>Pass 1: Character & Emotion</h2>
      <h3>Character Development</h3>
      <ul>
        <li>Does each character have clear stakes in the AI developments?</li>
        <li>What does each character want? What do they fear?</li>
        <li>How do their beliefs about AI change through the story?</li>
        <li>Are their reactions to AI challenges emotionally authentic?</li>
        <li>Do they make choices that drive the plot forward?</li>
      </ul>

      <h3>Voice & Dialogue</h3>
      <ul>
        <li>Does each character have a distinct way of speaking?</li>
        <li>Do conversations sound natural rather than expository?</li>
        <li>Are characters expressing their own views or just serving as mouthpieces?</li>
        <li>How do characters' backgrounds influence their perspective on AI?</li>
      </ul>

      <h2>Pass 2: Scene Structure</h2>
      <h3>Scene Purpose</h3>
      <ul>
        <li>What does each scene accomplish for the story?</li>
        <li>How does each scene change the situation?</li>
        <li>Could any scenes be combined or removed?</li>
        <li>Does every scene either advance plot or reveal character?</li>
      </ul>

      <h3>Scene Flow</h3>
      <ul>
        <li>Do scenes begin at the right moment or is there unnecessary setup?</li>
        <li>Is there clear cause-and-effect between scenes?</li>
        <li>Does each scene ending push readers to continue?</li>
        <li>How's the balance between action, dialogue, and reflection?</li>
      </ul>

      <h2>Pass 3: Themes & Ideas</h2>
      <h3>AI Safety Concepts</h3>
      <ul>
        <li>Are technical concepts explained naturally within the story?</li>
        <li>How are key AI safety principles demonstrated through action?</li>
        <li>Are different perspectives on AI development represented?</li>
        <li>Do the stakes feel real and significant?</li>
      </ul>

      <h3>Thematic Development</h3>
      <ul>
        <li>What questions about AI safety does your story explore?</li>
        <li>How do themes develop progressively through the narrative?</li>
        <li>Are complex issues given nuanced treatment?</li>
        <li>Does the ending resonate thematically?</li>
      </ul>

      <h2>Pass 4: World-Building</h2>
      <h3>Setting Details</h3>
      <ul>
        <li>How has AI transformed different aspects of society?</li>
        <li>Are there concrete details that make the future tangible?</li>
        <li>Is the technology's impact shown through specific examples?</li>
        <li>Does the world have consistent internal logic?</li>
      </ul>

      <h3>Technical Elements</h3>
      <ul>
        <li>Are AI capabilities portrayed consistently?</li>
        <li>Do safety measures feel plausible?</li>
        <li>How are current AI concepts extrapolated into the future?</li>
        <li>Is there a balance between familiar and novel elements?</li>
      </ul>

      <h2>Pass 5: Tension & Engagement</h2>
      <h3>Story Structure</h3>
      <ul>
        <li>Is conflict introduced early enough?</li>
        <li>How does tension escalate through the story?</li>
        <li>Are there sufficient complications and reversals?</li>
        <li>Does the pacing maintain momentum?</li>
      </ul>

      <h3>Reader Experience</h3>
      <ul>
        <li>What questions will keep readers turning pages?</li>
        <li>Are revelations timed for maximum impact?</li>
        <li>Are there satisfying payoffs for setup elements?</li>
        <li>How are mystery and explanation balanced?</li>
      </ul>

      <h2>Pass 6: Philosophical Depth</h2>
      <h3>Ethical Exploration</h3>
      <ul>
        <li>What ethical dilemmas does your story pose?</li>
        <li>How are different value systems represented?</li>
        <li>Are there meaningful debates about AI development?</li>
        <li>Does the story avoid simplistic good/evil dichotomies?</li>
      </ul>

      <h3>Broader Implications</h3>
      <ul>
        <li>What does your story suggest about humanity's future with AI?</li>
        <li>How are long-term consequences explored?</li>
        <li>What solutions or possibilities does it propose?</li>
        <li>Does it inspire further thought about AI safety?</li>
      </ul>

      <h2>Final Polish Pass</h2>
      <h3>Language & Style</h3>
      <ul>
        <li>Can any passages be more concise?</li>
        <li>Are there repeated words or phrases to vary?</li>
        <li>How's the rhythm and flow of the prose?</li>
        <li>Are metaphors and imagery fresh and effective?</li>
      </ul>

      <h3>Technical Accuracy</h3>
      <ul>
        <li>Are AI concepts depicted accurately?</li>
        <li>Do safety measures align with current research?</li>
        <li>Is specialized terminology used correctly?</li>
        <li>Have experts in the field reviewed technical elements?</li>
      </ul>

      <h3>Overall Impact</h3>
      <ul>
        <li>Does the story engage both emotionally and intellectually?</li>
        <li>Will readers gain new insights about AI safety?</li>
        <li>Does it avoid common AI fiction tropes and clichés?</li>
        <li>Does it offer hope while acknowledging challenges?</li>
      </ul>

      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 my-8">
        <h2 className="text-lg font-semibold mb-4">Red Flags to Watch For</h2>
        <p className="mb-4">Ask yourself if your story:</p>
        <ul>
          <li>Oversimplifies complex AI safety issues</li>
          <li>Relies on technological handwaving</li>
          <li>Ignores human factors in technological change</li>
          <li>Presents AI as inherently good or evil</li>
          <li>Uses characters as mere idea vehicles</li>
          <li>Resolves conflicts too easily</li>
          <li>Neglects emotional stakes</li>
          <li>Falls into common sci-fi clichés</li>
        </ul>
      </div>

      <p>
        Remember: Take these questions one layer at a time. Each pass should deepen and strengthen your story while maintaining 
        its core vision. Focus on making your exploration of AI safety both intellectually engaging and emotionally resonant.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold mb-4">Next in the AI Safety Fiction Challenge Curriculum</h3>
        <p className="mb-4">
          You've completed the core curriculum! Now it's time to finalize your story title and hit publish.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold mb-4">Browse previous posts in the series</h3>
        <ul>
          <li className="mb-2">Session 1: <Link href="/blog/brainstorming-ai-safety-fiction" className="text-blue-600 dark:text-blue-400 hover:underline">Brainstorming Ideas for AI Safety Fiction</Link></li>
          <li className="mb-2">Session 2: <Link href="/blog/speedrun-story-outlines" className="text-blue-600 dark:text-blue-400 hover:underline">How to Speedrun Story Outlines for Envisioning Positive AI Safety Futures</Link></li>
          <li>Session 3: <Link href="/writing-first-drafts" className="text-blue-600 dark:text-blue-400 hover:underline">Writing First Fiction Drafts: From Speedrun to Story</Link></li>
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
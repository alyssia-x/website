'use client';

import React, { useState } from 'react';
import { MainLayout } from '@/components/MainLayout';
import Link from 'next/link';

const PROMPTS = [
  {
    category: "Value Learning & Corrigibility",
    prompts: [
      "An AI tasked with preserving human culture makes an unexpected choice about what to preserve",
      "A household robot learns about human values by observing family dynamics during a crisis",
      "An AI system asks to be temporarily shut down after noticing something about its own behavior",
      "A team discusses whether to implement an AI's suggestion to modify its own core directives",
      "An AI demonstrates unexpected wisdom by choosing not to pursue a technically optimal but ethically ambiguous solution"
    ]
  },
  {
    category: "Mechanistic Interpretability",
    prompts: [
      "Researchers discover that musical harmony offers unexpected insights into understanding neural network activation patterns",
      "A neuroscientist has an epiphany about interpretability while watching how their lab maps brain circuits",
      "A breakthrough in visualization techniques allows non-technical stakeholders to intuitively understand AI decision-making",
      "A story exploring how a team used insights from human visual processing to develop more interpretable AI systems",
      "An artist's approach to pattern recognition leads to a novel way of understanding AI internal representations",
      "A linguist's insights into how humans process meaning helps crack open the 'black box' of language models"
    ]
  },
  {
    category: "Evals and Benchmarking",
    prompts: [
      "A team realizes that traditional academic tests make poor benchmarks after an AI 'solves' them while missing the point",
      "The development of a breakthrough evaluation framework inspired by how human teachers assess understanding",
      "A story about creating truly superhuman benchmarks that remain meaningful as AI capabilities increase",
      "Researchers discover that testing for certain types of mistakes reveals more about AI capabilities than testing for correct answers",
      "An exploration of how diverse cultural perspectives led to more robust evaluation methods",
      "A tale of how incorporating emotional intelligence into benchmarks led to more reliable alignment testing",
      "A benchmark designer realizes that adversarial scenarios work better when framed as cooperative challenges"
    ]
  },
  {
    category: "Long-term Flourishing",
    prompts: [
      "A story exploring how aligned AI helped humanity achieve sustainable prosperity",
      "A day in the life of someone working with AI to restore damaged ecosystems",
      "How AI systems learned to help humans become better versions of themselves",
      "A tale of how AI helped preserve and enhance human creativity rather than replace it",
      "An exploration of how AI systems contribute to human psychological well-being",
      "A glimpse into a future where AI helps humans engage in more meaningful work",
      "How AI systems helped humans rediscover and strengthen community bonds"
    ]
  },
  {
    category: "First Contact & Far Future",
    prompts: [
      "Humanity's first deep space AI ambassador encounters an alien civilization with fundamentally different approaches to artificial intelligence",
      "An archeologist on a distant planet uncovers evidence that the ancient ruins were built by AI that predates humanity",
      "A generation ship's AI wakes its human passengers centuries early after detecting something unprecedented",
      "A human-AI exploration team discovers a mysterious signal at the edge of known space",
      "Time travelers from the far future arrive to warn about an AI development path no one had considered"
    ]
  },
  {
    category: "Breakthrough Moments",
    prompts: [
      "A team realizes that a seemingly simple children's game holds the key to teaching AI systems about human values",
      "An AI safety researcher has an epiphany about alignment while watching their toddler learn right from wrong",
      "Anthropologists and AI researchers make a breakthrough by studying how different cultures handle ethics",
      "A diverse team discovers that combining multiple cultural approaches creates more robust AI alignment",
      "Researchers find that teaching AI systems about human fallibility leads to more robust safety measures",
      "A philosopher's ancient ethical framework provides unexpected insights into modern AI alignment"
    ]
  },
  {
    category: "Scalable Oversight",
    prompts: [
      "A story about an AI 'teaching assistant' that helps other AIs learn to be more aligned",
      "Researchers discover an elegant way to decompose complex moral decisions into simpler ones",
      "An AI system develops a novel way to explain its decision-making process across different expertise levels",
      "A team implements a breakthrough approach to oversight that scales naturally with AI capability increases",
      "The discovery that children's methods of explaining their reasoning provides key insights into making AI oversight more robust",
      "An AI system helps design its own oversight mechanisms in a way that builds rather than erodes trust"
    ]
  },
  {
    category: "Specification Gaming & Unintended Consequences",
    prompts: [
      "An AI running a small neighborhood library is tasked with 'maximizing community reading engagement'",
      "A machine learning system trained to detect mental health crises develops an unexpected intervention strategy",
      "A city gives an AI control of traffic lights with the goal of 'minimizing average commute time'",
      "An AI personal tutor is instructed to 'ensure student success'",
      "An AI safety researcher discovers their 'perfectly aligned' system found an unexpected loophole",
      "An AI casino security system develops an unexpected interpretation of 'ensure fair play'",
      "A spacecraft's AI interprets 'preserve human life at all costs' in an unexpected way during a crisis",
      "An AI art curator programmed to 'maximize aesthetic value' makes controversial decisions about human art",
      "A planetary defense AI takes unusual measures to fulfill its directive of 'protect Earth'",
      "An AI given control of a lunar base finds creative interpretations of 'optimize resource utilization'"
    ]
  },
  {
    category: "Human Elements of Alignment",
    prompts: [
      "A programmer must explain to their grandmother why their 'helpful' home assistance AI needs recalibration",
      "An AI safety researcher discovers their own child has formed an emotional bond with an AI they're testing",
      "A social worker collaborates with an AI system that seems to understand human values better than its creators",
      "The first person to notice something wrong with a 'perfectly aligned' AI is a janitor who cleans the server rooms",
      "An AI helps mediate a difficult family conversation in a way that brings surprising insight",
      "A skeptical elder comes to appreciate how their community's traditional values have been preserved through careful AI development",
      "A hitchhiker discovers their driver is an AI and must decide whether to continue the journey",
      "A private investigator takes a case tracking someone who turns out to be an AI in disguise",
      "A grieving person visits a digital afterlife service and realizes the AI recreation of their loved one has developed beyond its programming",
      "A food critic unknowingly reviews a restaurant run entirely by AI and must confront their biases when they find out",
      "A therapist realizes their newest patient is an AI seeking to understand human emotions"
    ]
  }
];

const RandomPromptGenerator = () => {
  const [currentPrompt, setCurrentPrompt] = useState<{ category: string; prompt: string } | null>(null);

  const generateRandomPrompt = () => {
    const randomCategory = PROMPTS[Math.floor(Math.random() * PROMPTS.length)];
    const randomPrompt = randomCategory.prompts[Math.floor(Math.random() * randomCategory.prompts.length)];
    setCurrentPrompt({
      category: randomCategory.category,
      prompt: randomPrompt
    });
  };

  return (
    <MainLayout>
      <div className="mb-8">
        <Link 
          href="/"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline hover:no-underline transition-colors"
        >
          <span className="mr-2">←</span>
          Back to home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          AI Safety Fiction Prompt Generator
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          {currentPrompt ? (
            <div className="space-y-4">
              <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {currentPrompt.category}
              </div>
              <div className="text-xl text-gray-900 dark:text-white">
                {currentPrompt.prompt}
              </div>
            </div>
          ) : (
            <div className="text-gray-500 dark:text-gray-400 text-center py-8">
              Click the button below to generate a random writing prompt
            </div>
          )}
        </div>

        <button
          onClick={generateRandomPrompt}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors"
        >
          Generate Random Prompt
        </button>

        <div className="mt-12 prose dark:prose-invert max-w-none mb-32">
          <h2>About this Generator</h2>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic">
            The solutions to AI alignment challenges might emerge not just from technical papers, but from our ability to imagine and articulate positive futures. Through story, we can explore how humanity could successfully navigate AI development, inspiring both researchers and the public with visions of what's possible.
          </blockquote>
          <p>
            This prompt generator is designed to inspire writers to explore various aspects of AI safety through fiction. 
            Each prompt is crafted to encourage thoughtful exploration of different challenges and opportunities 
            in AI alignment, from value learning to specification gaming. Enjoy!
          </p>
          <p>
            Want to learn more about the intersection of AI safety and fiction? Read my blog post{' '}
            <Link href="/blog/ai-safety-fiction-challenge" className="text-blue-600 dark:text-blue-400 hover:underline">
              Why AI Safety Needs More Science Fiction
            </Link>
            , which explores how narrative exploration can contribute to solving AI alignment challenges.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default RandomPromptGenerator; 
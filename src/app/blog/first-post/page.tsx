'use client';

import React from 'react';
import { BlogPost } from '@/components/BlogPost';
import { Figure } from '@/components/Figure';

export default function FirstPost() {
  return (
    <BlogPost
      title="Beyond ARC: Reimagining Abstract Reasoning Benchmarks for the Next Generation of AI"
      date="Dec 24, 2024"
      readingTime={11}
    >
      <p>
        There's something deeply fascinating about watching AI models tackle abstract reasoning challenges. 
        As someone who spent years immersed in the world of quantitative aptitude and abstract reasoning tests—crafting, 
        solving, and analyzing them—I've observed with keen interest as benchmarks like ARC-AGI have become the latest 
        frontier in AI evaluation<sup>[1]</sup>. But as models like OpenAI's o3 achieve breakthrough performance levels 
        at record pace<sup>[2]</sup>, we must ask: where do we go from here?
      </p>

      <h2>A Brief History</h2>
      <p>
        In 2019, François Chollet created the Abstraction and Reasoning Corpus (ARC), a novel AI benchmark measuring 
        general intelligence through abstract visual pattern recognition<sup>[1]</sup>. Despite all major advancements 
        in AI through 2024, ARC remains undefeated by SOTA (state-of-the-art) models, with a $1M prize still unclaimed 
        as of writing<sup>[2]</sup>.
      </p>
      <p>
        Recently however, OpenAI's o3 scored a staggering 87.5% on this benchmark<sup>[3]</sup> - while simultaneously 
        scoring 87.7% on PhD-level GPQA questions and reaching the 99.7th percentile in competitive programming<sup>[3]</sup>.
      </p>

      <Figure 
        src="/images/blog/o3-performance-math.png"
        alt="Graph showing OpenAI's o-family model performance in competition math and PhD-level science questions"
        caption="Figure 1: OpenAI's o-family model performance in competition math and PhD-level science questions, showing exponential improvement over time"
      />

      <Figure 
        src="/images/blog/o3-performance-arc.png"
        alt="Graph showing OpenAI's o-family model performance on the ARC-AGI benchmark"
        caption="Figure 2: OpenAI's o-family model performance on the ARC-AGI benchmark, demonstrating rapid progress from 0% to 87.5% in less than a year"
      />

      <p>
        Contrast this to 2020, where GPT-3 scored 0% on the ARC-AGI benchmark<sup>[3]</sup>. Even in early 2024, 
        GPT-4o scored just 5%<sup>[3]</sup> and bumped up performance to a score of 50% by mid-year<sup>[5]</sup>.
      </p>
      <p>
        Waves of competing SOTA models have emerged to continue challenging these benchmarks, and the AI development 
        window continues to compress: the window for achieving 7th-grade-level performance spanned years, while reaching 
        PhD-level mastery required only months.
      </p>

      <h2>The Evolution of Abstract Reasoning Assessments and AI Capabilities</h2>
      <p>
        Abstract reasoning assessments have deep roots in cognitive testing, drawing inspiration from established tools 
        that measure problem-solving ability and critical thinking.
      </p>

      <Figure 
        src="/images/blog/arc-example.png"
        alt="Example of an ARC-AGI benchmark question"
        caption="Figure 3: An example of an ARC-AGI benchmark question, testing the model's ability to recognize and apply a pattern transformation: filling green-outlined shapes with yellow pixels"
      />

      <Figure 
        src="/images/blog/ccat-example.png"
        alt="Example of a CCAT-style spatial and abstract reasoning question"
        caption="Figure 4: 'Which of these shapes don't belong?' An example of a CCAT-style spatial and abstract reasoning question, testing a human's ability to identify patterns and outliers in geometric compositions and their various possible spatial relationships"
      />

      <p>
        The parallel development of CCAT (Criteria Cognitive Aptitude Test)-style questions and ARC represents two 
        distinct approaches to cognitive assessment. While CCAT was designed to differentiate human cognitive abilities 
        through a variety of multi-modal challenges, ARC took a different path - creating problems that are intuitive 
        for humans but challenging for AI systems<sup>[1]</sup>.
      </p>

      <p>
        CCAT-style questions are often used to screen candidates for quantitative roles, such as positions in 
        quantitative finance. It evaluates cognitive ability across multiple dimensions: numerical, verbal, logical, 
        spatial, and abstract reasoning<sup>[6]</sup>. The test consists of 50 questions to be completed in 15 minutes 
        (approximately 18 seconds per question)<sup>[6]</sup>. Unlike ARC, which is designed to be easily solvable by 
        humans, CCAT's abstract and spatial reasoning questions are intentionally designed to be moderately challenging 
        for human test-takers.
      </p>

      <Figure 
        src="/images/blog/ccat-distribution.png"
        alt="CCAT Score Distribution and Percentiles"
        caption="Figure 5: CCAT Score Distribution and Percentiles. Raw scores range from 24/50 (50th percentile) to 42/50 (97th percentile). The test serves as a screening threshold, with many companies requiring candidates to achieve specific percentile rankings for consideration"
      />

      <Figure 
        src="/images/blog/ccat-series.png"
        alt="CCAT-style spatial and abstract reasoning question showing a series of shapes"
        caption="Figure 6: 'Which shape comes next in the series?' CCAT-style spatial and abstract reasoning question demonstrating pattern recognition and sequence completion"
      />

      <p>
        What's particularly intriguing is how quickly advanced AI systems are mastering certain types of benchmarks, 
        while still struggling with seemingly simple reasoning tasks. For instance, in a 2023 study, GPT-4 was asked 
        about Mable, who died at 11pm but had vital signs recorded at 9am and 7pm. When questioned if she was alive 
        at noon, the AI responded that it was "impossible to definitively say" - despite this being trivial for 
        humans<sup>[7]</sup>:
      </p>

      <Figure 
        src="/images/blog/gpt4-reasoning.png"
        alt="Screenshot from GPT4 Can't Reason paper"
        caption="Figure 7: Excerpt from 'GPT4 Can't Reason' (Position Paper, 2023) showing the model's inability to make simple temporal inferences"
      />

      <Figure 
        src="/images/blog/arc-challenge.png"
        alt="Complex ARC-AGI benchmark task"
        caption="Figure 8: An example of an ARC-AGI benchmark task that challenges o3's performance, requiring multiple levels of pattern recognition and rule application"
      />

      <h2>The Progressive Development of AI Capabilities</h2>
      <p>
        Modern AI systems demonstrate a fascinating progression pattern in their capabilities<sup>[7]</sup>: rather than 
        exhibiting separate tracks for memorization and reasoning, they demonstrate a sequential learning progression.
      </p>

      <h3>Areas of Strength (Pattern Recognition & Memorization)</h3>
      <ul>
        <li>Professional domain knowledge (reaching 87.7% on PhD-level GPQA questions)</li>
        <li>Mathematical computation on familiar patterns</li>
        <li>Tasks with abundant training examples</li>
        <li>Problems that can be solved through pattern matching</li>
      </ul>

      <h3>Areas of Challenge (Novel Reasoning)</h3>
      <ul>
        <li>Tasks requiring program synthesis from first principles<sup>[8]</sup></li>
        <li>Problems with evolving or dynamic rules</li>
        <li>Scenarios demanding true causal understanding</li>
        <li>Transfer learning across drastically different contexts</li>
      </ul>

      <h2>The Three-Tier Challenge Framework</h2>
      <p>
        I propose we think about abstract reasoning benchmarks in three tiers of increasing sophistication:
      </p>

      <h3>1. Easy challenges for humans → Hard for AI (Current Benchmarks)</h3>
      <p>
        Where ARC-AGI sits today, though rapidly being mastered by advanced systems through sophisticated pattern 
        matching and compute-intensive approaches<sup>[3]</sup>. This represents very simple reasoning for humans.
      </p>

      <h3>2. Moderate challenges for humans → Hard for AI (CCAT-Inspired Benchmarks)</h3>
      <p>
        Parts of traditional quantitative aptitude tests that challenge both human experts and AI systems, requiring 
        sophisticated multi-modal reasoning.
      </p>

      <h3>3. Difficult / nearly impossible challenges for humans → Even Harder for AI</h3>
      <p>
        Problems designed to probe true reasoning, incorporating Chollet's insights about program synthesis and abstraction.
      </p>

      <h2>Why This Matters Now</h2>
      <p>
        The landscape of AI capabilities is evolving rapidly, as demonstrated by o3's breakthrough performance. However, 
        this progress also reveals the limitations of current approaches. As Chollet argues, we need to move beyond pure 
        pattern matching and toward systems that can combine "type 1" intuitive pattern recognition with "type 2" explicit 
        reasoning<sup>[10]</sup>.
      </p>

      <h2>The Next Evolution in AI Benchmarks</h2>
      <p>
        The future of AI evaluation lies not just in making problems harder, but in creating benchmarks that specifically 
        probe the boundary between pattern matching and true reasoning, and eventually, just true reasoning. As o3's 
        performance shows, we need tests that can distinguish between sophisticated pattern matching and genuine abstract 
        reasoning capability.
      </p>

      <hr className="my-8" />

      <h2>About the Author</h2>
      <p>
        Alyssia is an engineer and independent researcher currently doing evaluation and benchmarking work for the UK AI 
        Safety Institute. With previous experience at Google and Microsoft, she led Team Canada to 3rd place out of 18,000 
        teams at the International Quant Championships in Singapore. Her background combines practical engineering experience 
        with expertise in quantitative assessment and AI evaluation/benchmarking. She also develops premium coding datasets 
        to train advanced code models.
      </p>

      <h2>References</h2>
      <ol className="list-decimal list-inside">
        <li>Chollet, F. (2019). The Abstract Reasoning Corpus (ARC): A Novel Benchmark for General AI. arXiv:1911.01547.</li>
        <li>ARC Prize. (2024). https://arcprize.org/</li>
        <li>Chollet, F. (2024, December 20). OpenAI o3 Breakthrough High Score on ARC-AGI-Pub. ARC Prize Blog.</li>
        <li>OpenAI. (2024). "OpenAI o3 and o3-mini—12 Days of OpenAI: Day 12" [Video]. YouTube.</li>
        <li>Greenblatt, R. (2024, June 17). Getting 50% (SoTA) on ARC-AGI with GPT-4o. Redwood Research Blog.</li>
        <li>https://www.criteriacorp.com/candidates/ccat-prep</li>
        <li>Arkoudas, K. (2023). GPT-4 Can't Reason. arXiv:2308.03762.</li>
        <li>Chollet, F. (2024). It's Not About Scale, It's About Abstraction [Video].</li>
        <li>Chollet, F. [@fchollet]. (2024, December). [Tweet].</li>
        <li>Chollet, F. (2024). Pattern Recognition vs True Intelligence - Francois Chollet [Video].</li>
      </ol>
    </BlogPost>
  );
} 
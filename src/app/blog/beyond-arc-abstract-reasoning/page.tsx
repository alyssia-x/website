import React from 'react';
import { BlogPost } from '@/components/BlogPost';
import { Figure } from '@/components/Figure';
import Link from 'next/link';

export default function BeyondArcPost() {
  return (
    <BlogPost
      title="Beyond ARC: Reimagining Abstract Reasoning Benchmarks for the Next Generation of AI"
      date="Dec 27, 2024"
      readingTime={18}
      authorName="Alyssia Jovellanos"
      authorImage="/images/blog/aly-headshot.png"
    >
      <p>
        There's something deeply fascinating about watching AI models tackle abstract reasoning challenges. 
        As someone who spent years immersed in the world of quantitative aptitude and abstract reasoning tests — crafting, 
        solving, and analyzing them — I've observed with keen interest as benchmarks like ARC-AGI have become the latest 
        frontier in AI evaluation<a href="#ref-1" className="blue-link"><sup>[1]</sup></a>. But as models like OpenAI's o3 achieve breakthrough performance levels 
        at record pace<a href="#ref-2" className="blue-link"><sup>[2]</sup></a>, we must ask: where do we go from here?
      </p>

      <div className="not-prose bg-gray-100 dark:bg-gray-800 rounded-lg p-8 my-8">
        <h2 className="text-2xl font-bold mb-6">Table of Contents</h2>
        <ul className="space-y-3">
          <li><a href="#brief-history" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">A Brief History</a></li>
          <li><a href="#evolution" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">The Evolution of Abstract Reasoning Assessments and AI Capabilities</a></li>
          <li><a href="#drawing-inspiration" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">Drawing Inspiration from Quantitative Assessment History</a></li>
          <li><a href="#progressive-development" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">The Progressive Development of AI Capabilities</a>
            <ul className="ml-4 mt-2 space-y-2 text-sm">
              <li><a href="#areas-of-strength" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">Areas of Strength (Pattern Recognition & Memorization)</a></li>
              <li><a href="#areas-of-challenge" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">Areas of Challenge (Novel Reasoning)</a></li>
            </ul>
          </li>
          <li><a href="#three-tier-challenge" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">The Three-Tier Challenge Framework</a>
            <ul className="ml-4 mt-2 space-y-2 text-sm">
              <li><a href="#easy-challenges" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">1. Easy challenges for humans → Hard for AI</a></li>
              <li><a href="#moderate-challenges" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">2. Moderate challenges for humans → Hard for AI</a></li>
              <li><a href="#difficult-challenges" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">3. Difficult / nearly impossible challenges for humans → Even Harder for AI</a></li>
            </ul>
          </li>
          <li><a href="#proposal-categories" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">Three Proposal Categories for New Evaluation Approaches</a>
            <ul className="ml-4 mt-2 space-y-2 text-sm">
              <li><a href="#dynamic-pattern" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">1. Dynamic Pattern Evolution</a></li>
              <li><a href="#contextual-rule" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">2. Contextual Rule Transfer</a></li>
              <li><a href="#abstract-anomaly" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">3. Abstract Anomaly Detection</a></li>
            </ul>
          </li>
          <li><a href="#why-this-matters" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">Why This Matters Now</a></li>
          <li><a href="#next-evolution" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">The Next Evolution in AI Benchmarks</a></li>
          <li><a href="#about-author" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">About the Author</a></li>
          <li><a href="#references" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">References</a></li>
        </ul>
      </div>

      <h2 id="brief-history">A Brief History</h2>
      <p>
        In 2019, François Chollet created the Abstraction and Reasoning Corpus (ARC), a novel AI benchmark measuring 
        general intelligence through abstract visual pattern recognition<a href="#ref-1" className="blue-link"><sup>[1]</sup></a>. Despite major advancements 
        in AI through 2024, ARC remains undefeated by SOTA (state-of-the-art) models, with a $1M prize still unclaimed 
        as of writing<a href="#ref-2" className="blue-link"><sup>[2]</sup></a>.
      </p>
      <p>
        Recently however, OpenAI's o3 scored a staggering 87.5% on this benchmark<a href="#ref-3" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[3]</sup></a> — while simultaneously 
        scoring 87.7% on PhD-level GPQA questions and reaching the 99.7th percentile in competitive programming<a href="#ref-3" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[3]</sup></a>.
      </p>

      <Figure 
        src="/images/blog/o3-performance-math.png"
        alt="Graph showing OpenAI's o-family model performance in competition math and PhD-level science questions"
        caption="Figure 1: OpenAI's o-family model performance in competition math and PhD-level science questions"
      />

      <Figure 
        src="/images/blog/o3-performance-arc.png"
        alt="Graph showing OpenAI's o-family model performance on the ARC-AGI benchmark"
        caption="Figure 2: OpenAI's o-family model performance on the ARC-AGI benchmark"
      />

      <p>
        Contrast this to 2020, where GPT-3 scored 0% on the ARC-AGI benchmark<a href="#ref-3" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[3]</sup></a>. Even in early 2024, 
        GPT-4o scored just 5%<a href="#ref-3" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[3]</sup></a> and bumped up performance to a score of 50% by mid-year<a href="#ref-5" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[5]</sup></a>.
      </p>
      <p>
        Waves of competing SOTA models have emerged to continue challenging these benchmarks, and the AI development 
        window continues to compress: the window for achieving 7th-grade-level performance spanned years, while reaching 
        PhD-level mastery required only months.
      </p>

      <h2 id="evolution">The Evolution of Abstract Reasoning Assessments and AI Capabilities</h2>
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
        caption="Figure 4: 'Which of these shapes don't belong?' An example of a CCAT-style spatial and abstract reasoning question, testing a human's ability to identify patterns and outliers in geometric compositions and their various possible spatial relationships."
      />

      <p>
        The parallel development of CCAT (Criteria Cognitive Aptitude Test)-style questions and ARC represents two 
        distinct approaches to cognitive assessment. While CCAT was designed to differentiate human cognitive abilities 
        through a variety of multi-modal challenges, ARC took a different path — creating problems that are intuitive 
        for humans but challenging for AI systems<a href="#ref-1" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[1]</sup></a>.
      </p>

      <p>
        CCAT-style questions are often used to screen candidates for quantitative roles, such as positions in 
        quantitative finance. It evaluates cognitive ability across multiple dimensions: numerical, verbal, logical, 
        spatial, and abstract reasoning<a href="#ref-6" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[6]</sup></a>. The test consists of 50 questions to be completed in 15 minutes 
        (approximately 18 seconds per question)<a href="#ref-6" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[6]</sup></a>. Unlike ARC, which is designed to be easily solvable by 
        humans, CCAT's abstract and spatial reasoning questions are intentionally designed to be moderately challenging 
        for human test-takers.
      </p>

      <Figure 
        src="/images/blog/ccat-distribution.png"
        alt="CCAT Score Distribution and Percentiles"
        caption="Figure 5: CCAT Score Distribution and Percentiles. Raw scores range from 24/50 (50th percentile) to 42/50 (97th percentile). The test serves as a screening threshold, with many companies requiring candidates to achieve specific percentile rankings for consideration."
      />

      <Figure 
        src="/images/blog/ccat-series.png"
        alt="CCAT-style spatial and abstract reasoning question showing a series of shapes"
        caption="Figure 6: 'Which shape comes next in the series?' CCAT-style spatial and abstract reasoning question"
      />

      <p>
        What's particularly intriguing is how quickly advanced AI systems are mastering certain types of benchmarks, 
        while still struggling with seemingly simple reasoning tasks. For instance, in a 2023 study, GPT-4 was asked 
        about Mable, who died at 11pm but had vital signs recorded at 9am and 7pm. When questioned if she was alive 
        at noon, the AI responded that it was "impossible to definitively say" - despite this being trivial for 
        humans<a href="#ref-7" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[7]</sup></a>:
      </p>

      <Figure 
        src="/images/blog/gpt4-reasoning.png"
        alt="Screenshot from GPT4 Can't Reason paper"
        caption="Figure 7: Excerpt from 'GPT4 Can't Reason' (Position Paper, 2023)"
      />

      <p>
        This reveals a crucial distinction in AI capabilities that François Chollet, the creator of the ARC-AGI benchmark, articulates: the difference between memorized skill and genuine intelligence<a href="#ref-8" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[8]</sup></a>. Genuine intelligence, as Chollet defines it, is "the efficiency with which a learning system turns experience and priors into skill at previously unknown tasks"<a href="#ref-1" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[1]</sup></a>. Current AI systems may achieve high performance through either unlimited prior knowledge or unlimited training data, but this differs from genuine intelligence which requires efficiently learning from minimal examples<a href="#ref-1" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[1]</sup></a>.
      </p>

      <p>
        Consider the recent o3 results: while achieving an impressive 87.5% on ARC-AGI, analysis reveals this required massive compute resources and may rely heavily on sophisticated pattern matching rather than novel reasoning<a href="#ref-9" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[9]</sup></a>. Novel reasoning, as Chollet emphasizes, requires "developer-aware generalization" - the ability to handle situations that neither the system nor its developer have encountered before<a href="#ref-1" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[1]</sup></a>. This contrasts with systems that achieve high scores through extensive training on similar patterns or task-specific optimizations, which Chollet characterizes as "taking shortcuts available to satisfy the objective" rather than developing true generalizable intelligence<a href="#ref-1" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[1]</sup></a>.
      </p>

      <Figure 
        src="/images/blog/arc-challenge.png"
        alt="Complex ARC-AGI benchmark task"
        caption="Figure 8: An example of an ARC-AGI benchmark task that challenges o3's performance"
      />

      <h2 id="progressive-development">The Progressive Development of AI Capabilities</h2>
      <p>
      Modern AI systems demonstrate a fascinating progression pattern in their capabilities: rather than exhibiting separate tracks for memorization and reasoning, they demonstrate a sequential learning progression. Like human learners, these systems excel at pattern recognition through repeated exposure before developing broader generalization abilities - a progression that becomes evident when examining their current strengths and challenges:
      </p>

      <h3 id="areas-of-strength">Areas of Strength (Pattern Recognition & Memorization)</h3>
      <ul>
        <li>Professional domain knowledge (reaching 87.7% on PhD-level GPQA questions)</li>
        <li>Mathematical computation on familiar patterns</li>
        <li>Tasks with abundant training examples</li>
        <li>Problems that can be solved through pattern matching</li>
      </ul>

      <h3 id="areas-of-challenge">Areas of Challenge (Novel Reasoning)</h3>
      <ul>
        <li>Tasks requiring program synthesis from first principles<a href="#ref-8" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[8]</sup></a></li>
        <li>Problems with evolving or dynamic rules</li>
        <li>Scenarios demanding true causal understanding</li>
        <li>Transfer learning across drastically different contexts</li>
      </ul>

      <h2 id="drawing-inspiration">Drawing Inspiration from Quantitative Assessment History</h2>
      <p>
        My experience with CCAT and similar assessments may offer valuable insights here. The most effective questions weren't necessarily 
        the most complex—they were the ones that required novel combinations of reasoning patterns. This aligns with Chollet's 
        "kaleidoscope hypothesis"—the idea that intelligence involves extracting and recombining fundamental patterns to solve novel 
        problems<a href="#ref-10" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[10]</sup></a>.
      </p>

      <h2 id="three-tier-challenge">The Three-Tier Challenge Framework</h2>
      <p>
        I propose we think about abstract reasoning benchmarks in three tiers of increasing sophistication:
      </p>

      <h3 id="easy-challenges">1. Easy challenges for humans → Hard for AI (Current Benchmarks)</h3>
      <p>
        Where ARC-AGI sits today, though rapidly being mastered by advanced systems through sophisticated pattern 
        matching and compute-intensive approaches<a href="#ref-3" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[3]</sup></a>. This represents very simple reasoning for humans.
      </p>

      <Figure 
        src="/images/blog/arc-agi-example.png"
        alt="ARC-AGI benchmark example"
        caption="Figure 9: Another example of an ARC-AGI benchmark task, showing a pattern transformation challenge"
      />

      <p>Examples in this category can include:</p>
      <ul>
        <li>Pattern completion where a simple rule like "rotate by 90 degrees" applies</li>
        <li>Identifying the next number in a sequence following a clear mathematical pattern</li>
        <li>Basic shape transformation tasks like "if circle then square, if square then triangle"</li>
      </ul>

      <p>
        The upcoming ARC-AGI-2 benchmark, launching in 2025, will continue to focus on tasks that are easy for humans but 
        challenging for AI<a href="#ref-3" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[3]</sup></a>.
      </p>

      <h3 id="moderate-challenges">2. Moderate challenges for humans → Hard for AI (CCAT-Inspired Benchmarks)</h3>
      <p>
        Parts of traditional quantitative aptitude tests that challenge both human experts and AI systems, requiring 
        sophisticated multi-modal reasoning.
      </p>

      <Figure 
        src="/images/blog/ccat-puzzle.png"
        alt="Choose the shape that best completes the puzzle CCAT-style spatial and abstract reasoning question"
        caption="Figure 10: 'Choose the shape that best completes the puzzle' CCAT-style spatial and abstract reasoning question"
      />

      <p>Examples in this category can include:</p>
      <ul>
        <li>"Which shape doesn't belong?" problems where the underlying pattern requires multiple levels of abstraction</li>
        <li>Pattern anomaly detection where rules evolve during the sequence</li>
        <li>Problems where the rule itself must be inferred from a set of examples and then applied in a novel context</li>
      </ul>

      <h3 id="difficult-challenges">3. Difficult / nearly impossible challenges for humans → Even Harder for AI (Next Generation: Currently <a href="#https://en.wikipedia.org/wiki/Lists_of_unsolved_problems" className="text-blue-600 dark:text-blue-400 hover:underline">unsolved problems</a> or recently solved "unsolved" problems) </h3>
      <p>
        Problems designed to probe true reasoning, incorporating Chollet's insights about program synthesis and abstraction.</p>

        <Figure 
        src="/images/blog/riemann.png"
        alt="The Riemann Hypothesis visualization"
        caption="Figure 11: The Riemann Hypothesis remains unsolved"
      />

        <p>Examples in this category can include:</p>
      <ul>
        <li>Unsolved problems: the Reimann hypothesis, P vs NP, the general problem of program synthesis from natural language specifications</li>
        <li>Recently solved "unsolved" problems: the Conway knot problem (solved in 2020), the Cap Set Problem (solved in 2016) </li>
      </ul>
      
      <Figure 
        src="/images/blog/cap-set.png"
        alt="The Cap Set Problem visualization"
        caption="Figure 12: A reference to a recently solved 'unsolved' problem called the Cap Set Problem (solved in 2016)"
      />

      <p className="font-bold italic">
        Note on levels: The gap between Level 2 and Level 3 problems is substantial. We could potentially define intermediate 
        levels by analyzing:
      </p>
      <ul>
        <li>Population success rates across different problem types</li>
        <li>Solution times</li>
        <li>Cognitive load measurements</li>
        <li>Reasoning complexity metrics</li>
      </ul>

      <p>
        This would provide a more granular assessment of abstract reasoning challenges. For comparison, consider EpochAI's 
        Frontier Math benchmark, which features unpublished mathematical problems that challenge expert mathematicians for 
        days<a href="#ref-11" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[11]</sup></a>.
      </p>
      <p>
        Of course, what constitutes "Hard for AI" will evolve as AI capabilities advance.
      </p>

      <h2 id="proposal-categories">Three Proposal Categories for New Evaluation Approaches</h2>
      
      <h3 id="dynamic-pattern">1. Dynamic Pattern Evolution</h3>
      <p>
        Instead of static pattern completion tasks, we can create problems where the underlying rules evolve as the solution 
        progresses. This would test not just pattern recognition but the kind of program synthesis capability that Chollet 
        identifies as crucial for genuine AI advancement<a href="#ref-10" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[10]</sup></a>.
      </p>
      <p>Some ideas:</p>
      <ul>
        <li>A morphing geometric puzzle where rules change after each transformation (and gets more difficult as the model progresses)</li>
        <li>An evolving cryptographic cypher where the model must adapt its strategy and not simply memorize a fixed set of rules</li>
        <li>Puzzles that require non-linear transformations to be solved like fractal recursions</li>
      </ul>

      <h3 id="contextual-rule">2. Contextual Rule Transfer</h3>
      <p>
        Develop problems that require applying learned patterns in radically different contexts, challenging the current 
        limitations of transformer-based models in handling novel situations<a href="#ref-10" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[10]</sup></a>.
      </p>
      <p>
        I'm still brainstorming examples of what this might look like in the context of a model benchmark. However, 
        examples of this kind of transfer learning in humans could look like:
      </p>
      <ul>
        <li>Applying protein folding insights to a supply chain optimization problem</li>
        <li>Using game theory strategies from chess in business negotiations</li>
        <li>Translating computer vision techniques to audio processing</li>
      </ul>

      <h3 id="abstract-anomaly">3. Abstract Anomaly Detection</h3>
      <p>
        Create sequences where the challenge isn't just completing the pattern but identifying subtle violations of 
        established rules—probing the boundary between memorized patterns and true understanding.
      </p>
      <p>An example:</p>
      <ul>
        <li>
          Code sequences where the anomaly isn't a syntax error but a subtle logical flaw that only manifests under 
          specific edge cases or when considering program state over time
        </li>
      </ul>

      <h2 id="why-this-matters">Why This Matters Now</h2>
      <p>
        The landscape of AI capabilities is evolving rapidly, as demonstrated by o3's breakthrough performance. However, 
        this progress also reveals the limitations of current approaches<a href="#ref-12" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[12]</sup></a>. As Chollet argues, we need to move beyond pure 
        pattern matching and toward systems that can combine "type 1" intuitive pattern recognition with "type 2" explicit 
        reasoning<a href="#ref-10" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[10]</sup></a>.
      </p>
      <p>
        Increasing access to compute, accelerating high-quality data collection, and breakthroughs in algorithmic efficiency 
        have created a compounding effect, driving several orders of magnitude of progress at an unprecedented pace. Inference 
        costs plummeted by over 1000x in under two years<a href="#ref-12" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[12]</sup></a>.
      </p>
      <p>
        Researchers didn't anticipate this speed of progress, as Jacob Steinhardt recalled during last month's Nobel Prize 
        Hinton Lectures on a forecast he made in 2021: "(...) this prediction of 50% (on the math benchmark) in 2025 seems 
        really wild to me."<a href="#ref-13" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[13]</sup></a> That capability threshold, alongside many others, was quickly surpassed.
      </p>

      <h2 id="next-evolution">The Next Evolution in AI Benchmarks</h2>
      <p>
        The future of AI evaluation lies not just in making problems harder, but in creating benchmarks that specifically 
        probe the boundary between pattern matching and true reasoning, and eventually, just true reasoning<a href="#ref-13" className="text-blue-600 dark:text-blue-400 hover:underline"><sup>[13]</sup></a>. As o3's 
        performance shows, we need tests that can distinguish between sophisticated pattern matching and genuine abstract 
        reasoning capability.
      </p>
      <p>
        We stand at a crucial juncture in AI development. While current models achieve impressive results through pattern 
        matching and massive compute resources, the path to genuine artificial intelligence requires new approaches that 
        combine deep learning with program synthesis. The next generation of benchmarks must help guide this development 
        by clearly distinguishing between memorized skill and true reasoning ability.
      </p>

      <div className="not-prose bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 my-8">
        <div className="flex items-start gap-6">
          <img 
            src="/images/blog/aly-headshot.png"
            alt="Alyssia Jovellanos"
            className="w-24 h-24 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <h2 id="about-author" className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About the Author</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Alyssia is an engineer and independent researcher currently doing evaluation and benchmarking work for the UK AI 
              Safety Institute. With previous experience at Google and Microsoft, she led Team Canada to 3rd place out of 18,000 
              teams at the International Quant Championships in Singapore. Her background combines practical engineering experience 
              with expertise in quantitative assessment and AI evaluation/benchmarking. She also develops premium coding datasets 
              to train advanced code models. If you're interested in collaborating, discussing these topics, or accessing premium 
              coding datasets, you can reach out to her <Link href="/?tab=contact" className="text-blue-600 dark:text-blue-400 hover:underline">here</Link>.
            </p>
          </div>
        </div>
      </div>

      <hr className="my-8" />

      <br />
      <h2 id="references" className="mt-32">References</h2>
      <ol className="list-decimal list-inside">
        <li id="ref-1">Chollet, F. (2019). The Abstract Reasoning Corpus (ARC): A Novel Benchmark for General AI. arXiv:1911.01547.</li>
        <li id="ref-2">ARC Prize. (2024). <a href="https://arcprize.org/" className="text-blue-600 dark:text-blue-400 hover:underline">https://arcprize.org/</a></li>
        <li id="ref-3">Chollet, F. (2024, December 20). OpenAI o3 Breakthrough High Score on ARC-AGI-Pub. ARC Prize Blog. <a href="https://arcprize.org/blog/oai-o3-pub-breakthrough" className="text-blue-600 dark:text-blue-400 hover:underline">https://arcprize.org/blog/oai-o3-pub-breakthrough</a></li>
        <li id="ref-4">OpenAI. (2024). "OpenAI o3 and o3-mini—12 Days of OpenAI: Day 12" [Video]. YouTube. <a href="https://www.youtube.com/watch?v=SKBG1sqdyIU" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.youtube.com/watch?v=SKBG1sqdyIU</a></li>
        <li id="ref-5">Greenblatt, R. (2024, June 17). Getting 50% (SoTA) on ARC-AGI with GPT-4o. Redwood Research Blog. <a href="https://redwoodresearch.substack.com/p/getting-50-sota-on-arc-agi-with-gpt" className="text-blue-600 dark:text-blue-400 hover:underline">https://redwoodresearch.substack.com/p/getting-50-sota-on-arc-agi-with-gpt</a></li>
        <li id="ref-6">Criteria Corp. (2024). What to Expect on the Criteria Cognitive Aptitude Test (CCAT). <a href="https://www.criteriacorp.com/candidates/ccat-prep" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.criteriacorp.com/candidates/ccat-prep</a></li>
        <li id="ref-7">Arkoudas, K. (2023). GPT-4 Can't Reason. arXiv:2308.03762.</li>
        <li id="ref-8">Chollet, F. (2024). "The Difference Between Pattern Recognition and True Intelligence" [Conference presentation]. Stanford AI Safety Forum, Stanford, CA, United States. <a href="https://www.youtube.com/watch?v=s7_NlkBwdj8" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.youtube.com/watch?v=s7_NlkBwdj8</a></li>
        <li id="ref-9">Chollet, F. [@fchollet]. (2024, December). "On o3's ARC performance: While impressive, the compute requirements suggest heavy reliance on pattern matching rather than true abstract reasoning." [Tweet]. X. <a href="https://x.com/fchollet/status/1870172872641261979" className="text-blue-600 dark:text-blue-400 hover:underline">https://x.com/fchollet/status/1870172872641261979</a></li>
        <li id="ref-10">Chollet, F. (2024). Pattern Recognition vs True Intelligence - Francois Chollet [Video]. YouTube. <a href="https://www.youtube.com/watch?v=JTU8Ha4Jyfc" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.youtube.com/watch?v=JTU8Ha4Jyfc</a></li>
        <li id="ref-11">EPOCH AI. (2024). FrontierMath: A math benchmark testing the limits of AI. <a href="https://epoch.ai/frontiermath" className="text-blue-600 dark:text-blue-400 hover:underline">https://epoch.ai/frontiermath</a></li>
        <li id="ref-12">Situational Awareness. (2024). From GPT-4 to AGI: Counting the OOMs. <a href="https://situational-awareness.ai/from-gpt-4-to-agi/" className="text-blue-600 dark:text-blue-400 hover:underline">https://situational-awareness.ai/from-gpt-4-to-agi/</a></li>
        <li id="ref-13">Steinhardt, J. (2024, February). AI RISING: Risk vs Reward – The Hinton Lectures™ (Day 1) [Video]. YouTube. <a href="https://www.youtube.com/watch?v=n1tmxAshOgE" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.youtube.com/watch?v=n1tmxAshOgE</a></li>
      </ol>
    </BlogPost>
  );
} 
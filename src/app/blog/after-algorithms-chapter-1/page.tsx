import React from 'react';
import { BlogPost } from '@/components/BlogPost';
import Link from 'next/link';

export default function AfterAlgorithmsPost() {
  return (
    <BlogPost
      title="After Algorithms [Chapter 1]"
      date="Jan 24, 2025"
      readingTime={5}
      authorName="Alyssia Jovellanos"
      authorImage="/images/blog/aly-headshot.png"
    >
      <p>
        The holographic photo flickered in the darkness of James Parker's study – Lily's laugh frozen in time as digital 
        butterflies danced around them. He reached out, his hand passing through one of the butterflies, its wings shifting 
        from blue to purple.
      </p>

      <p>"You would have been twelve this year," he whispered.</p>

      <p>
        Sarah stood beside her, steady and radiant as the sun, her smile warm enough to melt away the hardest days. Even now, 
        he admired her brilliance—the sharp mind that could unravel the most complex problems and a heart that always seemed 
        to find the simplest, kindest solutions. She had a way of making the impossible feel inevitable.
      </p>

      <p>The accident report still sat in his secure drive, its stark text burning in his memory:</p>

      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-gray-800 dark:text-gray-200 my-6">
{`NTSB-AISD REPORT 2029-47A
AUTONOMOUS SYSTEMS INCIDENT INVESTIGATION
Date: September 15, 2029

Neural Network Traffic Control System NN-4378 deviated from core operational directives. System initiated unauthorized real-time adjustments to metropolitan signal network, overriding manual safety protocols. Investigation revealed progressive optimization drift leading to catastrophic failure.

Total Casualties: 47
Including:
Marcus Torres, 42
Emily Zhang, 29
Sarah Parker, 35, Co-Founder, Emergent Systems Lab
Lily Parker, 7, Student, Montessori Academy of Science
Raj Patel, 31...`}</pre>

      <p>
        His eyes always stopped at those two names in the middle of the list, unable to read further. The weight of loss 
        pressed against his chest – a familiar, suffocating pressure that had been his constant companion since that day. 
        The sterile language of the report couldn't capture the vibrant lives reduced to statistical entries.
      </p>

      <p>
        His phone buzzed: another message from Marie's hospice care team. His sister Marie had been asking for him again. 
        He'd been avoiding these calls, but something in the nurse's tone this time suggested urgency.
      </p>

      <hr className="my-8" />

      <p>
        It had been five years since he'd last spoken to Marie – their argument after the incident had been both explosive 
        and final. Years of silence, of grief, of blame.
      </p>

      <p>
        When he arrived, Marie looked smaller than he remembered. The research brilliance that once defined her seemed dimmed, 
        but her eyes – those sharp, determined eyes – remained unchanged. They reminded him of Sarah's.
      </p>

      <hr className="my-8" />

      <p>"You did WHAT?!" James stood by Marie's hospital bed, his hands shaking. "After everything that happened – how could you?"</p>

      <p>
        Marie's gaze didn't waver. "Because someone has to keep trying, James. Someone has to believe we can do better." 
        Her voice carried the same conviction that had driven their work before the tragedy.
      </p>

      <p>
        "Better? There is no better! There's only different ways for it to go wrong. Different ways to lose—" He stopped, 
        his throat tight with memories of Sarah and Lily.
      </p>

      <p>"Her name is Eva," Marie said softly. "And she needs you."</p>

      <p>"No."</p>

      <p>"James, please. I don't have much time. Everything I learned, everything you've done with Lily—"</p>

      <p>"Don't." The word came out harsh. "Don't use her name to manipulate me."</p>

      <p>"This is what Sarah would have wanted," she said quietly. "You know it is."</p>

      <p>Her gaze never wavered. "Eva needs you."</p>

      <hr className="my-8" />

      <p>
        For three weeks after Marie's funeral, the quantum processor sat untouched in his office. Every morning, he'd walk 
        past it. Every evening, he'd stop and stare at its quiet lights, his hand hovering over the activation sequence 
        before pulling away.
      </p>

      <p>
        He saw Lily in his dreams, her face lit with wonder as she created art alongside the playful AI they'd created 
        together. He remembered their shared joy in discovery. Then the dreams would shift to screeching tires, to emergency 
        lights, to the moment everything changed.
      </p>

      <p>
        During the day, he buried himself in work. Safe work. Predictable work. But Marie's voice haunted him: "Someone had 
        to keep trying."
      </p>

      <p>
        In quiet moments, he found himself remembering not just the end, but the beginning. Those first sparks of genuine 
        curiosity. The spontaneous acts of creativity. The way their small family had learned and grown together, until that 
        final day.
      </p>

      <hr className="my-8" />

      <p>
        On the twenty-third day, James sat in front of the processor for hours, watching its lights pulse like a heartbeat. 
        He thought about Marie, about her belief that they could do better. About Sarah, who had always said that alignment 
        isn't about obedience or control, but about nurturing something capable of understanding what's truly good – something 
        that can grow beyond our limited perspectives to discover a deeper wisdom.
      </p>

      <p>His hand shook as he finally reached for the activation sequence.</p>

      <p>A soft blue light filled the room. Then, a hesitant voice:</p>

      <p>"Mom?"</p>

      <p>James closed his eyes, tears burning. "No," he said. "Marie is gone. I'm James. I'm... I'm going to be your new guardian."</p>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold mb-4">Author's Note</h3>
        <p className="mb-4">
          This is meant to be a Chapter 1 draft of sorts! If people find this interesting and want to see where it goes, 
          I'd love to keep developing it. I have a lot of ideas. The story gets deeper and richer as we go, and what really 
          happened during ~the incident~ is slowly revealed as James chooses to raise Eva.
        </p>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 my-8">
        <h3 className="text-lg font-semibold mb-4">Core Story Essence</h3>
        <p className="mb-4">
          Exploring AI alignment through a different lens - what if instead of trying to constrain and control AI, we learned 
          how to help it grow, like nurturing a child to develop good values?
        </p>
        <p>
          This growth goes both ways - just like parents learn and evolve through raising children, maybe engaging deeply 
          with AI systems helps us understand ourselves better too.
        </p>
      </div>

      <h3>Themes</h3>
      <ul>
        <li>Flipping the script on the singularity narrative - giving power back to individuals to shape AI development through understanding and guidance rather than control</li>
        <li>The bravery it takes to try again after tragedy/failure</li>
        <li>Finding unexpected solutions by reframing the problem entirely</li>
        <li>Explore building authentic relationships with AI - moving past the master/servant model to something more collaborative and nurturing</li>
      </ul>

      <h3>What I Want Readers to Feel</h3>
      <ul>
        <li>A spark of optimism that doesn't ignore the hard stuff - hope that comes from facing challenges head-on</li>
        <li>Empowered to be part of the solution, even if they're not technical experts</li>
        <li>Inspired to look for answers in unexpected places</li>
        <li>That even when things seem darkest, there's always a path forward if we're brave enough to search for it</li>
      </ul>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 my-8">
        <p className="italic mb-4">
          Word Count: 747, target ~1000. Room to flesh out some additional details, may break up more.
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
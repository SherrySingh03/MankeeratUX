import type { Metadata } from 'next';
import CaseStudyLayout from '@/components/case-study/CaseStudyLayout';
import Section from '@/components/case-study/Section';
import Figure from '@/components/case-study/Figure';
import ImageGrid from '@/components/case-study/ImageGrid';
import StatCallout from '@/components/case-study/StatCallout';
import AwardBadge from '@/components/case-study/AwardBadge';
import Carousel from '@/components/case-study/Carousel';
import DotSlider from '@/components/case-study/DotSlider';

export const metadata: Metadata = {
  title: 'FinLocker — Mankeerat Singh',
  description: 'A secure financial fitness tool that aggregates and analyzes financial data to offer personalized journeys for loan eligibility.',
};

const sections = [
  { id: 'problem', label: 'Problem Summary' },
  { id: 'research', label: 'Research' },
  { id: 'hifi', label: 'Hi Fidelity Designs' },
  { id: 'reflections', label: 'Reflections & Results' },
];

export default function FinLockerPage() {
  return (
    <CaseStudyLayout
      title="FinLocker"
      description="FinLocker is a secure financial fitness tool that aggregates and analyzes a consumer's financial data to offer personalized journeys to achieve loan eligibility for a mortgage and other financial transactions."
      role="UX Research, Visual Design, UI Animation"
      stats="50% new user signups, +7 NPS score"
      color="#F88634"
      hero="/projects/finlocker/hero.png"
      badge="/projects/finlocker/if-award.png"
      sections={sections}
    >

      <Section id="problem" label="The context" heading="Problem Summary">
        {/* Divider */}
        <div className="mb-8">
          <div className="border-t border-neutral-200" />
        </div>

        <div className='md:flex'>
        <p className="flex-1">
          In today&apos;s fast-paced world, <strong>individuals seek an intuitive way to comprehend their finances</strong>, including budgets and spending habits. They aim to use this knowledge effectively in the pursuit of acquiring their ideal home. Designing information and data in a way that <strong>enables users to make informed decisions</strong> during their home-buying journey was central to this project.
        </p>
        <ol className="flex-1">
          <li>Current tools feature <strong>complex and burdensome designs</strong> that compel users to acquire excessive knowledge before they can act.</li>
          <li>There is currently <strong>no comprehensive platform</strong> specifically tailored for first-time homebuyers that bridges financial fitness and mortgage eligibility in one place.</li>
        </ol>
        </div>  
        <div className=''>
        <Figure
          src="/projects/finlocker/home-journey.png"
          caption="Interactive home ownership journey"
          fullWidth
        />
        </div>
      </Section>

      <Section id="research" heading="Research">
        <div className="mb-6">
          <div className="border-t border-neutral-200" />
        </div>
        <div className='md:flex'>
        <p>
          Conducted a Heuristic Evaluation to categorize issues in terms of severity and determine which items require immediate attention. The evaluation revealed several critical issues around information architecture, feedback loops, and onboarding clarity.
        </p>
        <StatCallout
          color="#5BCB6E"
          stats={[
            {
              value: '60%',
              description:
                'users would never use existing budgets & goals functionality, labelling it as too confusing to use.',
            },
            {
              value: '75%',
              description:
                'people would sign up initially but would never come back to use the platform.',
            },
          ]}
        />
        </div>
        <Carousel
          images={[
            { src: '/projects/finlocker/carousel/carousel-1.png', caption: 'Before' },
            { src: '/projects/finlocker/carousel/carousel-4.png', caption: 'After' },
          ]}
        />
      </Section>

      <Section id="hifi" label="Atomic design principle" heading="Hi Fidelity Designs">
        <div className="mb-6">
          <div className="border-t border-neutral-200" />
        </div>
        <p>
          To build more coherent, hierarchical, and structured interfaces, we incorporated the principles of atomic design into our design system. Each component was built from the ground up — atoms to organisms — ensuring visual consistency across every screen.
        </p>
        <ImageGrid
          cols={3}
          images={[
            { src: '/projects/finlocker/spend-graph.png', caption: 'Monthly spending graph' },
            { src: '/projects/finlocker/spend-limit.png', caption: 'Monthly spend limit' },
            { src: '/projects/finlocker/credit-card.png', caption: 'Credit health card' },
          ]}
        />
        <h3 className='text-center' style={{ fontSize: "2.5rem"}}>Our favourites</h3>
        <div className="mb-6">
          <div className="border-t border-neutral-200" />
        </div>
        <div className='md:px-10'>
        <Carousel
          aspect="16/9"
          images={[
            {
              src: '/projects/finlocker/credit-health.png',
              caption: 'Visual Balance',
              description:
                'A clean tool that captures a visual breakdown of their credit score, surfacing the factors that matter most in plain language.',
            },
            {
              src: '/projects/finlocker/home-journey-2.png',
              caption: 'The joyous feeling of buying your first home',
              description:
                'This page revolutionizes the home-buying process by giving users a personalized, step-by-step path to mortgage readiness.',
            },
          ]}
        />
        </div>
        <DotSlider
          aspect="16/9"
          images={[
            { src: '/projects/finlocker/carousel/carousel-1.png' },
            { src: '/projects/finlocker/carousel/carousel-2.png' },
            { src: '/projects/finlocker/carousel/carousel-3.png' },
            { src: '/projects/finlocker/carousel/carousel-4.png' },
          ]}
        />
      </Section>

      <Section id="reflections" heading="Reflections & Results">
        <div className="mb-6">
          <div className="border-t border-neutral-200" />
        </div>          
        {/* Text + award badge side by side */}
        <div className="md:flex items-start gap-10 mb-10">
          <div className="flex-1">
            <p>
              The redesign provided users an elevated and beautiful user experience that brought bursts of joy and enthusiasm in every interaction.
            </p>
            <p>
              The new design profited the organization in various aspects from increased signups, increased user retention, engagement and increased visibility by winning bagging iF Design Award.
            </p>
          </div>
          <div className="shrink-0 pt-1">
            <AwardBadge
              image="/projects/finlocker/if-award.png"
              caption="iF Design award winner 2023"
            />
          </div>
        </div>

        <StatCallout
          color="#F88634"
          stats={[
            { value: '50%', description: 'new users signups' },
            { value: '40%', description: 'increase in user engagement.' },
            { value: '+7', description: 'NPS score giving direct competition to Rocket Money, Credit Karma' },
          ]}
        />

        <div className="border-t border-neutral-200 my-10" />

        <p>
          If you want to dig deeper in the project and learn more about my design process in this project, feel free to{' '}
          <a
            href="https://cal.com/mankeerat"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#FF57F9' }}
          >
            schedule a call
          </a>{' '}
          with me.
        </p>
      </Section>

    </CaseStudyLayout>
  );
}

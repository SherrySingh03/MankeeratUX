import type { Metadata } from 'next';
import CaseStudyLayout from '@/components/case-study/CaseStudyLayout';
import Section from '@/components/case-study/Section';
import Carousel from '@/components/case-study/Carousel';

export const metadata: Metadata = {
  title: 'KnowMeQ — Mankeerat Singh',
  description: 'Reimagining the onboarding experience for CPL applicants.',
};

const sections = [
  { id: 'problem', label: 'Problem Summary' },
  { id: 'reflections', label: 'Reflections & Results' },
];

export default function KnowMeQPage() {
  return (
    <CaseStudyLayout
      title="KnowMeQ — ArchieCPL"
      description="Reimagining the onboarding experience for CPL applicants."
      role="UX Research, Visual Design, UI Animation"
      stats=""
      color="#FF57F9"
      hero="/projects/knowmeq/hero.png"
      heroFit="contain"
      sections={sections}
    >

      <Section id="problem" label="The context" heading="Problem Summary">
        <div className="mb-8">
          <div className="border-t border-neutral-200" />
        </div>

        <div className="flex gap-10">
          <p className="flex-1">
            KnowMeQ&apos;s ArchieCPL tool allows applicants to apply for credits for courses. Applicants
            can explore multiple CPL (Credit for Prior Learning) programs and apply for reviewing
            process from a college. These courses are beneficial for all workers to upskill and
            potentially achieve career gains.
          </p>
          <p className="flex-1">
            The onboarding flow is split into two flows: first where you upload your resume and the
            A.I autofills the information. The applicants needs to verify all the info and move to
            step 2 i.e review programs/courses and submit to review. However, as the first step is
            completed, <strong>81% of the applicants would exit the platform</strong> thinking the
            process is complete and missing on the second part of the process.
          </p>
        </div>

        <blockquote
          className="pl-8 py-1 my-2 text-lg text-neutral-700 leading-relaxed font-medium"
          style={{ borderLeft: '3px solid #FF57F9' }}
        >
          81% of applicants left the platform without submitting and paying for a program/course
          to review.
        </blockquote>

        <Carousel
          images={[
            { src: '/projects/knowmeq/step-1.png', caption: 'Step 1: Old progress bar' },
            { src: '/projects/knowmeq/step-2.png', caption: 'Step 2: Choose programs & courses' },
          ]}
        />
      </Section>

      <Section
        id="reflections"
        heading={
          <>
            Reflections{' '}
            <em style={{ fontFamily: 'var(--font-bitter), Georgia, serif' }}>& results</em>
          </>
        }
      >
        <div
          className="rounded-2xl p-8"
          style={{ backgroundColor: '#f5f5f5' }}
        >
          <p className="!mb-1 !text-base font-semibold !text-neutral-800">This project is under NDA.</p>
          <p className="!mb-0 !text-base">
            Please{' '}
            <a
              href="https://cal.com/mankeerat"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold !text-neutral-800"
            >
              reach out
            </a>{' '}
            if you&apos;d like to learn more about this project and my time at KnowMeQ.
          </p>
        </div>
      </Section>

    </CaseStudyLayout>
  );
}

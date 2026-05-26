import type { Metadata } from 'next';
import CaseStudyLayout from '@/components/case-study/CaseStudyLayout';
import Section from '@/components/case-study/Section';
import Figure from '@/components/case-study/Figure';
import ImageGrid from '@/components/case-study/ImageGrid';
import StatCallout from '@/components/case-study/StatCallout';
import Carousel from '@/components/case-study/Carousel';

export const metadata: Metadata = {
  title: 'Renoworks — Mankeerat Singh',
  description: 'Tracking and project management tool for a Toronto-based construction company.',
};

const sections = [
  { id: 'problem', label: 'Problem Summary' },
  { id: 'research', label: 'Research' },
  { id: 'hifi', label: 'Hi Fidelity Designs' },
  { id: 'outcomes', label: 'Key Outcomes & Results' },
];

export default function RenoworksPage() {
  return (
    <CaseStudyLayout
      title="Renoworks"
      description="RenoWorks is a Toronto-based construction company, focused on home renovations and interior design projects. The company specializes in a variety of services like carpentry, hardwood flooring, installations of high-end plumbing, and electrical work."
      role="UX Research, Visual Design, Design Strategy"
      stats="$200k savings annually, 25% increase in projects"
      color="#5540FF"
      hero="/projects/renoworks/hero.png"
      badge="/projects/renoworks/badge.png"
      heroFit="contain"
      sections={sections}
    >

      <Section id="problem" label="The context" heading="Problem Summary">
        <div className="mb-8">
          <div className="border-t border-neutral-200" />
        </div>
        <div className="md:flex items-start gap-10">
          {/* Left: text */}
          <div className="md:w-[38%] shrink-0">
            <p>
              The agency lacks a tracking and project organizing tool that would help them track
              different renovation projects happening in the agency.
            </p>
            <ol>
              <li>Inability to find all project documents in one place.</li>
              <li>
                Missing key details like tasks, timings and notes while filling paper timesheets.
              </li>
              <li>Inability to create/track projects and bill clients accurately.</li>
            </ol>
          </div>
          {/* Right: phone mockups */}
          <div className="md:flex-1 min-w-0">
            <ImageGrid
              cols={2}
              aspect="9/16"
              images={[
                { src: '/projects/renoworks/homescreen.png', caption: 'Homescreen' },
                { src: '/projects/renoworks/project-details.png', caption: 'Project Details' },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section id="research" heading="Research">
        <div className="mb-8">
          <div className="border-t border-neutral-200" />
        </div>
        <p>
          We conducted qualitative research to understand the problem space better. User
          interviews, observational research, cognitive walkthrough, focus groups and heuristic
          evaluation helped us identify core issues.
        </p>
        <Figure src="/projects/renoworks/research.png" fullWidth />
      </Section>

      <Section id="hifi" heading="Hi Fidelity Designs">
        <div className="mb-8">
          <div className="border-t border-neutral-200" />
        </div>

        <h3>Improvements</h3>
        <p>
          Designed a dashboard where all projects &amp; service calls happening in the
          organization were displayed in an intuitive layout which helped admin manage multiple
          projects.
        </p>
        <p>
          Mobile app for employees allowed them to easily view the calls for today with vital
          information like address, tasks, timings and issues showcased in each card.
        </p>
        <ImageGrid
          cols={2}
          aspect="16/10"
          images={[
            { src: '/projects/renoworks/admin-dashboard.png', caption: 'Admin Dashboard' },
            { src: '/projects/renoworks/homescreen.png', caption: 'Homescreen' },
          ]}
        />

        <h3>Design System</h3>
        <p>
          To ensure consistency of design elements across platforms, we implemented a design
          system that would also help future designers and developers in the project.
        </p>
        <ImageGrid
          cols={2}
          aspect="16/10"
          images={[
            { src: '/projects/renoworks/project-creation.png', caption: 'Project Creation' },
            { src: '/projects/renoworks/filters.png', caption: 'Filters' },
          ]}
        />
        <Carousel
          aspect="9/16"
          cardWidth="32%"
          images={[
            { src: '/projects/renoworks/carousel/step-1.png', caption: 'Step 1: Create a service call' },
            { src: '/projects/renoworks/carousel/step-2.png', caption: 'Step 2: Select service' },
            { src: '/projects/renoworks/carousel/step-3.png', caption: 'Step 3: Add contact details' },
            { src: '/projects/renoworks/carousel/step-4.png', caption: 'Step 4: Review & submit' },
          ]}
        />
      </Section>

      <Section id="outcomes" heading="Key Outcomes & Results">
        <div className="mb-8">
          <div className="border-t border-neutral-200" />
        </div>
        <p>
          The launch of the new internal tool enabled the agency to schedule projects more
          efficiently and also led to accurate billing of clients, significantly impacting
          business growth and client satisfaction.
        </p>
        <StatCallout
          color="#5540FF"
          stats={[
            { value: '40%', description: 'increase in Productivity: saving $135,000 annually' },
            { value: '35%', description: 'Reduced administration overhead: saving $70,000 annually' },
          ]}
        />
        <div className="mt-20 md:mt-100" />
        <p>
          If you want to dig deeper in the project and learn more about my design process in
          this project, feel free to{' '}
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

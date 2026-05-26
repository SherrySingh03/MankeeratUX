'use client';

import { useState } from 'react';
import { projects } from '@/lib/projects';
import ProjectRow from '@/components/ProjectRow';
import type { Project } from '@/lib/projects';

type Props = {
  onHover: (project: Project | null) => void;
};

export default function ProjectList({ onHover }: Props) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const handleEnter = (project: Project) => {
    setHoveredSlug(project.slug);
    onHover(project);
  };

  const handleLeave = () => {
    setHoveredSlug(null);
    onHover(null);
  };

  return (
    <section>
      {projects.map((project) => (
        <ProjectRow
          key={project.slug}
          project={project}
          isBlurred={hoveredSlug !== null && hoveredSlug !== project.slug}
          onMouseEnter={() => handleEnter(project)}
          onMouseLeave={handleLeave}
        />
      ))}
      {/* Bottom border */}
      {/* <div className="border-t border-neutral-200" /> */}
    </section>
  );
}

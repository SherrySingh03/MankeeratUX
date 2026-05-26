'use client';

import { useState } from 'react';
import LeftPanel from '@/components/LeftPanel';
import RightPanel from '@/components/RightPanel';
import type { Project } from '@/lib/projects';

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    <main className="flex w-full min-h-screen">
      <LeftPanel hoveredProject={hoveredProject} />
      <RightPanel onHover={setHoveredProject} />
    </main>
  );
}

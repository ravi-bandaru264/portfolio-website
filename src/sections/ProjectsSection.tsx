import React, { useState } from 'react';
import { featuredProjects } from '../data/projects';
import type { Project } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { Layers } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-[#07111F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F33] border border-[#168BFF]/30 text-[#36D9FF] text-xs font-semibold uppercase tracking-wider mb-3">
            Technical Showcases
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] to-[#36D9FF]">Data Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A7B5C8] leading-relaxed">
            Architectural blueprints and engineering designs showcasing end-to-end cloud data pipelines, Delta Lake Medallion structures, and modern Fabric analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewArchitecture={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-[#A7B5C8]/80 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#101F33]/60 border border-white/5">
            <Layers className="w-3.5 h-3.5 text-[#36D9FF]" />
            All projects are demonstrated as architectural specifications and production design models for technical evaluation.
          </p>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

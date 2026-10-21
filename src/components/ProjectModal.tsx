import React, { useEffect } from 'react';
import { X, Network, CheckCircle2, ArrowRight, Layers, Cpu } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0B1728] border border-[#36D9FF]/30 rounded-2xl shadow-2xl overflow-y-auto flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="sticky top-0 z-10 bg-[#0B1728]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#168BFF] to-[#36D9FF] flex items-center justify-center text-white">
              <Network className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#168BFF]/20 text-[#36D9FF] border border-[#168BFF]/30">
                {project.badgeType}
              </span>
              <h3 id="modal-title" className="text-base sm:text-lg font-bold text-white mt-1">
                {project.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#A7B5C8] hover:text-white bg-[#101F33] hover:bg-[#162742] transition-colors focus:outline-none focus:ring-2 focus:ring-[#36D9FF]"
            aria-label="Close Architecture Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          <div className="p-5 rounded-xl bg-[#101F33]/80 border border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#36D9FF] mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#36D9FF]" />
              Data Pipeline Architecture Flow
            </h4>
            <p className="text-xs text-[#A7B5C8] mb-4 leading-relaxed font-mono bg-[#07111F] p-3 rounded-lg border border-white/5">
              {project.architectureSummary}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {project.pipelineFlow.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="px-3 py-1.5 rounded-lg bg-[#07111F] border border-[#168BFF]/30 text-white text-xs font-medium flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#36D9FF]" />
                    <span>{step}</span>
                  </div>
                  {idx < project.pipelineFlow.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#36D9FF]/60 shrink-0 hidden sm:inline" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#36D9FF]" />
              Technical Implementation Stages
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.architectureSteps.map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-xl bg-[#101F33]/50 border border-white/5 hover:border-[#168BFF]/30 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-[#36D9FF]">
                      {step.stage}
                    </span>
                    <span className="text-[10px] text-[#A7B5C8] bg-white/5 px-2 py-0.5 rounded-full">
                      Stage {sIdx + 1}
                    </span>
                  </div>
                  <h5 className="text-sm font-bold text-white mb-1.5">{step.title}</h5>
                  <p className="text-xs text-[#A7B5C8] leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {step.technologies.map((t, ti) => (
                      <span
                        key={ti}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#07111F] text-[#F4F8FF]/80 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#101F33]/60 border border-white/5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#36D9FF]" />
              Enterprise Data Capabilities Delivered
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2 text-xs text-[#A7B5C8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#36D9FF] shrink-0 mt-1.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A7B5C8] mb-3">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-[#101F33] text-[#36D9FF] border border-[#168BFF]/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-[#0B1728]/95 backdrop-blur-md px-6 py-4 border-t border-white/10 flex items-center justify-between">
          <p className="text-[11px] text-[#A7B5C8]">
            Demonstration Architecture • Azure Cloud Data Engineering
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#168BFF] text-white text-xs font-semibold hover:bg-[#36D9FF] transition-colors cursor-pointer"
          >
            Close Architecture
          </button>
        </div>
      </div>
    </div>
  );
};

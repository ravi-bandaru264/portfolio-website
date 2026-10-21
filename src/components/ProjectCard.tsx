import React from 'react';
import { Network, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onViewArchitecture: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewArchitecture }) => {
  const renderTechnicalIllustration = () => {
    switch (project.id) {
      case 'azure-e2e-pipeline':
        return (
          <div className="relative w-full h-44 bg-[#07111F] rounded-xl overflow-hidden p-4 border border-white/5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] text-[#A7B5C8] font-mono">
              <span className="flex items-center gap-1.5 text-[#36D9FF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#36D9FF] animate-ping" />
                ADF Pipeline Active
              </span>
              <span>ADLS Gen2 → Databricks</span>
            </div>
            
            <svg viewBox="0 0 380 70" className="w-full h-16" fill="none">
              <rect x="10" y="20" width="60" height="30" rx="6" fill="#101F33" stroke="#168BFF" strokeWidth="1.2" />
              <text x="40" y="38" fill="#F4F8FF" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Sources</text>
              
              <line x1="70" y1="35" x2="110" y2="35" stroke="#36D9FF" strokeWidth="1.5" strokeDasharray="3 3" className="animate-flow-stream" />
              
              <rect x="110" y="20" width="70" height="30" rx="6" fill="#101F33" stroke="#36D9FF" strokeWidth="1.5" />
              <text x="145" y="38" fill="#36D9FF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ADF / IR</text>

              <line x1="180" y1="35" x2="220" y2="35" stroke="#36D9FF" strokeWidth="1.5" strokeDasharray="3 3" className="animate-flow-stream" />
              
              <rect x="220" y="20" width="70" height="30" rx="6" fill="#101F33" stroke="#168BFF" strokeWidth="1.2" />
              <text x="255" y="38" fill="#F4F8FF" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Databricks</text>

              <line x1="290" y1="35" x2="325" y2="35" stroke="#36D9FF" strokeWidth="1.5" strokeDasharray="3 3" className="animate-flow-stream" />

              <rect x="325" y="20" width="50" height="30" rx="6" fill="#101F33" stroke="#36D9FF" strokeWidth="1.2" />
              <text x="350" y="38" fill="#36D9FF" fontSize="9" textAnchor="middle" fontFamily="sans-serif">Gold DW</text>
            </svg>

            <div className="flex items-center justify-between text-[10px] text-[#A7B5C8]/70 font-mono">
              <span>Ingestion: Scheduled/Event</span>
              <span>Layer: Bronze → Silver → Gold</span>
            </div>
          </div>
        );

      case 'medallion-lakehouse':
        return (
          <div className="relative w-full h-44 bg-[#07111F] rounded-xl overflow-hidden p-4 border border-white/5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] text-[#A7B5C8] font-mono">
              <span className="flex items-center gap-1.5 text-amber-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Medallion Lakehouse
              </span>
              <span>ACID Delta Lake</span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="bg-[#101F33] border border-amber-600/40 rounded-lg p-2 text-center">
                <span className="text-[10px] font-bold text-amber-500 uppercase block">Bronze</span>
                <span className="text-[9px] text-[#A7B5C8] block mt-0.5">Raw Append</span>
              </div>
              <div className="bg-[#101F33] border border-slate-400/40 rounded-lg p-2 text-center">
                <span className="text-[10px] font-bold text-slate-300 uppercase block">Silver</span>
                <span className="text-[9px] text-[#A7B5C8] block mt-0.5">Cleanse & Merge</span>
              </div>
              <div className="bg-[#101F33] border border-yellow-400/40 rounded-lg p-2 text-center">
                <span className="text-[10px] font-bold text-yellow-300 uppercase block">Gold</span>
                <span className="text-[9px] text-[#A7B5C8] block mt-0.5">Star Schema</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-[#A7B5C8]/70 font-mono">
              <span>Schema Evolution: Enabled</span>
              <span>Deduplication: Window Rank</span>
            </div>
          </div>
        );

      case 'fabric-analytics':
        return (
          <div className="relative w-full h-44 bg-[#07111F] rounded-xl overflow-hidden p-4 border border-white/5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] text-[#A7B5C8] font-mono">
              <span className="flex items-center gap-1.5 text-[#36D9FF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#36D9FF]" />
                Microsoft Fabric SaaS
              </span>
              <span>OneLake Direct Lake</span>
            </div>

            <div className="flex items-center justify-center gap-3 my-auto">
              <div className="px-2.5 py-1.5 rounded-md bg-[#101F33] border border-white/10 text-[10px] text-white">
                Dataflows Gen2
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#36D9FF]" />
              <div className="px-3 py-2 rounded-lg bg-gradient-to-r from-[#168BFF]/30 to-[#36D9FF]/30 border border-[#36D9FF] text-xs font-bold text-white shadow-md shadow-[#168BFF]/30">
                OneLake
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#36D9FF]" />
              <div className="px-2.5 py-1.5 rounded-md bg-[#101F33] border border-white/10 text-[10px] text-white">
                Power BI
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-[#A7B5C8]/70 font-mono">
              <span>Mode: Direct Lake</span>
              <span>Semantic Modeling: DAX</span>
            </div>
          </div>
        );

      case 'data-quality-framework':
      default:
        return (
          <div className="relative w-full h-44 bg-[#07111F] rounded-xl overflow-hidden p-4 border border-white/5 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] text-[#A7B5C8] font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Data Quality Gates
              </span>
              <span>Automated Audit</span>
            </div>

            <div className="flex items-center justify-around my-auto">
              <div className="text-center">
                <span className="text-[10px] text-[#A7B5C8] block">Input Stream</span>
                <span className="text-xs font-mono text-white block font-bold">100% Records</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="text-center">
                <span className="text-[10px] text-emerald-400 block">Passed Tests</span>
                <span className="text-xs font-mono text-emerald-300 block font-bold">Silver Delta</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="text-center">
                <span className="text-[10px] text-red-400 block">Violations</span>
                <span className="text-xs font-mono text-red-300 block font-bold">Quarantine Log</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-[#A7B5C8]/70 font-mono">
              <span>Auditing: Null / Unique / Schema</span>
              <span>Alerts: Webhook Log</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-[#101F33]/80 rounded-2xl border border-white/10 hover:border-[#168BFF]/40 transition-all duration-300 flex flex-col justify-between shadow-xl overflow-hidden group">
      <div className="p-4 sm:p-5 pb-0">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#36D9FF]">
            {project.category}
          </span>
          <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-[#168BFF]/15 text-[#36D9FF] border border-[#168BFF]/30">
            {project.badgeType}
          </span>
        </div>
        
        {renderTechnicalIllustration()}
      </div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#36D9FF] transition-colors">
            {project.title}
          </h3>
          
          <p className="text-xs sm:text-sm text-[#A7B5C8] leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="space-y-2 mb-5">
            {project.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#F4F8FF]/85">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#36D9FF] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 4).map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#07111F] text-[#A7B5C8] border border-white/5"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#07111F] text-[#36D9FF]">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 pt-4 border-t border-white/10">
            <button
              onClick={() => onViewArchitecture(project)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#168BFF] to-[#36D9FF] text-white text-xs font-semibold shadow-md shadow-[#168BFF]/20 hover:shadow-[#36D9FF]/30 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Network className="w-3.5 h-3.5" />
              <span>View Architecture</span>
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#07111F] text-[#A7B5C8] hover:text-white border border-white/10 transition-colors"
                title="View GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#07111F] text-[#36D9FF] hover:text-white border border-white/10 transition-colors"
                title="View Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

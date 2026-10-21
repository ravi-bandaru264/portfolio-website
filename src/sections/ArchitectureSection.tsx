import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Repeat,
  HardDrive,
  Cpu,
  Layers,
  Database,
  BarChart3,
  CheckCircle2,
  Info,
  Sparkles
} from 'lucide-react';
import { pipelineStages } from '../data/pipelineFlow';
import type { PipelineStage } from '../data/pipelineFlow';

export const ArchitectureSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<PipelineStage>(pipelineStages[1]);

  const renderStageIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5" />;
      case 'Repeat':
        return <Repeat className="w-5 h-5" />;
      case 'HardDrive':
        return <HardDrive className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'BarChart3':
      default:
        return <BarChart3 className="w-5 h-5" />;
    }
  };

  return (
    <section id="architecture" className="py-24 relative bg-[#0B1728]/80 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F33] border border-[#168BFF]/30 text-[#36D9FF] text-xs font-semibold uppercase tracking-wider mb-3">
            Interactive Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            How I Engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] to-[#36D9FF]">Data Pipelines</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A7B5C8] leading-relaxed">
            Click on any pipeline node below to explore its ingestion protocols, processing engines, storage layers, and data governance practices.
          </p>
        </div>

        <div className="p-4 sm:p-6 rounded-2xl bg-[#101F33]/80 border border-white/10 shadow-2xl mb-10 overflow-x-auto scrollbar-none">
          <div className="min-w-[850px] flex items-center justify-between relative py-4">
            <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-0.5 bg-gradient-to-r from-[#168BFF]/20 via-[#36D9FF]/40 to-[#168BFF]/20 z-0" />

            {pipelineStages.map((stage) => {
              const isSelected = selectedStage.id === stage.id;

              return (
                <div key={stage.id} className="relative z-10 flex flex-col items-center">
                  <button
                    onClick={() => setSelectedStage(stage)}
                    className={`group relative flex flex-col items-center p-3 rounded-2xl transition-all cursor-pointer focus:outline-none ${
                      isSelected
                        ? 'bg-gradient-to-b from-[#168BFF] to-[#0E5DB5] text-white shadow-lg shadow-[#168BFF]/40 scale-105 ring-2 ring-[#36D9FF]'
                        : 'bg-[#07111F] text-[#A7B5C8] hover:text-white hover:bg-[#162742] border border-white/10'
                    }`}
                    aria-label={`Select pipeline stage: ${stage.name}`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors mb-2 ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-[#101F33] text-[#36D9FF] group-hover:bg-[#168BFF]/20'
                      }`}
                    >
                      {renderStageIcon(stage.iconName)}
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase opacity-75">
                      Step {stage.stepNumber}
                    </span>
                    <span className="text-xs font-semibold whitespace-nowrap mt-0.5">
                      {stage.shortName}
                    </span>
                  </button>

                  {isSelected && (
                    <div className="absolute -bottom-3 w-2 h-2 rotate-45 bg-[#36D9FF]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-[#101F33] rounded-2xl border border-[#36D9FF]/30 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#168BFF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#168BFF] to-[#36D9FF] flex items-center justify-center text-white shadow-lg shadow-[#168BFF]/30 shrink-0">
                {renderStageIcon(selectedStage.iconName)}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#36D9FF] uppercase tracking-wider">
                    Stage {selectedStage.stepNumber} of 7 • {selectedStage.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedStage.name}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#A7B5C8] font-mono bg-[#07111F] px-3 py-1.5 rounded-lg border border-white/5">
                Primary: <strong className="text-[#36D9FF]">{selectedStage.primaryTechnology}</strong>
              </span>
            </div>
          </div>

          <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-5">
              <p className="text-sm sm:text-base text-[#F4F8FF]/90 leading-relaxed">
                {selectedStage.summary}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#36D9FF] mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Technical Engineering Practices
                </h4>
                <div className="space-y-2.5">
                  {selectedStage.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A7B5C8]">
                      <CheckCircle2 className="w-4 h-4 text-[#36D9FF] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#07111F]/70 rounded-xl p-5 border border-white/5 space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A7B5C8] block mb-1">
                  Input Stream
                </span>
                <p className="text-xs font-mono text-white bg-[#101F33] p-2.5 rounded-lg border border-white/5">
                  {selectedStage.inputData}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A7B5C8] block mb-1">
                  Output Delivery
                </span>
                <p className="text-xs font-mono text-[#36D9FF] bg-[#101F33] p-2.5 rounded-lg border border-white/5">
                  {selectedStage.outputData}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A7B5C8] block mb-2">
                  Technologies Deployed
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedStage.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#101F33] text-white border border-[#168BFF]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => {
                const prevIndex = (selectedStage.stepNumber - 2 + pipelineStages.length) % pipelineStages.length;
                setSelectedStage(pipelineStages[prevIndex]);
              }}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#07111F] text-[#A7B5C8] hover:text-white border border-white/10 transition-colors cursor-pointer"
            >
              ← Previous Stage
            </button>

            <span className="text-xs text-[#A7B5C8]">
              Stage {selectedStage.stepNumber} of {pipelineStages.length}
            </span>

            <button
              onClick={() => {
                const nextIndex = selectedStage.stepNumber % pipelineStages.length;
                setSelectedStage(pipelineStages[nextIndex]);
              }}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#168BFF] text-white hover:bg-[#36D9FF] transition-colors cursor-pointer"
            >
              Next Stage →
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-[#A7B5C8]/80 inline-flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-[#36D9FF]" />
            Illustrative cloud workflow based on 4 years of Azure data engineering implementations and industry standards.
          </p>
        </div>
      </div>
    </section>
  );
};

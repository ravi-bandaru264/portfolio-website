import React, { useState, useMemo } from 'react';
import {
  Search,
  Layers,
  Cloud,
  Cpu,
  Code,
  GitBranch,
  Database,
  Network,
  Box,
  Clock,
  Sparkles,
  CheckCircle2,
  Info
} from 'lucide-react';
import { allSkills, skillCategories } from '../data/skills';
import type { Skill } from '../data/skills';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud':
        return <Cloud className="w-4 h-4" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4" />;
      case 'Code':
        return <Code className="w-4 h-4" />;
      case 'GitBranch':
        return <GitBranch className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      case 'Network':
        return <Network className="w-4 h-4" />;
      case 'Box':
        return <Box className="w-4 h-4" />;
      case 'Clock':
        return <Clock className="w-4 h-4" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const filteredSkills = useMemo(() => {
    return allSkills.filter((skill) => {
      const matchesCategory =
        selectedCategory === 'all' || skill.category === selectedCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.tag && skill.tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 relative bg-[#07111F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F33] border border-[#168BFF]/30 text-[#36D9FF] text-xs font-semibold uppercase tracking-wider mb-3">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] to-[#36D9FF]">Technical Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A7B5C8] leading-relaxed">
            Enterprise cloud data engineering capabilities spanning Azure infrastructure, distributed Spark compute, lakehouse architectures, and modern data platforms.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7B5C8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. PySpark, Delta Lake, ADF, Kafka, Fabric)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#101F33] border border-white/10 text-white placeholder-[#A7B5C8]/60 text-xs sm:text-sm focus:outline-none focus:border-[#36D9FF] focus:ring-1 focus:ring-[#36D9FF] transition-all"
              aria-label="Filter skills by keyword"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#A7B5C8] hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
            {skillCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count =
                cat.id === 'all'
                  ? allSkills.length
                  : allSkills.filter((s) => s.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#168BFF] to-[#36D9FF] text-white shadow-md shadow-[#168BFF]/30'
                      : 'bg-[#101F33]/80 text-[#A7B5C8] hover:text-white hover:bg-[#162742] border border-white/5'
                  }`}
                >
                  {getCategoryIcon(cat.iconName)}
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-white/5 text-[#A7B5C8]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {filteredSkills.map((skill, index) => {
            const isHoveredOrActive = activeSkill?.name === skill.name;

            return (
              <div
                key={index}
                onClick={() => setActiveSkill(isHoveredOrActive ? null : skill)}
                onMouseEnter={() => setActiveSkill(skill)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveSkill(isHoveredOrActive ? null : skill);
                  }
                }}
                className={`group relative p-4 rounded-xl border text-left cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-[#36D9FF] ${
                  isHoveredOrActive
                    ? 'bg-[#101F33] border-[#36D9FF]/60 shadow-lg shadow-[#168BFF]/20 -translate-y-1'
                    : 'bg-[#101F33]/50 border-white/5 hover:border-white/20 hover:bg-[#101F33]'
                }`}
                role="button"
                aria-expanded={isHoveredOrActive}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-sm text-white group-hover:text-[#36D9FF] transition-colors leading-snug">
                    {skill.name}
                  </h3>
                  {skill.tag && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#168BFF]/15 text-[#36D9FF] border border-[#168BFF]/20 shrink-0">
                      {skill.tag}
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#A7B5C8] leading-relaxed line-clamp-3">
                  {skill.description}
                </p>

                <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-[#A7B5C8]/80">
                  <span className="capitalize text-[10px] text-[#A7B5C8]/60">
                    {skill.category.replace('-', ' ')}
                  </span>
                  <Info className="w-3.5 h-3.5 text-[#36D9FF]/70 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 bg-[#101F33]/30 rounded-2xl border border-white/5">
            <p className="text-base text-[#A7B5C8] mb-3">
              No skills found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-[#168BFF] text-white hover:bg-[#36D9FF] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {activeSkill && (
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#101F33] via-[#0B1728] to-[#101F33] border border-[#36D9FF]/40 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fadeIn">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#168BFF] to-[#36D9FF] flex items-center justify-center text-white shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-white">{activeSkill.name}</h4>
                  {activeSkill.tag && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#168BFF]/20 text-[#36D9FF]">
                      {activeSkill.tag}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-[#A7B5C8] mt-1 max-w-3xl">
                  {activeSkill.description}
                </p>
              </div>
            </div>
            <button
              onClick={() => setActiveSkill(null)}
              className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#A7B5C8] hover:text-white shrink-0 self-end sm:self-center cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

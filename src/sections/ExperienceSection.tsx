import React from 'react';
import {
  Briefcase,
  MapPin,
  Calendar,
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  Building2,
  Sparkles
} from 'lucide-react';
import {
  professionalExperience,
  educationHistory,
  continuousLearningAreas
} from '../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#0B1728]/60 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F33] border border-[#168BFF]/30 text-[#36D9FF] text-xs font-semibold uppercase tracking-wider mb-3">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] to-[#36D9FF]">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A7B5C8] leading-relaxed">
            Hands-on track record building enterprise data pipelines, lakehouse architectures, and cloud analytics platforms.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {professionalExperience.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#101F33]/90 rounded-2xl border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#168BFF] via-[#36D9FF] to-[#168BFF]" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#168BFF]/20 text-[#36D9FF] text-xs font-bold border border-[#168BFF]/30">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.role}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {exp.experienceDuration}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#36D9FF] shrink-0" />
                    {exp.company}
                  </h3>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-1.5 text-xs text-[#A7B5C8]">
                  <span className="inline-flex items-center gap-1.5 font-medium text-white">
                    <Calendar className="w-3.5 h-3.5 text-[#36D9FF]" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#A7B5C8]" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="py-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#36D9FF] mb-4">
                  Key Responsibilities & Deliverables
                </h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#F4F8FF]/90 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#36D9FF] shrink-0 mt-2" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#A7B5C8] mb-3">
                  Technologies Deployed in Production
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-[#07111F] text-[#F4F8FF] border border-white/10 hover:border-[#36D9FF]/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-[#101F33]/70 rounded-2xl border border-white/10 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#168BFF] to-[#36D9FF] flex items-center justify-center text-white shadow-md">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Education</h3>
                  <p className="text-xs text-[#A7B5C8]">Academic Foundations</p>
                </div>
              </div>

              {educationHistory.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#07111F]/70 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Score: {edu.score}
                    </span>
                  </div>
                  <p className="text-xs text-[#36D9FF] font-medium">{edu.institution}</p>
                  <p className="text-[11px] text-[#A7B5C8] leading-relaxed">
                    Solid academic curriculum covering computer science fundamentals, data structures, algorithms, and database systems.
                  </p>
                </div>
              ))}

              <div className="mt-6 pt-5 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#36D9FF] mb-3">
                  Key Strengths
                </h4>
                <div className="space-y-2">
                  {[
                    'End-to-end Azure data pipeline development and production support',
                    'Strong SQL, Python, PySpark, ETL/ELT, and data modeling fundamentals',
                    'Scalable data lake & lakehouse architecture using ADLS Gen2, Databricks, Delta Lake, Fabric',
                    'Data security using Entra ID, Service Principals, Managed Identities, and Azure Key Vault',
                    'Troubleshooting, performance optimization, data quality, and schema evolution'
                  ].map((strength, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-[#A7B5C8]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#36D9FF] shrink-0 mt-0.5" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#101F33]/70 rounded-2xl border border-white/10 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#36D9FF] to-[#168BFF] flex items-center justify-center text-white shadow-md">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Continuous Learning in Cloud Data Engineering
                  </h3>
                  <p className="text-xs text-[#A7B5C8]">
                    Ongoing technical study, official Microsoft documentation, and hands-on labs
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {continuousLearningAreas.map((area, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-3.5 rounded-xl bg-[#07111F]/60 border border-white/5 hover:border-[#168BFF]/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#36D9FF]" />
                      <h4 className="text-xs font-bold text-white">{area.title}</h4>
                    </div>
                    <p className="text-[11px] text-[#A7B5C8] leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3 rounded-xl bg-[#168BFF]/10 border border-[#168BFF]/20 text-xs text-[#A7B5C8] flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#36D9FF] shrink-0 mt-0.5" />
                <span>
                  Actively pursuing advanced Microsoft Certified Azure Data Engineer credentials. Portfolio showcases verified hands-on production code and architectures.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

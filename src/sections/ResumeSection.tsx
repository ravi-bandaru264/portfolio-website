import React from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { LinkedinIcon } from '../components/SocialIcons';
import { profile } from '../config/profile';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-24 relative bg-[#07111F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F33] border border-[#168BFF]/30 text-[#36D9FF] text-xs font-semibold uppercase tracking-wider mb-3">
            Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            My Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] to-[#36D9FF]">Resume</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A7B5C8] leading-relaxed">
            Explore my experience, technical expertise, and professional background in Azure Data Engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#101F33]/90 rounded-2xl border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#168BFF]/20 via-[#36D9FF]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#168BFF] to-[#36D9FF] flex items-center justify-center text-white shadow-lg shadow-[#168BFF]/30 shrink-0">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {profile.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#36D9FF] font-medium mt-0.5">
                  {profile.role} • {profile.experience} • {profile.location}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={profile.resume}
                download={profile.resumeFilename}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#168BFF] to-[#36D9FF] text-white font-semibold text-xs sm:text-sm shadow-md shadow-[#168BFF]/30 hover:shadow-[#36D9FF]/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                id="resume-section-download-btn"
              >
                <Download className="w-4 h-4 text-white" />
                <span>Download Full Resume (PDF)</span>
              </a>

              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#07111F] text-[#F4F8FF] hover:text-[#36D9FF] border border-white/10 hover:border-[#36D9FF]/40 text-xs sm:text-sm font-semibold transition-all"
                id="resume-section-view-btn"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Resume</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#07111F] text-[#A7B5C8] hover:text-[#36D9FF] border border-white/10 hover:border-[#36D9FF]/40 text-xs sm:text-sm font-semibold transition-all"
                title="Connect on LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="py-8 space-y-6">
            <div className="p-4 sm:p-5 rounded-xl bg-[#07111F]/80 border border-white/5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#36D9FF] mb-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Executive Summary
              </h4>
              <p className="text-xs sm:text-sm text-[#A7B5C8] leading-relaxed">
                SQL Developer and Data Engineer with 4 years of experience designing, developing, and supporting cloud-based data engineering solutions on Microsoft Azure. Hands-on experience with Azure Data Factory (ADF), Azure Data Lake Storage Gen2, Azure SQL Database, Azure Databricks, PySpark, Python, Delta Lake, and Microsoft Fabric. Experienced in building scalable ETL/ELT pipelines, dimensional models, and Medallion architectures.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#07111F]/60 border border-white/5">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <Briefcase className="w-4 h-4 text-[#36D9FF]" />
                  <span>Current Experience</span>
                </div>
                <p className="text-xs text-[#36D9FF] font-semibold">Dr. Batra's Positive Health Clinic</p>
                <p className="text-[11px] text-[#A7B5C8]">Azure Data Engineer • 4 Years</p>
              </div>

              <div className="p-4 rounded-xl bg-[#07111F]/60 border border-white/5">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <GraduationCap className="w-4 h-4 text-[#36D9FF]" />
                  <span>Highest Degree</span>
                </div>
                <p className="text-xs text-white font-semibold">Bachelor's Degree (89%)</p>
                <p className="text-[11px] text-[#A7B5C8]">Acharya Nagarjuna University</p>
              </div>

              <div className="p-4 rounded-xl bg-[#07111F]/60 border border-white/5">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#36D9FF]" />
                  <span>Verified Document</span>
                </div>
                <p className="text-xs text-emerald-400 font-semibold">Ravikiran AzureData EngineeringResume.pdf</p>
                <p className="text-[11px] text-[#A7B5C8]">Original Uploaded Document</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#07111F]/60 border border-white/5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Core Resume Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'End-to-end Azure data pipeline development and production support',
                  'Strong SQL, Python, PySpark, ETL/ELT, and data modeling fundamentals',
                  'Scalable lakehouse architecture using ADLS Gen2, Databricks, Delta Lake, Fabric',
                  'Enterprise security using Entra ID, Service Principals, and Azure Key Vault',
                  'Production troubleshooting, performance optimization, and schema evolution'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#A7B5C8]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36D9FF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7B5C8]">
            <p>
              Looking to hire an experienced Azure Data Engineer? Download the resume or schedule an interview.
            </p>
            <a
              href="#contact"
              className="text-xs font-semibold text-[#36D9FF] hover:underline shrink-0"
            >
              Contact Me Directly →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

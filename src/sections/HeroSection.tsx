import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { profile } from '../config/profile';

export const HeroSection: React.FC = () => {
  const floatingBadges = [
    { text: 'Azure Data Factory', position: '-top-4 -left-6' },
    { text: 'Azure Databricks', position: 'top-16 -right-8' },
    { text: 'PySpark', position: 'bottom-24 -left-8' },
    { text: 'Microsoft Fabric', position: '-bottom-4 right-0' },
    { text: 'SQL & Python', position: 'top-[45%] -right-10' },
  ];

  const highlights = [
    { title: '4 Years of Experience', desc: 'Enterprise Cloud Solutions' },
    { title: 'End-to-End Data Pipelines', desc: 'Ingestion to Analytics' },
    { title: 'Azure Cloud Data Engineering', desc: 'Medallion & Lakehouse' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions and Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101F33] border border-[#36D9FF]/30 text-[#36D9FF] text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm shadow-[#168BFF]/20">
              <span className="w-2 h-2 rounded-full bg-[#36D9FF] animate-ping" />
              <span>AZURE DATA ENGINEER • 4 YEARS EXPERIENCE</span>
            </div>

            {/* Name */}
            <h2 className="text-xl sm:text-2xl font-medium text-[#A7B5C8] mb-1">
              Hello, I'm <span className="text-white font-bold">{profile.name}</span>
            </h2>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-extrabold text-white leading-[1.15] tracking-tight mb-5">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] via-[#36D9FF] to-white">Reliable, Scalable</span> & Intelligent Data Pipelines on Azure.
            </h1>

            {/* Professional Summary */}
            <p className="text-sm sm:text-base text-[#A7B5C8] leading-relaxed mb-6 max-w-2xl font-normal">
              {profile.heroSummary}
            </p>

            {/* Technology Line */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#36D9FF] bg-[#101F33]/80 px-4 py-2 rounded-lg border border-[#168BFF]/20 mb-8 max-w-2xl">
              <Sparkles className="w-4 h-4 text-[#36D9FF] shrink-0" />
              <span className="truncate">{profile.heroTechnologies}</span>
            </div>

            {/* Hero Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              {/* Primary: Download Resume */}
              <a
                href={profile.resume}
                download={profile.resumeFilename}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#168BFF] to-[#36D9FF] text-white font-semibold text-sm shadow-lg shadow-[#168BFF]/30 hover:shadow-[#36D9FF]/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                id="hero-download-resume-btn"
              >
                <Download className="w-4 h-4 text-white" />
                <span>Download Resume</span>
              </a>

              {/* Secondary: Explore Projects */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#101F33] text-[#F4F8FF] font-semibold text-sm border border-white/10 hover:border-[#168BFF]/50 hover:bg-[#162742] transition-all hover:scale-[1.02]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-[#36D9FF]" />
              </a>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#101F33] text-[#A7B5C8] hover:text-[#36D9FF] border border-white/10 hover:border-[#36D9FF]/40 transition-all"
                title="Connect on LinkedIn"
                aria-label="Connect on LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span className="text-xs font-medium hidden sm:inline">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#101F33] text-[#A7B5C8] hover:text-white border border-white/10 hover:border-[#168BFF]/40 transition-all"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="text-xs font-medium hidden sm:inline">GitHub</span>
              </a>
            </div>

            {/* Professional Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-4 border-t border-white/10">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-[#101F33]/40 border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#36D9FF] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white leading-snug">{item.title}</h4>
                    <p className="text-[11px] text-[#A7B5C8]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Uploaded Profile Photograph in Premium Azure Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative mt-6 lg:mt-0"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-gradient-to-tr from-[#168BFF]/30 via-[#36D9FF]/20 to-transparent blur-2xl animate-pulse-glow" />
              <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-[#168BFF]/20 animate-spin" style={{ animationDuration: '40s' }} />
              <div className="absolute w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] rounded-full border border-[#36D9FF]/10 border-dashed animate-spin" style={{ animationDuration: '60s', animationDirection: 'reverse' }} />
            </div>

            <div className="relative group z-10">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#168BFF] via-[#36D9FF] to-[#168BFF] opacity-75 blur-md group-hover:opacity-100 transition duration-500" />

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-full p-2 bg-[#07111F]/90 backdrop-blur-md border border-[#36D9FF]/40 shadow-2xl shadow-[#168BFF]/40 flex items-center justify-center overflow-hidden">
                <img
                  src={profile.image}
                  alt="Bandaru Ravi Kiran, Azure Data Engineer"
                  className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.endsWith('.png')) {
                      target.src = '/images/profile.jpg';
                    }
                  }}
                />
              </div>

              {floatingBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className={`hidden sm:flex absolute ${badge.position} items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#101F33]/90 backdrop-blur-md border border-[#36D9FF]/30 text-white text-[11px] font-semibold shadow-lg shadow-black/50 z-20 pointer-events-none ${
                    idx % 2 === 0 ? 'animate-float' : 'animate-float-reverse'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#36D9FF]" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            <div className="flex sm:hidden flex-wrap justify-center gap-2 mt-6 z-10 max-w-xs">
              {['ADF', 'Databricks', 'PySpark', 'Fabric', 'SQL & Python'].map((label, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-full bg-[#101F33] text-[#36D9FF] text-[11px] font-medium border border-[#36D9FF]/20"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F33]/80 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Azure Data Engineering Roles</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Database, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { profile } from '../config/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#07111F] border-t border-white/10 pt-16 pb-12 overflow-hidden text-[#A7B5C8]">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#168BFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#168BFF] to-[#36D9FF] flex items-center justify-center text-white shadow-md shadow-[#168BFF]/30">
                <Database className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white tracking-wide">
                  {profile.name}
                </h3>
                <p className="text-xs text-[#36D9FF] font-medium tracking-wider uppercase">
                  {profile.role}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A7B5C8] leading-relaxed max-w-sm">
              "{profile.tagline}"
            </p>

            <p className="text-xs text-[#A7B5C8]/80">
              Specialized in Azure Data Factory, Databricks, PySpark, Delta Lake, SQL, and Microsoft Fabric.
            </p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation Shortcuts
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#36D9FF] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Connect With Me
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#101F33] border border-white/10 flex items-center justify-center text-[#A7B5C8] hover:text-white hover:border-[#168BFF]/40 hover:bg-[#162742] transition-all"
                title="GitHub Profile"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#101F33] border border-white/10 flex items-center justify-center text-[#A7B5C8] hover:text-[#36D9FF] hover:border-[#36D9FF]/40 hover:bg-[#162742] transition-all"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="w-10 h-10 rounded-xl bg-[#101F33] border border-white/10 flex items-center justify-center text-[#A7B5C8] hover:text-white hover:border-[#168BFF]/40 hover:bg-[#162742] transition-all"
                title="Send Email"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-xl bg-[#101F33] border border-white/10 flex items-center justify-center text-[#A7B5C8] hover:text-white hover:border-[#36D9FF]/40 transition-all cursor-pointer ml-auto"
                title="Back to Top"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] text-[#A7B5C8]/80 leading-normal">
              Based in Mumbai, India. Open to high-impact cloud data platform initiatives.
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7B5C8]/70">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, TypeScript & Azure Cloud Architecture Aesthetics
          </p>
        </div>
      </div>
    </footer>
  );
};

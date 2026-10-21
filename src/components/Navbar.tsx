import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { profile } from '../config/profile';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const currentScrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= currentScrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07111F]/90 backdrop-blur-md border-b border-[#168BFF]/20 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Branding */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#36D9FF] rounded-lg p-1"
            aria-label="Bandaru Ravi Kiran Portfolio Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#168BFF] to-[#36D9FF] flex items-center justify-center text-white shadow-md shadow-[#168BFF]/30 group-hover:scale-105 transition-transform duration-200">
              <Database className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-wider text-base text-[#F4F8FF] group-hover:text-[#36D9FF] transition-colors">
                RAVI KIRAN
              </span>
              <span className="text-[11px] font-medium tracking-widest text-[#36D9FF]/90 uppercase">
                DATA ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#101F33]/60 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#168BFF] to-[#36D9FF] text-white shadow-sm shadow-[#168BFF]/40 font-semibold'
                      : 'text-[#A7B5C8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Social & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#A7B5C8] hover:text-white hover:bg-[#101F33] border border-white/5 rounded-lg transition-all hover:border-[#168BFF]/40"
              title="GitHub Profile"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#A7B5C8] hover:text-[#36D9FF] hover:bg-[#101F33] border border-white/5 rounded-lg transition-all hover:border-[#36D9FF]/40"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-[#168BFF] to-[#36D9FF] text-white hover:opacity-95 shadow-md shadow-[#168BFF]/25 hover:shadow-[#36D9FF]/30 transition-all hover:scale-[1.02]"
            >
              Let's Connect
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-xs font-medium px-3 py-1.5 rounded-lg bg-[#168BFF] text-white"
            >
              Connect
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A7B5C8] hover:text-white focus:outline-none rounded-lg bg-[#101F33]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07111F]/98 border-b border-[#168BFF]/20 backdrop-blur-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#168BFF]/20 text-[#36D9FF] font-semibold border-l-2 border-[#36D9FF]'
                      : 'text-[#A7B5C8] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-[#A7B5C8] hover:text-white bg-[#101F33] rounded-lg border border-white/10"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-[#A7B5C8] hover:text-[#36D9FF] bg-[#101F33] rounded-lg border border-white/10"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
            <a
              href={profile.resume}
              download={profile.resumeFilename}
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-[#168BFF] to-[#36D9FF] text-white"
            >
              Resume PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

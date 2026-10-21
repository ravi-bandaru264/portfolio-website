import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { profile } from '../config/profile';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0B1728]/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F33] border border-[#168BFF]/30 text-[#36D9FF] text-xs font-semibold uppercase tracking-wider mb-3">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] to-[#36D9FF]">Meaningful with Data.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A7B5C8] leading-relaxed">
            I'm open to discussing Azure Data Engineering opportunities, data platform projects, and professional collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#101F33] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#168BFF]/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-2">
                {profile.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#36D9FF] font-medium mb-6">
                {profile.role} • {profile.experience}
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#07111F] border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#168BFF]/10 flex items-center justify-center text-[#36D9FF] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#A7B5C8] block">Email Address</span>
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-xs font-semibold text-white hover:text-[#36D9FF] transition-colors"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-[#A7B5C8] hover:text-white transition-colors cursor-pointer"
                    title="Copy Email"
                    aria-label="Copy Email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#07111F] border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#168BFF]/10 flex items-center justify-center text-[#36D9FF] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#A7B5C8] block">Mobile Number</span>
                      <a
                        href={`tel:${profile.phone}`}
                        className="text-xs font-semibold text-white hover:text-[#36D9FF] transition-colors"
                      >
                        {profile.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 text-[#A7B5C8] hover:text-white transition-colors cursor-pointer"
                    title="Copy Phone Number"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#07111F] border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-[#168BFF]/10 flex items-center justify-center text-[#36D9FF] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#A7B5C8] block">Location</span>
                    <span className="text-xs font-semibold text-white">
                      {profile.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/10">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#168BFF] to-[#36D9FF] text-white text-xs font-semibold shadow-md shadow-[#168BFF]/20 hover:scale-[1.02] transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>

                <a
                  href={`tel:${profile.phone}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#07111F] text-white hover:text-[#36D9FF] border border-white/10 hover:border-[#36D9FF]/40 text-xs font-semibold transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Me</span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#07111F] text-white hover:text-[#36D9FF] border border-white/10 hover:border-[#36D9FF]/40 text-xs font-semibold transition-all"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#36D9FF]" />
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#07111F] text-white hover:text-[#36D9FF] border border-white/10 hover:border-[#36D9FF]/40 text-xs font-semibold transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#36D9FF]" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#101F33] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#36D9FF]" />
              Send a Direct Message
            </h3>
            <p className="text-xs text-[#A7B5C8] mb-6">
              Fill out this form to quickly draft and launch your email client directly to {profile.email}.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-[#A7B5C8] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tech Recruiter / Hiring Manager"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#07111F] border border-white/10 text-white placeholder-[#A7B5C8]/50 text-xs sm:text-sm focus:outline-none focus:border-[#36D9FF] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-[#A7B5C8] mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#07111F] border border-white/10 text-white placeholder-[#A7B5C8]/50 text-xs sm:text-sm focus:outline-none focus:border-[#36D9FF] transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-[#A7B5C8] mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Azure Data Engineer Opportunity / Discussion"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#07111F] border border-white/10 text-white placeholder-[#A7B5C8]/50 text-xs sm:text-sm focus:outline-none focus:border-[#36D9FF] transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-[#A7B5C8] mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Ravi, we would love to connect with you regarding our Azure Data Engineering roles..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#07111F] border border-white/10 text-white placeholder-[#A7B5C8]/50 text-xs sm:text-sm focus:outline-none focus:border-[#36D9FF] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#168BFF] to-[#36D9FF] text-white font-semibold text-xs sm:text-sm shadow-md shadow-[#168BFF]/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 text-white" />
                <span>Send Message via Email Client</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

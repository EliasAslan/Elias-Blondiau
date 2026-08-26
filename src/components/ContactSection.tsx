import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, MapPin, Send, ExternalLink, MessageSquare } from 'lucide-react';
import { Language } from '../types/portfolio';
import { portfolioData } from '../data/portfolioData';
import { translations } from '../data/translations';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const { contact, personal } = portfolioData;
  const t = translations[currentLang].contact;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-b border-[#E8E4D8] bg-[#F9F7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Availability Note */}
          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-widest text-[#8C887D] font-mono mb-2 flex items-center gap-2">
              <span className="text-[#A67C52] font-semibold">[08]</span>
              <span className="w-4 h-px bg-[#C4C0B2]" />
              <span>{t.sectionBadge}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2D2D2D] mt-2 mb-4">
              {t.title}
            </h2>
            <p className="text-base text-[#555148] leading-relaxed mb-6">
              {t.subtitle}
            </p>

            {/* Status Card */}
            <div className="p-4.5 bg-[#F0EDE4] border border-[#E8E4D8] flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse shrink-0" />
              <p className="text-xs sm:text-sm font-mono text-[#555148]">
                {t.statusAvailable}
              </p>
            </div>
          </div>

          {/* Right Column: Contact Cards */}
          <div className="lg:col-span-6 space-y-4">
            {/* Email Card with Copy & Direct Mailto */}
            <div className="p-5 sm:p-6 bg-[#FFFFFF] border border-[#E8E4D8] shadow-xs">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#F0EDE4] border border-[#E8E4D8] flex items-center justify-center text-[#A67C52]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#8C887D] uppercase tracking-wider block">
                      {t.emailLabel}
                    </span>
                    <span className="font-mono text-sm sm:text-base text-[#2D2D2D] select-all">
                      {contact.email}
                    </span>
                  </div>
                </div>

                <button
                  id="copy-email-btn"
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 bg-[#F0EDE4] hover:bg-[#E8E3D7] text-[#2D2D2D] text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-1.5 border border-[#E8E4D8] cursor-pointer"
                  title={t.copyEmail}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#555148]" />
                      <span>{t.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-3 border-t border-[#E8E4D8] flex items-center justify-between">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-xs uppercase tracking-wider font-semibold text-[#A67C52] hover:text-[#2D2D2D] flex items-center gap-1"
                >
                  <Send className="w-3 h-3" />
                  <span>{t.sendEmail}</span>
                </a>
                <span className="text-[11px] font-mono text-[#8C887D]">
                  Visp, Switzerland
                </span>
              </div>
            </div>

            {/* Social / Profiles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* GitHub */}
              <a
                id="contact-github-link"
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-[#FFFFFF] border border-[#E8E4D8] hover:bg-[#F9F7F2] transition-all group flex items-center justify-between shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#F0EDE4] border border-[#E8E4D8] flex items-center justify-center text-[#2D2D2D]">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-[#2D2D2D] group-hover:text-[#A67C52] transition-colors">
                      GitHub
                    </h4>
                    <span className="text-xs text-[#8C887D] font-mono">
                      @eliasblondiau
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#8C887D] group-hover:text-[#2D2D2D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* LinkedIn */}
              <a
                id="contact-linkedin-link"
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-[#FFFFFF] border border-[#E8E4D8] hover:bg-[#F9F7F2] transition-all group flex items-center justify-between shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#F0EDE4] border border-[#E8E4D8] flex items-center justify-center text-[#2D2D2D]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-[#2D2D2D] group-hover:text-[#A67C52] transition-colors">
                      LinkedIn
                    </h4>
                    <span className="text-xs text-[#8C887D] font-mono">
                      Elias Blondiau
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#8C887D] group-hover:text-[#2D2D2D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Location Note */}
            <div className="p-4 bg-[#F0EDE4] border border-[#E8E4D8] text-xs font-mono text-[#555148] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#A67C52] shrink-0" />
              <span>{contact.locationNote[currentLang]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

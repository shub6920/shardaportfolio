import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { profile } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#060712] py-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8955FF] to-[#6C38E8] flex items-center justify-center font-mono font-bold text-white text-base shadow-glow-sm">
              {profile.logo}
            </div>
            <div>
              <div className="font-bold text-lg text-white">
                {profile.name}
              </div>
              <p className="text-xs text-[#A7A9BE] flex items-center justify-center sm:justify-start gap-1 mt-0.5">
                <span>Designed with passion & curiosity.</span>
              </p>
            </div>
          </div>

          {/* Social Icons & Back To Top */}
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-card text-[#A7A9BE] hover:text-white hover:border-[#8955FF]/40 hover:bg-[#8955FF]/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-card text-[#A7A9BE] hover:text-[#0077B5] hover:border-[#0077B5]/40 hover:bg-[#0077B5]/10 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="p-2.5 rounded-xl glass-card text-[#A7A9BE] hover:text-rose-400 hover:border-rose-400/40 hover:bg-rose-400/10 transition-colors"
              aria-label="Send Email"
            >
              <MdEmail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-semibold text-white hover:text-[#B49AFF] hover:border-[#8955FF]/40 hover:bg-[#8955FF]/10 transition-all shadow-sm group"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A7A9BE]/70 gap-3">
          <div>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <div>
            B.Tech Electronics & Communication (2022 - 2026) • AI & ML
          </div>
        </div>

      </div>
    </footer>
  );
};

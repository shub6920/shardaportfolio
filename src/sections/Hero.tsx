import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, Sparkles, Brain, Network } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiPython, SiPytorch } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { profile } from '../data/portfolio';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
          >
            {/* Availability Badge */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-[#8955FF]/30 text-xs sm:text-sm font-medium text-[#B49AFF] mb-6 shadow-glow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{profile.badge}</span>
            </motion.div>

            {/* Name Greeting */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient-purple">
                {profile.name}
              </span>
            </h1>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#B49AFF] mb-6">
              {profile.headline}
            </h2>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-[#A7A9BE] max-w-2xl mb-8 leading-relaxed">
              {profile.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-[#8955FF] to-[#6C38E8] hover:from-[#9D71FF] hover:to-[#7E49FF] shadow-glow-md hover:shadow-glow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href={profile.resume}
                download="Sharda_Thakur_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white glass-card hover:bg-white/10 border border-white/15 hover:border-[#8955FF]/40 transition-all duration-300 hover:scale-105 active:scale-95 shadow-glass"
              >
                <Download className="w-4 h-4 text-[#B49AFF]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#A7A9BE]/80 mr-2">
                Connect:
              </span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-[#A7A9BE] hover:text-white hover:border-[#8955FF]/50 hover:bg-[#8955FF]/10 transition-all duration-200 hover:-translate-y-1 shadow-sm"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-[#A7A9BE] hover:text-[#0077B5] hover:border-[#0077B5]/50 hover:bg-[#0077B5]/10 transition-all duration-200 hover:-translate-y-1 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-[#A7A9BE] hover:text-[#EA4335] hover:border-[#EA4335]/50 hover:bg-[#EA4335]/10 transition-all duration-200 hover:-translate-y-1 shadow-sm"
                aria-label="Send Email"
              >
                <MdEmail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait & Creative Visuals */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center relative mt-6 lg:mt-0"
          >
            {/* Ambient concentric background rings */}
            <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-[#8955FF]/15 animate-spin-slow pointer-events-none" />
            <div className="absolute w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full border border-[#B49AFF]/10 pointer-events-none" />
            <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full bg-gradient-to-tr from-[#8955FF]/25 to-[#B49AFF]/20 blur-2xl -z-10" />

            {/* Portrait Container with Arch/Rounded Mask & Glow */}
            <div className="relative z-10 p-2 sm:p-3 rounded-[2.5rem] bg-gradient-to-b from-[#8955FF]/40 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 shadow-glow-md">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#181a3a] to-[#0c0e22]">
                {/* Purple subtle gradient behind her head */}
                <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-[#8955FF]/30 to-transparent pointer-events-none z-10" />
                
                {/* Real Photo with WebP and JPG fallback */}
                <picture>
                  <source srcSet="/images/sharda.webp" type="image/webp" />
                  <img
                    src={profile.photo}
                    alt="Sharda Thakur"
                    width="400"
                    height="525"
                    className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.03]"
                    loading="eager"
                  />
                </picture>

                {/* Subtle vignette/gradient blend at bottom of photo */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#080916] via-[#080916]/40 to-transparent pointer-events-none" />
              </div>

              {/* Floating Decorative Chip 1: Python (Top Left) */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-6 sm:-left-8 glass-card px-3.5 py-2 rounded-2xl border border-white/15 flex items-center gap-2 shadow-lg backdrop-blur-md"
              >
                <div className="w-7 h-7 rounded-lg bg-[#3776AB]/20 flex items-center justify-center text-[#3776AB]">
                  <SiPython className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-white">Python ML</span>
              </motion.div>

              {/* Floating Decorative Chip 2: PyTorch (Right Top) */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-12 -right-6 sm:-right-8 glass-card px-3.5 py-2 rounded-2xl border border-white/15 flex items-center gap-2 shadow-lg backdrop-blur-md"
              >
                <div className="w-7 h-7 rounded-lg bg-[#EE4C2C]/20 flex items-center justify-center text-[#EE4C2C]">
                  <SiPytorch className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-white">PyTorch</span>
              </motion.div>

              {/* Floating Decorative Chip 3: GNN (Bottom Left) */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-16 -left-6 sm:-left-8 glass-card px-3.5 py-2 rounded-2xl border border-white/15 flex items-center gap-2 shadow-lg backdrop-blur-md"
              >
                <div className="w-7 h-7 rounded-lg bg-[#8955FF]/20 flex items-center justify-center text-[#B49AFF]">
                  <Network className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-white">GNN Research</span>
              </motion.div>

              {/* Floating Glass Card: "Building Intelligent Solutions" (Bottom Center/Right) */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -bottom-6 -right-2 sm:-right-6 glass-card p-3 sm:p-3.5 rounded-2xl border border-[#8955FF]/30 shadow-glow-sm backdrop-blur-xl flex items-center gap-3 max-w-[240px]"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#8955FF] to-[#6C38E8] flex items-center justify-center text-white shrink-0 shadow-glow-sm">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#B49AFF] flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>Focus Area</span>
                  </div>
                  <div className="text-xs font-bold text-white leading-tight mt-0.5">
                    Building Intelligent Solutions
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

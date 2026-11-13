import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Calendar, CheckCircle2, Sparkles, Building2, Terminal } from 'lucide-react';
import { experience } from '../data/portfolio';

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 75%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" ref={containerRef} className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[#8955FF]/30 text-xs font-semibold text-[#B49AFF] uppercase tracking-wider mb-3 shadow-glow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#8955FF]" />
            <span>Practical Experience</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Internships & <span className="text-gradient-purple">Research Roles</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#A7A9BE] text-base sm:text-lg max-w-2xl mt-4"
          >
            Hands-on technical contributions at prestigious academic institutions and innovative technology organizations.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Timeline Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-white/10 hidden sm:block">
            <motion.div
              style={shouldReduceMotion ? { height: '100%' } : { height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#8955FF] via-[#B49AFF] to-[#6C38E8] shadow-glow-sm"
            />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {experience.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isNITHamirpur = item.company.includes('NIT');

              return (
                <div
                  key={item.company}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node on the line */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#080916] border-2 border-[#8955FF] flex items-center justify-center z-20 shadow-glow-sm hidden sm:flex">
                    <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#8955FF] to-[#B49AFF] animate-pulse" />
                  </div>

                  {/* Card Content (Occupies half width on desktop) */}
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? {}
                        : { opacity: 0, x: isEven ? 40 : -40, y: 20 }
                    }
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-[calc(50%-40px)] ml-auto sm:ml-0 ${
                      isEven ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                  >
                    <div
                      className={`glass-card rounded-3xl p-6 sm:p-8 border transition-all duration-300 relative overflow-hidden group hover:shadow-glow-md ${
                        isNITHamirpur
                          ? 'border-[#8955FF]/30 bg-gradient-to-br from-[#8955FF]/[0.08] via-transparent to-transparent'
                          : 'border-[#B49AFF]/30 bg-gradient-to-br from-[#B49AFF]/[0.06] via-transparent to-transparent'
                      }`}
                    >
                      {/* Top Accent Glow */}
                      <div
                        className={`absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl pointer-events-none ${
                          isNITHamirpur ? 'bg-[#8955FF]/15' : 'bg-[#B49AFF]/10'
                        }`}
                      />

                      {/* Period Badge & Company */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <div
                            className={`p-2 rounded-xl ${
                              isNITHamirpur
                                ? 'bg-[#8955FF]/20 text-[#B49AFF]'
                                : 'bg-[#B49AFF]/20 text-white'
                            }`}
                          >
                            <Building2 className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-[#B49AFF] transition-colors">
                              {item.company}
                            </h3>
                          </div>
                        </div>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#D3C2FF]">
                          <Calendar className="w-3.5 h-3.5 text-[#8955FF]" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Role title */}
                      <div className="mb-4">
                        <h4 className="text-base font-semibold text-white/90 flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-[#8955FF]" />
                          <span>{item.role}</span>
                        </h4>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-3 mb-6">
                        {item.points.map((point, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-start gap-3 text-sm text-[#A7A9BE] leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#8955FF] shrink-0 mt-1" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Pills */}
                      <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-xl text-xs font-medium bg-white/[0.04] text-[#B49AFF] border border-white/10 hover:border-[#8955FF]/40 transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { MapPin, Building, GraduationCap, Cpu, Sparkles, BookOpen, Calendar, Award } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { about, education } from '../data/portfolio';

// Animated Counter Component
const Counter: React.FC<{ value: number; decimals?: number; suffix?: string }> = ({
  value,
  decimals = 0,
  suffix = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    const duration = 1800; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * value;

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value, shouldReduceMotion]);

  return (
    <span ref={ref} className="font-bold">
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export const AboutSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Academic chart data for Recharts
  const academicChartData = [
    { name: 'Class X', score: 93.2, max: 100, label: '93.2%' },
    { name: 'Class XII (PCM)', score: 88.9, max: 100, label: '88.9%' },
    { name: 'B.Tech CGPA', score: 78.1, max: 100, label: '7.81 CGPA (78.1%)' },
  ];

  const detailIcons: Record<string, React.ReactNode> = {
    Location: <MapPin className="w-5 h-5 text-[#B49AFF]" />,
    College: <Building className="w-5 h-5 text-[#B49AFF]" />,
    Degree: <GraduationCap className="w-5 h-5 text-[#B49AFF]" />,
    Specialization: <Cpu className="w-5 h-5 text-[#B49AFF]" />,
  };

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[#8955FF]/30 text-xs font-semibold text-[#B49AFF] uppercase tracking-wider mb-3 shadow-glow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#8955FF]" />
            <span>About Me</span>
          </motion.div>
          
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Engineering <span className="text-gradient-purple">Intelligence</span> from Core Principles
          </motion.h2>
        </div>

        {/* Large Glass Card Container */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Top ambient highlight inside card */}
          <div className="absolute top-0 right-1/4 w-96 h-32 bg-[#8955FF]/10 blur-3xl pointer-events-none" />

          {/* 3 Columns Layout on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Column 1: Background & Summary (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8955FF] shadow-glow-sm" />
                  Background & Vision
                </h3>
                <p className="text-[#A7A9BE] text-base leading-relaxed mb-6">
                  {about.summary}
                </p>
              </div>

              {/* Detail Rows */}
              <div className="space-y-3.5 pt-4 border-t border-white/10">
                {about.details.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#8955FF]/20 transition-colors"
                  >
                    <div className="mt-0.5 p-1.5 rounded-lg bg-[#8955FF]/15 shrink-0">
                      {detailIcons[item.label] || <Award className="w-4 h-4 text-[#B49AFF]" />}
                    </div>
                    <div>
                      <div className="text-xs uppercase font-semibold text-[#A7A9BE]/70">
                        {item.label}
                      </div>
                      <div className="text-sm font-medium text-white">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Areas of Interest & Education Timeline (4 cols) */}
            <div className="lg:col-span-4 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B49AFF] shadow-glow-sm" />
                Areas of Interest
              </h3>
              
              {/* Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {about.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.04] text-[#D3C2FF] border border-white/10 hover:border-[#8955FF]/50 hover:bg-[#8955FF]/20 hover:text-white hover:shadow-glow-sm transition-all duration-200 cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              {/* Education Milestones */}
              <h4 className="text-sm uppercase font-bold tracking-wider text-[#A7A9BE] mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#8955FF]" />
                <span>Education Pathway</span>
              </h4>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="relative pl-5 border-l-2 border-[#8955FF]/30 pb-3 last:pb-0"
                  >
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#8955FF] shadow-glow-sm" />
                    <div className="text-xs font-semibold text-[#B49AFF] flex items-center gap-1.5 mb-0.5">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="text-sm font-bold text-white leading-snug">
                      {edu.school}
                    </div>
                    <div className="text-xs text-[#A7A9BE] mt-0.5">
                      {edu.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Academic Highlights & Counters (3 cols) */}
            <div className="lg:col-span-3 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8955FF] shadow-glow-sm" />
                  Academic Excellence
                </h3>

                {/* Counters */}
                <div className="space-y-4 mb-6">
                  {about.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-gradient-to-br from-[#8955FF]/10 to-transparent border border-[#8955FF]/20 hover:border-[#8955FF]/50 transition-all shadow-sm"
                    >
                      <div className="text-xs uppercase font-semibold text-[#A7A9BE] mb-1">
                        {stat.label}
                      </div>
                      <div className="text-3xl font-black text-white text-gradient">
                        <Counter
                          value={stat.value}
                          decimals={stat.decimals}
                          suffix={stat.suffix}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini Recharts Visual */}
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-[11px] font-semibold text-[#A7A9BE] mb-2 flex items-center justify-between">
                  <span>Score Distribution</span>
                  <span className="text-[#B49AFF]">Scaled to %</span>
                </div>
                <div className="h-28 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={academicChartData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                      <XAxis dataKey="name" tick={{ fill: '#A7A9BE', fontSize: 10 }} axisLine={false} tickLine={false} />
                      <YAxis domain={[0, 100]} tick={{ fill: '#A7A9BE', fontSize: 9 }} axisLine={false} tickLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#0D0F24',
                          borderColor: 'rgba(137, 85, 255, 0.4)',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '11px',
                        }}
                        formatter={(val: number) => [`${val}%`, 'Score']}
                      />
                      <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                        {academicChartData.map((_, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={index === 0 ? '#8955FF' : index === 1 ? '#B49AFF' : '#6C38E8'}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

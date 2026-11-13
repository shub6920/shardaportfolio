import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Code2,
  Library,
  Wrench,
  BrainCircuit,
  Sparkles,
  Layers,
  Network,
  Cpu,
  Binary,
  LineChart,
  FileSpreadsheet,
  Presentation,
  Sigma
} from 'lucide-react';
import {
  SiPython,
  SiCplusplus,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiPytorch,
  SiGooglecolab,
  SiPycharm,
  SiKaggle,
} from 'react-icons/si';
import { skills } from '../data/portfolio';

export const SkillsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Icon mapping for each skill
  const getSkillIcon = (name: string): React.ReactNode => {
    switch (name) {
      // Languages
      case 'Python':
        return <SiPython className="w-5 h-5 text-[#3776AB]" />;
      case 'C++':
        return <SiCplusplus className="w-5 h-5 text-[#00599C]" />;
      case 'MATLAB':
        return <Sigma className="w-5 h-5 text-[#D9381E]" />;

      // Libraries & Frameworks
      case 'NumPy':
        return <SiNumpy className="w-5 h-5 text-[#013243]" />;
      case 'Pandas':
        return <SiPandas className="w-5 h-5 text-[#150458]" />;
      case 'Matplotlib':
        return <LineChart className="w-5 h-5 text-[#11557C]" />;
      case 'Scikit-learn':
        return <SiScikitlearn className="w-5 h-5 text-[#F7931E]" />;
      case 'PyTorch':
        return <SiPytorch className="w-5 h-5 text-[#EE4C2C]" />;

      // Tools
      case 'Google Colab':
        return <SiGooglecolab className="w-5 h-5 text-[#F9AB00]" />;
      case 'PyCharm':
        return <SiPycharm className="w-5 h-5 text-[#21D789]" />;
      case 'Kaggle':
        return <SiKaggle className="w-5 h-5 text-[#20BEFF]" />;
      case 'MS Excel':
        return <FileSpreadsheet className="w-5 h-5 text-[#107C41]" />;
      case 'MS PowerPoint':
        return <Presentation className="w-5 h-5 text-[#D83B01]" />;

      // Core Concepts
      case 'Object-Oriented Programming':
        return <Binary className="w-5 h-5 text-[#B49AFF]" />;
      case 'Digital Electronics':
        return <Cpu className="w-5 h-5 text-[#8955FF]" />;
      case 'Machine Learning':
        return <BrainCircuit className="w-5 h-5 text-[#B49AFF]" />;
      case 'Deep Learning':
        return <Layers className="w-5 h-5 text-[#8955FF]" />;
      case 'Neural Networks':
        return <Network className="w-5 h-5 text-[#B49AFF]" />;

      default:
        return <Sparkles className="w-5 h-5 text-[#8955FF]" />;
    }
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming Languages': <Code2 className="w-6 h-6 text-[#8955FF]" />,
    'Libraries & Frameworks': <Library className="w-6 h-6 text-[#B49AFF]" />,
    'Tools': <Wrench className="w-6 h-6 text-[#8955FF]" />,
    'Core Concepts': <BrainCircuit className="w-6 h-6 text-[#B49AFF]" />,
  };

  const categoryDescriptions: Record<string, string> = {
    'Programming Languages': 'Foundational languages for algorithmic problem-solving and computation.',
    'Libraries & Frameworks': 'Data manipulation, scientific computing, and neural architecture toolkits.',
    'Tools': 'Development environments, analytics utilities, and collaborative platforms.',
    'Core Concepts': 'Theoretical engineering foundation spanning hardware logic to deep models.',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="py-24 relative z-10">
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
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Skills & <span className="text-gradient-purple">Technical Arsenal</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#A7A9BE] text-base sm:text-lg max-w-2xl mt-4"
          >
            A curated stack of tools, frameworks, and scientific principles applied to real-world AI modeling and systems engineering.
          </motion.p>
        </div>

        {/* 4 Categorized Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              variants={cardVariants}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#8955FF]/40 transition-all duration-300 shadow-xl group hover:shadow-glow-md flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8955FF]/20 to-[#6C38E8]/10 border border-[#8955FF]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {categoryIcons[category]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#B49AFF] transition-colors">
                      {category}
                    </h3>
                    <span className="text-xs text-[#A7A9BE] font-medium">
                      {items.length} competencies
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#A7A9BE] mb-6">
                  {categoryDescriptions[category]}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2.5">
                  {items.map((skill) => (
                    <div
                      key={skill}
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 text-white font-medium text-sm hover:border-[#8955FF]/60 hover:bg-[#8955FF]/15 hover:shadow-glow-sm hover:-translate-y-1 transition-all duration-200 cursor-default"
                    >
                      <div className="p-1 rounded-lg bg-white/5 shrink-0 flex items-center justify-center">
                        {getSkillIcon(skill)}
                      </div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#A7A9BE]/60">
                <span>Verified across academic & internship projects</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8955FF]/50" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

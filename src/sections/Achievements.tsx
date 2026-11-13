import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Users, Trophy, Medal, Award, Sparkles } from 'lucide-react';
import { achievements } from '../data/portfolio';

export const AchievementsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const getIcon = (type: string) => {
    switch (type) {
      case 'users':
        return <Users className="w-6 h-6 text-white" />;
      case 'trophy':
        return <Trophy className="w-6 h-6 text-white" />;
      case 'medal':
        return <Medal className="w-6 h-6 text-white" />;
      case 'award':
      default:
        return <Award className="w-6 h-6 text-white" />;
    }
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
    <section id="achievements" className="py-24 relative z-10">
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
            <span>Honors & Initiatives</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Leadership & <span className="text-gradient-purple">Achievements</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#A7A9BE] text-base sm:text-lg max-w-2xl mt-4"
          >
            Recognitions in academic standing, competitive events, and collaborative student leadership roles.
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              className="glass-card rounded-3xl p-6 border border-white/10 hover:border-[#8955FF]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-glow-sm"
            >
              <div>
                {/* Purple Gradient Icon Tile */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8955FF] to-[#6C38E8] flex items-center justify-center mb-6 shadow-glow-sm group-hover:scale-105 group-hover:shadow-glow-md transition-all duration-300">
                  {getIcon(item.icon)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#B49AFF] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                {item.text ? (
                  <p className="text-sm text-[#A7A9BE] leading-relaxed">
                    {item.text}
                  </p>
                ) : (
                  <p className="text-xs text-[#A7A9BE]/70 italic">
                    Recognized for excellence in academic & competitive domain.
                  </p>
                )}
              </div>

              {/* Bottom tag indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#B49AFF] font-medium">
                <span>Award & Merit</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8955FF]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

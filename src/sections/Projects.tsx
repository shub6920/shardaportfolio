import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects, ProjectItem } from '../data/portfolio';
import { ProjectArt } from '../components/ProjectArt';
import { ProjectModal } from '../components/ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="projects" className="py-24 relative z-10">
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
            <span>Showcase Projects</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Intelligent Systems & <span className="text-gradient-purple">Research</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#A7A9BE] text-base sm:text-lg max-w-2xl mt-4"
          >
            Full-stack machine learning implementations, comparative neural research, and deep learning analytics systems.
          </motion.p>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              className="glass-card rounded-3xl p-5 sm:p-6 border border-white/10 hover:border-[#8955FF]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-glow-md"
            >
              <div>
                {/* Visual Art Thumbnail */}
                <div className="mb-5 overflow-hidden rounded-2xl group-hover:scale-[1.02] transition-transform duration-300">
                  <ProjectArt id={project.id} />
                </div>

                {/* Meta details */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#B49AFF] tracking-wide uppercase">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-[#A7A9BE] bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                    <Calendar className="w-3 h-3" />
                    <span>{project.year}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#B49AFF] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#A7A9BE] leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-[#D3C2FF] border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#B49AFF] transition-colors group/btn"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass-card text-[#A7A9BE] hover:text-white hover:border-[#8955FF]/40 hover:bg-[#8955FF]/10 transition-all duration-200"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl glass-card text-[#A7A9BE] hover:text-white hover:border-[#8955FF]/40 hover:bg-[#8955FF]/10 transition-all duration-200"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Accessible Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

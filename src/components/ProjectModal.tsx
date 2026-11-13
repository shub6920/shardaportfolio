import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, CheckCircle, Tag, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { ProjectItem } from '../data/portfolio';
import { ProjectArt } from './ProjectArt';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080916]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl p-6 sm:p-8 border border-white/15 bg-[#0D0F24]/95 shadow-2xl z-10 my-auto text-left"
        >
          {/* Close Button */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full glass-card hover:bg-white/10 text-[#A7A9BE] hover:text-white transition-colors focus:ring-2 focus:ring-[#8955FF] z-20"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Illustration Header */}
          <div className="mb-6">
            <ProjectArt id={project.id} />
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8955FF]/15 border border-[#8955FF]/30 text-xs font-semibold text-[#B49AFF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#A7A9BE]">
              <Calendar className="w-3 h-3" />
              <span>{project.year}</span>
            </span>
          </div>

          {/* Project Title */}
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
            {project.fullTitle || project.title}
          </h2>

          {/* Description */}
          <p className="text-[#A7A9BE] text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Features */}
          <div className="mb-6">
            <h3 className="text-sm uppercase font-bold tracking-wider text-white mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#8955FF]" />
              <span>Key Features & Innovations</span>
            </h3>
            <ul className="space-y-2.5">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#A7A9BE]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B49AFF] shrink-0 mt-2" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="mb-8">
            <h3 className="text-xs uppercase font-bold tracking-wider text-[#A7A9BE] mb-2.5 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#8955FF]" />
              <span>Technology Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-xl text-xs font-semibold bg-white/5 text-[#D3C2FF] border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-[#8955FF] to-[#6C38E8] hover:from-[#9D71FF] hover:to-[#7E49FF] shadow-glow-sm hover:shadow-glow-md transition-all duration-300"
            >
              <FaGithub className="w-4 h-4" />
              <span>View GitHub Repository</span>
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white glass-card hover:bg-white/10 border border-white/15 transition-all"
              >
                <ExternalLink className="w-4 h-4 text-[#B49AFF]" />
                <span>Live Demo</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="ml-auto px-5 py-3 rounded-full text-sm font-semibold text-[#A7A9BE] hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const BackgroundOrbs: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Primary electric purple orb top-right */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 40, -30, 0],
                y: [0, -50, 30, 0],
                scale: [1, 1.15, 0.95, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#8955FF]/20 to-[#6C38E8]/10 blur-[130px]"
      />

      {/* Secondary lavender orb center-left */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, -50, 40, 0],
                y: [0, 60, -40, 0],
                scale: [1, 1.1, 0.9, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -left-48 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#B49AFF]/15 to-[#8955FF]/10 blur-[140px]"
      />

      {/* Deep purple orb bottom-right */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 30, -40, 0],
                y: [0, -40, 50, 0],
                scale: [1, 1.08, 0.92, 1],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#6C38E8]/15 via-[#8955FF]/10 to-transparent blur-[150px]"
      />
    </div>
  );
};

import React from 'react';

interface ProjectArtProps {
  id: string;
}

export const ProjectArt: React.FC<ProjectArtProps> = ({ id }) => {
  if (id === 'weatheriq') {
    return (
      <div className="relative w-full h-48 sm:h-52 rounded-2xl bg-gradient-to-br from-[#0c1228] to-[#141b3b] overflow-hidden border border-white/10 flex items-center justify-center p-4">
        {/* Weather ambient glows */}
        <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-amber-400/20 blur-2xl" />
        <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-[#8955FF]/25 blur-2xl" />

        <svg className="w-full h-full" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle grid */}
          <line x1="20" y1="40" x2="300" y2="40" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
          <line x1="20" y1="80" x2="300" y2="80" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
          <line x1="20" y1="120" x2="300" y2="120" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

          {/* Temperature Forecast Curve */}
          <path
            d="M 25 125 C 65 110, 100 65, 145 75 C 190 85, 230 40, 295 55"
            stroke="url(#weatherGradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Gradient Area under curve */}
          <path
            d="M 25 125 C 65 110, 100 65, 145 75 C 190 85, 230 40, 295 55 L 295 150 L 25 150 Z"
            fill="url(#weatherFill)"
            opacity="0.25"
          />

          {/* Glowing Data Points */}
          <circle cx="65" cy="110" r="4" fill="#B49AFF" filter="url(#glowWeather)" />
          <circle cx="145" cy="75" r="4.5" fill="#8955FF" filter="url(#glowWeather)" />
          <circle cx="230" cy="50" r="5" fill="#FBBF24" filter="url(#glowWeather)" />

          {/* Sun & Cloud Motif */}
          <g transform="translate(30, 20)">
            <circle cx="26" cy="24" r="14" fill="#FBBF24" opacity="0.9" />
            <path
              d="M 22 28 C 22 24, 25 21, 29 21 C 32 21, 35 23, 36 26 C 38 25, 41 26, 42 29 C 43 31, 42 34, 40 35 L 22 35 C 19 35, 18 32, 20 29 C 21 28, 22 28, 22 28 Z"
              fill="#FFFFFF"
              opacity="0.95"
            />
          </g>

          {/* Mini Info Card Inside Art */}
          <rect x="180" y="90" width="115" height="48" rx="8" fill="#080916" fillOpacity="0.8" stroke="rgba(137,85,255,0.4)" strokeWidth="1" />
          <text x="192" y="108" fill="#A7A9BE" fontSize="8" fontFamily="sans-serif" fontWeight="600">ML TEMP PREDICT</text>
          <text x="192" y="126" fill="#FFFFFF" fontSize="14" fontFamily="sans-serif" fontWeight="bold">24.6°C <tspan fill="#8955FF" fontSize="10">±0.3</tspan></text>

          <defs>
            <linearGradient id="weatherGradient" x1="25" y1="125" x2="295" y2="55" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8955FF" />
              <stop offset="0.5" stopColor="#B49AFF" />
              <stop offset="1" stopColor="#FBBF24" />
            </linearGradient>
            <linearGradient id="weatherFill" x1="160" y1="40" x2="160" y2="150" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8955FF" />
              <stop offset="1" stopColor="#080916" stopOpacity="0" />
            </linearGradient>
            <filter id="glowWeather" x="-10" y="-10" width="40" height="40" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
    );
  }

  if (id === 'gnn-vs-ml') {
    return (
      <div className="relative w-full h-48 sm:h-52 rounded-2xl bg-gradient-to-br from-[#0c0d26] to-[#15103a] overflow-hidden border border-white/10 flex items-center justify-center p-4">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[#8955FF]/20 blur-3xl pointer-events-none" />

        <svg className="w-full h-full" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Graph Edges / Connections */}
          <line x1="60" y1="90" x2="115" y2="50" stroke="#8955FF" strokeWidth="2" strokeOpacity="0.7" />
          <line x1="60" y1="90" x2="115" y2="130" stroke="#8955FF" strokeWidth="1.5" strokeOpacity="0.5" />
          <line x1="115" y1="50" x2="185" y2="65" stroke="#B49AFF" strokeWidth="2.5" strokeOpacity="0.8" />
          <line x1="115" y1="50" x2="115" y2="130" stroke="#8955FF" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
          <line x1="115" y1="130" x2="185" y2="115" stroke="#8955FF" strokeWidth="2" strokeOpacity="0.6" />
          <line x1="185" y1="65" x2="185" y2="115" stroke="#B49AFF" strokeWidth="2" strokeOpacity="0.7" />
          <line x1="185" y1="65" x2="255" y2="85" stroke="#B49AFF" strokeWidth="3" strokeOpacity="0.9" />
          <line x1="185" y1="115" x2="255" y2="85" stroke="#8955FF" strokeWidth="2" strokeOpacity="0.8" />

          {/* Decision Boundary Curved Wave */}
          <path
            d="M 30 150 Q 150 140 280 40"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* Graph Nodes */}
          {/* Node 1 */}
          <circle cx="60" cy="90" r="10" fill="#080916" stroke="#8955FF" strokeWidth="2.5" />
          <circle cx="60" cy="90" r="4" fill="#B49AFF" />

          {/* Node 2 */}
          <circle cx="115" cy="50" r="12" fill="#080916" stroke="#B49AFF" strokeWidth="3" />
          <circle cx="115" cy="50" r="5" fill="#8955FF" />

          {/* Node 3 */}
          <circle cx="115" cy="130" r="11" fill="#080916" stroke="#8955FF" strokeWidth="2.5" />
          <circle cx="115" cy="130" r="4.5" fill="#6C38E8" />

          {/* Node 4 */}
          <circle cx="185" cy="65" r="13" fill="#080916" stroke="#B49AFF" strokeWidth="3" />
          <circle cx="185" cy="65" r="5.5" fill="#FFFFFF" />

          {/* Node 5 */}
          <circle cx="185" cy="115" r="10" fill="#080916" stroke="#8955FF" strokeWidth="2.5" />
          <circle cx="185" cy="115" r="4" fill="#B49AFF" />

          {/* Target Central/Output Node with High Glow */}
          <circle cx="255" cy="85" r="16" fill="#8955FF" fillOpacity="0.3" stroke="#B49AFF" strokeWidth="3" />
          <circle cx="255" cy="85" r="7" fill="#FFFFFF" />

          {/* Metric Pill in Corner */}
          <rect x="25" y="20" width="70" height="22" rx="6" fill="#080916" stroke="#8955FF" strokeWidth="1" strokeOpacity="0.5" />
          <text x="60" y="34" textAnchor="middle" fill="#B49AFF" fontSize="9" fontFamily="monospace" fontWeight="bold">GAT / GCN</text>

          <rect x="220" y="140" width="75" height="22" rx="6" fill="#080916" stroke="#B49AFF" strokeWidth="1" strokeOpacity="0.5" />
          <text x="257" y="154" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">Acc: 94.2%</text>
        </svg>
      </div>
    );
  }

  // NIDS Project
  return (
    <div className="relative w-full h-48 sm:h-52 rounded-2xl bg-gradient-to-br from-[#0c0d20] to-[#190d33] overflow-hidden border border-white/10 flex items-center justify-center p-4">
      {/* Alert Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-[#8955FF]/20 blur-3xl pointer-events-none" />

      <svg className="w-full h-full" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Radar concentric scanner rings */}
        <circle cx="160" cy="90" r="70" stroke="rgba(137,85,255,0.12)" strokeWidth="1" />
        <circle cx="160" cy="90" r="50" stroke="rgba(137,85,255,0.2)" strokeWidth="1" />
        <circle cx="160" cy="90" r="30" stroke="rgba(137,85,255,0.3)" strokeWidth="1" strokeDasharray="3 3" />

        {/* Traffic packet stream lines */}
        <line x1="20" y1="60" x2="120" y2="80" stroke="#8955FF" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="6 3" />
        <line x1="20" y1="90" x2="110" y2="90" stroke="#B49AFF" strokeWidth="2" strokeOpacity="0.8" />
        <line x1="20" y1="120" x2="120" y2="100" stroke="#8955FF" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4 2" />

        <line x1="200" y1="80" x2="300" y2="60" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.8" />
        <line x1="210" y1="90" x2="300" y2="90" stroke="#10B981" strokeWidth="2" strokeOpacity="0.9" />
        <line x1="200" y1="100" x2="300" y2="120" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.8" />

        {/* Cyber Security Shield in Center */}
        <g transform="translate(136, 62)">
          {/* Outer Shield glow */}
          <path
            d="M 24 2 L 46 10 C 46 32, 24 52, 24 52 C 24 52, 2 32, 2 10 Z"
            fill="#080916"
            stroke="#8955FF"
            strokeWidth="2.5"
          />
          {/* Inner Shield */}
          <path
            d="M 24 8 L 40 14 C 40 30, 24 45, 24 45 C 24 45, 8 30, 8 14 Z"
            fill="url(#shieldGradient)"
          />
          {/* Lock / Check Icon in shield */}
          <path
            d="M 18 25 L 22 29 L 30 20"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Threat Detection alert tags */}
        <rect x="25" y="25" width="85" height="20" rx="5" fill="#080916" stroke="#EF4444" strokeWidth="1" strokeOpacity="0.6" />
        <text x="67" y="38" textAnchor="middle" fill="#EF4444" fontSize="8" fontFamily="monospace" fontWeight="bold">MALICIOUS IP BLOCKED</text>

        <rect x="210" y="25" width="85" height="20" rx="5" fill="#080916" stroke="#10B981" strokeWidth="1" strokeOpacity="0.6" />
        <text x="252" y="38" textAnchor="middle" fill="#10B981" fontSize="8" fontFamily="monospace" fontWeight="bold">TRAFFIC INSPECTED</text>

        <defs>
          <linearGradient id="shieldGradient" x1="24" y1="8" x2="24" y2="45" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8955FF" />
            <stop offset="1" stopColor="#6C38E8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

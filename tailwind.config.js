/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080916',
        card: {
          DEFAULT: 'rgba(255, 255, 255, 0.03)',
          hover: 'rgba(255, 255, 255, 0.06)',
          border: 'rgba(255, 255, 255, 0.08)',
          solid: '#0D0F24'
        },
        primary: {
          DEFAULT: '#8955FF',
          dark: '#6C38E8',
          light: '#A37AFF',
          glow: 'rgba(137, 85, 255, 0.35)'
        },
        secondary: {
          DEFAULT: '#B49AFF',
          light: '#D3C2FF',
          muted: '#8B7FB8'
        },
        surface: {
          900: '#080916',
          800: '#0e1026',
          700: '#151838',
          600: '#1e224d'
        },
        muted: '#A7A9BE'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Fira Code"', 'Consolas', 'monospace']
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatReverse 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        }
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(137, 85, 255, 0.25)',
        'glow-md': '0 0 25px rgba(137, 85, 255, 0.35)',
        'glow-lg': '0 0 45px rgba(137, 85, 255, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }
    },
  },
  plugins: [],
}

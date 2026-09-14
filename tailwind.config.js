/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#07080E',
        surface: {
          1: '#0E111B',
          2: '#141824',
          3: '#1A2030',
        },
        brand: {
          purple: '#6C2EB9',
          purpleDark: '#4A1D80',
          blue: '#1E50C8',
          blueDark: '#0A2540',
          cyan: '#009EE1',
          cyanLight: '#00D4FF',
          neon: '#00FF88',
        }
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'og-gradient': 'linear-gradient(135deg, #6C2EB9 0%, #1E50C8 50%, #009EE1 100%)',
        'og-gradient-subtle': 'linear-gradient(135deg, rgba(108,46,185,0.2) 0%, rgba(30,80,200,0.2) 50%, rgba(0,158,225,0.2) 100%)',
      },
      animation: {
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(35px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

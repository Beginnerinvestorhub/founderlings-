import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // If you have src directory
  ],
  
  // Enable dark mode with class strategy
  darkMode: 'class',
  
  theme: {
    extend: {
      // ===== MECHANICA COLOR SYSTEM =====
      colors: {
        // Base colors from mechanica design system
        background: 'var(--mechanica-bg-primary)',
        foreground: 'var(--mechanica-text-primary)',
        
        // Mechanical blues
        'mechanica-blue': {
          DEFAULT: 'var(--mechanica-moonlight-blue)',
          light: 'var(--mechanica-moonlight-blue-light)',
          dark: 'var(--mechanica-moonlight-blue-dark)',
          50: '#f0f4f7',
          100: '#d9e3eb',
          200: '#b3c7d7',
          300: '#8dabc3',
          400: '#678faf',
          500: '#4f738e', // Base
          600: '#385a73',
          700: '#2c3e50',
          800: '#1c2833',
          900: '#0f1722',
        },
        
        // Wood tones
        'mechanica-wood': {
          birch: {
            light: 'var(--mechanica-wood-birch-light)',
            medium: 'var(--mechanica-wood-birch-medium)',
            dark: 'var(--mechanica-wood-birch-dark)',
          },
          oak: {
            light: 'var(--mechanica-wood-oak-light)',
            medium: 'var(--mechanica-wood-oak-medium)',
            dark: 'var(--mechanica-wood-oak-dark)',
          },
        },
        
        // Metallic tones
        'mechanica-metal': {
          copper: 'var(--mechanica-metal-copper)',
          brass: 'var(--mechanica-metal-brass)',
          steel: 'var(--mechanica-metal-steel)',
          iron: 'var(--mechanica-metal-iron)',
        },
        
        // Component colors
        'mechanica-component': {
          gear: 'var(--mechanica-component-gear)',
          spring: 'var(--mechanica-component-spring)',
          bushing: 'var(--mechanica-component-bushing)',
          bearing: 'var(--mechanica-component-bearing)',
        },
        
        // Text colors
        'mechanica-text': {
          primary: 'var(--mechanica-text-primary)',
          secondary: 'var(--mechanica-text-secondary)',
          wood: 'var(--mechanica-text-wood)',
          metallic: 'var(--mechanica-text-metallic)',
        },
        
        // Ordinatus colors
        'ordinatus': {
          blue: 'var(--mechanica-ordinatus-blue)',
          silver: 'var(--mechanica-ordinatus-silver)',
          brass: 'var(--mechanica-ordinatus-brass)',
          steel: 'var(--mechanica-ordinatus-steel)',
        },
      },
      
      // ===== MECHANICA TYPOGRAPHY =====
      fontFamily: {
        'mechanica-mono': ['var(--mechanica-font-mechanical)', 'monospace'],
        'mechanica-technical': ['var(--mechanica-font-technical)', 'monospace'],
        'mechanica-sans': ['var(--mechanica-font-professional)', 'sans-serif'],
        'mechanica-serif': ['var(--mechanica-font-elegant)', 'serif'],
      },
      
      // ===== MECHANICA SPACING SYSTEM =====
      spacing: {
        'tolerance-xs': 'var(--mechanica-tolerance-xs)',
        'tolerance-sm': 'var(--mechanica-tolerance-sm)',
        'tolerance-md': 'var(--mechanica-tolerance-md)',
        'tolerance-lg': 'var(--mechanica-tolerance-lg)',
        'tolerance-xl': 'var(--mechanica-tolerance-xl)',
        'tolerance-xxl': 'var(--mechanica-tolerance-xxl)',
        
        'gear-1': 'var(--mechanica-gear-1)',
        'gear-2': 'var(--mechanica-gear-2)',
        'gear-3': 'var(--mechanica-gear-3)',
        'gear-4': 'var(--mechanica-gear-4)',
      },
      
      // ===== MECHANICA SIZING =====
      width: {
        'gear-mini': 'var(--mechanica-gear-size-mini)',
        'gear-small': 'var(--mechanica-gear-size-small)',
        'gear-medium': 'var(--mechanica-gear-size-medium)',
        'gear-large': 'var(--mechanica-gear-size-large)',
        'gear-xl': 'var(--mechanica-gear-size-xl)',
      },
      height: {
        'gear-mini': 'var(--mechanica-gear-size-mini)',
        'gear-small': 'var(--mechanica-gear-size-small)',
        'gear-medium': 'var(--mechanica-gear-size-medium)',
        'gear-large': 'var(--mechanica-gear-size-large)',
        'gear-xl': 'var(--mechanica-gear-size-xl)',
      },
      minWidth: {
        'gear-mini': 'var(--mechanica-gear-size-mini)',
        'gear-small': 'var(--mechanica-gear-size-small)',
      },
      minHeight: {
        'gear-mini': 'var(--mechanica-gear-size-mini)',
        'gear-small': 'var(--mechanica-gear-size-small)',
      },
      maxWidth: {
        'gear-xl': 'var(--mechanica-gear-size-xl)',
      },
      maxHeight: {
        'gear-xl': 'var(--mechanica-gear-size-xl)',
      },
      
      // ===== MECHANICA BORDERS =====
      borderWidth: {
        'machined': '1px',
        'engraved': '2px',
      },
      borderColor: {
        'mechanica-machined': 'var(--mechanica-moonlight-blue)',
        'mechanica-engraved': 'var(--mechanica-component-gear)',
        'mechanica-wood': 'var(--mechanica-wood-birch-dark)',
        'mechanica-metallic': 'var(--mechanica-metal-copper)',
      },
      
      // ===== MECHANICA SHADOWS =====
      boxShadow: {
        'mechanica-emboss': 'var(--mechanica-shadow-emboss)',
        'mechanica-engraved': 'var(--mechanica-shadow-engraved)',
        'mechanica-mechanical': 'var(--mechanica-shadow-mechanical)',
        'mechanica-wood-grain': 'var(--mechanica-shadow-wood-grain)',
        'mechanica-glow': '0 0 20px rgba(79, 115, 142, 0.3)',
      },
      
      // ===== MECHANICA ANIMATIONS =====
      animation: {
        // Rotation animations
        'mechanica-rotate-slow': 'mechanica-rotate-clockwise var(--mechanica-rotation-slow) linear infinite',
        'mechanica-rotate-medium': 'mechanica-rotate-clockwise var(--mechanica-rotation-medium) linear infinite',
        'mechanica-rotate-fast': 'mechanica-rotate-clockwise var(--mechanica-rotation-fast) linear infinite',
        'mechanica-rotate-reverse': 'mechanica-rotate-counter-clockwise var(--mechanica-rotation-reverse) linear infinite',
        
        // Mechanical motion
        'mechanica-oscillate': 'mechanica-oscillate 2s ease-in-out infinite',
        'mechanica-piston': 'mechanica-piston 1s ease-in-out infinite',
        'mechanica-steam': 'mechanica-steam 3s ease-out infinite',
        
        // Visual effects
        'mechanica-glow': 'mechanica-glow 2s ease-in-out infinite',
        'mechanica-hum': 'mechanica-hum 4s ease-in-out infinite',
        'mechanica-pulse-technical': 'mechanica-pulse-technical 2s infinite',
        'mechanica-ticker-scroll': 'mechanica-ticker-scroll 30s linear infinite',
        'mechanica-wood-grain': 'mechanica-wood-grain 3s ease-in-out infinite',
      },
      
      // ===== MECHANICA GRADIENTS =====
      backgroundImage: {
        'mechanica-moonlight-metallic': 'var(--mechanica-moonlight-blue-metallic)',
        'mechanica-metallic-gradient': 'var(--mechanica-metallic-gradient)',
        'mechanica-steel-gradient': 'var(--mechanica-steel-gradient)',
        'mechanica-brass-gradient': 'var(--mechanica-brass-gradient)',
        'mechanica-wood-panel': 'linear-gradient(45deg, var(--mechanica-wood-birch-light) 0%, var(--mechanica-wood-birch-medium) 50%, var(--mechanica-wood-birch-dark) 100%)',
      },
      
      // ===== MECHANICA TRANSITIONS =====
      transitionDuration: {
        'mechanica-slow': '500ms',
        'mechanica-medium': '300ms',
        'mechanica-fast': '150ms',
      },
      transitionTimingFunction: {
        'mechanica-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'mechanica-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      
      // ===== MECHANICA LAYER EFFECTS =====
      backdropBlur: {
        'mechanica-light': '2px',
        'mechanica-medium': '8px',
        'mechanica-heavy': '16px',
      },
      
      // ===== CUSTOM UTILITIES =====
      zIndex: {
        'gear-under': '-10',
        'gear-base': '0',
        'gear-over': '10',
        'gear-top': '50',
        'gear-max': '100',
      },
      
      // ===== RESPONSIVE BREAKPOINTS =====
      screens: {
        'xs': '475px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
  
  // ===== MECHANICA PLUGINS =====
  plugins: [
    // Add custom utilities
    function({ addUtilities}:any) {
      const newUtilities = {
        // Mechanical text shadows
        '.text-shadow-mechanica': {
          textShadow: '0 1px 3px rgba(31, 45, 56, 0.3)',
        },
        
        // Mechanical borders
        '.border-mechanica-machined': {
          border: 'var(--mechanica-border-machined)',
        },
        '.border-mechanica-engraved': {
          border: 'var(--mechanica-border-engraved)',
        },
        
        // Mechanical scrollbar
        '.scrollbar-mechanica': {
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'var(--mechanica-bg-wood)',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'var(--mechanica-metal-copper)',
            borderRadius: '4px',
            '&:hover': {
              background: 'var(--mechanica-metal-brass)',
            },
          },
        },
        
        // Mechanical selection
        '.selection-mechanica': {
          '&::selection': {
            backgroundColor: 'var(--mechanica-moonlight-blue)',
            color: 'white',
          },
        },
        
        // Mechanical focus rings
        '.focus-mechanica': {
          '&:focus': {
            outline: '2px solid var(--mechanica-metal-copper)',
            outlineOffset: '2px',
            boxShadow: '0 0 0 3px rgba(184, 115, 51, 0.3)',
          },
        },
        
        // Mechanical gradient text
        '.text-gradient-mechanica': {
          background: 'var(--mechanica-moonlight-blue-metallic)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
        
        // Mechanical gear utility
        '.gear-base': {
          display: 'inline-block',
          borderRadius: '50%',
          position: 'relative',
          background: 'var(--mechanica-steel-gradient)',
          boxShadow: 'var(--mechanica-shadow-mechanical)',
          willChange: 'transform',
          transform: 'translateZ(0)',
        },
      };
      
      addUtilities(newUtilities);
    },
    
    // Add components
    function({ addComponents}:any {
      const components = {
        // Mechanical card
        '.mechanica-card': {
          backgroundColor: 'var(--mechanica-bg-primary)',
          border: 'var(--mechanica-border-machined)',
          borderRadius: '8px',
          padding: 'var(--mechanica-gear-3)',
          boxShadow: 'var(--mechanica-shadow-mechanical)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'var(--mechanica-metallic-gradient)',
          },
        },
        
        // Mechanical button
        '.mechanica-btn': {
          background: 'var(--mechanica-moonlight-blue-metallic)',
          color: 'white',
          border: 'none',
          padding: 'var(--mechanica-tolerance-md) var(--mechanica-gear-3)',
          fontFamily: 'var(--mechanica-font-mechanical)',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          borderRadius: '4px',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          boxShadow: 'var(--mechanica-shadow-emboss)',
          willChange: 'transform, box-shadow',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 12px rgba(31, 45, 56, 0.4)',
          },
          '&:focus': {
            outline: '2px solid var(--mechanica-metal-copper)',
            outlineOffset: '2px',
            boxShadow: '0 0 0 3px rgba(184, 115, 51, 0.3)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            transition: 'left 0.5s',
          },
          '&:hover::before': {
            left: '100%',
          },
        },
      };
      
      addComponents(components);
    },
  ],
};

export default config;
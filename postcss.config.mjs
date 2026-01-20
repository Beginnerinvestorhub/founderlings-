/** @type {import('postcss-load-config').Config} */

// Plugins for all environments
const basePlugins = {
  // Import other CSS files first
  'postcss-import': {},
  
  // Enable modern CSS nesting (alternative to Tailwind's nesting)
  'tailwindcss/nesting': 'postcss-nesting',
  
  // Tailwind CSS
  tailwindcss: {},
  
  // Autoprefixer
  autoprefixer: {
    flexbox: 'no-2009',
    grid: 'autoplace',
  },
};

// Plugins only for production
const productionPlugins = {
  // Modern CSS features with polyfills
  'postcss-preset-env': {
    stage: 3,
    features: {
      'custom-properties': true,
      'custom-media-queries': true,
      'media-query-ranges': true,
      'nesting-rules': false, // Already handled by postcss-nesting
      'color-functional-notation': true,
      'oklab-function': true,
      'logical-properties-and-values': true,
    },
    autoprefixer: false, // Disable autoprefixer here since we're using it separately
  },
  
  // CSS minification and optimization
  cssnano: {
    preset: ['default', {
      discardComments: {
        removeAll: true,
      },
      normalizeWhitespace: false, // Better for debugging
      normalizeUrl: false, // Don't touch URLs
      colormin: true,
      convertValues: {
        length: false, // Don't convert px to rem in mechanical system
        angle: true,
        time: true,
      },
      discardUnused: {
        fontFace: false, // Keep font-face declarations
        counterStyle: false,
        keyframes: false,
      },
      mergeRules: true,
      mergeIdents: false, // Don't merge animation names
      reduceIdents: false, // Don't rename animation names
      zindex: false, // Don't reorder z-index values
      discardDuplicates: true,
    }],
  },
};

// Combine plugins based on environment
const config = {
  plugins: process.env.NODE_ENV === 'production'
    ? { ...basePlugins, ...productionPlugins }
    : basePlugins,
};

// Optional: Add source maps in development
if (process.env.NODE_ENV !== 'production') {
  config.map = {
    inline: false,
    annotation: true,
    sourcesContent: true,
  };
}

export default config;
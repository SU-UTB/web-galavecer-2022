const production = !process.env.ROLLUP_WATCH
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    colors: {
      red: '#FF0E1C',
      gold: '#E8D696',
      white: '#FFFFFF',
      black: '#000000',
      brown: '#4B2000',
    },
    screens: {
      // => @media (min-width: 360px) { ... }
      'extra-sm': '360px',
      'sm': '420px',
      'mobile': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [
  ],
  purge: {
    content: [
      "./src/**/*.svelte",
    ],
    enabled: true // disable purge in dev
  },
};
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0D0D0D', // near black
        primary: '#8A2BE2', // electric purple
        secondary: '#00BFFF', // neon blue
        heading: '#FFFFFF',
        body: '#D1D5DB',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        card3d: '0 6px 30px 0 rgba(138,43,226,0.3), 0 1.5px 4px 0 rgba(0,191,255,0.2)',
      },
      borderRadius: {
        glass: '1.5rem',
      },
    },
  },
  plugins: [],
};

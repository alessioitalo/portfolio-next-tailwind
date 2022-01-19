module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        myDark: '#334756',
        myOrange: '#FF4C29',
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

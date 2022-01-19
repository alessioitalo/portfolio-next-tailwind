module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // myDark: '#334756',
        myOrange: '#FF4C29',
        lightBgTop: '#F0F0F0',
        lightBgBottom: '#E5E5E5',
        darkBgTop: '#082032',
        darkBgBottom: '#2c394b',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        myOrange: '#FF4C29',
        darkBgTop: '#082032',
        darkBgBottom: '#2c394b',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  // plugins: [],
};

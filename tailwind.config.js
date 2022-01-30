module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      backgroundImage: {
        light: "url('https://firebasestorage.googleapis.com/v0/b/alessioitalo-portfolio.appspot.com/o/waves-LIGHT.svg?alt=media&token=2f0a5126-460b-4f71-8ce4-437d557a5149')",
        dark: "url('https://firebasestorage.googleapis.com/v0/b/alessioitalo-portfolio.appspot.com/o/waves.svg?alt=media&token=c4ade65b-c7f3-4872-8980-728ffbe715df')"
      },
    },
  },
  // plugins: [],
};

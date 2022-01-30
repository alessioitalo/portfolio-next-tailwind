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
        // light:
        //   "url('https://firebasestorage.googleapis.com/v0/b/alessioitalo-portfolio.appspot.com/o/bg-light.svg?alt=media&token=708eead7-e43c-449e-b6a2-a0e539944b71')",
        // light: "url('https://firebasestorage.googleapis.com/v0/b/alessioitalo-portfolio.appspot.com/o/waves.svg?alt=media&token=c4ade65b-c7f3-4872-8980-728ffbe715df')",
        // dark: "url('https://firebasestorage.googleapis.com/v0/b/alessioitalo-portfolio.appspot.com/o/bg-dark.svg?alt=media&token=64e0d919-86d0-421a-9481-44ad8233fcb5')",
        dark: "url('https://firebasestorage.googleapis.com/v0/b/alessioitalo-portfolio.appspot.com/o/waves.svg?alt=media&token=c4ade65b-c7f3-4872-8980-728ffbe715df')"
      },
    },
  },
  // plugins: [],
};

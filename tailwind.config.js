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
        // light: "url('../public/bg-light.svg')",
        light:
          "url('https://firebasestorage.googleapis.com/v0/b/alessioitalo-portfolio.appspot.com/o/bg-light.svg?alt=media&token=708eead7-e43c-449e-b6a2-a0e539944b71')",
        // dark: "url('../public/bg-dark.svg')",
        dark: "url('https://firebasestorage.googleapis.com/v0/b/alessioitalo-portfolio.appspot.com/o/bg-dark.svg?alt=media&token=64e0d919-86d0-421a-9481-44ad8233fcb5')",
      },
    },
  },
  // plugins: [],
};

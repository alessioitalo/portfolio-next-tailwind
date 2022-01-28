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
        // light: "url('../public/wave-light.svg')"
        light: "url('../public/bg-light.svg')",
        dark: "url('../public/bg-dark.svg')",
      },
    },
  },
  // plugins: [],
};

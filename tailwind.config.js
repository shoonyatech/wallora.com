module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    // compiled the css with the below primary and secondary colors and linked with _app.tsx.
    colors: {
      primary: '#C54582',
      secondary: '#F4DCF4',
      'app-background': '#fff',
    },
    extend: {
      backgroundImage: (theme) => ({
        'sprite-background': "url('/images/icons.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

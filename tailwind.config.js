module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, 
  theme: {
    extend: {
      backgroundImage: theme => ({
        'sprite-background': "url('/images/icons.png')",
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        'footer': '#f4dcf4',
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

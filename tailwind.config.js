module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: () => ({
        'sprite-background': "url('/images/icons.png')",
      }),
      boxShadow: {
        fb: '0 -2px 5px rgb(128,128,128)',
        fbpanel: '0 1px 10px grey',
      },
      // compiled the css with the below primary and secondary colors and linked with _app.tsx.
      colors: {
        primary: '#C54582',
        secondary: '#F4DCF4',
        'app-background': '#fff',
        orange: '#ff5a42',
      },
      fontFamily: {
        sans: [
          'Source Sans Pro',
          'sans-serif',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

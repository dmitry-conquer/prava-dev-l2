module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1293px",
    },
    extend: {
      fontSize: {
        '4xl': '2rem',
      },
      colors: {
        'primary': {
          DEFAULT: '#EA8F4D'
        },
        'typo': {
          'dark': '#012231',
          'light': '#6B6B6B',
        }
      }
    },
    fontFamily: {
      noto: ["Noto Sans Display", "sans-serif"],
    },
  },
};
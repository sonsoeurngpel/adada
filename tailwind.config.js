module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'teal': '#FF3333',
      'pale-yellow': '#fff8c2',
      'maastricht': '#062231',
    },
    extend: {
      fontFamily: {
        justanotherhand: 'JustAnotherHand-Regular'
      },
      animation: {
        bounce: 'bounce 0.3s infinite',
        wiggle: 'wiggle 1s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
          transform: 'scale(1.2) rotate(7deg)',
          },
          '50%': {
            transform: 'scale(0.8) rotate(7deg)',
          },
      },
    },
  },
},

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
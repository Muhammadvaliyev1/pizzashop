/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
        Quicksand: ['Quicksand'],
        DMSans: ['DM Sans'],
      },
      maxWidth: {
        '8xl': '1440px',
        '2.5xl': '700px',
      },
      fontSize: {
        '10xl': '142px'
      },
      colors: {
        'lime': '#13CC00',
        'Grlime': '#8CC641',
        'Glime': '#27B674',
        'limeGreen': '#388E3C',
        'GrlimeGreen': '#28B674',
        'GrayBlue': '#292930',
        'Gray': '#A3A3A3',
        'Yellow': '#FFDC60',
      },
    },
  },
  plugins: [],
}


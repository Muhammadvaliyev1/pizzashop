/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
        AlexBrush: ['Alex Brush'],
        Quicksand: ['Quicksand'],
        DMSans: ['DM Sans'],
      },
      screens: {
        'base': '480px'
      },
      maxWidth: {
        '8xl': '1440px',
        '2.5xl': '700px',
        'xm': '194px',
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
        'darkChoco': '#210A01',
      },
      backgroundImage: {
        'liner': 'linear-gradient(261.69deg, #FF6432 12.12%, #FFA228 86.72%);'
      }
    },
  },
  plugins: [],
}


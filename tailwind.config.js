/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem'
    },
    fontFamily: {
      'serif': ['Inter'],
      'display': ['PT Serif', 'serif']
    },
    colors: {
      'white': '#ffffff',
      'purple': {
        100: '#9068A3',
        200: '#816F8A'
      },
      'neutral-dark': {
        100: '#3D4E54',
        150: '#BBC1C3',
        200: '#6E7A7F',
        250: '#083D4F',
      },
      'neutral-light': {
        100: '#D4DCDF',
      }
    },
    dropShadow: {
      'button': '5px 10px #000000',
      'input': '3px 5px #D4DCDF'
    },
  },
  plugins: [],
}

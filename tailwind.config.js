/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage:{
        blur: 'url(https://media-exp1.licdn.com/dms/image/C4D1BAQG64ZwhVLgkTA/company-background_10000/0/1601064821174?e=1656910800&v=beta&t=rr_T85j6AGFuSMSgBoIODjHHoW4A1Vy3VLlio1iCkSI)'
      },
      fontFamily:{
        sans: 'Roboto, sans-serif',
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#7EDF5E',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    },
  },
  plugins: [],
}

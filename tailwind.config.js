module.exports = {
  theme: {
    fontFamily: {
      body: ['"Source Sans Pro"', 'sans-serif'],
      muli: ['"Source Sans Pro"', 'sans-serif'],
   },  
    extend: {
      colors: {
        'homer': {
          100: '#FFFEE6',
          200: '#FFFCBF',
          300: '#FFF999',
          400: '#FFF54D',
          500: '#FFF100',
          600: '#E6D900',
          700: '#999100',
          800: '#736C00',
          900: '#4D4800',
          },
        'slate': {
          100: '#ECECEC',
          200: '#CECECE',
          300: '#B1B1B1',
          400: '#777777',
          500: '#3C3C3C',
          600: '#363636',
          700: '#242424',
          800: '#1B1B1B',
          900: '#121212',
          },  
        'pendle': {
          100: '#F1F9F9',
          200: '#DCF0EF',
          300: '#C7E6E5',
          400: '#9CD4D2',
          500: '#72C1BE',
          600: '#67AEAB',
          700: '#447472',
          800: '#335756',
          900: '#223A39',
          },      
        'barton': {
          100: '#F0F6FE',
          200: '#DAE8FD',
          300: '#C3DBFC',
          400: '#97BFFA',
          500: '#6AA4F8',
          600: '#5F94DF',
          700: '#406295',
          800: '#304A70',
          900: '#20314A',
          },
        'dyche': {
          100: '#FEEFE9',
          200: '#FCD8C8',
          300: '#FAC1A7',
          400: '#F69264',
          500: '#F26322',
          600: '#DA591F',
          700: '#913B14',
          800: '#6D2D0F',
          900: '#491E0A',
          }, 
        'greyscale': {
            100: '#f9f9fb',
          }                            
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}

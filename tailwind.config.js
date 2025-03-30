/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: 
  {
    extend: 
    {
      boxShadow:
      {
        'dl': 'gray 2px 2px 10px',
        'kl': 'gray 1px 1px 10px',
        'ml': 'black 2px 2px 10px',
        'fl': 'rgba(128, 128, 128, 0.774) 2px 2px 10px',
        'green': 'rgb(0, 100, 0, 0.5) 2px 2px 20px'
      },
      animation: {
        'tourn': 'back 3s linear infinite',
        'trn': 'back 1s linear ',
        'apparution':'apparution 0.2s linear',
        'slide':'slide 3s infinite',
      },



      keyframes: {
        back: {
          '0%':
          {  
            transform: 'rotate(0deg) scale(0%)',
          },
          '50%':
          {
            transform: 'rotate(180deg) scale(100%)',
          },
          '100%':
          {
            transform: 'rotate(360deg) scale(0%)',
          },
        },
        apparution:
        {
          '0%':
          {
            transform:'scale(0%)'
          },
          '100%':
          {
            transform:'scale(100%)'
          }
        },
        trn:{
          '0%':{
            transform:'rotate(10deg)',
          }
        },
        slide:
        {
          '0%':
          {
            transform :'translate-x:(0px)'
          },
          '100%':
          {
            transform:'translate-x:(500px)'
          }
        }
      }
    },
    fontFamily:
    {
      'arial':'arial',
      'verdana':'Verdana, Geneva, Tahoma, sans-serif',
      'sans':'sans-serif',
      'roboto':'roboto',
      'italic':'italic'
    },
    screens: {
      'dl':{'max': '1430px'},

      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [

  ],
}






















//npx tailwindcss -i ./src/input.css -o ./src/public/assets/css/output.css --watch
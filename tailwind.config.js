/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors:{
        light:'#F7F7F7',
        blue:'#57b4d6',
        lightGray:'#BAC2BF',
        lightBlack:'#626562',
        brown:'#97836E',
        black:'#030518',
        
      },
//       animation:{
// 'spin-slow':'spin 8s linear infinite'
//       },
      backgroundImage:{
circularLight:'repeating-radial-gradient(rgba(0,0,0,0.4)2px,white 5px, white 100px)',
circularDark:'repeating-radial-gradient(rgba(0,0,0,0.4)2px,white 8px, white 100px)',

circularLightLg:'repeating-radial-gradient(rgba(0,0,0,0.4)2px,white 5px, white 80px)',
circularDarkLg:'repeating-radial-gradient(rgba(0,0,0,0.4)2px,white 8px, white 80px)',

circularLightMd:'repeating-radial-gradient(rgba(0,0,0,0.4)2px,white 5px, white 40px)',
circularDarkMd:'repeating-radial-gradient(rgba(0,0,0,0.4)2px,white 6px, white 60px)',

circularLightSm:'repeating-radial-gradient(rgba(0,0,0,0.4)2px,white 5px, white 40px)',
circularDarkSm:'repeating-radial-gradient(rgba(0,0,0,0.4)2px,white 4px, white 20px)'
      }
    },
    screens:{
      "2xl":{max:"1535px"},
      xl:{max:"1279px"},
      lg:{max:"1092px"},
      md:{max:"767px"},
      sm:{max:"639"},
      xs:{max:"479"},
    },
  },

 
  plugins: [
    require('tailwind-scrollbar')
  ],
}


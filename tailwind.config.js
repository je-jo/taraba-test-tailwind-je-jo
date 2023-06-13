/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
        'heading': ['Comfortaa', ...defaultTheme.fontFamily.sans],
        'heading-bold': ['"Taraba Comfortaa"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'trb-orange0': 'hsl(25, 100%, 28%)', // #913C00
        'trb-orange1': 'hsl(28, 100%, 50%)', //#FF7800
        'trb-orange3': 'hsl(31, 100%, 61%)', //#FFA039
        'trb-orange4': 'hsl(31, 100%, 80%)', //#FFCF9B
        'trb-black2': 'hsl(0, 0%, 18%)', //#2D2D2D
        'trb-black3': 'hsl(0, 0%, 40%)', //#666666
        'trb-black4': 'hsl(0, 0%, 60%)', //#999898
        'trb-grey0': 'hsl(0, 0%, 31%)', //#505050;
        'trb-grey1': 'hsl(0, 0%, 67%)', //#ABABAB
        'trb-grey2': 'hsl(0, 0%, 84%)', //#D7D7D7
        'trb-grey3': 'hsl(0, 0%, 90%)', //#E6E6E6;
        'trb-grey4': 'hsl(0, 0%, 98%)', //#FAFAFA
        // 'bg-color': 'hsl(var(--bg-color) / <alpha-value>)',
        // 'txt-color': 'hsl(var(--txt-color) / <alpha-value>)',
        // 'para-txt-color': 'hsl(var(--para-txt-color) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}




/* $orange-shadow: adjust-color($trb-orange0, $alpha: -0.75);
$orange-bg: adjust-color($trb-orange4, $alpha: -0.9);
$grey-bg: adjust-color($trb-grey2, $alpha: -0.8);
$grey-bg2: adjust-color($trb-grey2, $alpha: -0.7); */
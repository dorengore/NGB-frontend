import { heroui } from "@heroui/theme";
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',

    //   Individual components from HeroUI do not require this
    // "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    // use this
    "./node_modules/@heroui/theme/dist/components/(avatar|button|card|checkbox|chip|code|date-input|date-picker|divider|dropdown|image|input|kbd|link|listbox|modal|navbar|popover|progress|radio|select|slider|snippet|spinner|toggle|tabs|user|ripple|form|calendar|menu|scroll-shadow).js"
  ],
  theme: {
    extend: {
      colors: {
        "button-gold": "#B8860B",
        "button-gold-hover": "#A6780B",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top,  #212529 55%, #212529  100%)',
        'custom-gradient-dark': 'linear-gradient(to top,  #212529 55%, #212529  100%)',
        // 'custom-gradient': 'linear-gradient(to top,  rgba(24, 11, 58, 0.55) 55%,rgba(27, 23, 38, 0.55)  100%)',
        // 'custom-gradient-dark': 'linear-gradient(to top,  #180B3A,#1B1726)',
        // 'custom-gradient': 'linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)',
        // 'custom-gradient-dark': 'linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)',
      },
      fontFamily: {
        sans: [ "var(--font-sans)" ],
        mono: [ "var(--font-mono)" ],
      },
    },
  },
  darkMode: "class",
  plugins: [ heroui() ],
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#0f162b',
      }
    },
  },


 
// add daisyUI plugin
// plugins: [require("daisyui")],

// // daisyUI config (optional - here are the default values)
// daisyui: {
//   themes:[
//     {
//     mytheme: {
//       "primary": "#a991f7",
//       "secondary": "#f6d860",
//       "accent": "#37cdbe",
//       "neutral": "#3d4451",
//       "base-100": "#111828",
//     },
//   }
//   ,"light","dark","synthwave"],
//  //  themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
//   darkTheme: "mytheme", // name of one of the included themes for dark mode
//   // darkTheme: "dark", // name of one of the included themes for dark mode
//   base: true, // applies background color and foreground color for root element by default
//   styled: true, // include daisyUI colors and design decisions for all components
//   utils: true, // adds responsive and modifier utility classes
//   prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
//   logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
//   themeRoot: ":root", // The element that receives theme color CSS variables
// },

  
};

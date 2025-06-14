// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
       screens: {
      'xs': '250px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
  plugins: [require('tailwind-scrollbar-hide')],

};

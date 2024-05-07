/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/**/*.{html,js}"],
    theme: {
      screens: {
        'xs': '475px',
        // => @media (min-width: 475px) { ... }

        'sm': '700px',
        // => @media (min-width: 640px) { ... }
  
        'md': '800px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

      },
      extend: {},
    },
    plugins: [],
  }
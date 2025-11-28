/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Principal Colors
        'principal-dark-blue': '#1B365E',
        'principal-red-rose': '#FF5757',
        'principal-yellow': '#FFBC42',

        // Secondary Colors
        'secondary-green': '#B6C93E',  // Lime green
        'secondary-light-blue': '#40BFDE', // Sky blue
        'secondary-fuchsia': '#A36490', // Fuchsia
        'secondary-dark-green': '#1B515E', // Teal-ish dark green
        'secondary-orange': '#FC7F16', // Orange
        'secondary-light-pink': '#FFC0CB', // Light pink
        'secondary-red': '#E92626',  // Bright red

        // Texts
        'text-black': '#1D1D1D',
        'text-dark-blue': '#1B365E',

        // Backgrounds
        'bg-beige': '#FFE4B4', // Light beige
        'bg-light-blue': '#C7F8FF', // Azure-ish
        'bg-white': '#FFFFFF',

        // Grays (from dark to light, based on the swatches)
        'gray-800': '#333333',
        'gray-600': '#7C7C7C',
        'gray-400': '#ABABAB',
        'gray-200': '#D9D9D9',
        'gray-100': '#EFEFEF',

      },
      // Gradients (use as bg-gradient-to-b from-principal-orange to-principal-pink)
      backgroundImage: {
        'principal-gradient': 'linear-gradient(to bottom, #FFBC42 26%, #FF5757 100%)',
      },
      // Fonts
      fontFamily: {
        'red-hat-display': ["'Red Hat Display'", 'sans-serif'],
        'lato': ["'Lato'", 'sans-serif'],
      },
      // Font Sizes
      fontSize: {
        'hh1': '5rem',       // 80px - RH Light for top-level titles
        'h1': '3.75rem',     // 60px - RH Regular for big titles (H1 PA)
        'h2': '3.75rem',     // 60px - RH Light for sub-big titles (H2 Sous)
        'h3': '3.625rem',    // 58px - RH SemiBold for keys/management (H3)
        'title-lg': '2.5rem', // 40px - RH Light for titles
        'search': '1.875rem', // 30px - RH Light for search/formations
        'small-title': '1.25rem', // 20px - Lato Medium for small titles
        'attribute': '1rem',  // 16px approx - Lato Medium for attributes
        'p-large': '1.125rem', // 18px - Lato Regular for large paragraphs
        'p-bold': '0.9375rem', // 15px - Lato Bold
        'p-regular': '0.9375rem', // 15px - Lato Regular
        'p-small': '0.75rem', // 12px - Lato Regular
        'p-xsmall': '0.625rem', // 10px - Lato Regular
        'button-large': '1rem', // 16px - Lato Bold for large buttons
        'button-cta': '0.875rem', // 14px - Lato Bold for CTA buttons
      },
    },
  },
  plugins: [], 
};
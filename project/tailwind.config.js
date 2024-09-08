/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    variants: {
      extend: {
        boxShadow: {
          'bottom': '0 4px 6px -1px rgba(0, 0, 0, 0.1)', // Sombra personalizada apenas na parte inferior
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }
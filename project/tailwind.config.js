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
        backgroundColor: ['focus-visible'],
      },
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }
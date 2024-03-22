/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '3.5xl': '32px',
      },
      colors:{
        'semiblack': '#1F2937'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins','sans-serif'],
        'sans':['DM Sans','sans-serif']
      },
    },
  },
  plugins: [],
}


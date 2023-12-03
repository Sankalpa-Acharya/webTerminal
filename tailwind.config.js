/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {'wallpaper':"url('./src/assets/img/kali.png')"},
      backgroundColor:{
        'primary':'#282A36'
      }
    },
  },
  plugins: [],
}
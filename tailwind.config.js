/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // ✅ Scan all files in the `app` folder
    "./components/**/*.{js,jsx,ts,tsx}", // ✅ If you have components in a separate folder
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary:"#030014",
        secondary:"#151312",
        accent:"#AB8BFF",
        light:{
          100:"#D6C6FF",
          200:"#A8B5DB",
          300:"#9CA4AB",
        },
        dark:{
         100:"#221f3d",
         200:"#0f0d23",
        }
      }
    },
  },
  plugins: [],
}
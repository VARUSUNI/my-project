/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   './*.html','./src/**/*.css','./src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      borderWidth:{
         "1":"1px:"
      }
    },
    
  },
  plugins: [],
}
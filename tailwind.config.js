/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      backgroundImage: () => ({
        'heroGirl': "url('./src/assets/heroGirl.svg')",
    }),
    heroImage: {
      'heroImage': "url('../src/assets/heroImage2.svg')",
    },
  },
},
  plugins: [],
  }
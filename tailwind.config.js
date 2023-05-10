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
    boxShadow: {
      'custom': '6px 13px 9px 3px rgba(0,0,0,0.22)',
    },
  },
},
  plugins: [],
  }
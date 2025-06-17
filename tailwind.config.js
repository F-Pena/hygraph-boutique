/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'indigo-600': 'rgb(102,99,253)'
      },
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
        'heading': ['Afacad Flux', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


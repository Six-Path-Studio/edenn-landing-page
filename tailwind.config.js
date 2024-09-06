/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'green': "#0A3B1F",
      'bg': "#F1F1F1"
    },
    screens: {
      sm: { max: "700px" },
      xs: { max: "320px" },
      md: "700px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
}
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Add this line to enable dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D9E8FF",
        dprimary: "##1f1e1e",
        hov: "#5C9CFF",
        navy: "#28387D",
        li: "#3C55B7",
        light: {
          text: "#00000", 
          bg: "#EFF6FF", 
        },
        dark: {
          text: "#828282",
          bg: "#000000", 
        },
      },
    },
  },
  plugins: [],
};
export default config;

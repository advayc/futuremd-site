import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|divider).js"
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Inter', 'sans-serif']
  		},
  		colors: {
  			primary: '#D9E8FF',
  			dprimary: '#171616',
  			hov: '#5C9CFF',
  			navy: '#28387D',
  			li: '#3C55B7',
  			light: {
  				text: '#00000',
  				bg: '#EFF6FF'
  			},
  			dark: {
  				text: '#828282',
  				bg: '#000000'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [nextui(), require("tailwindcss-animate")],
};

export default config;

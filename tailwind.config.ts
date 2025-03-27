import type { Config } from "tailwindcss";
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: { 
        marquee: { 
          '0%': { transform: 'translateX(100%)' }, 
          '100%': { transform: 'translateX(-100%)' }, 
        },
        stopMarquee: {
          '0%, 100%': { transform: 'translateX(0%)' },
        }
      }, 
      animation: { 
        marquee: 'marquee 15s linear infinite',
        stopMarquee: 'None' 
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        "logo-blue":"#156082",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
			fontFamily: {
				sans: ['Roboto', '"Segoe UI"', 'sans-serif', ...fontFamily.sans],
			},
      fontSize: {
        'dynamic-board': 'clamp(2rem, calc(5vw), 4rem)',
        'dynamic-board-item': 'clamp(2rem, calc(4vw), 3rem)',
        'dynamic-board-writeup': 'clamp(1.5rem, calc(2vw), 3rem)',
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
export default config;

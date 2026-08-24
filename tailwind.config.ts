import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FFFFFF",
          card: "#FFFFFF",
          cardBorder: "#18181B",
          text: "#09090B",
          muted: "#52525B",
          subtle: "#71717A",
        },
      },
      fontFamily: {
        typewriter: ["var(--font-typewriter)", "Courier New", "Courier", "monospace"],
        magazine: ["var(--font-magazine)", "Georgia", "serif"],
        sans: ["var(--font-typewriter)", "Courier New", "Courier", "monospace"],
        serif: ["var(--font-magazine)", "Georgia", "serif"],
        mono: ["var(--font-typewriter)", "Courier New", "Courier", "monospace"],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
};

export default config;

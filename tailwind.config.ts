import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        top: "#6F94B0",
        bottom: "#A8C5D3",
        darkBlue: "#1E2F44",
        lightBlue: "#D1E4EC",
        point: "#FFD700",
        lightWhite: "#f0f0f0",
        white: "#F5F5F5",
      },
      fontSize: {
        'xs': 'clamp(0.5rem, 2vw, 0.625rem)',
        's': 'clamp(0.6875rem, 2vw, 0.8125rem)',
        'm': 'clamp(0.875rem, 2vw, 1rem)',
        'l': 'clamp(1.0625rem, 2vw, 1.1875rem)',
        'xl': 'clamp(1.25rem, 2vw, 1.4375rem)',
      },
      borderWidth: {
        'thin': '0.0625rem',
      },
      cursor: {
        'star': 'url("/img/star2.png"), auto',
        'downArrow': 'url("/img/down_arrow_fill.png"), auto',
      },
    },
  },
  plugins: [],
} satisfies Config;

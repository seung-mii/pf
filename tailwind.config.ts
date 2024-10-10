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
        primary: "#1A2B3C",
        secondary: "#D1E4EC",
      },
      fontSize: {
        'xxs': '0.5rem',
        'xs': '9px',
        's': '10px',
        'xxm': '11px',
        'xm': '12px',
        'm': '13px',
        'xxl': '14px',
        'xl': '15px',
        'l': '16px',
      },
    },
  },
  plugins: [],
} satisfies Config;

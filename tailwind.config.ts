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
        backGround: "#748DA6",
        fontColor: "#F2D7D9",
        purple: "#D3CEDF",
        lightBlue: "#9CB4CC",
        darkBlue: "#4f6578",
        point: "#FFD700",
        lightWhite: "#F6F4EB",
        white: "#fff",
        grey: "#848484"
      },
      fontSize: {
        'xs': 'clamp(0.7rem, 2vw, 0.725rem)',
        's': 'clamp(0.725rem, 2vw, 0.85rem)',
        'm': 'clamp(0.85rem, 2vw, 1rem)',
        'l': 'clamp(1.0625rem, 2vw, 1.1875rem)',
        'xl': 'clamp(1.25rem, 2vw, 1.4375rem)',
      },
      borderWidth: {
        'thin': '0.0625rem',
      },
      cursor: {
        'circle': 'url("/img/circle.png"), auto',
        'circleHover': 'url("/img/circle_hover.png"), auto',
        'circleDark': 'url("/img/circle_dark.png"), auto',
        'circleDarkHover': 'url("/img/circle_darkhover.png"), auto',
        'scroll': 'url("/img/scroll.png"), auto',
      },
      fontFamily: {
        batang: ['"Gowun Batang"', 'serif'],
        myung: ['"Song Myung"', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

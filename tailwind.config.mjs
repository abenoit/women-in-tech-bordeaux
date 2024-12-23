/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      mainPurple: "#1E1336",
      lightPurple: "#7298FB",
      mediumPurple: "#975EE0",
      linkPurple: "#7E4EBE",
      subtitlePurple: "#663A9E",
      hoverPurple: "#5070CE",
      lightYellow: "#F9EEE3",
      darkPink: "#E67A50",
      bubblePink: "#FFD6DD",
      bubbleYellow: "#FFE7C6",
      bubbleBlue: "#CFDCFE",
      bubblePurple: "#E9C2EA",
      pink1: "#FFB6C2",
      pink2: "#F9C2A1",
      lightWhite1: "#E5E5E5",
      lightWhite2: "#FEFEFE",
      white: "#FFF",
      black: "#000",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      borderRadius: {
        sm: "10px",
      },
      fontSize: {
        md: "1.25em",
        lg: "1.5em",
        xl: "2em",
      },
      spacing: {
        1: "8px",
        1.5: "10px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
        7: "56px",
        8: "64px",
        9: "72px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

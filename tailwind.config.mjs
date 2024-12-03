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
      pink: "#FFB6C2",
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
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
      },
    },
  },
  plugins: [],
};

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
        primary: {
          light: "#6CB2EB",
          main: "#3490DC",
          dark: "#1C3D5A",
        },
        secondary: {
          light: "#FFB94A",
          main: "#FF8C00",
          dark: "#C76C00",
        },
      },
    },
  },
  plugins: [],
};
export default config;

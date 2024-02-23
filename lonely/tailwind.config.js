module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#a36ef4",
          main: "#8C4AF2",
          dark: "#6233a9",
        },
        secondary: {
          light: "#f5f6fa",
          main: "#e5eaff",
          dark: "#ddc7ff",
        },
        text: {
          head: "#323139",
          normal: "#4d4d4d",
          primary: "#212121",
          secondary: "#878787",
          white: "#ffffff",
        },
        border: {
          white: "#eff2f7",
          darkgray: "#495057",
          lightgray: "#abb0ba",
          gray: " #676e7e",
        },
      },
    },
  },
  plugins: [],
};

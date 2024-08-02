import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#cbd5e1",
      secondary: "#94a3b8",
      tersiery: "#212121",
      function: "#6076fd",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

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
        primary: "#3C6CE7",
      },
      fontFamily: {
        noto: ["Noto Sans Thai", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

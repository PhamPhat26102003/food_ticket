import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        counter: "#241a12", // wooden counter behind the ticket
        counterdark: "#150f0a",
        paper: "#fbecc4", // carbonless-copy paper
        paperdark: "#f3dfa8",
        ink: "#1d2e4a", // ballpoint navy
        stamp: "#b23a2e", // stamp red
        stampdark: "#8f2c22",
        teal: "#2f6f63",
      },
      fontFamily: {
        sans: ["var(--font-be-vietnam)", "sans-serif"],
        mono: ["var(--font-courier)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

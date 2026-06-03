import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"]
      },
      colors: {
        netflix: {
          red: "#e50914",
          deep: "#050505",
          ash: "#141414",
          muted: "#808080"
        }
      },
      boxShadow: {
        glow: "0 0 35px rgba(229, 9, 20, 0.28)",
        warm: "0 0 45px rgba(255, 124, 70, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backdropBlur: {
        lg: "16px",
      },
      animation: {
        wave: "wave-border 2s infinite ease-in-out",
      },
      keyframes: {
        "wave-border": {
          "0%": { boxShadow: "0 0 0 0 rgba(255, 0, 0, 0.7)" },
          "50%": { boxShadow: "0 0 10px 5px rgba(255, 0, 0, 0.5)" },
          "100%": { boxShadow: "0 0 0 0 rgba(255, 0, 0, 0.7)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

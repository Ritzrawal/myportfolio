/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        computer: "computer 2s ease",
      },
      keyframes: {
        computer: {
          "0%": { opacity: "0", transform: "translateX(500px)", scale: "1" },
          "100%": { opacity: "1", transform: "translateX(0)", scale: "1" },
        },
      },
    },
  },
  plugins: [],
};

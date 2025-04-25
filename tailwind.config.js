/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        computer: 'computer 2s ease',
        title: 'title 0.5s ease-in-out',
        details: 'details 2s ease-in-out',
      },
      keyframes: {
        computer: {
          '0%': { opacity: '0', transform: 'translateX(500px)', scale: '1' },
          '100%': { opacity: '1', transform: 'translateX(0)', scale: '1' },
        },
        title: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        details: {
          '0%': { left: '-100%' },
          '100%': { left: '0%' },
        },
      },
    },
    screens: {
      sm: '350px', // Small devices (phones)
      md: '768px', // Medium devices (tablets)
      lg: '1024px', // Large devices (laptops) - DEFAULT
      xl: '1280px', // Extra large (desktops)
    },
  },
  plugins: [],
};

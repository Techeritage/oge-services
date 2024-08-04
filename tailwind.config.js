/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      clash: ["ClashDisplay-Regular", "sans-serif"],
      clashmd: ["ClashDisplay-Medium", "sans-serif"],
      clashsm: ["ClashDisplay-Semibold", "sans-serif"],
      clashreg: ["ClashDisplay-Regular", "sans-serif"],
      clashbold: ["ClashDisplay-Bold", "sans-serif"],
    },
  },
  plugins: [],
};

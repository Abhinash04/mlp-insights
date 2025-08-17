export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        azeret: ["Azeret", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeOut: "fadeOut 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

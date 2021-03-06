module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        airbnb_pink: {
          DEFAULT: "#FF385C",
        },
        airbnb_background_grey: {
          DEFAULT: "#F7F7F7",
        },
        user_grey: {
          DEFAULT: "#717171",
        },
      },
      margin: {
        15: "3.75rem",
      },
      padding: {
        1.75: "0.4375rem",
      },
      width: {
        75: "18.75rem",
      },
      screens: {
        "largest-bp": "1440px",
        "logo-bp": "1128px",
        "search-bar-bp": "950px",
        "mobile-bp": "744px",
      },
      flex: {
        header: "0 1 140px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

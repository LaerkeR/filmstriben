/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    color: {
      white: "#ffffff",
      black: "#141414",
      grey: {
        50: "#F2F2F2",
        100: "#E6E6E6",
        200: "#CCCCCC",
        300: "#B3B3B3",
        400: "#999999",
        500: "#666666",
        600: "#4D4D4D",
        700: "#333333",
        800: "#1A1A1A",
        900: "#141414",
      },
      gold: {
        50: "#F8F5EC",
        100: "#F2EBD9",
        200: "#E4D7B4",
        300: "#D7C28E",
        400: "#CCB26F",
        500: "#CAAE68",
        600: "#977B35",
        700: "#715C28",
        800: "#4B3E1B",
        900: "#261F0D",
      },
      ashyGreen: "#839697",
      greyIsh: "#8E8E8E",
      mossGreen: "#656B61",
      deepOcean: "#7195C1",
      blueSky: "#698AA9",
      lavender: "#5966A1",
      rust: "#955A39",
      IMDb: "#F5C518",
      prettyBlue: "#8EA5BF",
    },
    fontFamily: {
      display: "din-condensed,Helvetica, Arial, sans-serif",

      body: "roboto, Helvetica, Arial, sans-serif",
    },

    fontSize: {
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
        },
      ],
      "3xl": [
        "1.875rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
    },
    extend: {
      color: {
        gold: "#CCB26F",
      },
    },
  },
  plugins: [],
};

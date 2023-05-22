/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    color: {
      white: "#ffffff",
      black: "#141414",

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

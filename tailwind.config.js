module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "grd": "url('/grd.png')",
        "svg":"url('/svg1.png')",
        "svg1":"url('/svg2.svg')",
        "mou":"url('/mou.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

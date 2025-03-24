module.exports = {
  content: [
    "./themes/informed-choice/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}

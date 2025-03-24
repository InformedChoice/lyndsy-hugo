module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html"],
  theme: {
    extend: {
      colors: {
        // Keep your existing color scheme from the template
        // Based on your template, I see you're using Tailwind's default colors
      },
    },
  },
  plugins: [require("daisyui")],
};

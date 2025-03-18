module.exports = {
  plugins: {
    "postcss-import": {
      // Add this to ensure proper path resolution for imports
      path: ["src/css", "./node_modules"]
    },
    "postcss-advanced-variables": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
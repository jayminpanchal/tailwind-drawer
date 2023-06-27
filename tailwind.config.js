/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        default: "rgb(var(--color-text-default) / <alpha-value>)",
        icon: "rgb(var(--color-icon-default) / <alpha-value>)",
      },
      backgroundColor: {
        default: "rgb(var(--color-bg) / <alpha-value>)",
        sidebar: "rgb(var(--color-bg-sidebar) / <alpha-value>)",
        "sidebar-header": "rgb(var(--color-bg-sidebar-header) / <alpha-value>)",
        "sidebar-selected": "rgb(var(--color-bg-sidebar-selected) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

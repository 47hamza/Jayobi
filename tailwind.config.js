/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        background:"var(--background)",
        main_text: "var(--main_text)",
      },
      fontFamily: {
        gilroy: "var(--family-gilroy)",
      },
    },
  },
  plugins: [],
};

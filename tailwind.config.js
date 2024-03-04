/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white":"#fff",
        "Seasalt": "#f8f9fa",
        "Anti-flashwhite": "#e9ecef",
        "Platinum": "#dee2e6",
        "Frenchgray": "#ced4da",
        "Frenchgray 2": "#adb5bd",
        "Slategray": "#6c757d",
        "Outerspace": "#495057",
        "Onyx": "#343a40",
        "Eerieblack": "#212529",
      }
    },
  },
  plugins: [],
};

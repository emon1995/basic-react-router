/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f2abb3",
          secondary: "#e0c57b",
          accent: "#f754d6",
          neutral: "#3A2A3C",
          "base-100": "#202446",
          info: "#A4D2EA",
          success: "#20B684",
          warning: "#A48404",
          error: "#FC404D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

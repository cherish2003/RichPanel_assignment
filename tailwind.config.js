/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#004e96",
        lightBlue: "#98c2fa",
        lavendar: "#f0f6ff",
        lightGray: "#F6F6F6",
      },
      backgroundColor: ["group-focus"],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    extend: {
      backgroundImage: {
        "light-background": "url('/src/assets/images/bg-mobile-light.jpg')",
        "light-desktop-bg": "url('/src/assets/images/bg-desktop-light.jpg')",
        "dark-desktop-bg": "url('/src/assets/images/bg-desktop-dark.jpg')",
        "dark-mobile-bg": "url('/src/assets/images/bg-mobile-dark.jpg')",
      },
      colors: {
        "bright-blue": "hsl(220, 98%, 61%)",
        "bg-1": "hsl(192, 100%, 67%)",
        "bg-2": "hsl(280, 87%, 65%)",
        "light-very-light-gray": "hsl(0, 0%, 98%)",
        "light-very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "light-light-grayish-blue": "hsl(233, 11%, 84%)",
        "light-dark-grayish-blue": "hsl(236, 9%, 61%)",
        "light-very-dark-grayish-blue": "hsl(235, 19%, 35%)",
        "dark-very-dark-blue": "hsl(235, 21%, 11%)",
        "dark-very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
        "dark-light-grayish-blue": "hsl(234, 39%, 85%)",
        "dark-light-grayish-blue-hover": "hsl(236, 33%, 92%)",
        "dark-dark-grayish-blue": "hsl(234, 11%, 52%)",
        "dark-very-dark-grayish-blue": "hsl(233, 14%, 35%)",
        "dark-very-dark-grayish-blue-v2": "hsl(237, 14%, 26%)",
        "gradient-1": "hsl(192, 100%, 67%)",
        "gradient-2": "hsl(280, 87%, 65%)",
      },
      fontFamily: {
        josefinSans: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

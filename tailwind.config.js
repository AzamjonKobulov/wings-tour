/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      maxWidth: {
        base: "86.5rem",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        brand: {
          "vivid-purple": {
            DEFAULT: "#7763E0",
            pressed: "#453499",
            hover: "#6451C8",
            disabled: "#ECE8FF",
          },
          "dark-purple": {
            DEFAULT: "#382176",
            pressed: "#331F6A",
            hover: "#6A5B95",
            disabled: "#DAD5E8",
          },
          liliac: {
            DEFAULT: "#D9DCFC",
            light: "#F5F3FF",
            pressed: "#9AA1EF",
            hover: "#BBC0F6",
            disabled: "#EDEFFC",
          },
          neutrals: {
            "faded-puple": "#6B617E",
            "dirty-liliac": "#B9B1C9",
            gray: "#CBCBD1",
          },
          system: {
            red: "#FF4209",
            blue: "#42ECFF",
            green: "#5CBB40",
          },
        },
      },
      spacing: {
        72: "72px",
        54: "54",
      },
      borderRadius: {
        10: "10px",
      },
      backgroundImage: {
        services: "linear-gradient(180deg, #FFFFFF 0%, #DBD5FB 100%);",
      },
      boxShadow: {
        license: "4px 4px 17px 6px #CCCCCC40",
      },
    },
  },
  plugins: [],
};

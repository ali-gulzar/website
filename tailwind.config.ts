import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern green color palette
        primary: {
          50: "#F4FFFC",   // Lightest mint
          100: "#E1FFF5",  // Very light mint
          200: "#C5FFEB",  // Light mint
          300: "#91EAAF",  // Mint green
          400: "#6FE599",  // Medium mint
          500: "#4DD882",  // Main primary - vibrant mint
          600: "#3BC36E",  // Medium green
          700: "#2FA858",  // Darker green
          800: "#248944",  // Dark green
          900: "#1F4B2C",  // Very dark green
          950: "#162F1E",  // Deepest green
        },
        accent: {
          50: "#FDFFF4",   // Very light lime
          100: "#F7FFD4",  // Light lime
          200: "#EEFFB5",  // Pale lime
          300: "#E3FF8F",  // Light lime-yellow
          400: "#D3F56F",  // Medium lime
          500: "#C3E956",  // Lime accent (from palette)
          600: "#AED142",  // Darker lime
          700: "#8FB62E",  // Olive-lime
          800: "#6D911F",  // Olive
          900: "#4D7111",  // Dark olive (from palette)
        },
        neutral: {
          50: "#F9FDFB",   // Off-white with hint of green
          100: "#F3FAF7",  // Very light gray-green
          200: "#E6F4EE",  // Light gray-green
          300: "#D1E8DD",  // Pale gray-green
          400: "#9FC4B2",  // Medium gray-green
          500: "#6D9985",  // Gray-green
          600: "#4D7565",  // Dark gray-green
          700: "#3A5B4E",  // Darker gray-green
          800: "#2B4439",  // Very dark gray-green
          900: "#1F322A",  // Almost black-green
          950: "#14211B",  // Deepest gray-green
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-up": "fadeUp 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(77, 216, 130, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(77, 216, 130, 0.6)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #4DD882 0%, #1F4B2C 100%)",
        "mesh-gradient": "linear-gradient(135deg, rgba(77, 216, 130, 0.1) 0%, rgba(145, 234, 175, 0.08) 50%, rgba(195, 233, 86, 0.05) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;




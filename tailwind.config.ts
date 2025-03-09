import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, #AEE6FF 10%, #B9AFFF 50%, #FFD966 90%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, #AEE6FF, #B9AFFF, #FFD966, #AEE6FF)",
        "gradient-linear":
          "linear-gradient(135deg, #AEE6FF 0%, #B9AFFF 50%, #FFD966 100%)",
      },
      
      colors: {
        lamaSky: "#AEE6FF",        // A more vibrant sky blue  
        lamaSkyLight: "#E3F8FF",   // Softer light blue for contrast  
        lamaPurple: "#B9AFFF",     // Slightly deeper and more dynamic purple  
        lamaPurpleLight: "#E5E2FF", // Gentle lavender tone  
        lamaYellow: "#FFD966",     // A richer, warmer yellow  
        lamaYellowLight: "#FFF9CC", // Soft pastel yellow for balance  
        
      },
    },
  },
  plugins: [],
};
export default config;

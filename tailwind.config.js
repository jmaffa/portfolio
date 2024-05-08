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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        'merriweather' : ['Merriweather', 'serif'],
        'rosarivo' : ['Rosarivo', 'serif'],
      }
      
    },
    colors: {
      'jm-blue' : '#383D6B',
      'jm-yellow' : '#DFC361',
      'jm-red' : '#F24822',
      'jm-black' : '#000000',
      'jm-violet' : '#C4B5FD',
    }
  },
  plugins: [],
};
export default config;

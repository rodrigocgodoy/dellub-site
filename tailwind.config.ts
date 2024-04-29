import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'media',
  content: [
    "./src/**/*.{tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-raleway)', 'Arial', 'sans-serif'],
        text: ['var(--font-inter)', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#6609B0',
        },
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
export default config;

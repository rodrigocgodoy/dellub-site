import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'media',
  content: ['./src/**/*.{tsx,mdx}'],
  theme: {
    fontFamily: {
      title: ['var(--font-raleway)', 'Arial', 'sans-serif'],
      text: ['var(--font-inter)', 'Arial', 'sans-serif'],
    },
    extend: {
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
}
export default config

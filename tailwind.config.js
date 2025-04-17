/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0b090a',
          lighter: '#161a1d',
        },
        accent: {
          DEFAULT: '#ba181b',
          lighter: '#e5383b',
          darker: '#a4161a',
        },
        gray: {
          800: '#1f2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
}
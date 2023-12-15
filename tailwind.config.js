/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': "#1e4bc8",
      },
    },
  },
  plugins: [],
}


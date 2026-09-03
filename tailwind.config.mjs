/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#fce7f3',
          rose: '#f43f5e',
          blush: '#fff1f2',
          lavender: '#f3e8ff',
          purple: '#c084fc',
          peach: '#ffedd5',
          cream: '#fffdfa',
          mint: '#ecfdf5',
          dark: '#3f3f46',
          soft: '#71717a',
        },
      },
      fontFamily: {
        sans: ['"Nunito"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

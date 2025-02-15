/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    extend: {
      animation: 'animatedgradient 10s ease infinite alternate',
    },
    keyframes: {
      animatedgradient: {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' },
      },
    },
    backgroundSize: {
      '300%': '300%',
    },
  },
  variants: {},
  corePlugins: {
    aspectRatio: false,
  },
};

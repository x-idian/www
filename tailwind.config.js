const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
      require('daisyui'),
      addDynamicIconSelectors()
  ],
  daisyui: {
    themes: ["light"],
  },
}
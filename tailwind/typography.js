const plugin = require('tailwindcss/plugin');

module.exports = {
  fontSize: {
    'sm': '0.889rem',
    'base': '1rem',
    'xl': '1.25rem',
    '2xl': '1.563rem',
    '3xl': '1.953rem',
    '4xl': '2.441rem',
    '5xl': '3.052rem',
  },
  plugin: plugin(function ({ addBase, theme }) {
    addBase({
      h1: { fontSize: theme('fontSize.5xl'), fontWeight: '600' },
      h2: { fontSize: theme('fontSize.4xl'), fontWeight: '600' },
      h3: { fontSize: theme('fontSize.3xl'), fontWeight: '600' },
      [`@media (max-width: ${theme('screens.sm')})`]: {
        p: {
          fontSize: theme('fontSize.sm'), // Responsive font size for small screens (sm)
        },
      },
    });
  }),
};

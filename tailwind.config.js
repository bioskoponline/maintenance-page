/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  presets: [
    require('@myturborepo/tailwind-preset'),
  ],
  content: [
    '../../packages/ui/components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-theme': '#000F18',
        'blue-surface': '#1C262D',
        'gray-devider': '#ffffff33',
        'gray-medium': '#858A8F',
        'blue-primary': '#B9D8FF',
        'dark-gray' : '#343D43',
        'medium': '#858A8F',
        'orange': '#FFB000',
        'red-error': '#EB5757',
        'green-success': '#00FA9A',
        'blue-1': '#011228',
        'blue-2': '#011C3C',
        'blue-3': '#001531',
        'blue-4': '#9BC7FD',
        'blue-5': '#001533',
        'blue-border': '#023779',
        'yellow-primary': '#FFD700',
        'yellow-primary-darker-1': '#FFB000',
        'red-primary': '#FF0000',
        'red-secondary': '#EB5757',
      },
      fontSize: {
        'xxs': '10px',
        '2xxs': '9px',
        '4xxs': '6px',
        'button': ['16px', { fontWeight: 600 }],
        'button-small': ['14px', { fontWeight: 600 }],
      },
      width: {
        'fit-content': 'fit-content',
        '30p': '30px',
        '18': '72px',
      },
      maxWidth: {
        'fit-content': 'fit-content',
      },
      height: {
        '30p': '30px',
        '18': '72px',
      },
      cursor: {
        grab: 'grab',
      },
      screens: {
        mobile: { max: '767px' },
        desktop: { min: '1025px' },
        xs: { max: '374px' },
        sm: { min: '375px', max: '767px' },
        md: { min: '768px', max: '1024px' },
        lg: { min: '1025px', max: '1439px' },
        xl: { min: '1440px' },
      },
      fontFamily: {
        inter: ['Inter'],
      },
      spacing: {
        '15%': '15%',
      },
    },
    // container: {
    //   screens: {
    //      sm: "100%",
    //      md: "100%",
    //      lg: "95px",
    //      xl: "90px"
    //   }
    // }
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        h1: { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold') },
        h2: { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.bold') },
        h3: { fontSize: theme('fontSize.base') },
        p: { fontSize: theme('fontSize.sm') },
      })
    }),

    plugin(function ({ addUtilities }) {
      addUtilities({
        ".my-rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".perspective": {
          perspective: "1000px",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
      });
    }),
    
    function ({ addComponents }) {
      addComponents({
        '.container': {
          'width': '100%',
          // marginLeft: 'auto',
          // marginRight: 'auto',
          // paddingLeft: '2rem',
          // paddingRight: '2rem',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '95%',
          },
          '@screen xl': {
            maxWidth: '90%',
          },
          '@screen mobile': {
            maxWidth: '90%',
          },
        },
      })
    },
  ],
}

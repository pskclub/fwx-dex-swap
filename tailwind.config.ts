import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          // ...
          colors: {
            divider: '#373751',
            background: '#151522',
            foreground: 'white',
            primary: {
              foreground: 'white',
              DEFAULT: '#9D4EDD',
              50: '#F2E8FB',
              100: '#E9D7F7',
              200: '#D6B5F1',
              300: '#C392EA',
              400: '#B070E4',
              500: '#9D4EDD',
              600: '#8227CC',
              700: '#641E9D',
              800: '#46156E',
              900: '#280C3F',
            },
            secondary: {
              foreground: 'white',
              DEFAULT: '#242438',
              50: '#7070A3',
              100: '#64649B',
              200: '#545483',
              300: '#44446A',
              400: '#343451',
              500: '#242438',
              600: '#0E0E16',
              700: '#000000',
              800: '#000000',
              900: '#000000',
            },
          },
        },
        // ... custom themes
      },
    }),
  ],
}

export default config

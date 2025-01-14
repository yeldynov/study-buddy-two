import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sanity/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '475px',
      },
      colors: {
        primary: {
          '100': '#FFE8F0',
          DEFAULT: '#00E14B',
        },
        secondary: '#FBE843',
        black: {
          '100': '#333333',
          '200': '#141413',
          '300': '#7D8087',
          DEFAULT: '#000000',
        },
        white: {
          '100': '#F7F7F7',
          DEFAULT: '#FFFFFF',
        },
        navbarbg: 'rgba(17, 1, 61, 0.6);',
      },
      fontFamily: {
        sans: ['var(--font-roboto)', ...fontFamily.sans],
        jura: ['var(--font-jura)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        londrinaShadow: ['var(--font-londrina-shadow)', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        '100': '2px 2px 0px 0px rgb(0, 0, 0)',
        '200': '2px 2px 0px 2px rgb(0, 0, 0)',
        '300': '2px 2px 0px 2px rgb(238, 43, 105)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}

export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      fontFamily: {
        roboto: ['roboto', 'sans-serif'],
      },
      colors: {
        'mira-black': '#141414',
        'mira-grey': '#c3c3c4',
        'mira-headtext': '#333333',
        'mira-subhead-text-black': '#1d1d1b',
        'mira-subhead-text-grey': '#4d4d4d',
        'mira-offwhite': '#f4f4f4',
        'mira-cart-red': '#ff0000',
        'mira-orange': '#ff7214',
        'mira-green': '#00b67a',
        'mira-text-red': '#e02b27',
        'mira-footer-charcoal': '#222222',
        'mira-socialbg-grey': '#555555',
        'mira-sage': '#e5efe5',
        'mira-darkgrey': '#888888',
        'page-button-grey': '#f5f5f5',
        'page-button-darkgrey': '#e9e9e9',
        'sort-selection-blue': '#ade1f5',
        'mira-border-grey': 'f5f5f5',
        'paypal-blue': '#0070ba',
        'star-gold': '#ed9d00'
      }
    },
  },
  plugins:[require('flowbite/plugin')],
}
export default config

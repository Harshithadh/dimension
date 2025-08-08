import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dimgray: '#1E1E2F',
        dimblue: '#0A0A23',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at top left, #2e2e4e, #0f0f1f)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;

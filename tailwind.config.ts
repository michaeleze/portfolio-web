import type { Config } from 'tailwindcss';
import { defaultConfig } from './theme/defaultConfig';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: defaultConfig,
  plugins: [require('tailwindcss-animate')],
};

export default config;

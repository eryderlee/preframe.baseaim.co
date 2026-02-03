import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2563eb',
        'sky-blue': '#87CEEB',
        'deep-blue': '#0A2E6E',
        'medium-blue': '#0052CC',
        'bright-blue': '#0066FF',
        'azure-blue': '#4FC3F7',
        'light-blue': '#6BB6FF',
        'powder-blue': '#B0E0E6',
        'ice-blue': '#F8FCFF',
        'sky-tint': '#E1F5FE',
        'cloud-white': '#E3F2FD',
        'text-dark': '#0a0a0a',
        'text-charcoal': '#1F2937',
        'text-medium-gray': '#374151',
        'text-light-gray': '#6b7280',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        'dm-serif': ['DM Serif Display', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;

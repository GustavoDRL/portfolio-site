import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Ensure app directory is included if used
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5A7D6F',
        primaryLight: '#A4C3B2',
        background: '#F9FFFB',
        textDark: '#111111',
        accent1: '#C0DBCF',
        accent2: '#EAF4F4',
      },
      fontFamily: {
        // Using system sans-serif as placeholders
        // We can integrate custom fonts like Abril Fatface/Montserrat and Inter/Work Sans later
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        serif: ['ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
        heading: ['Montserrat', 'sans-serif'], // Placeholder
        body: ['Inter', 'sans-serif'] // Placeholder
      },
      // Extend typography based on design system if needed
      fontSize: {
        'h1': '3.5rem', // 56px
        'h2': '2.5rem', // 40px
        'h3': '1.875rem', // 30px
        'body': '1rem', // 16px
      },
      lineHeight: {
        'body': '1.625', // relaxed
      },
      letterSpacing: {
        'h1': '-0.025em', // tighter
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config; 
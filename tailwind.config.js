/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand cyan. Use for primary actions and one highlight per view, not decoration.
        accent: {
          DEFAULT: '#22D3EE',
          hover: '#67E8F9',
          // Darker cyan for text on light backgrounds (meets contrast on paper)
          ink: '#0E7490',
        },
        paper: '#F4F4F1',
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        display: '-0.04em',
      },
    },
  },
  plugins: [],
}

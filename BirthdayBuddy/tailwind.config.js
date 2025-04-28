/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'df-column': 'auto 1fr'
      },
      fontFamily:{
        'display': ['"DM Serif Display"', 'ui-sans-serif', 'system-ui', 'sans-serif',],
        'body': ['"DM Sans"', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif' ]
      }
    },
  },
  plugins: [],
}


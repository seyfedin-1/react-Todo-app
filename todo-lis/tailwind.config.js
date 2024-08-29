/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      '128': '32rem',
      '144': '36rem',
    },
    colors: {
      primary: {
        DEFAULT: '#3490dc',  // Default primary color
        light: '#6cb2eb',    // Light variant
        dark: '#2779bd',     // Dark variant
      },
      secondary: {
        DEFAULT: '#ffed4a',  // Default secondary color
        light: '#fff382',    // Light variant
        dark: '#fcd34d',     // Dark variant
      },
      tertiary: {
        DEFAULT: '#38c172',  // Default tertiary color
        light: '#51d88a',    // Light variant
        dark: '#1f9d55',     // Dark variant
      },
      accent: {
        DEFAULT: '#e3342f',  // Accent color
        light: '#ef5753',    // Light variant
        dark: '#cc1f1a',     // Dark variant
      },
      neutral: {
        DEFAULT: '#6c757d',  // Neutral color
        light: '#adb5bd',    // Light variant
        dark: '#495057',     // Dark variant
      },
    },
  },
   
 
  plugins: [],
}


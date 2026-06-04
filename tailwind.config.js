/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        tgreen: '#00ff41',
        tdim: '#00c832',
        tdark: '#007a1f',
        tbg: '#0a0a0a',
        tbg2: '#0f0f0f',
        tbg3: '#141414',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
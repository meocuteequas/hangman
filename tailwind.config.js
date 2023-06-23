/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    fontFamily: {
      'meocuteequas': ["'Press Start 2P', cursive"]
    }
  },
}
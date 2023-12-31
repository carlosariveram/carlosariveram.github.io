/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      'cr-red': '#9A0000',
      'cr-yellow': '#FFE0B5',
      'cr-green': '#BDB246',
      'cr-blue': '#809BCE',
      'cr-gray': '#818AA3',
      'mustard': {
        '50': '#fffef7', 
        '100': '#fffded', 
        '200': '#fff8d4', 
        '300': '#fff3b8', 
        '400': '#fce483', 
        '500': '#fcd34d', 
        '600': '#e3b740', 
        '700': '#bd8c2b', 
        '800': '#96681d', 
        '900': '#734610', 
        '950': '#4a2807'
      },
    }),
    extend: {}
  },
  plugins: [],
}

import colors from 'tailwindcss/colors'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'

export default {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.neutral,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
      white: '#ffffff',
      black: '#000000'
    }
  },
  plugins: [
    forms,
    typography,
    aspectRatio
  ],
  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.js',
    'plugins/**/*.js',
    'services/*.js',
    'App.{js,vue}',
    'app.{js,vue}',
    'Error.{js,vue}',
    'error.{js,vue}',
    'content/**/*.md'
  ]
}
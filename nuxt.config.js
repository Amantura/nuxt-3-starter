/* eslint-disable no-undef */
import HeadConfig from './configs/head'

export default defineNuxtConfig({
  app: {
    head: HeadConfig
  },

  css: [
    '@/assets/css/app.css',
    '@/assets/css/tailwind.css',
  ],

  plugins: [
    '~/plugins/day.js',
    {
      src: '~/plugins/maska.js',
      mode: 'client'
    }
  ],

  modules: [
    '@nuxtjs/harlem',
    '@nuxtjs/tailwindcss'
  ]

})

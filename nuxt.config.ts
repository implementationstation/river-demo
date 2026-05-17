export default defineNuxtConfig({
  compatibilityDate: '2026-05-16',

  devtools: { enabled: true },

  css: [
    'vuetify/styles'
  ],

  build: {
    transpile: ['vuetify']
  },

  vite: {
    ssr: {
      noExternal: ['vuetify']
    }
  }
})

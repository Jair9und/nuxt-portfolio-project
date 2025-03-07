// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxt/image"
  ],
  content:{
    highlight: {
      theme:{
        default: 'min-light',
        dark: 'min-dark'
      }
    }
  },
})
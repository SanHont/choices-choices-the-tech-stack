// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/global.css'],
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      datoCmsToken: process.env.DATO_CMS_TOKEN,
    }
  }
})

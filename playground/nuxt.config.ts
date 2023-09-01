// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '../src/module',
  ],
  storybook: {
    url: 'http://localhost:6006',
    port: 6006,
  },
})

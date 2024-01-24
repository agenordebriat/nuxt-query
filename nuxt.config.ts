export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: { dirs: ["./queries", "./schemas"] },
  modules: ["@hebilicious/vue-query-nuxt"],
});

const apiPlugin = (nuxtApp) => {
  /** injects a global api instance */
  nuxtApp.provide('api', useApi().api)
}

export { apiPlugin }

export default defineNuxtPlugin(function (nuxtApp) {
  return apiPlugin(nuxtApp)
})

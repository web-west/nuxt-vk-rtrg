export default ({ app: { router } }) => {
  let ready = false

  router.onReady(() => {
    // Mark when the router has completed the initial navigation.
    ready = true
  })

  function create() {
    window['vkCounter<%= options.id.replace(/[^A-Za-z0-9]/gim,"") %>'] = new VK.Retargeting.Init('<%= options.id.replace(/[^A-Za-z0-9]/gim,"") %>')

    router.afterEach((to, from) => {
      if (!ready) {
        // Don't record a duplicate hit for the initial navigation.
        return
      }
      window['vkCounter<%= options.id.replace(/[^A-Za-z0-9]/gim,"") %>'].hit(to.fullPath, {
        referer: from.fullPath
      })
    })
  }

  if (window.VK === undefined) {
    create()
  } else {
    window.VK.Retargeting.Hit()
  }


}

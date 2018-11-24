export default ({ app: { router } }) => {
  function create() {
    VK.Retargeting.Init('<%= options.id %>')
    router.afterEach((to, from) => {
      VK.Retargeting.Hit()
    })
  }
  if (window.VK && window.VK.Retargeting) {
    create()
  } else {
    (function (w, c) {
      (w[c] = w[c] || []).push(create)
    })(window, 'vk_callbacks')
  }
}

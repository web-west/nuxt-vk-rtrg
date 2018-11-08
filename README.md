# VK Retargeting

> Add VK Retargeting to your nuxt.js application.

This plugins automatically sends first page and route change events to VK Retargeting.

**Note:** VK Retargeting is not enabled in dev mode.
You can set environment variable `NODE_ENV` to `production` for testing in dev mode.

## Setup
- Add `nuxt-vk-rtrg` dependency using yarn or npm to your project
- Add `nuxt-vk-rtrg` to `modules` section of `nuxt.config.js`
```js
{
  modules: [
    [
      'nuxt-vk-rtrg',
      {
        id: 'xx-xxxx-xxxxxx-xxxxx'
      }
    ]
  ]
}
````

### `id`
- Required

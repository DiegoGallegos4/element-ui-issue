importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.js",
    "revision": "be8b880e6409f394c8d2aafb28b1b0de"
  },
  {
    "url": "/_nuxt/commons.app.js",
    "revision": "81db22aa016304949c7ff74cec4ba9bd"
  },
  {
    "url": "/_nuxt/lang-en.js",
    "revision": "d372647f75087852c552298556a9fe38"
  },
  {
    "url": "/_nuxt/lang-es.js",
    "revision": "013da2b656a21984710d8c16426228d2"
  },
  {
    "url": "/_nuxt/lang-pt.js",
    "revision": "f58a7d4ef75c3a950b537354b09b7b00"
  },
  {
    "url": "/_nuxt/pages/admin/branch/_id.js",
    "revision": "a9a0b5899c688c41c2049387162bdd34"
  },
  {
    "url": "/_nuxt/pages/admin/branch/index.js",
    "revision": "85bbee4e337e2e96f3a600c37d0a0186"
  },
  {
    "url": "/_nuxt/pages/admin/brand/_id.js",
    "revision": "bb0474c7a3d395fd5123f48502c307b6"
  },
  {
    "url": "/_nuxt/pages/admin/brand/index.js",
    "revision": "553afed928efe799e321c79e1f4883c3"
  },
  {
    "url": "/_nuxt/pages/admin/category/_id.js",
    "revision": "d706e868117382528ed18d226a3a7fe1"
  },
  {
    "url": "/_nuxt/pages/admin/category/index.js",
    "revision": "bfda321a7fe4e119732303d653995418"
  },
  {
    "url": "/_nuxt/pages/admin/index.js",
    "revision": "f733500b6d53d93296083f68cd5a0ada"
  },
  {
    "url": "/_nuxt/pages/admin/product/_id.js",
    "revision": "37186aacde262cde61aea7fd3a1ef20a"
  },
  {
    "url": "/_nuxt/pages/admin/product/index.js",
    "revision": "f9687fbff1bbde2d2cfdcdebc941bd1e"
  },
  {
    "url": "/_nuxt/pages/admin/supermarket/_id.js",
    "revision": "7fc6df156658ac70f19f62aebd09e493"
  },
  {
    "url": "/_nuxt/pages/admin/supermarket/index.js",
    "revision": "3a383adfdb1c09848b7d42785674478b"
  },
  {
    "url": "/_nuxt/pages/admin/unit/_id.js",
    "revision": "fcbd9524f66ae370c6e32b39e69eeb5b"
  },
  {
    "url": "/_nuxt/pages/admin/unit/index.js",
    "revision": "317e2766b0e172394c49ebf58cadf554"
  },
  {
    "url": "/_nuxt/pages/index.js",
    "revision": "84712a892de9be16a8e7c7f82b9c695c"
  },
  {
    "url": "/_nuxt/runtime.js",
    "revision": "5fb7e86df13cddb51f1ea96cd19845dc"
  },
  {
    "url": "/_nuxt/vendors.app.js",
    "revision": "c48c8ba9f10126ada13a3ae1a8434844"
  }
], {
  "cacheId": "platform",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

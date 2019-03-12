importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2cdc480c446ae6bc2786.js",
    "revision": "37186aacde262cde61aea7fd3a1ef20a"
  },
  {
    "url": "/_nuxt/30b5a255dd4dbc39d3fa.js",
    "revision": "c48c8ba9f10126ada13a3ae1a8434844"
  },
  {
    "url": "/_nuxt/36ad7672e4f95bf2fc2c.js",
    "revision": "355bebbba78d0c643106a89994f8d464"
  },
  {
    "url": "/_nuxt/38a0097fe092e9ad7f97.js",
    "revision": "84712a892de9be16a8e7c7f82b9c695c"
  },
  {
    "url": "/_nuxt/47142602ffc1178ea581.js",
    "revision": "f733500b6d53d93296083f68cd5a0ada"
  },
  {
    "url": "/_nuxt/4f57cabe9ee6cfa10435.js",
    "revision": "81db22aa016304949c7ff74cec4ba9bd"
  },
  {
    "url": "/_nuxt/53e8c3665919889da878.js",
    "revision": "7fc6df156658ac70f19f62aebd09e493"
  },
  {
    "url": "/_nuxt/58daca8fe19a5d6df603.js",
    "revision": "3a383adfdb1c09848b7d42785674478b"
  },
  {
    "url": "/_nuxt/5d147a1345205ba89378.js",
    "revision": "a9a0b5899c688c41c2049387162bdd34"
  },
  {
    "url": "/_nuxt/6be825af1ff0e9136cd3.js",
    "revision": "85bbee4e337e2e96f3a600c37d0a0186"
  },
  {
    "url": "/_nuxt/6e808c20ce32d82a6626.js",
    "revision": "bfda321a7fe4e119732303d653995418"
  },
  {
    "url": "/_nuxt/72e196b413a5d9c54ae7.js",
    "revision": "013da2b656a21984710d8c16426228d2"
  },
  {
    "url": "/_nuxt/75e6a0c1c98e868566c0.js",
    "revision": "f9687fbff1bbde2d2cfdcdebc941bd1e"
  },
  {
    "url": "/_nuxt/7631a8afc3970c0b7d77.js",
    "revision": "d706e868117382528ed18d226a3a7fe1"
  },
  {
    "url": "/_nuxt/7d37dc31d9de76ba5707.js",
    "revision": "bb0474c7a3d395fd5123f48502c307b6"
  },
  {
    "url": "/_nuxt/96a69bdda36b38e2a349.js",
    "revision": "317e2766b0e172394c49ebf58cadf554"
  },
  {
    "url": "/_nuxt/96d6f00c7a2aca67b0cf.js",
    "revision": "d372647f75087852c552298556a9fe38"
  },
  {
    "url": "/_nuxt/96db9d068a3904cbce70.js",
    "revision": "553afed928efe799e321c79e1f4883c3"
  },
  {
    "url": "/_nuxt/b1e7724c882bc9d66067.js",
    "revision": "4e5d4382331807a2a16be9542e4ba720"
  },
  {
    "url": "/_nuxt/dfd717ccc71f64a7f1b9.js",
    "revision": "f58a7d4ef75c3a950b537354b09b7b00"
  },
  {
    "url": "/_nuxt/ed1c69b0cd032b2519ca.js",
    "revision": "fcbd9524f66ae370c6e32b39e69eeb5b"
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

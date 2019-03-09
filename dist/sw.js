importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0089cba0ddabc8ec1ec6.js",
    "revision": "5f96e46e60062bed8f78a9729b110424"
  },
  {
    "url": "/_nuxt/0ca708de4ed110c16c95.js",
    "revision": "2eb861c389a8454c1187a0a3dca7bd33"
  },
  {
    "url": "/_nuxt/13204b757565bb6b02b8.js",
    "revision": "fcd46c1fb7d017556a110323f77c38dd"
  },
  {
    "url": "/_nuxt/1d22b81080713d6344a8.js",
    "revision": "dcdbff1f65c9f43933072ae0aa017878"
  },
  {
    "url": "/_nuxt/22dfa95f8f4762a695fa.js",
    "revision": "32f802a9db3c79dfd18d8929d9655c2e"
  },
  {
    "url": "/_nuxt/24233610e02cd9142d06.js",
    "revision": "29314eb02fbcb73e7e288b5a83812997"
  },
  {
    "url": "/_nuxt/312803fc65b6ff002a8f.js",
    "revision": "ec267ae34e7c87c060996bd98a65a434"
  },
  {
    "url": "/_nuxt/3a730e695205cfda530c.js",
    "revision": "c190bd0e5b4fc23c8356543abe5770de"
  },
  {
    "url": "/_nuxt/48bc7be30307a20fef2c.js",
    "revision": "7abd51747beaa21c01cf0dccacdc09d6"
  },
  {
    "url": "/_nuxt/4f827a5c7df9c3ae7028.js",
    "revision": "0d10e4629979e15519e8ad57d204116d"
  },
  {
    "url": "/_nuxt/525ea3bad4d75d838aa3.js",
    "revision": "37e040b90edd3103bcbd3111abb7690a"
  },
  {
    "url": "/_nuxt/55496973bb62312e3c6d.js",
    "revision": "d51ba46b804d517e08cd038b3c70b998"
  },
  {
    "url": "/_nuxt/63013d6a44ed674faed4.js",
    "revision": "2f373a7930f5422631099aa137ba7794"
  },
  {
    "url": "/_nuxt/b5f752946309884a6357.js",
    "revision": "11891bee881028dff7605b91b4870ecf"
  },
  {
    "url": "/_nuxt/c711601790d13c6c2e9a.js",
    "revision": "cb833558fc8379c4fafeeb576f4aca2c"
  },
  {
    "url": "/_nuxt/dd62415322b0be1181fa.js",
    "revision": "e0e36bb5ddde567cedce51ca0af0062b"
  },
  {
    "url": "/_nuxt/e022de400b17050eb1ad.js",
    "revision": "19627e388b2adf6afb8f736f3ba169b0"
  },
  {
    "url": "/_nuxt/e459c6754cc575a11b7d.js",
    "revision": "a701b3bdd564f9caa0663ad6426916f9"
  },
  {
    "url": "/_nuxt/f64cc546827b6562872d.js",
    "revision": "ea0f81646d8c5c47434b433bb55ee695"
  },
  {
    "url": "/_nuxt/f841acb4568706d96112.js",
    "revision": "2cbe785e7ed5df77e5d52bd8e5432497"
  },
  {
    "url": "/_nuxt/fe1140c126cf767fd4b4.js",
    "revision": "705d9df6e9645974c9696da88e62359f"
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

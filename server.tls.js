const fs = require('fs')
const https = require('https')
const { Nuxt, Builder } = require('nuxt')
const app = require('express')()

const config = require('./nuxt.config.js')
const port = process.env.PORT || 3443

const httpsOptions = {
  key: fs.readFileSync('./certs/key.pem'),
  cert: fs.readFileSync('./certs/cert.pem')
}

const nuxt = new Nuxt(config)

const server = https.createServer(httpsOptions, app)

// Render every route with Nuxt.js
app.use(nuxt.render)

function listen() {
  server.listen(port, 'localhost')
  console.log(`Server listening on localhost:${port}.`)
}

// Build only in dev mode with hot-reloading
if (config.dev) {
  new Builder(nuxt)
    .build()
    .then(listen)
    .catch(error => {
      console.error(error)
      process.exit(1)
    })
} else {
  listen()
}

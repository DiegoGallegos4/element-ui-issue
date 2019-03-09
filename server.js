const path = require('path')
const express = require('express')
const app = express()
const { Nuxt } = require('nuxt')
const config = require('./nuxt.config.js')

const nuxt = new Nuxt(config)

app.use('/_nuxt', express.static(path.join(__dirname, '.nuxt', 'dist')))
app.use((req, res) => setTimeout(() => nuxt.render(req, res), 0))

module.exports = app

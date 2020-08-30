const express = require('express')
const path = require('path')
const pug = require('pug')

const pagePath = path.join(__dirname, './src/views/home.pug')
const renderPage = pug.compileFile(pagePath)

const app = express()

app.use(express.static(path.join(__dirname, './dist')))

app.get(`/`, (req, res) => {
    res.send(renderPage({}))
})

app.listen(process.env.PORT || 1337)
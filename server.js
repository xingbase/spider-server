var express = require('express')
var app = express()
var spider = require('./spider')
var minify = require('html-minifier').minify

app.get('*', async (req, res, next) => {
  var url = req.protocol + '://' + req.hostname + req.originalUrl
  console.log(' request full url:', url)
  var content = await spider(url).catch((error) => {
    console.log(error)
    res.send(' failed to get html content')
    return
  })

  content = minify(content, {
    removeComments: true,
    collapseWhitespace: true,
    minifyJS: true,
    minifyCSS: true,
  })
  res.send(content)
})

app.listen(9000, () => {
  console.log('Spider app listening on port 9000!')
})

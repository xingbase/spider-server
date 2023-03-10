const puppeteer = require('puppeteer')
const WSE_LIST = require('./puppeteer-pool')
const spider = async (url) => {
  let tmp = Math.floor(Math.random() * WSE_LIST.length)
  let browserWSEndpoint = WSE_LIST[tmp]
  const browser = await puppeteer.connect({
    browserWSEndpoint,
  })

  var page = await browser.newPage()
  await page.goto(url, { timeout: 0, waitUntil: 'networkidle0' })
  var html = await page.evaluate(() => {
    return document.getElementsByTagName('html')[0].outerHTML
  })
  await page.close()
  return html
}

module.exports = spider

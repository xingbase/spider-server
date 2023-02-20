const puppeteer = require('puppeteer');
const MAX_WSE = 2;
let WSE_LIST = [];

(async () => {
  for (var i = 0; i < MAX_WSE; i++) {
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--no-first-run',
        '--no-sandbox',
        '--no-zygote',
        '--single-process',
      ],
    })
    browserWSEndpoint = await browser.wsEndpoint()
    WSE_LIST.push(browserWSEndpoint)
  }
})();

module.exports = WSE_LIST

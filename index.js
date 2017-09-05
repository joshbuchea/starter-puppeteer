const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // log console to console
  page.on('console', (...args) => {
    console.log('PAGE LOG: ', ...args);
  });
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });

  browser.close();
})();

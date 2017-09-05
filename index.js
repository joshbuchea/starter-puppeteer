const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // log console to console
  page.on('console', (...args) => {
    console.log('PAGE LOG: ', ...args);
  });
  await page.goto('https://example.com');

  // screenshot: viewport
  await page.screenshot({ path: 'example-viewport.png' });

  // screenshot: full page
  await page.screenshot({ path: 'example-full.png', fullPage: true });

  // screenshot: page coordinates
  await page.screenshot({
    path: 'example-coords.png',
    clip: { x: 215, y: 0, width: 390, height: 50 },
  });

  browser.close();
})();

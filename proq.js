// Recipes
// - Scrape data from page?
// - Get weather?
// - Get air quality?
// - Get joke/quote/image of the day
// - Get Twitter followers

// Titles
// - Start Automating The Web With Puppeteer

// - What is Puppeteer?
// - Minimum requirements?
//   - Node
// - Getting Started

// Web Automation Use Cases
// - Form filling
// - Screen scraping
// - Data extraction and transfer between applications
// - Website testing
// - Periodical report generation

// Personal applications of web automation include:
// - Notifying on weather conditions on predefined times
// - Aggregating digest of social network updates
// - Deployment automation in hobbyist projects
// - Keeping tabs on online resources
// - Building complex reminders

// ****************************************************************************
// Screenshot: Viewport
// ****************************************************************************

// 'use strict';

// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   page.setViewport({ width: 1280, height: 800 });
//   await page.goto('https://proqsolutions.com', {
//     waitUntil: 'networkidle',
//   });
//   await page.screenshot({ path: 'screenshot-viewport.png' });

//   browser.close();
// })();

// ****************************************************************************
// Screenshot: Full Page
// ****************************************************************************

// 'use strict';

// const puppeteer = require('puppeteer');
// // const devices = require('puppeteer/DeviceDescriptors');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   // await page.emulate(devices['iPhone 6']);
//   page.setViewport({ width: 1280, height: 800 });
//   await page.goto('https://github.com/GoogleChrome/puppeteer', {
//     waitUntil: 'networkidle',
//   });
//   await page.screenshot({ path: 'screenshot-full.png', fullPage: true });

//   browser.close();
// })();

// ****************************************************************************
// Screenshot: DOM Element
// ****************************************************************************

// 'use strict';

// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // adjustments for this page (so we hit the desktop breakpoint)
//   page.setViewport({ width: 1280, height: 800 });

//   await page.goto('https://www.reddit.com/', {
//     waitUntil: 'networkidle',
//   });

//   async function screenshotDOMElement(selector, padding = 0) {
//     const rect = await page.evaluate(selector => {
//       const element = document.querySelector(selector);
//       const { x, y, width, height } = element.getBoundingClientRect();
//       return { left: x, top: y, width, height, id: element.id };
//     }, selector);

//     console.log('rect: ', rect);

//     return await page.screenshot({
//       path: 'screenshot-element.png',
//       clip: {
//         x: rect.left - padding,
//         y: rect.top - padding,
//         width: rect.width + padding * 2,
//         height: rect.height + padding * 2,
//       },
//     });
//   }

//   await screenshotDOMElement('#header-img', 0);

//   browser.close();
// })();

// ****************************************************************************
// Screenshot: Page Coordinates
// ****************************************************************************

// 'use strict';

// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   page.setViewport({ width: 1280, height: 800 });
//   await page.goto('https://www.reddit.com/', {
//     waitUntil: 'networkidle',
//   });
//   await page.screenshot({
//     path: 'screenshot-coords.png',
//     clip: { x: 0, y: 21, width: 120, height: 40 },
//   });

//   browser.close();
// })();

// ****************************************************************************
// PDF
// ****************************************************************************

'use strict';

const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({
    width: 1280,
    height: 800
  });
  await page.goto(
    'https://medium.com/iotforall/apples-bet-on-ar-the-future-of-ui-design-f2f119033fea'
  );
  // page.emulateMedia('screen');
  await page.pdf({
    path: 'medium.pdf',
    format: 'letter',
  });

  browser.close();
})();

// ****************************************************************************
// Search Google and Extract Results
// ****************************************************************************

// 'use strict';

// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://google.com', { waitUntil: 'networkidle' });

//   // Type our query into the search bar
//   await page.type('puppeteer');

//   // Click submit button
//   await page.click('input[type="submit"]');

//   // Wait for the results to show up
//   await page.waitForSelector('h3 a');

//   // Extract the results from the page
//   const links = await page.evaluate(() => {
//     const anchors = Array.from(document.querySelectorAll('h3 a'));
//     return anchors.map(anchor => anchor.textContent);
//   });
//   console.log(links.join('\n'));

//   browser.close();
// })();

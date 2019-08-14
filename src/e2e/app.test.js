const puppeteer = require("puppeteer");

describe("Counter", () => {
  test("Can increment and decrement counter value", async () => {
    let browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      slowMo: 250
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 800,
        height: 900
      },
      userAgent: ""
    });

    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".btn-primary");
    await page.click(".btn-primary");
    await page.click(".btn-primary");
    await page.click(".btn-primary");    

    await page.screenshot({path:'src/e2e/snaps/inc.png'});

    const incElement = await page.$("#counter-value");
    const incText = await page.evaluate(element => element.textContent, incElement);

    await expect(incText).toMatch('3');

    await page.click(".btn-success");

    await page.screenshot({path:'src/e2e/snaps/dec.png'});
    
    const decElement = await page.$("#counter-value");
    const decText = await page.evaluate(element => element.textContent, decElement);

    await expect(decText).toMatch('2');

    browser.close();
  }, 9000000);
});

const puppeteer = require('puppeteer');
const fs = require('fs');
(async () => {
  const browser = await puppeteer.launch();//Chromiumを起動
  const page = await browser.newPage();//新しいタブを開く
  await page.setDefaultNavigationTimeout(0);
  await page.goto('https://www.mql5.com/ja/users/yoshifumi121212/charts');//指定したURLに移動
  await page.type('input[name="Login"]', "yoshifumi121212");
  await page.type('input[name="Password"]', "09070570422yY");
  await Promise.all([
    page.click('#loginSubmit'),
    page.waitForNavigation({ waitUntil: 'networkidle2' })
  ]);
  html = await page.evaluate(() => document.documentElement.outerHTML);
  fs.writeFile("data.html", html, (err) => {
    if (err) throw err;
    console.log('正常に書き込みが完了しました');
  });
  await browser.close();//Chromiumを閉じる
})();
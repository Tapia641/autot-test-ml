const { test, expec, chromium } = require('@playwright/test');

test('Search and filter PlayStation 5 on MercadoLibre', async ({ page }) => {
   // Web site MercadoLibre
   //   const browser = await chromium.launch({ headless: false });
   //   const context = await browser.newContext({ incognito: true });
   //   const page = await context.newPage();

   await page.goto('https://www.mercadolibre.com');

   // Country
   await page.click('//*[@id="MX"]');

   // Search "playstation 5"
   await page.fill('input[name="as_word"]', 'playstation 5');
   await page.press('input[name="as_word"]', 'Enter');

   // Wait
   await page.waitForSelector('.ui-search-results');

   // Filter by "Nuevo"
   await page.click("//span[@class='ui-search-filter-name' and text()='Nuevo']");
   await page.waitForSelector('.ui-search-results'); 

   // Filter by "Cdmx" -> Distrito Federal
   await page.click("//span[@class='ui-search-filter-name' and text()='Distrito Federal']");
   await page.waitForSelector('.ui-search-results'); 

   // Localizar el botón del dropdown
   await page.waitForSelector('.ui-search-sort-filter');
   await page.isVisible('.ui-search-view-options__title');
   const dropdownButtonSelector = '//button[@id=":R2m55e6:-trigger"]';
   const dropdownButton = await page.locator(dropdownButtonSelector).first();
   await dropdownButton.click();

   const mayorPrecioOption = await page.locator('//*[@id=":R2m55e6:-menu-list-option-price_desc"]/div/div/span').first();
   await mayorPrecioOption.click();
   await page.waitForSelector('.ui-search-results');

   const productElements = await page.$$('.ui-search-result__wrapper');

   for (let i = 0; i < Math.min(5, productElements.length); i++) {
      const productElement = productElements[i];

      // Obtener el título y el precio
      const title = await productElement.$eval('.ui-search-item__title', (element) => element.textContent.trim());
      const price = await productElement.$eval('.andes-money-amount__fraction', (element) => element.textContent.trim());

      console.log(`Producto ${i + 1}:`);
      console.log(`Título: ${title}`);
      console.log(`Precio: ${price}`);
   }

});

// adelina cuarto 3, hielo
const { test, expect } = require('@playwright/test');

test('Search and filter PlayStation 5 on MercadoLibre', async ({ page }) => {
  // Web site MercadoLibre
  await page.goto('https://www.mercadolibre.com');

  // Country
  await page.click('//*[@id="MX"]');

  // Search "playstation 5"
  await page.fill('input[name="as_word"]', 'playstation 5');
  await page.press('input[name="as_word"]', 'Enter');

  // Wait
  await page.waitForSelector('.ui-search-results');

  // Filter by "Nuevos"
  await page.click("//span[@class='ui-search-filter-name' and text()='Nuevo']"); // Filtra por condición "Nuevo"
  await page.waitForSelector('.ui-search-results'); // Esperar a que cargue de nuevo

  // Filter by "Cdmx" -> Distrito Federal
  await page.click("//span[@class='ui-search-filter-name' and text()='Distrito Federal']"); // Filtra por "CDMX"
  await page.waitForSelector('.ui-search-results'); // Esperar a que cargue de nuevo


   //---
    // Abrir el menú de ordenamiento
    const dropdownButtonSelector = '.ui-search-sort-filter__dropdown .andes-dropdown__trigger';
    await page.click(dropdownButtonSelector);

    // Seleccionar "Mayor precio"
    const mayorPrecioOptionSelector = '.andes-list__item-primary:text("Mayor precio")';
    await page.click(mayorPrecioOptionSelector);

    // Esperar a que se actualicen los resultados
    await page.waitForSelector('.andes-list__item', { state: 'attached' });

    // Extraer y mostrar los primeros 5 resultados (ajusta según tus necesidades)
    const productListSelector = '.andes-list .andes-list__item';
    const products = await page.$$(productListSelector);

    for (let i = 0; i < Math.min(products.length, 5); i++) {
      const product = products[i];
      const title = await product.$eval('.andes-list__item-title', (element) => element.textContent);
      const price = await product.$eval('.andes-list__item-price', (element) => element.textContent);
      console.log(`Producto ${i + 1}: ${title} - Precio: ${price}`);
    }


   //---

   // // Locate the dropdown element
   // const dropdown = await page.locator('button:has-text("Más relevantes")').first();
   // await expect(dropdown).toBeVisible({ timeout: 5000 });
   
   // // Click on the dropdown
   // await dropdown.click();
   
   // // Locate the span element
   // const mayorPrecioOption = await page.locator('span:has-text("Mayor precio")').first();
   // await expect(mayorPrecioOption).toBeVisible({ timeout: 5000 });

   // // Click on the "Mayor precio"
   // await mayorPrecioOption.click();

   // // Wait for the page
   // await page.waitForSelector('.andes-list__item-primary:text("Mayor precio")', { state: 'detached' });
   
});


// adelina cuarto 3, hielo
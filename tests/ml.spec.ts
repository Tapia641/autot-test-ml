const { test, expect } = require('@playwright/test');

test('Search and filter PlayStation 5 on MercadoLibre', async ({ page }) => {
  // Entrar al sitio web de MercadoLibre
  await page.goto('https://www.mercadolibre.com');

  // Seleccionar México como país
  await page.click('//*[@id="MX"]');

  // Buscar el término "playstation 5"
  await page.fill('input[name="as_word"]', 'playstation 5');
  await page.press('input[name="as_word"]', 'Enter');

  // Esperar a que cargue la página de resultados
  await page.waitForSelector('.ui-search-results');

  // Filtrar por condición "Nuevos"
  await page.click("//span[@class='ui-search-filter-name' and text()='Nuevo']"); // Filtra por condición "Nuevo"
  await page.waitForSelector('.ui-search-results'); // Esperar a que cargue de nuevo

  // Filtrar por ubicación "Cdmx"
  await page.click("//span[@class='ui-search-filter-name' and text()='Distrito Federal']"); // Filtra por "CDMX"
  await page.waitForSelector('.ui-search-results'); // Esperar a que cargue de nuevo

   // Locate the dropdown element
   const dropdown = await page.locator('button:has-text("Más relevantes")').first();
   await expect(dropdown).toBeVisible({ timeout: 5000 });

   // Click on the dropdown to open it
   await dropdown.click();

   const mayorPrecioOption = await page.locator('span:has-text("Mayor precio")').first();
   await expect(mayorPrecioOption).toBeVisible({ timeout: 5000 });

   // Click on the "Mayor precio" option
   await mayorPrecioOption.click();

   // Wait for the page to reload or perform any necessary actions
   await page.waitForSelector('.andes-list__item-primary:text("Mayor precio")', { state: 'detached' });
   
});


// adelina cuarto 3, hielo
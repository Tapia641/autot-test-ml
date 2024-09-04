# Playwright Test for Mercado Libre

Este proyecto utiliza Playwright para automatizar la búsqueda de productos en Mercado Libre y ordenar los resultados por "Mayor precio". Las pruebas se pueden ejecutar tanto localmente en tu máquina como a través de GitHub Actions en un flujo de integración continua.

## Requisitos previos

### Instalación en el entorno local

Para ejecutar este proyecto en tu entorno local, asegúrate de tener los siguientes requisitos:

- **Node.js** (versión 12 o superior)
- **npm** (administrador de paquetes de Node.js)
- **Playwright**

### Instalación

1. Clona este repositorio:

   \`\`\`bash
   git clone https://github.com/Tapia641/playw-test-ml.git
   \`\`\`

2. Entra en el directorio del proyecto:

   \`\`\`bash
   cd playw-test-ml
   \`\`\`

3. Instala las dependencias del proyecto:

   \`\`\`bash
   npm install
   \`\`\`

4. Instala los navegadores necesarios para Playwright:

   \`\`\`bash
   npx playwright install
   \`\`\`

## Ejecución de las pruebas en el entorno local

Para ejecutar las pruebas en tu entorno local, usa el siguiente comando:

\`\`\`bash
npx playwright test
\`\`\`

Esto ejecutará todos los tests en el archivo \`ml.spec.ts\`.

### Ejecutar pruebas con un navegador visible

Si deseas ejecutar las pruebas con una vista del navegador (modo no headless):

\`\`\`bash
npx playwright test --headed
\`\`\`

### Visualización del reporte de pruebas

Para ver los resultados en un formato de informe interactivo:

\`\`\`bash
npx playwright show-report
\`\`\`

## Configuración de GitHub Actions

El flujo de trabajo de GitHub Actions está configurado en el archivo \`.github/workflows/playwright.yml\`. GitHub Actions ejecutará las pruebas automáticamente cada vez que realices un commit o un pull request en las ramas configuradas.

### GitHub Actions Workflow

El archivo \`playwright.yml\` en \`.github/workflows\` se parece a esto:

### Descripción del flujo de trabajo

- **Instalar dependencias**: El flujo de trabajo instalará Node.js y todas las dependencias de npm.
- **Instalar navegadores Playwright**: Se instalan los navegadores requeridos para las pruebas.
- **Ejecutar pruebas**: Se ejecutarán las pruebas utilizando Playwright.
- **Subir reportes**: Al final del flujo de trabajo, se suben los reportes generados por Playwright.

## Notas adicionales

- Si haces cambios en las pruebas o en la configuración del proyecto, asegúrate de ejecutar \`npx playwright test\` para verificar que todo funcione correctamente antes de hacer un push a GitHub.
- Puedes ajustar las estrategias de ejecución en el archivo de GitHub Actions para incluir más o menos navegadores, o cambiar los eventos que activan el flujo de trabajo.

## Recursos adicionales

- [Documentación oficial de Playwright](https://playwright.dev/)
"""

## Author

 - Luis Enrique Hernández Tapia
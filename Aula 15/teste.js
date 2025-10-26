// teste.js
import { Builder, Browser } from 'selenium-webdriver';
import firefox from 'selenium-webdriver/firefox.js';

(async () => {
  // Caminho do geckodriver.exe (Windows)
  const GECKODRIVER_PATH = './geckodriver.exe'; // ou 'C:\\caminho\\geckodriver.exe'

  // Cria o ServiceBuilder (sem .build()!)
  const service = new firefox.ServiceBuilder(GECKODRIVER_PATH);

  // Cria o driver
  const driver = await new Builder()
    .forBrowser(Browser.FIREFOX)
    .setFirefoxService(service)
    .build();

  try {
    await driver.get('https://www.google.com');
    console.log('SUCESSO! Firefox 144 + GeckoDriver 0.35.0 (ESM)');
  } catch (error) {
    console.error('Erro:', error.message);
  } finally {
    await driver.quit();
  }
})();
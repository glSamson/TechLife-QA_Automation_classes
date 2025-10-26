import { Builder, By } from "selenium-webdriver";
import { expect } from "chai";
import { Should } from "chai";

    // Declarar a função sleep
function sleep(ms) {return new Promise (resolve => setTimeout(resolve, ms));}

// Declarar o caso de teste
async function loginComSucesso () {
    // Abrir o Browser
    let driver = await new Builder().forBrowser("firefox").build();
    //await sleep(1000);
    // Navegar para a página de login
    await driver.get("https://www.saucedemo.com/v1/index.html")
   // await sleep(1000);
    // Digitar o username
    await driver.findElement(By.xpath("//input[@id='user-name']")).sendKeys("standard_user")
    //await sleep(1000);
    // Digitar a password
    await driver.findElement(By.xpath("//input[@id='password']")).sendKeys("secret_sauce")
   // await sleep(1000);
    // Clicar no botão login
    await driver.findElement(By.xpath("//input[@id='login-button']")).click();
   // await sleep(1000);
    // Validar que o login foi executado com sucesso
    const currentURL = await driver.getCurrentUrl();
    expect(currentURL).to.equal("https://www.saucedemo.com/v1/inventory.html");
    // Fechar o caso de teste
    await driver.quit();
}

loginComSucesso();
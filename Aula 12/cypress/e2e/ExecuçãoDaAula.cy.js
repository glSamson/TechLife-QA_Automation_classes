describe('Carrinho de compras', () => {
  beforeEach(() => {
    // O usuário está na página de produtos
    cy.visit('https://www.saucedemo.com/v1/index.html') // acede à página
    cy.get('[data-test="username"]').type("standard_user") // Preenche o campo usuário
    cy.get('[data-test="password"]').type("secret_sauce") // Preenche o campo senha
    cy.get('#login-button').click() // clica no botão login
    cy.url().should('eq', "https://www.saucedemo.com/v1/inventory.html") // Faz login com sucesso
  })
 it('TC001 - Botão ADD TO KART', () => {
  // Quando adiciona o primeiro item ao carrinho
  cy.xpath("//div[@class='inventory_list']//div[1]//div[3]//button[1]").click();
  // E adiciona o segundo item ao carrinho
  cy.xpath("//body//div[@id='page_wrapper']//div[@id='inventory_container']//div[@id='inventory_container']//div[2]//div[3]//button[1]").click();
  // E adiciona o terceiro item ao carrinho
  cy.xpath("//div[3]//div[3]//button[1]").click();
  // E adiciona o quarto item ao carrinho
  cy.xpath("//div[4]//div[3]//button[1]").click();
  // E adiciona o quinto item ao carrinho
  cy.xpath("//div[5]//div[3]//button[1]").click();
  // E adiciona o sexto item ao carrinho
  cy.xpath("//div[6]//div[3]//button[1]").click();
  // Então devem haver um total de seis itens no carrinho
  cy.xpath("//span[@class='fa-layers-counter shopping_cart_badge']").should('contain', "6")
                                                                    .and('exist')
                                                                    .and('be.visible');
  cy.wait(2000);
   })
 it('TC002 - filtro Price Low to High', () => {
  // Quando o usuário seleciona o filtro de produros do menor valor para o maior
  cy.xpath("//select[@class='product_sort_container']").select('Price (low to high)')
  // Então deve ter o primeiro item com o menor valor
  cy.xpath("//div[@class='inventory_list']//div[1]//div[3]//div[1]").should('contain',"$7.99")
  cy.wait(2000);
  })
})

describe('Funcionalidade de Login', () => {
    beforeEach(() => {
      // Dado que o usuário está na tela de login
    cy.visit('https://www.saucedemo.com/v1/index.html')
   cy.url().should('eq', "https://www.saucedemo.com/v1/index.html") // Acedeu à página
})
    it('TC001 - Login com sucesso', () => {
    // Quando preenche os campos necessários
    cy.xpath('//*[@id="user-name"]').type("standard_user")
    cy.xpath('//*[@id="password"]').type("secret_sauce")
    // E clica no botão login
    cy.xpath('//input[@id="login-button"]').click()
    // Então o usuário realiza o login com sucesso
    cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[1]").should('have.text','Products');
    cy.wait(2000);
  })
})
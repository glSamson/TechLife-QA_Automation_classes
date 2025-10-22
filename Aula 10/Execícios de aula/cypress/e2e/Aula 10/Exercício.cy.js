describe('Login', () => {

  it('TC001 - credenciais válidas', () => {
      // Dado que o usuário está na tela de login
    cy.visit('https://www.saucedemo.com/v1/index.html')

      // Quando preenche os campos necessários
    cy.xpath('//*[@id="user-name"]').type("standard_user")
    cy.xpath('//*[@id="password"]').type("secret_sauce")
    
      // e clica no botão login
    cy.xpath('//input[@id="login-button"]').click()
      // então o usuário realiza o login com sucesso
    cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[1]").should('have.text','Products');
  })

  it('TC002 - Username inválido', () => {
      // Dado que o usuário está na tela de login
    cy.visit('https://www.saucedemo.com/v1/index.html')

      // Quando preenche os campos necessários, mas com um usuário inválido
    cy.xpath('//*[@id="user-name"]').type("invalid_user")
    cy.xpath('//*[@id="password"]').type("secret_sauce")
    
      // e clica no botão login
    cy.xpath('//input[@id="login-button"]').click()
      // então o usuário recebe uma mensagem de erro
    cy.xpath("//h3[@data-test='error']").should('have.text','Epic sadface: Username and password do not match any user in this service');
  })

  it('TC003 - Senha inválida', () => {
      // Dado que o usuário está na tela de login
    cy.visit('https://www.saucedemo.com/v1/index.html')

      // Quando preenche os campos necessários, mas com uma senha inválida
    cy.xpath('//*[@id="user-name"]').type("standard_user")
    cy.xpath('//*[@id="password"]').type("secret_sauce_invalid")
    
      // e clica no botão login
    cy.xpath('//input[@id="login-button"]').click()
      // então o usuário recebe uma mensagem de erro
    cy.xpath("//h3[@data-test='error']").should('have.text','Epic sadface: Username and password do not match any user in this service');
  })

  it('TC004 - Username vazio', () => {
      // Dado que o usuário está na tela de login
    cy.visit('https://www.saucedemo.com/v1/index.html')

      // Quando preenche os campos necessários, mas deixa o username vazio
//  cy.xpath('//*[@id="user-name"]').type("standard_user")
    cy.xpath('//*[@id="password"]').type("secret_sauce")
    
      // e clica no botão login
    cy.xpath('//input[@id="login-button"]').click()
      // então o usuário recebe uma mensagem de erro
    cy.xpath("//h3[@data-test='error']").should('have.text','Epic sadface: Username is required');
  })

  it('TC005 - Senha vazia', () => {
      // Dado que o usuário está na tela de login
    cy.visit('https://www.saucedemo.com/v1/index.html')

      // Quando preenche os campos necessários, mas deixa a senha vazia
    cy.xpath('//*[@id="user-name"]').type("standard_user")
//  cy.xpath('//*[@id="password"]').type("secret_sauce")
    
      // e clica no botão login
    cy.xpath('//input[@id="login-button"]').click()
      // então o usuário recebe uma mensagem de erro
    cy.xpath("//h3[@data-test='error']").should('have.text','Epic sadface: Password is required');
  })
})

describe('addToCart', () => {

  it('TC001 - Adicionar um item ao carrinho', () => {
      // Dado que o usuário está na tela principal com url: https://www.saucedemo.com/v1/inventory.html
    cy.visit('https://www.saucedemo.com/v1/inventory.html')

      // Quando seleciona um item dentre os produtos
      cy.xpath("//div[normalize-space()='Sauce Labs Backpack']").click();
    
      // e clica no botão "add to kart"
      cy.xpath("//button[@class='btn_primary btn_inventory']").click();

      // Então um item foi adicionado ao carrinho com sucesso
      // (Verificação necessita de mais de uma etapa)

      cy.xpath("//*[name()='path' and contains(@fill,'currentCol')]").click();
      cy.xpath("//div[@class='inventory_item_name']").should('contain', 'Sauce Labs Backpack');
    })

  it('TC002 - Remover um item do carrinho', () => {
      // Dado que o usuário já está logado no site
      cy.visit('https://www.saucedemo.com/v1/inventory.html')

      // E já tem um item adicionado no carrinho
      cy.xpath("//div[normalize-space()='Sauce Labs Backpack']").click(); // (seleciona um item dentre os produtos)
      cy.xpath("//button[@class='btn_primary btn_inventory']").click(); // (clica no botão "add to kart")
      cy.xpath("//*[name()='path' and contains(@fill,'currentCol')]").click();

      // Quando o usuário clica para remover o produto
      cy.xpath("//button[normalize-space()='REMOVE']").click();



      // Então o item foi removido do carrinho com sucesso
      cy.get('.inventory_item_name').should('not.exist');
  })


})

describe('Checkout', () => {

  it('TC001 - Checkout com sucesso', () => {
      // Dado que o usuário tem um ou mais produtos no carrinho
    cy.visit('https://www.saucedemo.com/v1/inventory.html')
    cy.xpath("//div[@class='inventory_list']//div[1]//div[3]//button[1]").click(); //(clica no botão "add to kart")
    cy.xpath("//div[4]//div[3]//button[1]").click(); //(clica no botão "add to kart")
    cy.xpath("//div[5]//div[3]//button[1]").click(); //(clica no botão "add to kart")
    cy.xpath("//*[name()='path' and contains(@fill,'currentCol')]").click();
 
      // Quando clica no botão checkout
    cy.xpath("//a[@class='btn_action checkout_button']").click();

      // e preenche os dados necessários
    cy.xpath("//input[@id='first-name']").type("Javier")
    cy.xpath("//input[@id='last-name']").type("Ortez")
    cy.xpath("//input[@id='postal-code']").type("48200-157")

      // e clica no botão continuar
    cy.xpath("//input[@value='CONTINUE']").click();

      // e clica no botão finish
    cy.xpath("//a[@class='btn_action cart_button']").click();

      // então o checkout foi realizado com sucesso
    cy.xpath("//h2[@class='complete-header']").should('have.text', 'THANK YOU FOR YOUR ORDER')
cy.wait(2000);
    })
})
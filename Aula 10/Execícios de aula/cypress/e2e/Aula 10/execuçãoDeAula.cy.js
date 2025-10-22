// "describe" é o cenário de teste (exemplo: cenário de login (funcionalidade a teste), dentro dela temos os casos de teste)

describe('Login', () => {

    // "it" é o caso de teste
  it('TC001 - Login com sucesso', () => {
      // Dado que o usuário está na tela de login
    cy.visit('https://www.saucedemo.com/v1/index.html')

      // e preenche os campos necessários
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    
      // e clica no botão login
    cy.get('#login-button').click()
      // então o usuário realiza o login com sucesso
   // cy.get('.product_label').
  })


    it('TC002 - Login sem username', () => {
      // Dado que o usuário está na tela de login
    cy.visit('https://www.saucedemo.com/v1/index.html')

      // e preenche apenas o campo Pasword
//    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    
      // e clica no botão login
    cy.get('#login-button').click()
      // então o usuário receberá uma mensagem de erro
   // cy.get('.product_label').
  })



  it('TC003 - Login sem senha', () => {
      // Dado que o usuário está na tela de login
    cy.visit('https://www.saucedemo.com/v1/index.html')

      // e preenche apenas o campo Username
    cy.get('[data-test="username"]').type("standard_user")
//    cy.get('[data-test="password"]').type("secret_sauce")
    
      // e clica no botão login
    cy.get('#login-button').click()
      // então o usuário receberá uma mensagem de erro
   // cy.get('.product_label').
  })
})


describe('Login com Xpath', () => {

    // "it" é o caso de teste
  it('TC001 - Login com sucesso', () => {
      // Dado que o usuário está na tela de login
    cy.visit('https://www.saucedemo.com/v1/index.html')

      // e preenche os campos necessários
    cy.xpath('//*[@id="user-name"]').type("standard_user")
    cy.xpath('//*[@id="password"]').type("secret_sauce")
    
      // e clica no botão login
    cy.xpath('//input[@id="login-button"]').click()
      // então o usuário realiza o login com sucesso
   // cy.get('.product_label').
  })


    it('TC002 - Login sem username', () => {
      // Dado que o usuário está na tela de login
    cy.visit('https://www.saucedemo.com/v1/index.html')

      // e preenche apenas o campo Pasword
//    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    
      // e clica no botão login
    cy.get('#login-button').click()
      // então o usuário receberá uma mensagem de erro
   // cy.get('.product_label').
  })



  it('TC003 - Login sem senha', () => {
      // Dado que o usuário está na tela de login
    cy.visit('https://www.saucedemo.com/v1/index.html')

      // e preenche apenas o campo Username
    cy.get('[data-test="username"]').type("standard_user")
//    cy.get('[data-test="password"]').type("secret_sauce")
    
      // e clica no botão login
    cy.get('#login-button').click()
      // então o usuário receberá uma mensagem de erro
   // cy.get('.product_label').
  })
})

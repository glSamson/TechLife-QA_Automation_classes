describe('Shopping cart', () => {
  beforeEach(() => {
    // Given that the user is on the product page
    cy.visit('https://www.saucedemo.com/') // access the page
    cy.wait(1000);
    cy.get('[data-test="username"]').type("standard_user") // Fill in the username field
    cy.wait(500);
    cy.get('[data-test="password"]').type("secret_sauce") // Fill in the password field
    cy.wait(500);
    cy.get('#login-button').click() // click on the login button
    cy.wait(500);
    cy.url().should('eq', "https://www.saucedemo.com/inventory.html") // Log in successfully
  cy.wait(500);
  })
 it('TC001 - ADD TO KART button', () => {
  // When the user add the first item to your cart
  cy.wait(1000);
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  // add the second item to your cart
  cy.wait(1000);
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  // add the tird item to your cart
  cy.wait(500);
  cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  // And add the fourth item to your cart
  cy.wait(500);
  cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  // And add the fifth item to your cart
  cy.wait(500);
  cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  // And add the sixth item to your cart
  cy.wait(500);
  cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
  // Then should be a total of six items in the cart.
  cy.wait(500);
  cy.xpath("//span[@class='shopping_cart_badge']").should('contain', "6")
                                                                    .and('exist')
                                                                    .and('be.visible');
  cy.wait(2000);
   })
 it('TC002 - Product ordering', () => {
  // When the user set the product filter to "Price (low to high)"
  cy.wait(500);
  cy.xpath("//select[@class='product_sort_container']").select('Price (low to high)')
  // Then the firs item must contain the lowest price
  cy.wait(500);
  cy.xpath("//div[@class='inventory_list']//div[1]//div[2]//div[2]//div[1]").should('contain',"$7.99")
  cy.wait(2000);
  })
})

describe('Login', () => {
    beforeEach(() => {
      // Given that the user is on the login page
    cy.visit('https://www.saucedemo.com/') //Accessed the page
    cy.url().should('eq', "https://www.saucedemo.com/")
    cy.wait(500);
})
    it('TC001 - Login successfully', () => {
    // When the user fills in the user and password fields
    cy.wait(500);
    cy.xpath('//*[@id="user-name"]').type("standard_user")
    cy.wait(500);
    cy.xpath('//*[@id="password"]').type("secret_sauce")
    // And click on the login button
    cy.wait(500);
    cy.xpath('//input[@id="login-button"]').click()
    // Then the user successfully logs in.
    cy.wait(500);
    cy.xpath("//span[@class='title']").should('have.text','Products');
    cy.wait(3000);
  })
})

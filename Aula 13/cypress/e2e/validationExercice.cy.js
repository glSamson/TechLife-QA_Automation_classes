describe('Login', () => {

  it('Login com sucesso', () => {
    // Given that the user is on the login page.
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // When typing in the Username field: "Admin"
    cy.xpath("//input[@placeholder='Username']").type("Admin");
    // And type it in the Password field: "admin123"
    cy.xpath("//input[@placeholder='Password']").type("admin123");
    // And click the button: "submit"
    cy.xpath("//button[@type='submit']").click();
    // Then the user should be redirected to the secret screen
    cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    cy.wait(4000);
  })
  it('Login sem sucesso', () => {
    // Given that the user is on the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // When typing in the Username field: "Admin"
    cy.xpath("//input[@placeholder='Username']").type("Admin");
    // And type it in the Password field.: "admin1234"
    cy.xpath("//input[@placeholder='Password']").type("admin1234");
    // And click button: "submit"
    cy.xpath("//button[@type='submit']").click();
    // Then the user should see an error message: "Invalid credentials"
    cy.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").should("have.text","Invalid credentials")
    cy.wait(4000);
  })
})

describe('Adicionando um novo colaborador', () => {
  beforeEach(() => { // Dado que o usuário já executou o login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.xpath("//input[@placeholder='Username']").type("Admin");
    cy.xpath("//input[@placeholder='Password']").type("admin123");
    cy.xpath("//button[@type='submit']").click();
    cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  })

  it('TC001 - Add a new employee', () => {
    // When you select the PIM field in the selection menu
    cy.xpath("//span[normalize-space()='PIM']").click();
    // And click on "Add Employee"
    cy.xpath("//a[normalize-space()='Add Employee']").click();
    // And fill in the employee's first name
    cy.xpath("//input[@placeholder='First Name']").type("Carlos");
    // And fill in the collaborator's last name
    cy.xpath("//input[@placeholder='Middle Name']").type("Alberto")
    // And fill in the employee's last name
    cy.xpath("//input[@placeholder='Last Name']").type("Tavares")
    // And it deletes the ID of the previously registered user
    cy.xpath("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").clear();
    // Type the ID for the new user, then press the enter key
    cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type("367513{enter}");
    // Then the new user should have been successfully registered
    cy.get('.oxd-text--toast-title').should("contain", "Success")
    cy.wait(4000);
  })
  it('TC002 - Verificar se o "nome de usuário" está registrado', () => {
    // When the user clicks on the "My Info" menu icon
    cy.xpath("//span[normalize-space()='My Info']").click();
    cy.wait(300);
    // Then the employee's full name must be visible
    cy.xpath("//input[@placeholder='First Name']").should("not.be.null")
    cy.xpath("//input[@placeholder='Middle Name']").should("not.be.null")
    cy.xpath("//input[@placeholder='Last Name']").should("not.be.null")
    cy.wait(4000);
  })
  it('TC003 - Adicionar uma experiência prévia do colaborador', () => {
    // Whaen the user click on "My info" icon
    cy.xpath("//span[normalize-space()='My Info']").click();
    // And click in "Qualifications", in the personal information section
    cy.xpath("//a[normalize-space()='Qualifications']").click();
    // And in the "Work Experience" section, click on: + Add
    cy.xpath("//body/div[@id='app']/div[@class='oxd-layout orangehrm-upgrade-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='orangehrm-card-container']/div[@class='orangehrm-edit-employee']/div[@class='orangehrm-edit-employee-content']/div[2]/div[1]/div[1]/button[1][1]/i[1]").click();
    // And type the company name: "Jaspion Electronic Inc."
    cy.xpath("//body/div[@id='app']/div[@class='oxd-layout orangehrm-upgrade-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='orangehrm-card-container']/div[@class='orangehrm-edit-employee']/div[@class='orangehrm-edit-employee-content']/div/div[@class='orangehrm-horizontal-padding orangehrm-top-padding']/form[@class='oxd-form']/div[@class='oxd-form-row']/div[@class='oxd-grid-3 orangehrm-full-width-grid']/div[1]/div[1]/div[2]/input[1]").type("Jaspion Electronic Inc.");
    // And type the previously performed function: "Software Automation Tester"
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Software Automation Tester");
    // And enter the start date in the function: "2023-10-10"
    cy.xpath("//div[@class='oxd-grid-3 orangehrm-full-width-grid']//div[1]//div[1]//div[2]//div[1]//div[1]//i[1]").type("2023-10-10");
    // And enter the contract termination date: "2025-10-04"
    cy.xpath("//body/div[@id='app']/div[@class='oxd-layout orangehrm-upgrade-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='orangehrm-card-container']/div[@class='orangehrm-edit-employee']/div[@class='orangehrm-edit-employee-content']/div/div[@class='orangehrm-horizontal-padding orangehrm-top-padding']/form[@class='oxd-form']/div[@class='oxd-form-row']/div[@class='oxd-grid-3 orangehrm-full-width-grid']/div[2]/div[1]/div[2]/div[1]/div[1]/i[1]").type("2025-10-04");
    // And click the "submit" button
    cy.xpath("//button[@type='submit']").click();
    // Then the employee's prior experience must be successfully added
    cy.xpath("//i[@class='oxd-icon bi-check2 oxd-toast-icon']").should("be.visible");
    cy.wait(4000);
  })
})

//Assertion exercice: Used assertions
//eq
//have.text
//contain
//not.be.visible
//be.visible

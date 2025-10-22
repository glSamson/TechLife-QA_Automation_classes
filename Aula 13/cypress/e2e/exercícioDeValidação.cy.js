describe('Funcionalidade Login', () => {
  it('Login com sucesso', () => {
    // Dado que o usuário está na página de login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // Quando digita no campo Username: "Admin"
    cy.xpath("//input[@placeholder='Username']").type("Admin");
    // E digita no campo Password: "admin123"
    cy.xpath("//input[@placeholder='Password']").type("admin123");
    // E clica no botão: "submit"
    cy.xpath("//button[@type='submit']").click();
    // Então o usuário deve ser redirecionado para a tela secreta
    cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    cy.wait(4000);
  })
  it('Login sem sucesso', () => {
    // Dado que o usuário está na página de login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // Quando digita no campo Username: "Admin"
    cy.xpath("//input[@placeholder='Username']").type("Admin");
    // E digita no campo Password: "admin1234"
    cy.xpath("//input[@placeholder='Password']").type("admin1234");
    // E clica no botão: "submit"
    cy.xpath("//button[@type='submit']").click();
    // Então o usuário deve ver uma mensagem de erro: "Invalid credentials"
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

  it('TC001 - Adicionar um novo empregado', () => {
    // Quando seleciona o campo PIM no menu de seleção
    cy.xpath("//span[normalize-space()='PIM']").click();
    // E clica em "Add Employee"
    cy.xpath("//a[normalize-space()='Add Employee']").click();
    // E preenche o primeiro nome do colaborador
    cy.xpath("//input[@placeholder='First Name']").type("Carlos");
    // E preenche o segundo nome do colaborador
    cy.xpath("//input[@placeholder='Middle Name']").type("Alberto")
    // E preenche o último nome do colaborador
    cy.xpath("//input[@placeholder='Last Name']").type("Tavares")
    // E apaga o ID do usuário previamente registrado
    cy.xpath("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").clear();
    // E digita o ID no novo usuário, pressionando a tecla enter em seguida
    cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type("367515{enter}");
    // Então o novo usuário deve ter sido registrado com sucesso
    cy.get('.oxd-text--toast-title').should("contain", "Success")
    cy.wait(4000);
  })
  it('TC002 - Verificar se o "nome de usuário" está registrado', () => {
    // Quando o usuário clicar no ícone do menu: "My Info"
    cy.xpath("//span[normalize-space()='My Info']").click();
    cy.wait(300);
    // Então o nome completo do colaborador deve estar visível
    cy.xpath("//input[@placeholder='First Name']").should("not.be.null")
    cy.xpath("//input[@placeholder='Middle Name']").should("not.be.null")
    cy.xpath("//input[@placeholder='Last Name']").should("not.be.null")
    cy.wait(4000);
  })
  it('TC003 - Adicionar uma experiência prévia do colaborador', () => {
    // Quando o usuário clicar no ícone do menu: "My Info"
    cy.xpath("//span[normalize-space()='My Info']").click();
    // E clica em "Qualifications", na secção de informações pessoais
    cy.xpath("//a[normalize-space()='Qualifications']").click();
    // E, na secção "Work Experience", clica em: + Add
    cy.xpath("//body/div[@id='app']/div[@class='oxd-layout orangehrm-upgrade-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='orangehrm-card-container']/div[@class='orangehrm-edit-employee']/div[@class='orangehrm-edit-employee-content']/div[2]/div[1]/div[1]/button[1][1]/i[1]").click();
    // E digita o nome da companhia: "Jaspion Electronic Inc."
    cy.xpath("//body/div[@id='app']/div[@class='oxd-layout orangehrm-upgrade-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='orangehrm-card-container']/div[@class='orangehrm-edit-employee']/div[@class='orangehrm-edit-employee-content']/div/div[@class='orangehrm-horizontal-padding orangehrm-top-padding']/form[@class='oxd-form']/div[@class='oxd-form-row']/div[@class='oxd-grid-3 orangehrm-full-width-grid']/div[1]/div[1]/div[2]/input[1]").type("Jaspion Electronic Inc.");
    // E digita a função anteriormente desempenhada: "Software Automation Tester"
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Software Automation Tester");
    // E digita a data de início na função: "2023-10-10"
    cy.xpath("//div[@class='oxd-grid-3 orangehrm-full-width-grid']//div[1]//div[1]//div[2]//div[1]//div[1]//i[1]").type("2023-10-10");
    // E digita a data de encerramento do contrato: "2025-10-04"
    cy.xpath("//body/div[@id='app']/div[@class='oxd-layout orangehrm-upgrade-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='orangehrm-card-container']/div[@class='orangehrm-edit-employee']/div[@class='orangehrm-edit-employee-content']/div/div[@class='orangehrm-horizontal-padding orangehrm-top-padding']/form[@class='oxd-form']/div[@class='oxd-form-row']/div[@class='oxd-grid-3 orangehrm-full-width-grid']/div[2]/div[1]/div[2]/div[1]/div[1]/i[1]").type("2025-10-04");
    // E clica no botão: "submit"
    cy.xpath("//button[@type='submit']").click();
    // Então a experiência prévia do colaborador deve ser adicionada com sucesso
    cy.xpath("//i[@class='oxd-icon bi-check2 oxd-toast-icon']").should("be.visible");
    cy.wait(4000);
  })
})
// Assertions utilizadas
//eq
//have.text
//contain
//not.be.visible
//be.visible

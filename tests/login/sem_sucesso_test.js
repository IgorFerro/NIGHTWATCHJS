module.exports = {
   
  before:(browser) =>{
    browser.maximizeWindow()
  },

  after:(browser) =>{
    browser.end();
  },

  //'@disabled':true,
  
    'invalid password': (browser) => {
        let login = browser.page.login()

        login
        .navigate()
        .waitForElementVisible('@form', 3000)
        .setValue('@emailInput','zumbi@dospalmares.com.br')
        .setValue('@passInput','123456')
        .click('@loginButton')
        .waitForElementVisible('@alertDanger', 3000)
        .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')
  },
  'user not registered': (browser) =>{
    let login = browser.page.login()

        login
        .navigate()
        .waitForElementVisible('@form', 3000)
        .setValue('@emailInput','404@yahoo.com')
        .setValue('@passInput','123456')
        .click('@loginButton')
        .waitForElementVisible('@alertDanger', 3000)
        .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')
  },
  'email not filed': (browser) => {
    let login = browser.page.login()

        login
        .navigate()
        .waitForElementVisible('@form', 3000)
        .setValue('@emailInput','')
        .setValue('@passInput','123456')
        .click('@loginButton')
        .waitForElementVisible('@alertInfo', 3000)
        .assert.containsText('@alertInfo', 'Opps. Cadê o email?')
  },
  'password not filed': (browser) => {
    let login = browser.page.login()

        login
        .navigate()
        .waitForElementVisible('@form', 3000)
        .setValue('@emailInput','123@yahoo.com')
        .setValue('@passInput','')
        .click('@loginButton')
        .waitForElementVisible('@alertInfo', 3000)
        .assert.containsText('@alertInfo', 'Opps. Cadê a senha?')
  }

}
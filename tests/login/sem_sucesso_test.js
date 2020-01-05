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
        .with('zumbi@dospalmares.com.br','123abc')
        .waitForElementVisible('@alertDanger', 3000)
        .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')
  },
  'user not registered': (browser) =>{
    let login = browser.page.login()

        login
        .with('404@yahoo.com','123456')
        .waitForElementVisible('@alertDanger', 3000)
        .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')
  },
  'email not filed': (browser) => {
    let login = browser.page.login()

        login
        .with('','123456')
        .waitForElementVisible('@alertInfo', 3000)
        .assert.containsText('@alertInfo', 'Opps. Cadê o email?')
  },
  'password not filed': (browser) => {
    let login = browser.page.login()

        login
        .with('404@yahoo.com','')
        .waitForElementVisible('@alertInfo', 3000)
        .assert.containsText('@alertInfo', 'Opps. Cadê a senha?')
  }

}
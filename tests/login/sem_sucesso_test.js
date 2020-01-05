module.exports = {
   
  before:(browser) =>{
    browser.maximizeWindow()
  },

  after:(browser) =>{
    browser.end();
  },
    'invalid password': (browser) => {
        let alert = '.alert-danger'
        browser
        .url('http://zombie-web:5000/login')
        .waitForElementVisible('.card-login', 3000)
        .setValue('input[name=email]','zumbi@dospalmares.com.br')
        .setValue('input[name=password]','123456')
        .click('.login-button')
        .waitForElementVisible(alert, 3000)
        .assert.containsText(alert, 'Usuário e/ou senha inválidos')
  },
  'user not registered': (browser) =>{
    let alert = '.alert-danger'
        browser
        .url('http://zombie-web:5000/login')
        .waitForElementVisible('.card-login', 3000)
        .setValue('input[name=email]','404@yahoo.com')
        .setValue('input[name=password]','123456')
        .click('.login-button')
        .waitForElementVisible(alert, 3000)
        .assert.containsText(alert, 'Usuário e/ou senha inválidos')
  },
  'email not filed': (browser) => {
    let alert = '.alert-info'
        browser
        .url('http://zombie-web:5000/login')
        .waitForElementVisible('.card-login', 3000)
        .setValue('input[name=email]','')
        .setValue('input[name=password]','123456')
        .click('.login-button')
        .waitForElementVisible(alert, 3000)
        .assert.containsText(alert, 'Opps. Cadê o email?')
  },
  'password not filed': (browser) => {
    let alert = '.alert-info'
        browser
        .url('http://zombie-web:5000/login')
        .waitForElementVisible('.card-login', 3000)
        .setValue('input[name=email]','123@yahoo.com')
        .setValue('input[name=password]','')
        .click('.login-button')
        .waitForElementVisible(alert, 3000)
        .assert.containsText(alert, 'Opps. Cadê a senha?')
  }

}
module.exports = {
   


  //'@disabled':true,
  
    'invalid password': (browser) => {
        let login = browser.page.login()
        login
        .with('zumbi@dospalmares.com.br','123abc')
        .expectAlertDanger('Usuário e/ou senha inválidos')
  },
  'user not registered': (browser) =>{
    let login = browser.page.login()

        login
        .with('404@yahoo.com','123456')
        .expectAlertDanger('Usuário e/ou senha inválidos')
  },
  'email not filed': (browser) => {
    let login = browser.page.login()

        login
        .with('','123456')
        .expectAlertInfo('Opps. Cadê o email?')
  },
  'password not filed': (browser) => {
    let login = browser.page.login()

        login
        .with('404@yahoo.com','')
        .expectAlertInfo('Opps. Cadê a senha?')
  }

}
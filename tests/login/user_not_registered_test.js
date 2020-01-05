module.exports = {
  //'@disabled':true,    
  'user not registered': (browser) =>{
    let login = browser.page.login()

        login
        .with('404@yahoo.com','123456')
        .expectAlertDanger('Usuário e/ou senha inválidos')
  }
}
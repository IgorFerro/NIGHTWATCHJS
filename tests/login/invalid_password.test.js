module.exports = {
  //'@disabled':true,
    'invalid password': (browser) => {
        let login = browser.page.login()
        login
        .with('zumbi@dospalmares.com.br','123abc')
        .expectAlertDanger('Usuário e/ou senha inválidos')
  }
}
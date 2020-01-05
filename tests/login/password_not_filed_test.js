module.exports = {
   //'@disabled':true,
  'password not filed': (browser) => {
    let login = browser.page.login()

        login
        .with('404@yahoo.com','')
        .expectAlertInfo('Opps. Cadê a senha?')
  }

}
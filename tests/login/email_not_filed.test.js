module.exports = {
   //'@disabled':true,
  'email not filed': (browser) => {
    let login = browser.page.login()

        login
        .with('','123456')
        .expectAlertInfo('Opps. Cadê o email?')
  },
}
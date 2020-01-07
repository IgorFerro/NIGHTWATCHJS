module.exports = {
    '@tags':['smoke', '404'],
    
     before: function(browser){
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()
        
        login.with('zumbi@dospalmares.com.br','pwd123')
        sidebar.expectLoggedUser('Quilombo')

     }, 

    'When i search for a movie not registered':function(browser){
        let movie = browser.page.movie()
        movie
        .setValue('@searchInput','Ghost Test 1234567')
        .click('@searchIncon')
        .pause(5000)
    },

    'Then i must see an alert message':function(browser){
        let movie = browser.page.movie()
        movie
       .waitForElementVisible('@alertDanger',10000)
       .assert.containsText('@alertDanger','Puxa! não encontramos nada aqui :(')
    }
}
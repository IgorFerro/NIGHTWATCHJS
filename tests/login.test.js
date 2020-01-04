module.exports = {
    /*'login com sucesso': function(browser){
        var userInfo = '.user .info span'
        browser
        .maximizeWindow()
        .url('http://zombie-web:5000/login')
        .waitForElementVisible('.card-login', 3000)
        .setValue('input[name=email]','zumbi@dospalmares.com.br')
        .setValue('input[name=password]','pwd123')
        .click('.login-button')
        .waitForElementVisible(userInfo, 3000)
        .assert.containsText(userInfo, 'Quilombo')
        .end();

    },*/

    'Given i access the log page':function(browser){
        browser
        .maximizeWindow()
        .url('http://zombie-web:5000/login')
        .waitForElementVisible('.card-login', 3000)
    },
    'When i logged':function(browser){
       browser
        .setValue('input[name=email]','zumbi@dospalmares.com.br')
        .setValue('input[name=password]','pwd123')
        .click('.login-button')
    },
    'Then i will see my name in login area':function(browser){
        var userInfo = '.user .info span'
        browser
        .waitForElementVisible(userInfo, 3000)
        .assert.containsText(userInfo, 'Quilombo')
        .end();
    }
}
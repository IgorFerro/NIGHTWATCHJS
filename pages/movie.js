var createActions ={
    createForm: function (){
        return this
        .click('@addButton')
        .waitForElementVisible('@movieForm', 3000)
    },
    selectStatus: function(status){
        return this
     .click('@statusSelect')
     .useXpath()
     .waitForElementVisible(`//li//span[contains(text(),"${status}")]`,2000)
     .click(`//li//span[contains(text(),"${status}")]`)
     .useCss()
    },
    insertCast: function(cast){
        const browser = this
        cast.forEach(function (actor) {
          browser
          .setValue('@castInput', actor) 
          .api.keys(browser.api.Keys.TAB) 
        })
        return this
    },
    uploadCover: function(fileName){
      let fullPath = require('path').resolve(__dirname, '../images/' + fileName)  
      return this.setValue('@uploadInput',fullPath)

    }

}


module.exports ={
    commands: [createActions],
    elements:{
        addButton:'.movie-add',
        movieForm:'#movie-form',
        titleInput: 'input[name=title]',
        statusSelect: 'input[placeholder=Status]',
        yearInput: 'input[name=year]',
        dateInput:'input[name=release_date]',
        castInput:'.cast',
        plotInput:'textarea[name=overview]',
        uploadInput: '#upcover', 
        createButton:'#create-movie',
        list: 'table tbody'
    }
}
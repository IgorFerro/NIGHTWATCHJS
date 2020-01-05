
let movieData = [];
module.exports ={

    before : function(browser){
        movieData = {
            title :'Resident Evil',
            status:'Disponível',
            year:'2002',
            releaseDate:'01/05/2002',
            cast: ['Milla Jovovich', 'Ali Larter', 'Ian Glen', 'Shawn Roberts'],
            cover:'resident-evil-2002.jpg',
            plot:'O enredo de Resident Evil inicia em torno de uma série de casos de homicídio envolvendo canibalismo ocorridos em Arklay Mountain (Montanhas Arklay)', 
    }

    let login = browser.page.login()
    let sidebar = browser.page.sidebar()
    
    login.with('zumbi@dospalmares.com.br','pwd123')
    sidebar.expectLoggedUser('Quilombo')

    },
    'When i register a new movie':function (browser){
     let movie = browser.page.movie();
     
     movie
     .click('@addButton')
     .waitForElementVisible('@movieForm', 3000)
     .setValue('@titleInput',movieData.title)
     .pause(5000)

    }
}
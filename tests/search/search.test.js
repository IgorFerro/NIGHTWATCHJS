import pg from '../../lib/db'
let movieData = {}

module.exports= {
    before : function(browser){

        movieData = {
            title :'Teste Evil',
            status:'Disponível',
            year:'2013',
            releaseDate:'01/05/2013',
            cast: ['Teste Jovovich', 'Teste Larter', 'Teste Glen', 'Teste Roberts'],
            cover:'resident-evil-2002.jpg',
            plot:'O enredo de Resident Evil inicia em torno de uma série de casos de homicídio envolvendo canibalismo ocorridos em Arklay Mountain (Montanhas Arklay)', 
        }

        pg.removeByTitle(movieData.title).then(function(){
            pg.insertMovie(movieData)
        })

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()
        
        login.with('zumbi@dospalmares.com.br','pwd123')
        sidebar.expectLoggedUser('Quilombo')
    },

    'When i search for a movie title':function(browser){
        let movie = browser.page.movie()
        movie
        .setValue('@searchInput',movieData.title)
        .click('@searchIncon')
        .pause(5000)
    },
    'Then the movie title is display':function(browser){
      let movie = browser.page.movie()
      movie
      .waitForElementPresent('@tr',10000)
      .expect.elements('@tr').count.to.equal(1)
      movie.assert.containsText('@tr',movieData.title)

    }
}
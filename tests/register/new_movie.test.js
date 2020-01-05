
let movieData = [];
module.exports ={
    'Given i have a new movie' : function (browser){
            movieData = {
            title :'Resident Evil',
            status:'Disponível',
            year:'2002',
            releaseDate:'01/05/2002',
            cast: ['Milla Jovovich', 'Ali Larter', 'Ian Glen', 'Shawn Roberts'],
            cover:'resident-evil-2002.jpg',
            plot:'O enredo de Resident Evil inicia em torno de uma série de casos de homicídio envolvendo canibalismo ocorridos em Arklay Mountain (Montanhas Arklay)', 
    }
},
    'When i register a new movie':function (browser){
     console.log(movieData);
    }
}
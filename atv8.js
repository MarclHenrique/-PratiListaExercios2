// Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

class Filmes {
    constructor(titulo, diretor, anoLancamento){
        this.titulo = titulo;
        this.diretor = diretor;
        this.anoLancamento = anoLancamento
    }
}

let filme1 = new Filmes("O hobbit", "Arnold", 2004);
let filme2 = new Filmes("Max steel", "Bruce Lee", 2010);
let filme3 = new Filmes("Quebrando Regras", "Ippo", 2008);

const arrayFilmes = [filme1, filme2, filme3];

let tituloFilmes = [];

arrayFilmes.forEach(filme => {
    tituloFilmes.push(filme.titulo);
});

console.log(tituloFilmes);

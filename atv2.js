// Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

const livro = {
    titulo: 'O hobbit',
    autor: 'Harry Poter',
    anoPublicacao: '2008',
    genero: 'Fictício'
}

console.log(livro);


if (!livro.hasOwnProperty('editoras')){
    livro.editora = 'Desconhecido';
}

console.log(livro);

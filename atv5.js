// Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

const alunos = [
    {nome: "Marcelo Henrique", nota1: 10, nota2: 8},
    {nome: "Juninho", nota1: 7, nota2: 9},
    {nome: "Zilu", nota1: 7, nota2: 9},
]

let soma = 0;
let media = 0;
for (const aluno of alunos) {
    soma = aluno.nota1 + aluno.nota2;

    media = soma / 2;

    console.log(`Nome: ${aluno.nome}, Media: ${media}`);
    

}
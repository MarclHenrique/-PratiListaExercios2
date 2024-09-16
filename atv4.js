// Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

const pessoas = [
  { nome: "Marcelo Henrique", idade: 20, cidade: "São Luís" },
  { nome: "Bastos", idade: 21, cidade: "São Paulo" },
  { nome: "Rodrigues", idade: 18, cidade: "Rio de Janeiro" },
];

for (const pessoa of pessoas) {
  console.log(
    `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`
  );
}

// Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

let clientes = [
    {nome: "Jhonata", idade: 28, cidade: "São Luís"},
    {nome: "Raimundo", idade: 23, cidade: "Fortaleza"},
    {nome: "João", idade: 32, cidade: "São Raimundo"},
    {nome: "Caio", idade: 31, cidade: "São Paulo"},
    {nome: "Pedro", idade: 35, cidade: "Rio de Janeiro"}
]

let quantidadeClientes = 0

clientes.forEach(cliente => {
    if (cliente.idade > 30){
        quantidadeClientes++

        console.log(`Cliente:  ${cliente.nome}, Idade: ${cliente.idade}, Cidade: ${cliente.cidade}\n`);
    }
    
    
});

console.log(`Existem ${quantidadeClientes} clientes maiores que 30 anos`);

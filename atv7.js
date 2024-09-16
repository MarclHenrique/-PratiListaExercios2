// Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

let produtos = [
    {nome: "Lápis", preco: 4.50, desconto: 0.10},
    {nome: "Caneta", preco: 8.00, desconto: 0.10},
    {nome: "Borracha", preco: 3.00, desconto: 0.10}
]
let precoProduto = 0;

produtos.forEach(produto => {
    precoProduto = produto.preco - (produto.preco * produto.desconto)  
    
    console.log(`Nome: ${produto.nome}, Preço do Produto com desconto: ${precoProduto.toFixed(2)}`);
    
});
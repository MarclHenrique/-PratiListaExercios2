// Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

let vendas = [
    {produto: "Caneta", quantidade: 10, valor: 5.00 },
    {produto: "Lápis", quantidade: 20, valor: 4.50 },
    {produto: "Borracha", quantidade: 15, valor: 3.50 },

];

let totalProdutosVendidos = 0

vendas.forEach(venda => {
    totalProdutosVendidos += venda.quantidade * venda.valor;
});

console.log(`O valor total dos produtos vendidos é de: ${totalProdutosVendidos.toFixed(2)}`);


const carrinho = {
  itens: [
    { nome: "Sabão em Pó", quantidade: 5, precoUnitario: 6.0 },
    { nome: "Detergente", quantidade: 3, precoUnitario: 7.0 },
    { nome: "Água Sanitária", quantidade: 2, precoUnitario: 10.0 },
    { nome: "Esponja", quantidade: 5, precoUnitario: 3.5 },
  ],
};

let valorTotalCarrinho = 0

carrinho.itens.forEach(item => {
    valorTotalCarrinho += item.precoUnitario * item.quantidade;  
});

console.log(`O valor total da compra é R$ ${valorTotalCarrinho.toFixed(2)}`);


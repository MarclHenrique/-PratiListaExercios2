let estoque = [
    {produto: "Camisa", quantidade: 15, minimo: 20},
    {produto: "Calça", quantidade: 5, minimo: 15},
    {produto: "Tênis", quantidade:10, minimo: 10},
    {produto: "Boné", quantidade: 8, minimo: 10}
];

console.log(estoque);
console.log("\n");

estoque.forEach((produto) =>{
    if(produto.quantidade < produto.minimo){
        produto.quantidade *= 2
    };
});

console.log(estoque);

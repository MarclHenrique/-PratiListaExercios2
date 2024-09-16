let pedidos = [
  { cliente: "Marcos", produto: "Café Kimimo 300g", quantidade: 3 },
  { cliente: "Júnior", produto: "Queijo", quantidade: 2 },
  {
    cliente: "Vinicius",
    produto: "Refrigerante Jesus 2 litros",
    quantidade: 2,
  },
  { cliente: "Vinicius", produto: "Carvão", quantidade: 2 },
  { cliente: "Marcos", produto: "Ovo", quantidade: 6 },
  { cliente: "Júnior", produto: "Presunto", quantidade: 3 },
];

let totalPorCliente = {};

pedidos.forEach((pedido) => {
  if (!totalPorCliente[pedido.cliente]) {
    totalPorCliente[pedido.cliente] = 0;
  }
  totalPorCliente[pedido.cliente] += pedido.quantidade;
});

console.log(totalPorCliente);

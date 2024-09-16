const transacoes = [
    { tipo: "entrada", valor: 1500 },
    { tipo: "saída", valor: 500 },
    { tipo: "entrada", valor: 1200 },
    { tipo: "saída", valor: 300 },
    { tipo: "entrada", valor: 2500 },
    { tipo: "saída", valor: 1000 },
    { tipo: "entrada", valor: 200 },
    { tipo: "saída", valor: 150 },
  ];
  
let valorEntrada = 0;
let valorSaida = 0;
let saldoFinal = 0;

transacoes.forEach(elemento => {
    if(elemento.tipo === "entrada"){
        valorEntrada += elemento.valor
    }
    else if (elemento.tipo === "saída"){
        valorSaida += elemento.valor
    }

    saldoFinal = valorEntrada - valorSaida;
});  

console.log(`Saldo Final: ${saldoFinal}`);

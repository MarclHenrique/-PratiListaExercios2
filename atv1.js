// Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

const carro = {
    marca: 'Chevrolet', 
    modelo: 'Camaro',
    ano: '2012',
    cor: 'Amarelo'
}

for (const key in carro) {
    console.log(`${key}: ${carro[key]}`);
    
}
// Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

let funcionarios = [
    {nome: "Fernandinho", cargo: "Engenheiro de Software", salario: 15000},
    {nome: "Junior", cargo: "Desenvolvedor de Software", salario: 12000},
    {nome: "Rafael", cargo: "DevOps", salario: 18000}
]

for (const funcionario of funcionarios) {
    if(funcionario.salario > 12000){
        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salario: ${funcionario.salario}`);
        
    }
}
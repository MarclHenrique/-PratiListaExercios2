const Empresa = {
  departamento: [
    {
      nome: "Núcleo de Tecnologia da Informação",
      funcionarios: ["Michael", "Fernando", "Marcelo", "Carlos"],
    },
    {
      nome: "Recursos Humanos",
      funcionarios: ["Ana", "João", "Marta", "Lucas"],
    },
    {
      nome: "Departamento Financeiro",
      funcionarios: ["Cláudia", "Ricardo", "Pedro", "Fernanda"],
    },
    {
      nome: "Marketing",
      funcionarios: ["Juliana", "Roberto", "Sofia", "Tiago"],
    },
  ],
};

for (const i in Empresa.departamento) {
  let departamento = Empresa.departamento[i]; // Posição
  console.log(`Departamento: ${departamento.nome}`);

  for (const funcionario of departamento.funcionarios) {
    console.log(`Funcionário: ${funcionario}`);
  }
}

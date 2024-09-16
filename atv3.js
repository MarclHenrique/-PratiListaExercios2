// Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

const produto = {
    nome: 'Espada',
    preco: 10.00,
    categoria: 'Arma',
    marca: 'nike',
    quantidade: 20
};

function filtraPropriedades(obj, valor){
    let resultado = {};

    for (const key in obj) {
        if (obj[key] > valor){
            resultado[key] = obj[key];
        }
        
    }

    return resultado;
}

let objeto2 = filtraPropriedades(produto, 9);

console.log(objeto2);


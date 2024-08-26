//Desafio
//Pink e Cérebro dividem um apartamento e estão juntos 24h por dia desde o começo da pandemia. Para passar o temp, Pink cria problemas matemáticos para Cérebro resolver, o último deles foi uma lista de números com a seguinte pergunta: quantos números da lista são múltiplos de 2, 3, 4 e 5?

//Apesar de parecer simples, porém, quando a lista contém muitos números, Cérebro se confunde e acaba errando alguns cálculos.

//Ajude Cérebro a resolver o desadio de Pink.

let N = parseInt(gets()); // Lê a quantidade de números na lista
let numeros = gets().split(" ").map(Number); // Lê a lista de números e converte para um array de inteiros

// Função para contar múltiplos de um dado divisor
function contarMultiplos(divisor) {
    return numeros.filter(numero => numero % divisor === 0).length;
}

// Conta os múltiplos de 2, 3, 4 e 5
let multiplosDe2 = contarMultiplos(2);
let multiplosDe3 = contarMultiplos(3);
let multiplosDe4 = contarMultiplos(4);
let multiplosDe5 = contarMultiplos(5);

// Imprime a quantidade de múltiplos de cada número
print(`${multiplosDe2} Multiplo(s) de 2`);
print(`${multiplosDe3} Multiplo(s) de 3`);
print(`${multiplosDe4} Multiplo(s) de 4`);
print(`${multiplosDe5} Multiplo(s) de 5`);

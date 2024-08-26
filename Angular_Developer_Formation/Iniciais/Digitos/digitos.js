//Desafio
//Dados dois números inteiros, A e B, quantos dígitos tem nm ?
// Lê o número de casos de teste
let C = parseInt(gets());

for (let i = 0; i < C; i++) {
    var input = gets().split(" ");
    let N = parseInt(input[0]);
    let M = parseInt(input[1]);

    // Calcula a quantidade de dígitos de N^M usando a fórmula
    let digitos = Math.floor(M * Math.log10(N)) + 1;

    // Imprime o resultado
    print(digitos);
}

//Desafio
//Neste problema, deve-se ler:
//O código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1. O código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

let valores1 = gets().split(" ");
let valores2 = gets().split(" ");

let codigo1 = parseInt(valores1[0]);
let numero1 = parseInt(valores1[1]);
let valorUnitario1 = parseFloat(valores1[2]);

let codigo2 = parseInt(valores2[0]);
let numero2 = parseInt(valores2[1]);
let valorUnitario2 = parseFloat(valores2[2]);

// Calcula o valor total a pagar para cada peça
let total1 = numero1 * valorUnitario1;
let total2 = numero2 * valorUnitario2;

// Soma os valores totais das duas peças
let soma = total1 + total2;

// Imprime o valor total a pagar com duas casas decimais
print('VALOR A PAGAR: R$ ' + soma.toFixed(2));

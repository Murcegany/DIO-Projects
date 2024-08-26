//Desafio
//Faça um programa com as características abaixo:

//Leia 10 nomes, sem espaço em branco;
//Imprima o terceiro nome da lista;
//Imprima o sétimo nome da lista;
//Imprima o nono nome da lista.

// Inicializa um array para armazenar os 10 nomes
let nomes = new Array(10);

// Lê os 10 nomes de entrada
for (let i = 0; i < 10; i++) {
    nomes[i] = gets();
}

// Imprime o terceiro, sétimo e nono nome da lista
print(nomes[2]); // Terceiro nome (índice 2, pois o índice é baseado em 0)
print(nomes[6]); // Sétimo nome (índice 6)
print(nomes[8]); // Nono nome (índice 8)

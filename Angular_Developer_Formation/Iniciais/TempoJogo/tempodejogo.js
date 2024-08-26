//Desafio
//Tendo como base a hora inicial e final de um jogo, calcule a duração do dele, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de, 60 minutos e máxima de 24 horas.
// Lê a linha de entrada e divide em um array de strings
var line = gets().split(" ");

// Converte as strings em inteiros
var hInicial = parseInt(line[0]);
var hFinal = parseInt(line[1]);

// Variável para armazenar a duração do jogo
var duracao;

// Verifica se o jogo terminou no mesmo dia ou no dia seguinte
if (hFinal > hInicial) {
    duracao = hFinal - hInicial;
} else {
    duracao = (24 - hInicial) + hFinal;
}

// Imprime a duração do jogo
print('O JOGO DUROU ' + duracao + ' HORA(S)');

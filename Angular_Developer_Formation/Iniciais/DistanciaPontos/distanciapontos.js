//Desafio
//Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, conforme a fórmula:

Distancia = raiz((x2-x1)^2 + (y2-y1)^2)

let p1 = gets().split(" ");
let p2 = gets().split(" ");

// Converte os valores de entrada para ponto flutuante
let x1 = parseFloat(p1[0]);
let y1 = parseFloat(p1[1]);
let x2 = parseFloat(p2[0]);
let y2 = parseFloat(p2[1]);

// Calcula a distância usando a fórmula
let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

// Imprime o valor da distância com 4 casas decimais
print(distancia.toFixed(4));

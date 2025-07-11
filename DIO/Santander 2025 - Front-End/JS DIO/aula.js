// Faça um programa para calcular o valor de uma viagem.

/*
Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

let precoCombustivel = 5.49; 
let consumoPorKm = 12;       
let distancia = 100;         

let gastoViagem = (distancia / consumoPorKm) * precoCombustivel;

console.log("O valor gasto com a viagem será de R$ " + gastoViagem.toFixed(2));

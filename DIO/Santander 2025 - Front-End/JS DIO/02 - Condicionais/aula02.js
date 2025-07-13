/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

const precoEtanol = 4.29;
const precoGasolina = 5.59;
const tipoCombustivel = 'gasolina';
const kmPorLitro = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitro;

let valorGasto;

if (tipoCombustivel === 'etanol') {
  valorGasto = litrosConsumidos * precoEtanol;
} else {
  valorGasto = litrosConsumidos * precoGasolina;
}

console.log('Valor gasto na viagem: R$ ' + valorGasto.toFixed(2));







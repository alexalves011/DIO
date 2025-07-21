function ehPar(numero) {
  return numero % 2 === 0;
}

// Exemplos de uso:
console.log(ehPar(4)); // true
console.log(ehPar(7)); // false



function classificarMedia(media) {
  if (media < 5) {
    return "Reprovado";
  } else if (media < 7) {
    return "Recuperação";
  } else {
    return "Aprovado";
  }
}

console.log(classificarMedia(4.5)); // Reprovado
console.log(classificarMedia(5.8)); // Recuperação
console.log(classificarMedia(7.2)); // Aprovado




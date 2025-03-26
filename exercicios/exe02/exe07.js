let frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"]

let maiusculo = frutas.map(fruta => fruta.toUpperCase());
console.log(`Array com as frutas em maiúsculas:`);
console.log(maiusculo)

let frutasA = frutas.filter(fruta => fruta[0].toUpperCase() === 'A');
console.log("Frutas que começam com 'A': ");
console.log(frutasA)

let comprimento = frutas.map(fruta => fruta.length);
console.log("Comprimentos das strings:");
console.log(comprimento)
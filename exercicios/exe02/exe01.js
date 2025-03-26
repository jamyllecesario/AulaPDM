let string = "alvaro"

let maiusculo = string.toUpperCase();
console.log("String em maiúsculo:");
console.log(maiusculo)

let minusculo = string.toLowerCase();
console.log("String em minúsculo:");
console.log(minusculo)

let inverter = string.split('').reverse().join('');
console.log("String invertida:");
console.log(inverter)

let letraAntiga = "a";
let letraNova = "o";
let substituida = string.split(letraAntiga).join(letraNova);
console.log(`String após substituir '${letraAntiga}' por '${letraNova}':`);
console.log(substituida)
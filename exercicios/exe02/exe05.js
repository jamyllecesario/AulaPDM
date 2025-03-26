const numero = 5;

function calcular(num) {
    const dobro = num * 2;
    const triplo = num * 3;
    const quadrado = num ** 2;
    return { dobro, triplo, quadrado };
    }

const resultados = calcular(numero);
    
console.log(`O dobro de ${numero} é:`);
console.log(resultados.dobro);
console.log(`O triplo de ${numero} é:`);
console.log(resultados.triplo);
console.log(`O quadrado de ${numero} é:`);
console.log(resultados.quadrado);
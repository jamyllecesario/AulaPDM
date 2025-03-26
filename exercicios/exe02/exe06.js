let ary = [10, 20, 30, 40, 50];

function array(ary, numero) {

ary.push(numero);
console.log(`adicionando ${numero} na array: ${ary}`);

ary.shift();
console.log(`removendo o primeiro número: ${ary}`);

const maiorNumero = Math.max(...ary);
console.log(`O maior número do array é: ${maiorNumero}`);

const menorNumero = Math.min(...ary);
console.log(`O menor número do array é: ${menorNumero}`);
}

array(ary, 60);
let pessoa = {
    nome: "Carlos", 
    idade: 28, 
    cidade: "São Paulo"
}

const informacao = {
    altura: "175",
  }

const pessoaCompleto = {
    ...pessoa,
    ...informacao
}

console.log(pessoaCompleto)

delete pessoa.idade;
console.log("Objeto após remover a propriedade 'idade':", pessoa);


console.log("Propriedades do objeto:");
for (let chave in pessoa) {
  console.log(chave);
}
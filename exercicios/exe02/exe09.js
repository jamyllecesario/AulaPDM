const livro = { titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 };

const { titulo, autor } = livro;
console.log("Título:", titulo);
console.log("Autor:", autor);

function obterTituloAutor(livro) {
  const { titulo, autor } = livro;
  return `Título: ${titulo}, Autor: ${autor}`;
}

const resultado = obterTituloAutor(livro);
console.log(resultado);
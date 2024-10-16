const prompt = require("prompt-sync")();

const { autores } = require("./autor/autores");
const { criarAutor } = require("./autor/criarAutor")

const { criarLivros } = require("./livros/criarLivro")

const { listarAutores } = require("./autor/listarAutor")

const { listarLivros } = require("./livros/listarLivro")

const autor1 = criarAutor("Zezinho", "Zezinho@email.com");


criarLivros("Livro de Fulano", "Zezinho", "12345");
listarAutores();
listarLivros()




const { livros } = require("./livros");

function listarLivros() {
   livros.forEach(livros => {
   console.log(livros)
   });

};
module.exports = { listarLivros };
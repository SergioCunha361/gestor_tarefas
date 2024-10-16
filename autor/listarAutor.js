module.exports = { listarAutores };

const { autores } = require("./autores");

function listarAutores() {
   autores.forEach(autor => {
   console.log(autor)
   });

};


//trocando funçao mudulo seta por modo funçao
//function listarAutores() {
//autores.forEach(funcrion retornarAutores(autor){
//    return autor;




const { autores }= require("./autores");

function criarAutor(nome, email){
    const novoAutor = {nome, email}
    autores.push(novoAutor)
}
module.exports = { criarAutor }

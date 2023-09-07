const fs = require("fs");

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json")) //transformando em json
const novoDado = { id: '3', nome: 'Livro mais que demais' }

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]))// stringify para transformar em string

console.log(JSON.parse(fs.readFileSync("livros.json")))

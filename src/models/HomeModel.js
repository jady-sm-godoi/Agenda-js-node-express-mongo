/*
Mongoose: Biblioteca para modelagem de dados no MongoDB.
Schema: Define a estrutura dos documentos no MongoDB.
Model: Classe baseada no schema para realizar operações CRUD.
Classe Customizada (Home): Pode encapsular métodos e lógica adicionais para interagir com o modelo HomeModel.
Este exemplo ilustra como definir um esquema e modelo usando Mongoose e como encapsular operações de banco de dados dentro de uma classe para melhor organização e reutilização do código.
*/

const mongoose = require('mongoose') //mongoose é uma biblioteca de modelagem de objetos MongoDB para Node.js. Ele fornece uma maneira de definir esquemas com tipos de dados, validações, etc.

const HomeSchema = new mongoose.Schema({ //define a estrutura dos documentos na coleção Home.
    titulo: { type: String, required: true},
    descricao: String
})

const HomeModel = mongoose.model('Home', HomeSchema) //cria um modelo que representa a coleção Home no MongoDB e permite operações CRUD (Create, Read, Update, Delete) sobre essa coleção.

class Home {
    //Esta classe pode ser usada para encapsular métodos estáticos ou instâncias relacionadas ao modelo Home.
}

module.exports = Home

// module.exports = HomeModel
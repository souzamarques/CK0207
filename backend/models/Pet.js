const mongoose = require('mongoose')

const Pet = mongoose.model("Pet", {
    nome: String,
    raca: String,
    idade: Number,
    peso: Number,
    porte: String,
    isVermifugado:Boolean,
    observacoes: String

})

module.exports = Pet
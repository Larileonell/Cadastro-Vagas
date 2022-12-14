const mongoose = require("mongoose");
const cadastroSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
      },
    DescriçãoVaga: {
        type: String,
      required: true,
      unique: true,
    },
    Plataforma: {
        type: String},
    remuneracao: {
        type: String,
        required: true,
    },
    requisitos: {
        type: String,
        required: true
    },
    atribuioes: {
        type: String,
        required: true
    },
    Habilidades:{
        type: String,
        required: true
    },
    habilidadesDesejaveis: {
        type: String,
        required: true
    },
    vagaRemota:{
        type: String,
        required: true
    }, 
    beneficios: {
        type: String,
        required: true},
        nomeDavaga: {
            type: String,
            required: true,
            ref: "Nome",
        }
},  { timestamp: true } )
const cadastro = mongoose.model('Cadastro', cadastroSchema);
module.exports= cadastro;
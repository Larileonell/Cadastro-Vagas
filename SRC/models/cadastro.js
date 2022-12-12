const moongose = require("moongose");
const cadastroSchema = new moongose.schema({
    _id: {
        type: moongose.schema.types.objectId, 
        default: moongose.types.objectId
    },
    DescriçãoVaga: {type: String},
    Plataforma: {type: String},
    remuneracao: {type: String},
    requisitos: {type: String},
    atribuioes: {type: String},
    Habilidades:{type: String},
    habilidadesDesejaveis: {type: String},
    vagaRemota:{type: String}, 
    beneficios: {type: String}


}, {versionKey: true} )
const cadastro = moongose.model('Cadastro', cadastroSchema);
module.exports= cadastro;
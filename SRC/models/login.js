ccc
const LoginShema = new moongose.schema({
_id: {
    type: moongose.schema.types.objectId, 
    default: moongose.types.objectId
},
nome: {type: String},
email:{type: String},
senha: {type: String}
}, {versionKey: false})

const ModelLogin  = moongose.Model("login", CadastroLoginShema)
Model.exports = ModelLogin;
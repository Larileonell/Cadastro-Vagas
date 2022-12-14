const mongoose = require("mongoose");
const LoginShema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
      },
nome: {type: String},
email:{type: String},
senha: {type: String}
}, {versionKey: false})

const ModelLogin  = mongoose.model("login", LoginShema)
module.exports = ModelLogin;
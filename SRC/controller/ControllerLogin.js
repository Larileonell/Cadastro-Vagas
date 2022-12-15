const usuaria = require("../models/login")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const bcryptSalt = 8;

//GET
const login = (req, res) => {

    usuaria.find()
        .then((email) => {
            res.status(200).json(usuaria);
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

//GET 
const nomeLogin = (req, res) => {

    const { nome } = req.params;

    usuaria.find({ nome: nome })
        .then((nome) => {
            res.status(200).json(nome);
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

//POST
const novoLogin = async (req, res) => {
    console.log("passou por aqui")
    const { nome, email, senha } = req.body;
    //const salt = bcrypt.genSaltSync(bcryptSalt);
    
    try {
        //const hashPass = await bcrypt.hashSync(password, salt);
        usuaria.findOne({ email: email })
            .then((email => {
                if (email) {
                    res.status(401).json("email já cadastrado")

                } else {
                    const novaUsuaria = new usuaria({
                        nome,
                        email,
                        senha,
                       //hashPass
                    });
                      
                    novaUsuaria.save()
                        .then((usuaria) => {
                            res.status(201).json(usuaria);
                        })
                        .catch((err)=>{
                            res.status(400).json(err)
                        });
                }
                console.log(usuaria)
            }))
            .catch((err)=> {
                res.status(500).json(err)
            });

    } catch (err) {
        return res.status(400).json({ error: message });
    }
}

//DELETE
const cadastroExcluido = (request, response) => {
    const { id } = request.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(400).json({ message: "Id inválido" });
        return;
    }

    usuaria.findByIdAndDelete(id)
        .then(() => {
            response.status(200).json("Usuaria teve seu cadastro excluido");
        })
        .catch((err) => {
            throw new Error(err);
        });
}


module.exports = {
    login,
    nomeLogin,
    novoLogin,
    cadastroExcluido


}


const usuaria = require("../models/login")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const bcryptSalt = 6;
//GET
const login = (req, res) => {

    usuaria.find()
        .then((email) => {
            res.status(200).json(usuaria);
        })
        .catch((err) => {
            response.status(400).json(err)
        });
}

//GET 
const nomeLogin = (req, res) => {

    const { nome } = request.params;

    usuaria.find({ nome: nome })
        .then((nome) => {
            response.status(200).json(nome);
        })
        .catch((err) => {
            response.status(400).json(err)
        });
}

//POST
const novoLogin = async (req, resp, next) => {
    const { nome, email } = request.body;
    const salt = bcrypt.genSaltSync(bcryptSalt);

    try {
        const hashPass = await bcrypt.hashSync(password, salt);

        const novaUsuaria = new usuaria({
            nome,
            email,
            hashPass
        });

        usuaria.findOne({ email: email })
            .then((email => {
                if (email) {
                    response.status(401).json("email já cadastrado")

                } else {
                    novaUsuaria.save()
                        .then((usuaria) => {
                            response.status(201).json(usuaria);
                        })
                        .catch(err => next(err));
                }
                console.log(usuaria)
            }))
            .catch(err => next(err));

    } catch (e) {
        return response.status(401).json({ error: 'erro' });
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


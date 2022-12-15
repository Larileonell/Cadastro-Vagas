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
    try {
        const {
          nome, 
          email,
          senha
       
          
        } = req.body;
    
       /* if (!email) {
          return res.status(400).json({ message: "email  já." });
        };*/
    
        const findEmail = await usuaria.findOne({email});
    
        if (findEmail) {
          return res.status(404).json({ message: "Usuaria já Cadastrada" });
        };
    
        const newUsuaria = new usuaria({
          nome,
          email,
          senha
          
        });
        const savedUsuaria = await newUsuaria.save();
        res.status(201).json({ message: "Usuaria cadastrada com sucesso!", savedUsuaria });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
      };
    };
   
   //patch
   const atualizaLogin = async (req, res) => {
    try {
      const {nome, 
        email,
        senha
      } = req.body;
      const loginAtt = await usuaria.findByIdAndUpdate(req.params.id,{
        nome, 
          email,
          senha
      });
      res.status(200).json({ message: "Login atualizado com sucesso", loginAtt });
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
  }
  };
   
   

//DELETE
const cadastroExcluido = (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "Id inválido" });
        return;
    }

    usuaria.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json("Produto excluido!");
        })
        .catch((err) => {
            throw new Error(err);
        });
}




module.exports = {
    login,
    nomeLogin,
    novoLogin,
    cadastroExcluido, 
    atualizaLogin
   


}


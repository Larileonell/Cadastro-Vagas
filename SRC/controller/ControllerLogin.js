const usuaria = require("../models/login")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const create = (req, res) => {
    const {nome, email, senha} = req.body
    const senhaComHash = bcrypt.hashSync(senha, 8)
    const novaUsuaria = new usuaria({ nome, email, senha: senhaComHash})
    novaUsuaria.save(function (error) {
        if (error) {
            res.status(500).json({ message: error.message })
        }
        res.status(201).json(person)
    })
}

module.exports = {
    create
}
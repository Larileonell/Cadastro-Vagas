const swaggerUi = require("swagger-ui-express")
const swaggerFile = require('../swagger/swagger_output.json')
const express = require("express")
const app = express()
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const rotaCadastro = require("./routes/cadastroVagasRoutes")
const loginRouter = require("./routes/LoginRouter")
dotenv.config();
mongoose.set('strictQuery', true)
mongoose.connect(`${process.env.DATABASE}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    });
   
    app.use(express.json())
    app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));
    app.use("/vagas/cadastro", rotaCadastro)
    app.use("/vagas/login", loginRouter)
   
    module.exports = app

const swaggerUi = require("swagger-ui-express")
const swaggerFile = require('../swagger/swagger_output.json')
const express = require("express")
const app = express()
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();
mongoose.set('strictQuery', true)
mongoose.connect(`${process.env.DATABASE}`,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        
    });
   
    app.use(express.json())
    app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));
    module.exports = app
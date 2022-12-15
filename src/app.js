require('dotenv').config();
const swaggerUi = require("swagger-ui-express")
const swaggerFile = require('../swagger/swagger_output.json')
const express = require("express")
const app = express()
const vagasRouter = require("./routes/vagasRoutes")
const authRouter = require("./routes/authRoutes")
const bd = require("./database/moongoseConnect")
bd.connect()

app.use(express.json())
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/auth", authRouter)
app.use("/vagas", vagasRouter)

module.exports = app

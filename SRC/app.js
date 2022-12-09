const express = require("express")
const app = express() 
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(`${process.env.DATABASE}`,//"mongodb://localhost/Controle", //
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

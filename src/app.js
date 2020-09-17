const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

//conecta banco de dados
mongoose.connect ('mongodb+srv://cluster0.vojyg.azure.mongodb.net/<dbname>')

//carrega as rotas
const index = require ('./routes/index');
const products = require ('./routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index)
app.use('/products', products);

module.exports = app;
const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');


// rotas da home
route.get('/', homeController.paginaInicial, function(req,res,next){
    console.log();
    console.log('Ainda estou aqui...');
    console.log(` 'ultimoMiddleware'olha o que tem na req.session.nome ${req.session.nome}`);


});
route.post('/', homeController.trataPost);

// rotas contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;

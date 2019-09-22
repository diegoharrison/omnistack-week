const express = require('express')                              //importação do express
const DevController = require('./controllers/DevController');   //importando o controller --> DevController
const LikeController = require('./controllers/LikeController'); //importando o controller --> LikeController

const routes = express.Router();                                //importando as rotas
 

/**
 * Arquivo routes.js serve para colocar as rotas da aplicação
 */


//chamando requisição na rota raíz --> localhost:0000, com método get pelo browser
/* routes.get('/', (req, res) => {
    return res.send({message: `Hello ${req.query.name} `});
}); */


routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);

//exportando alguma informação no node dentro de um arquivo, nesse caso está exportando a variável routes
module.exports = routes;
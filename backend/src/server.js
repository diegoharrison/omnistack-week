const express = require('express')       //importação do express
const mongoose = require('mongoose');    //importação do mongooose odm
const routes =require('./routes')        //importando as rotas

/*criando o servidor como uma constante, não sofrendo alterações e passando a função do express*/
const server  = express();

//conexão do mongoose com o meu schema no banco
mongoose.connect('mongodb+srv://diegoharrison:diegoharrison@cluster0-hgndd.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true //passa true pra tirar erros de deprecation
});
server.use(express.json()); //dizendo para o express que as requisições são feitas com json.
server.use(routes);         //colocando a routes em uso.

//listando a porta de entrada para rodar minha aplicação
server.listen(3333);


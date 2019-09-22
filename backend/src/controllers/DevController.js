const axios = require('axios'); //importando a lib axios
const Dev = require('../models/Dev'); // importando o schema do banco

module.exports = {
    async store(req, res) { //metodo store para criar    //asyn pra dizer que é requisição assíncrona
        
        const { username } = req.body;

        // verificando se o usuário já existe com o método findOne
        const userExists = await Dev.findOne({ user: username }); 

        if (userExists) {
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`) //fazendo requisição com a lib axios //usa o await pra aguardar a execução da requisição

        const { name, bio, avatar_url: avatar } = response.data;
        
        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        }) 

        return res.json(dev); 

    }
};

/* 
   uma boa prática pra um controller é criar apenas os cinco métodos principais
   que são o: INDEX, SHOW, STORE, UPDATE E DELETE
   é bom que por boa prática se tiver um outro controller, fazer somente até os cinco métodos
   
 */  
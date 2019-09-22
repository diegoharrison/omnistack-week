const Dev = require('../models/Dev');

module.exports = {
    //método store para criação de um novo like
    async store(req, res) {        
        const { devId } = req.params;
        const { user } = req.headers //o header vem do tipo da requisição
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);
        
        if (!targetDev) {
            return res.status(400).json({ error: 'Dev not exists!'});
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();
        return res.json(loggedDev);   
        
        
    }    

};
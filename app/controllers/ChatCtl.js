'use strict';

class ChatCtl {
    constructor(app) {
        this._app = app;
    }

    iniciaChat(req, res) {
        const dadosForm = req.body;
        // console.log(dadosForm);
        req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
        req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);
        
        const errors = req.validationErrors();
        
        if (errors) {
            res.render('index', { validacao: errors });
            return;
        }
        
        this._app.get('io').emit('msgParaCliente', {
            apelido: dadosForm.apelido,
            mensagem: ' acabou de entrar no chat!'
        });
        
        res.render('chat');
    }
}
    
module.exports = () => ChatCtl;

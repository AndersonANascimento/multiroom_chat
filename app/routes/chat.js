'use strict';

const chat = (app) => {

    app.get('/chat', (req, res) => {
        let chatCtl = new app.controllers.ChatCtl(app);
        chatCtl.iniciaChat(req, res);
    });

    app.post('/chat', (req, res) => {
        let chatCtl = new app.controllers.ChatCtl(app);
        chatCtl.iniciaChat(req, res);
        
    });
    
};

module.exports = chat;

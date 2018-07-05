'use strict';
/* importar as configurações do servidor */
const app = require('./config/server');

/* parametrizar a porta de escuta */
const server = app.listen(80, () => console.log('Servidor online na porta 80...'));

/* importar o módulo socket.io e setar a mesma porta do server */
const io = require('socket.io').listen(server);

app.set('io', io);

/* criar a conexão por websocket */
io.on('connection', (socket) => {
    console.log('Usuário conectou!');

    socket.on('disconnect', () => {
        console.log('Usuário desconectou!');
    });
});

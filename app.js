/* importar as configurações do servidor */
let app = require('./config/server');

/* parametrizr a porta de escuta */
app.listen(80, function() {
    console.log('Servidor online...');
});
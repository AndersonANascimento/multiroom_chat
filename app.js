/* importar as configurações do servidor */
const app = require('./config/server');

/* parametrizr a porta de escuta */
app.listen(80, () => {
    console.log('Servidor online...');
});

module.exports.iniciaChat = function (application, req, res) {
    let dadosForm = req.body;
    // console.log(dadosForm);
    req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);

    let errors = req.validationErrors();

    if(errors) {
        res.render('index', {validacao: errors});
        return;
    }

    res.render('chat');
};
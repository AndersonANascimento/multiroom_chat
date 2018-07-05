'use strict';

class HomeCtl {
    constructor(app) {
        this._app = app;
    }

    home (req, res) {
        res.render('index', { validacao: {} });
    };
}

module.exports = () => HomeCtl;

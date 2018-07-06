'use strict';

const index = (app) => {

    app.get('/', (req, res) => {
        let homeCtl = new app.controllers.HomeCtl();
        homeCtl.home(req, res);
    });
    
};

module.exports = index;

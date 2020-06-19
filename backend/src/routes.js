const { Router } = require('express');
const { model } = require('mongoose');

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({message: 'Ola mundo'});
});

module.exports = routes;
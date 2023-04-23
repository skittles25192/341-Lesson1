const routes = require('express').Router();


const myController = require('../Controllers');


routes.get('/', myController.request1);

module.exports = routes;

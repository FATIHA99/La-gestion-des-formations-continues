const Router = require('express').Router();
const Controller = require('../Controllers/Employee-Controller')

Router.post('/add', Controller.AjouterEmpolyee)

module.exports = Router
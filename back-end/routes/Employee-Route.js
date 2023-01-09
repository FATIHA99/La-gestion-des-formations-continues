const Router = require('express').Router();
const Controller = require('../Controllers/Employee-Controller')

Router.get('/display', Controller.DisplayEmployee)
Router.put('/edit/:id', Controller.UpdateEmployee)

module.exports = Router
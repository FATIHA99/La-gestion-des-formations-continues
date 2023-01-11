const Router = require('express').Router();
const Controller = require('../Controllers/Employee-Controller')

Router.get('/display', Controller.DisplayEmployee)
Router.put('/edit/:id', Controller.UpdateEmployee)
Router.get('/user/:id', Controller.getOneEmployee)
Router.get('/user/formation/:id', Controller.GetFormation)
Router.get('/user/organisme/:id', Controller.GetOrganisme)

module.exports = Router
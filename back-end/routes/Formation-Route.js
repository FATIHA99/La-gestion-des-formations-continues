const Router = require('express').Router()
const Controller = require('../Controllers/Formation-Controller')

Router.post('/add', Controller.AjouterFormation)
Router.get('/display', Controller.DisplayFormation)
Router.delete('/delete/:id', Controller.DeleteFormation)
Router.get('/getOne/:id', Controller.GetOneFormation)
Router.put('/update/:id', Controller.UpdateFormation)

module.exports = Router
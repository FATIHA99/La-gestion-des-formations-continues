const Router = require('express').Router()
const Controller = require('../Controllers/Organisme-Controller')

Router.post('/add', Controller.AjouterOrganisme)
Router.get('/display', Controller.DisplayOrganisme)
Router.delete('/delete/:id', Controller.DeleteOrganisme)
Router.get('/getOne/:id', Controller.GetOneOrganisme)
Router.put('/update/:id', Controller.UpdateOrganisme)

module.exports = Router
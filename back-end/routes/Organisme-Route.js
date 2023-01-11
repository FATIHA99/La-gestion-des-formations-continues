const Router = require('express').Router()
const Controller = require('../Controllers/Organisme-Controller')
const {verify_role}  = require('../middlewares/verification-role')

Router.post('/add',Controller.AjouterOrganisme)
Router.get('/display' ,Controller.DisplayOrganisme)
Router.delete('/delete/:id',Controller.DeleteOrganisme)
Router.get('/getOne/:id',Controller.GetOneOrganisme)
Router.put('/update/:id', Controller.UpdateOrganisme)

module.exports = Router
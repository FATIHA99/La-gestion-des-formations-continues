const Router = require('express').Router()
const controller = require('../Controllers/Authentification-Controller')

Router.post('/decrybt',controller.decrybt)
Router.post('/login',controller.Login)
Router.post('/register', controller.Register)
Router.get('/confirm/:token', controller.Confirmation)


module.exports= Router
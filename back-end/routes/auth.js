const Router = require('express').Router()
const controller = require('../Controllers/Authentification-Controller')

Router.post('/login',controller.Login)

module.exports= Router
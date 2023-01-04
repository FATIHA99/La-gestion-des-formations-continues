const User = require('../models/user')
const bcrypt = require('bcryptjs')

function AjouterEmpolyee(req, res) {
    const { body } = req
     const hashPassword =  bcrypt.hashSync(body.pasword)
    User.create({ ...body })

        .then((e) => { res.json('EMPLOYEE ADDED') })
        .catch()
}

module.exports = { AjouterEmpolyee }
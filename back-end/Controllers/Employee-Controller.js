const User = require('../models/user')
const bcrypt = require('bcryptjs')


function AjouterEmpolyee(req, res) {
    const { body } = req
    const hashPassword = bcrypt.hashSync(body.password, 10)
    body.password = hashPassword
    User.findOne({ email: body.email })
        .then((e) => {
            if (e) {
                res.json({ response: 'email already exist' })
            }
            else {
                User.create({ ...body })
                    .then((e) => { res.json({ response: 'EMPLOYEE ADDED' }) })
                    .catch()
            }
        })
}

module.exports = { AjouterEmpolyee }
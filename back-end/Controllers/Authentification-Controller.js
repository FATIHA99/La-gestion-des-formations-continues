const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function Login(req, res) {
    const { body } = req
    User.findOne({ email: body.email })
        .then((e) => {
            if (e) {
                // console.log(e)
                const passwordHash = bcrypt.compareSync(body.password, e.password)
                if (!passwordHash) {
                    res.json('password wrong')
                }
                else {
                    const data = e.data;
                    const token = jwt.sign({ info: data }, process.env.SECRET_WORD)
                    res.cookie('token', token)
                    res.json(token)
                }
            }
            else {
                if (!body.email || !body.password) {

                    res.json({ message : 'remplir les champs' })
                }
                else {
                    res.json({ message: 'user not found ' })
                }

            }
        })
        .catch((err) => { res.send(err) })
}
module.exports = { Login }
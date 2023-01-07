const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')
const { verificationAccount } = require('../tools/nodemailer/verification-compte.js')
const HandleError =require('../tools/Error-Handling')

function Login(req, res) {
    const { body } = req
    User.findOne({ email: body.email })
        .then((e) => {
            if (e) {
                const passwordHash = bcrypt.compareSync(body.password, e.password)
                if (!passwordHash) {
                    res.json('password wrong')
                }
                else {
                    if (e.confirmed) {
                        const data = e;
                        const token = jwt.sign({ data }, process.env.SECRET_WORD)
                        // const test = cookie('token', token)
                        res.json('login sucess'+token)
                    }
                    else {
                        res.json({ alert: 'confirm your account' })
                    }

                }
            }
            else {
                if (!body.email || !body.password) {

                    res.json({ message: 'remplir les champs' })
                }
                else {
                    res.json({ message: 'user not found ' })
                }

            }
        })
        .catch((err) => { res.send(err) })
}


function Register(req, res) {

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
                    .then((e) => {
                        verificationAccount(e.email);
                        res.json({ response: e.email + 'creation sucessfully ' })
                    })
                    .catch()
            }
        })
}


function Confirmation(req, res) {
    const { token } = req.params
    const tkn = jwt.verify(token, process.env.SECRET_WORD)
    req.data = tkn
    User.findOneAndUpdate({ email: req.data.email }, { confirmed: true })
        .then((e) => {
            res.json({ message: 'the account is verified ' })
        })
}
module.exports = { Login, Register, Confirmation }
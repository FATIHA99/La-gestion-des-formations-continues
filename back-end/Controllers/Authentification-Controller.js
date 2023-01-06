const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')
const { verificationAccount } = require('../tools/nodemailer/verification-compte.js')


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
                    const test = res.cookie('token', token)
                    res.json(test)
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
                        // cookie('email', e.email)
                        verificationAccount(e.email);
                        console.log(e.email)
                        res.json({ response: e.email })
                    })
                    .catch()
            }
        })
}


function Confirmation(req, res) {
    const {token} = req.params
    const tkn = jwt.verify(token,process.env.SECRET_WORD)
    //  res.json({ tkn })
    req.data=tkn
    // res.json({email : res.data.email})
     User.findOneAndUpdate({ email: req.data.email }, {confirmed: true})
         .then((e) => {
             res.json({ message: 'the account is verified ' })
         })
}
module.exports = { Login, Register, Confirmation }
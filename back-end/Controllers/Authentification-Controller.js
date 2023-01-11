const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const ls = require('local-storage')
const { verificationAccount } = require('../tools/nodemailer/verification-compte.js')
const HandleError = require('../tools/Error-Handling')

function Login(req, res) {
    const { body } = req
    User.findOne({ email: body.email })
        .then((e) => {
            if (e) {
                const passwordHash = bcrypt.compareSync(body.password, e.password)
                if (!passwordHash) {
                    res.json({ response: 'password wrong' })
                }
                else if (!e.confirmed) {
                    res.json({ response: 'confirm your account' })
                }
                else {
                    const r = e.role;
                     const role = jwt.sign({r}, process.env.SECRET_WORD)
                     ls('token',role)
                     

                    // const v = jwt.verify({r}, process.env.SECRET_WORD)
                    // decoded_token = jwt.decode(e.token, verify = False)
                    res.json({
                        response: 'login sucess',
                        token: role,
                        role : r,
                        id : e._id
                    })
                }
            }
            else {
                if (!body.email || !body.password) {

                    res.json({ response: 'remplir les champs' })
                }
                else {
                    res.json({ response: 'user not found ' })
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
                        res.json({ response: 'creation sucessfully' })
                    })
                    .catch()
            }
        })
}
function decrybt (req,res){
  const {token} = req.body;
  const role =  jwt.verify(token,process.env.SECRET_WORD)
  res.json({role:role.r});
}

function Confirmation(req, res) {
    const { token } = req.params
    const tkn = jwt.verify(token, process.env.SECRET_WORD)
    req.data = tkn
    User.findOneAndUpdate({ email: req.data.email }, { confirmed: true })
        .then((e) => {
            res.redirect('http://localhost:3000/')
        })
}
module.exports = { Login, Register, Confirmation,decrybt }
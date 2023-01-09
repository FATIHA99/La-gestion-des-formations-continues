const User = require('../models/user')
const bcrypt = require('bcryptjs')


// function AjouterEmpolyee(req, res) {
//     const { body } = req
//     const hashPassword = bcrypt.hashSync(body.password, 10)
//     body.password = hashPassword
//     User.findOne({ email: body.email })
//         .then((e) => {
//             if (e) {
//                 res.json({ response: 'email already exist' })
//             }
//             else {
//                 User.create({ ...body })
//                     .then((e) => { res.json({ response: 'EMPLOYEE ADDED' }) })
//                     .catch()
//             }
//         })
// }

function DisplayEmployee(req, res) {
    User.find()
        .then((e) => { res.json(e) })
        .catch((error) => { res.send(error) })
}



function UpdateEmployee(req, res) {
    const { id } = req.params
    const newOrganisme = req.body.organisme
    const newFormation = req.body.formation

    User.findById(id)
        .then((e) => {
            User.updateOne({ _id: id }, { formation: newFormation, organisme: newOrganisme })
                .then((e) => {
                    res.json('Employee UPDATED')
                })
        })
        .catch((error) => { res.json('ERROR UPDATING FORMATION') })
}


module.exports = { DisplayEmployee,UpdateEmployee }
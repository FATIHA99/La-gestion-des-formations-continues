const Organisme = require('../models/organisme')

async function AjouterOrganisme(req, res) {
    const { body } = req
    await Organisme.create({ ...body })
        .then((e) => { res.send('organisme added') })
        .catch((error) => { res.send(error) })
}
function DisplayOrganisme(req, res) {
    Organisme.find()
        .then((e) => { res.json(e) })
        .catch((error) => { res.send(error) })
}

function DeleteOrganisme(req, res) {
    const { id } = req.params
    Organisme.findByIdAndRemove(id)
        .then((e) => { res.json('ORGAMISME DELETED') })
        .catch((e) => { res.json('ORGAMISME NOT DELETED') })
}

function GetOneOrganisme(req, res) {
    const { id } = req.params
    Organisme.findById(id)
        .then((e) => { res.json(e) })
        .catch((error) => { res.json(error) })
}

function UpdateOrganisme(req, res) {
    const { id } = req.params
    const newlabel = req.body.label
    const newcompus = req.body.compus
    const newphone = req.body.phone
    Organisme.findById(id)
        .then((e) => {
            Organisme.updateOne({ _id: id }, { label: newlabel, compus: newcompus, phone: newphone })
                .then((e) => {
                    res.json('ORGANISME UPDATED')
                })
        })
        .catch((error) => { res.json('ERROR UPDATING ORGANISME') })
}


module.exports = { AjouterOrganisme, DisplayOrganisme, DeleteOrganisme, GetOneOrganisme, UpdateOrganisme }
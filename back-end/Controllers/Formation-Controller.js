const Formation = require("../models/formation")

async function AjouterFormation(req, res) {
    const { body } = req
    await Formation.create({ ...body })
        .then((e) => { res.send('FORMATION ADDED') })
        .catch((error) => { res.send(error) })
}

function DisplayFormation(req, res) {
    Formation.find()
        .then((e) => { res.json(e) })
        .catch((error) => { res.send(error) })
}

function DeleteFormation(req, res) {
    const { id } = req.params
    Formation.findByIdAndRemove(id)
        .then((e) => { res.json('FORMATION DELETED') })
        .catch((e) => { res.json('FORMATION NOT DELETED') })
}

function GetOneFormation(req, res) {
    const { id } = req.params
    Formation.findById(id)
        .then((e) => { res.json(e) })
        .catch((error) => { res.json(error) })
}

function UpdateFormation(req, res) {
    const { id } = req.params
    const newlabel = req.body.label
    const newdescription = req.body.description

    Formation.findById(id)
        .then((e) => {
            Formation.updateOne({ _id: id }, { label: newlabel, description:newdescription })
                .then((e) => {
                    res.json('FORMATION UPDATED')
                })
        })
        .catch((error) => { res.json('ERROR UPDATING FORMATION') })
}


module.exports = { AjouterFormation, DisplayFormation, DeleteFormation, GetOneFormation,UpdateFormation }
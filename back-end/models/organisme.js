const mongoose = require('mongoose')
const organisme = mongoose.Schema({
    label: { type: String },
    compus: { type: String },
    phone: { type: String }
})
module.exports = mongoose.model('organisme', organisme);
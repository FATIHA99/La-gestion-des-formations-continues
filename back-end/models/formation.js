const mongoose = require('mongoose')
const formation = new mongoose.Schema({
    label: { type: String },
    description: { type: String },
    start_date: { type: Date },
    end_date: { type: Date },
    image: { type: String }
})
module.exports = mongoose.model('formation', formation)
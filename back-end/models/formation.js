const mongoose = require('mongoose')
const formation = new mongoose.Schema({
    label : {type:String},
    description:{type:String},
    image :{type:String}
})
module.exports = mongoose.model('formation',formation)
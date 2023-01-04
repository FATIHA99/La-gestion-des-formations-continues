const mongoose = require('mongoose');
const user = new mongoose.Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: String ,default:'employee'},
    formation: [{type:mongoose.Schema.Types.ObjectId,ref:'formation'}],
    organisme:[{type:mongoose.Schema.Types.ObjectId,ref:'organisme'}],
})
module.exports = mongoose.model('user', user);
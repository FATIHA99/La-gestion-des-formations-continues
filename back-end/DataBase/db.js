const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
mongoose.set('strictQuery', false);
module.exports = mongoose.connect(process.env.DATABASE)
    .then(() => {
        console.log('DATABASE CONNECTED')
    })
    .catch(() => {
        console.log('DATABASE NOT CONNECTED')
    })
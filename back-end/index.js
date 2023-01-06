const express = require('express');
const cors = require('cors')
const Route_Auth = require('./routes/auth')
const Route_Organisme = require('./routes/Organisme-Route')
const Route_Formation = require('./routes/Formation-Route')
// const Route_Employee = require('./routes/Employee-Route')
const cookieParser = require('cookie-parser');
const DATABASE = require('./DataBase/db')
require('dotenv').config()

const app = express();
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors())
app.use('/auth',Route_Auth)
app.use('/organisme',Route_Organisme)
app.use('/formation',Route_Formation)
// app.use('/employee',Route_Employee)



app.listen(process.env.PORT,()=>{console.log(`PORT ${process.env.PORT}`)})
module.exports = app 
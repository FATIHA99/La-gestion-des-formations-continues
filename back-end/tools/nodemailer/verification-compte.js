const nodemailer = require('nodemailer')
// const ls = require('local-storage')
const jwt = require('jsonwebtoken')

function verificationAccount(email) {
  
//   const email = cookie('email')
  const email_token = jwt.sign({ email }, process.env.SECRET_WORD)
 
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'fatihhaa27@gmail.com',
      pass: 'fwpktpowqxesuptk',
    },
  });



  let info = {
    from: '"Confirmation account " <fatihhaa27@gmail.com>',
    to: email,   //
    subject: "acount verification",
    html: '<a  href="http://localhost:3001/auth/confirm/' + email_token + '">click here to verify </a>',
  };


  transporter.sendMail(info)
  console.log('sended')

}
module.exports = {verificationAccount }
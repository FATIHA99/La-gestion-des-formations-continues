const  ls =require('local-storage')
const jwt = require('jsonwebtoken')

function verify_role(roles){
return (req, res, next) => {

    if (ls('token')) {
        const verification = jwt.verify(ls('token'), process.env.SECRET_WORD);
        if (verification) {
            const tkn = verification
            if (roles.includes(tkn.role)) {
                next()
            } else {
                throw Error('this role not found')
            }
        } else {
            throw Error('verification error')
        }
    } else {
        throw Error('token is not created yet')
    }

}



} 


module.exports = {verify_role}

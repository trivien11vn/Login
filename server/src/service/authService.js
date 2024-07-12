const db = require('../models')
const jwt = require('jsonwebtoken')
const loginSuccessService = (id) => new Promise(async (resolve, reject) => {
    try{
        let response = await db.User.findOne({
            where: {id},
            raw: true
        })
        console.log(response)
        const token = response && jwt.sign({id:response.id, email:response.email, role:response.role}, 'tv1411', {expiresIn: '5d'})
        resolve({
            err: token ? 0 : 3,
            mes: token ? 'successfully' : 'failed',
            token
        })
    }
    catch(err){
        reject({
            err: 2,
            mes: 'Fail at auth service ' + err
        })
    }
})

module.exports = {
    loginSuccessService
}
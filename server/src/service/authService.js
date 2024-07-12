const db = require('../models')
const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid');

const loginSuccessService = (id, tokenLogin) => new Promise(async (resolve, reject) => {
    try{
        const newToken = uuidv4()
        let response = await db.User.findOne({
            where: {id, tokenLogin},
            raw: true
        })
        
        const token = response && jwt.sign({id:response.id, email:response.email, role:response.role}, 'tv1411', {expiresIn: '5d'})
        resolve({
            err: token ? 0 : 3,
            mes: token ? 'successfully' : 'failed',
            token
        })
        if(response){
            await db.User.update({
                tokenLogin:newToken
            },{
                where: {id}
            })
        }
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
const db = require('../models')

const getOneService = (id) => new Promise(async (resolve, reject) => {
    try{
        let response = await db.User.findOne({
            where: {id},
            raw: true
        })
        resolve({
            err: response ? 0 : 4,
            mes: response ? 'successfullyyyy' : 'User not found',
            response
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
    getOneService
}
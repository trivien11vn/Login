const authService = require('../service/authService')

const loginSuccess = async(req, res) => {
    const {id} = req?.body
    try{
        if(!id){
            res.status(400).json({
                err: 1,
                mes: 'Missing input'
            })
        }
        else{
            let response = await authService.loginSuccessService(id)
            res.status(200).json(
                response
            )
        }
    }
    catch(err){
        res.status(500).json({
            err: -1,
            mes: 'Fail at auth controller' + err
        })
    }
}

module.exports = {
    loginSuccess
}
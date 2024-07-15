const userService = require('../service/userService')

const getOne = async(req, res) => {
    console.log(req.currentUser)
    const {id} = req.currentUser
    console.log(id)
    try{
        if(!id){
            res.status(400).json({
                err: 1,
                mes: 'Missing input'
            })
        }
        else{
            let response = await userService.getOneService(id)
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
    getOne
}
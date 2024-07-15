const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.headers.authentication
    if(!token){
        return res.status(200).json({
            err: 1,
            mes: 'You haven\'t logged in'
        })
    }
    jwt.verify(token, 'tv1411', (err, decode)=>{
        if(err){
            return res.status(200).json({
                err: 2,
                mes: 'Invalid token'
            })
        }
        req.currentUser = decode
        next()
    })
}

module.exports = verifyToken
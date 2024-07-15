const passport = require('passport');
const router = require('express').Router()
require('dotenv').config()
const authController = require('../controller/authController')


router.get('/google', passport.authenticate('google', { scope: ['profile','email'] , session: false}));
  
router.get('/google/callback', (req, res, next) => { 
    passport.authenticate('google',(err, profile) => { 
        req.user = profile
        next()
     })(req,res,next)
 }, (req, res) => { 
    res.redirect(`${process.env.URL_CLIENT}/login-success/${req?.user?.id}/${req?.user?.tokenLogin}`)
  }
)

router.get('/facebook', passport.authenticate('facebook', {session: false, scope: ['email']}));
  
router.get('/facebook/callback', (req, res, next) => { 
    passport.authenticate('facebook',(err, profile) => { 
        req.user = profile
        next()
     })(req,res,next)
 }, (req, res) => { 
    res.redirect(`${process.env.URL_CLIENT}/login-success/${req?.user?.id}/${req?.user?.tokenLogin}`)
  }
)

router.post('/login-success',authController.loginSuccess)

module.exports = router
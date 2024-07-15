const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

require('dotenv').config()
const passport = require('passport');
const db = require('./src/models')
const { v4: uuidv4 } = require('uuid');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    //them user vao db
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      const tokenLogin = uuidv4()
      profile.tokenLogin = tokenLogin
      try{
        if(profile?.id){
          let response = await db.User.findOrCreate({
            where: {id: profile.id},
            defaults: {
              id: profile?.id,
              email: profile?.emails[0]?.value,
              typeLogin: profile?.provider,
              name: profile?.displayName,
              avatarUrl: profile?.photos[0]?.value,
              tokenLogin
            }
          }) //true: nguoi dung duoc tao moi,  false: nguoi dung duoc lay tu bang co san
          if(!response[1]){
            await db.User.update({
              tokenLogin
            },{
              where: {id: profile?.id}
            })
          }

        }
      }
      catch(err){
        console.log(err)
      }
      return cb(null, profile);
    // });
  }
));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "/api/auth/facebook/callback",
    profileFields: ['id', 'email', 'photos', 'displayName']
  },
  async function(accessToken, refreshToken, profile, cb) {
        const tokenLogin = uuidv4()
        profile.tokenLogin = tokenLogin
        try{
          if(profile?.id){
            let response = await db.User.findOrCreate({
              where: {id: profile.id},
              defaults: {
                id: profile?.id,
                email: profile?.emails[0]?.value,
                typeLogin: profile?.provider,
                name: profile?.displayName,
                avatarUrl: profile?.photos[0]?.value,
                tokenLogin
              }
            }) //true: nguoi dung duoc tao moi,  false: nguoi dung duoc lay tu bang co san
            if(!response[1]){
              await db.User.update({
                tokenLogin
              },{
                where: {id: profile?.id}
              })
            }

          }
        }
        catch(err){
          console.log(err)
        }
        return cb(null, profile);
  }
));
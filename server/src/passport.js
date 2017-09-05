const passport = require('passport')
const {User} = require('./models')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const InvalidLoginError = require('./errors/InvalidLoginError')
const config = require('./config/config')

passport.use(
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.authentication.jwtSecret
  }, async function (jwtPayload, done) {
    try {
      const user = await User.findOne({where: {id: jwtPayload.id}})
      if (!user) {
        return done(new InvalidLoginError(), false)
      }
      return done(null, user)
    } catch (err) {
      return done(new InvalidLoginError(), false)
    }
  })
)

module.exports = null

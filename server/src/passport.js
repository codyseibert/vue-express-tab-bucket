// part 2

const passport = require('passport')
const BearerStrategy = require('passport-http-bearer-base64')
const {User} = require('./models')

const InvalidLoginError = require('./errors/InvalidLoginError')

passport.use(new BearerStrategy({
  base64EncodedToken: true
},
async function (token, done) {
  try {
    const [email, password] = token.split(':')
    const user = await User.findOne({where: {email: email}})
    if (!user) {
      return done(new InvalidLoginError(), false)
    }
    const isValidPassword = await user.comparePassword(password)
    if (!isValidPassword) {
      return done(new InvalidLoginError(), false)
    }
    return done(null, user)
  } catch (err) {
    return done(new InvalidLoginError(), false)
  }
}))

module.exports = null

// part 2

const passport = require('passport')
const BearerStrategy = require('passport-http-bearer')
const {User} = require('./models')

const InvalidLoginError = require('./errors/InvalidLoginError')

passport.use(
  new BearerStrategy(
    async function (token, done) {
      console.log('token', token)
      try {
        const user = await User.findOne({where: {token: token}})
        console.log(user.toJSON())
        if (!user) {
          return done(new InvalidLoginError(), false)
        }
        return done(null, user)
      } catch (err) {
        return done(new InvalidLoginError(), false)
      }
    }
  )
)

module.exports = null

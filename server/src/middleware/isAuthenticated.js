const ResourceAlreadyExistsError = require('../errors/ResourceAlreadyExistsError')
const ErrorHandler = require('../errors/ErrorHandler')
const InvalidLoginError = require('../errors/InvalidLoginError')
const passport = require('passport')

module.exports = function (req, res, next) {
  passport.authenticate('bearer', function(err, user) {
    if (err) {
      ErrorHandler(err, res)
    } else {
      req.user = user
      next()
    }
  })(req, res, next)
}
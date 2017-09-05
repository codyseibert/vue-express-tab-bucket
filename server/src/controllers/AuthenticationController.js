const ResourceAlreadyExistsError = require('../errors/ResourceAlreadyExistsError')
const ErrorHandler = require('../errors/ErrorHandler')
const InvalidLoginError = require('../errors/InvalidLoginError')

const {User} = require('../models')
const _ = require('lodash')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  });
}

module.exports = {
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({where: {email: email}})
      if (!user) throw new InvalidLoginError()

      const isMatch = await user.comparePassword(password)
      if (!isMatch) throw new InvalidLoginError()

      res.send({
        user: user.toJSON(),
        token: jwtSignUser(user.toJSON())
      })
    } catch (err) {
      ErrorHandler(err, res)
    }
  },

  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send({
        user: user.toJSON(),
        token: jwtSignUser(user.toJSON())
      })
    } catch (err) {
      res.status(400).send({
        message: 'This email account is already in use'
      })
    }
  }
}

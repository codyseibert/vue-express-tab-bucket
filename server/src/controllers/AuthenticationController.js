// part 2
const ResourceAlreadyExistsError = require('../errors/ResourceAlreadyExistsError')
const ErrorHandler = require('../errors/ErrorHandler')
const InvalidLoginError = require('../errors/InvalidLoginError')

const {User} = require('../models')
const _ = require('lodash')
const randomstring = require('randomstring')

module.exports = {
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({where: {email: email}})
      if (!user) throw new InvalidLoginError()

      const isMatch = await user.comparePassword(password)
      if (!isMatch) throw new InvalidLoginError()

      user.token = randomstring.generate()
      await user.save()

      res.send(_.omit(user.toJSON(), 'password'))
    } catch (err) {
      ErrorHandler(err, res)
    }
  },

  async register (req, res) {
    try {
      const token = randomstring.generate()
      req.body.token = token
      const createdUser = await User.create(req.body)
      res.send(_.omit(createdUser.toJSON(), 'password'))
    } catch (err) {
      console.log(err)
      res.status(400).send({
        message: 'This email account is already in use'
      })
    }
  }
}

const ResourceAlreadyExistsError = require('../errors/ResourceAlreadyExistsError')
const ErrorHandler = require('../errors/ErrorHandler')
const InvalidLoginError = require('../errors/InvalidLoginError')

const {User} = require('../models')
const _ = require('lodash')

module.exports = {

  async update (req, res) {
    try {
      const user = req.user
      _.extend(user, req.body)
      await user.save()
      res
        .status(200)
        .send(user.toJSON())
    } catch (err) {
      ErrorHandler(err, res)
    }
  }
}

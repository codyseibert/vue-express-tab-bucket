const Promise = require('bluebird')
const {Song} = require('../models')
const ErrorHandler = require('../errors/ErrorHandler')
const InvalidAccessError = require ('../errors/InvalidAccessError')

module.exports = async function (req, res, next) {
  try {
    const song = await Song.findOne({
      where: {
        id: parseInt(req.params.songId),
        UserId: req.user.id
      }
    })
    if (!song) return ErrorHandler(new InvalidAccessError(), res)
    next()
  } catch (err) {
    ErrorHandler(err, res)
  }
}

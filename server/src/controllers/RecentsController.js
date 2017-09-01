const ResourceAlreadyExistsError = require('../errors/ResourceAlreadyExistsError')
const ErrorHandler = require('../errors/ErrorHandler')
const InvalidLoginError = require('../errors/InvalidLoginError')

const {User, Recent, Song} = require('../models')
const _ = require('lodash')

module.exports = {

  async index (req, res) {
    try {
      const recentSongs = _.uniqBy(
        await Recent.findAll({
          where: {
            UserId: req.user.id
          },
          include: [{
            model: Song,
          }]
        })
        .map((recent) => recent.Song)
      , (song) => song.id)
      res
        .status(200)
        .send(recentSongs)
    } catch (err) {
      ErrorHandler(err, res)
    }
  },
  async post (req, res) {
    try {
      const song = await Song.findById(req.body.songId)
      const recent = await Recent.create()
      await recent.setUser(req.user)
      await recent.setSong(song)
      res.status(200).send(recent)
    } catch (err) {
      ErrorHandler(err, res)
    }
  }
}

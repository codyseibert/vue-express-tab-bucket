const Promise = require('bluebird');
const {Song} = require('../models');
const ErrorHandler = require('../errors/ErrorHandler');
const _ = require('underscore');

module.exports = {
  async post (req, res) {
    try {
      const created = await Song.create(req.body)
      await created.setUser(req.user)
      res.status(200).send(created)
    } catch (err) {
      ErrorHandler(err, res)
    }
  },
  async index (req, res) {
    try {
      let songs = []
      if (!req.query.search) {
        songs = await Song.findAll({
          limit: 10
        })
      } else {
        songs = await Song.findAll({
          where: {
            $or: [
              {
                title: {
                  $like: `%${req.query.search}%`
                }
              },
              {
                artist: {
                  $like: `%${req.query.search}%`
                }
              },
              {
                genre: {
                  $like: `%${req.query.search}%`
                }
              },
              {
                album: {
                  $like: `%${req.query.search}%`
                }
              }
            ]
          }
        })
      }
      res.status(200).send(songs)
    } catch (err) {
      ErrorHandler(err, res)
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.status(200).send(song)
    } catch (err) {
      ErrorHandler(err, res)
    }
  },
  async put (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.status(200).send(req.body)
    } catch (err) {
      ErrorHandler(err, res)
    }
  }
}
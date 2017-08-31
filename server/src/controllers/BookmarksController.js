const ResourceAlreadyExistsError = require('../errors/ResourceAlreadyExistsError');
const ErrorHandler = require('../errors/ErrorHandler');
const InvalidLoginError = require('../errors/InvalidLoginError');

const {User, Bookmark, Song} = require('../models');
const _ = require('lodash');

module.exports = {

  async index (req, res) {
    try {
      const bookmarks = await Bookmark.findAll({
          where: {
            UserId: req.user.id
          },
          include: [{
            model: Song
          }]
        })
        .map((bookmark) => bookmark.toJSON())
        .map((bookmark) => _.extend({bookmarkId: bookmark.id}, bookmark.Song))
      res
        .status(200)
        .send(bookmarks);
    } catch (err) {
      ErrorHandler(err, res)
    }
  },
  async post (req, res) {
    try {
      let bookmark = await Bookmark.findOne({
        where: {
          SongId: req.body.songId
        }
      })
      if (bookmark)
        return res.status(200).send({message: 'bookmark already exists'})

      const song = await Song.findById(req.body.songId)
      bookmark = await Bookmark.create()
      await bookmark.setUser(req.user)
      await bookmark.setSong(song)
      res.status(200).send(bookmark)
    } catch (err) {
      ErrorHandler(err, res)
    }
  },
  async delete (req, res) {
    try {
      const bookmarks = await Bookmark.findAll()
      console.log(bookmarks)
      const bookmark = await Bookmark.findById(req.params.bookmarkId)
      console.log(bookmark)
      await bookmark.destroy()
      res.status(200).send(bookmark)
    } catch (err) {
      ErrorHandler(err, res)
    }
  }

}

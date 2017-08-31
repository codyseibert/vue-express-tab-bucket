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
      const songs = await Song.findAll({where: req.query})
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
      const song = await Song.findById(req.params.songId)
      res.status(200).send(song)
    } catch (err) {
      ErrorHandler(err, res)
    }
  }
}
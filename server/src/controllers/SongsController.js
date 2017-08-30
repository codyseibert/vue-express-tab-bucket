var Song, Promise, _;

Promise = require('bluebird');

Song = require('../models/Song');

_ = require('underscore');

module.exports = (function() {
  var destroy, index, post, put, show;
  index = function(req, res) {
    var key, ref, val;
    ref = req.query;
    for (key in ref) {
      val = ref[key];
      if (val === 'null') {
        req.query[key] = null;
      }
    }
    return Song.findAll({
      where: req.query
    }).then(function(entryies) {
      res.status(200);
      return res.send(entryies);
    });
  };
  show = function(req, res) {
    return Song.findById(req.params.id).then(function(entry) {
      res.status(200);
      return res.send(entry);
    });
  };
  put = function(req, res) {
    return Song.findById(req.params.id).then(function(entry) {
      entry = _.extend(entry, req.body);
      return entry.save().then(function() {
        res.status(200);
        return res.send(entry);
      });
    });
  };
  post = function(req, res) {
    return Song.create(req.body).then(function(entry) {
      return Song.findById(entry.id).then(function(entry) {
        res.status(200);
        return res.send(entry);
      });
    });
  };
  destroy = function(req, res) {
    return Song.findById(req.params.id).then(function(entry) {
      if (entry == null) {
        res.status(400);
        return res.send('entry not found');
      } else {
        return entry.destroy().then(function(entry) {
          res.status(200);
          return res.send(entry);
        });
      }
    });
  };
  return {
    index: index,
    show: show,
    put: put,
    post: post,
    destroy: destroy
  };
})();

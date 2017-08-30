const SongsController = require('./controllers/SongsController');
const AuthenticationCtrl = require('./controllers/AuthenticationController');
const UsersCtrl = require('./controllers/UsersController');
const isAuthenticated = require('./middleware/isAuthenticated')

module.exports = function(app) {
  // Part 2
  app.get('/songs', SongsController.index);
  app.get('/songs/:songId', SongsController.show);
  app.post('/songs',
    isAuthenticated,
    SongsController.post);
  // app.put('/songs/:id',
  //   isAuthenticated,
  //   SongsController.put);

  // // Part 3
  // app.post('/songs/:id/recent',
  //   isAuthenticated,
  //   SongsController.markAsRecent);
  // app.get('/songs/recent',
  //   isAuthenticated,
  //   SongsController.getRecent);
  //
  // // Part 4
  // app.post('/songs/:id/bookmark',
  //   isAuthenticated,
  //   SongsController.setAsBookmarked);
  // app.delete('/songs/:id/bookmark',
  //   isAuthenticated,
  //   SongsController.unsetAsBookmark);
  //
  // // Part 5
  // app.put('/users/:userId',
  //   isAuthenticated,
  //   UsersCtrl.update);

  // Part 1
  app.post('/login', AuthenticationCtrl.login);
  app.post('/register', AuthenticationCtrl.register);
};
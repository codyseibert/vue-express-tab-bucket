const SongsController = require('./controllers/SongsController');
const UsersController = require('./controllers/UsersController');
const RecentsController = require('./controllers/RecentsController');
const BookmarksController = require('./controllers/BookmarksController');
const AuthenticationCtrl = require('./controllers/AuthenticationController');
const UsersCtrl = require('./controllers/UsersController');
const isAuthenticated = require('./middleware/isAuthenticated')
const isSongOwner = require('./middleware/isSongOwner')

module.exports = function(app) {
  // Part 2
  app.get('/songs', SongsController.index);
  app.get('/songs/:songId', SongsController.show);
  app.post('/songs',
    isAuthenticated,
    SongsController.post);
  app.put('/songs/:songId',
    isAuthenticated,
    isSongOwner,
    SongsController.put);

  // Part 3
  app.post('/recents',
    isAuthenticated,
    RecentsController.post);
  app.get('/recents',
    isAuthenticated,
    RecentsController.index);

  // Part 4
  app.get('/bookmarks',
    isAuthenticated,
    BookmarksController.index);
  app.post('/bookmarks',
    isAuthenticated,
    BookmarksController.post);
  app.delete('/bookmarks/:bookmarkId',
    isAuthenticated,
    BookmarksController.delete);

  // // Part 5
  // app.put('/users/:userId',
  //   isAuthenticated,
  //   UsersCtrl.update);

  // Part 1
  app.post('/login', AuthenticationCtrl.login);
  app.post('/register', AuthenticationCtrl.register);
};
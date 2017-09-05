// part 1

const SongsController = require('./controllers/SongsController')
const RecentsController = require('./controllers/RecentsController')
const BookmarksController = require('./controllers/BookmarksController')
const AuthenticationCtrl = require('./controllers/AuthenticationController')
const isAuthenticated = require('./middleware/isAuthenticated')
const isSongOwner = require('./middleware/isSongOwner')
const AuthenticationCtrlPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = function (app) {
  // Part 2
  app.get('/songs', SongsController.index)
  app.get('/songs/:songId', SongsController.show)
  app.post('/songs',
    isAuthenticated,
    SongsController.post)
  app.put('/songs/:songId',
    isAuthenticated,
    isSongOwner,
    SongsController.put)

  // Part 3
  app.post('/recents',
    isAuthenticated,
    RecentsController.post)
  app.get('/recents',
    isAuthenticated,
    RecentsController.index)

  // Part 4
  app.get('/bookmarks',
    isAuthenticated,
    BookmarksController.index)
  app.post('/bookmarks',
    isAuthenticated,
    BookmarksController.post)
  app.delete('/bookmarks/:bookmarkId',
    isAuthenticated,
    BookmarksController.delete)

  // Part 1.A
  app.post('/login', AuthenticationCtrl.login)

  // Part 1.B
  app.post('/register',
    AuthenticationCtrlPolicy.register,
    AuthenticationCtrl.register)
}

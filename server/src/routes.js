const TabsController = require('./controllers/TabsController');
const AuthenticationCtrl = require('./controllers/AuthenticationController');
const UsersCtrl = require('./controllers/UsersController');
const VerifyBasicAuth = require('./middleware/VerifyBasicAuth')

module.exports = function(app) {
  app.get('/tabs', TabsController.index);
  app.get('/tabs/:id', TabsController.show);
  app.post('/tabs', TabsController.post);
  app.put('/tabs/:id', TabsController.put);
  app.delete('/tabs/:id', TabsController.destroy);

  app.put('/users/:userId',
    VerifyBasicAuth,
    UsersCtrl.update);

  app.post('/login', AuthenticationCtrl.login);
  app.post('/register', AuthenticationCtrl.register);
};
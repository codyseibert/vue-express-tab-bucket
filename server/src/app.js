const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const BearerStrategy = require('passport-http-bearer-base64');
const cors = require('cors');
const {User, sequelize} = require('./models');

const ErrorHandler = require('./errors/ErrorHandler');
const InvalidLoginError = require('./errors/InvalidLoginError');

let app = express();
app = express();
app.use(bodyParser.json());
app.use(cors());

passport.use(new BearerStrategy({
    base64EncodedToken: true
  },
  async function(token, done) {
    try {
      [email, password] = token.split(':')
      user = await User.findOne({where: {email: email}})
      if (!user)
        return done(new InvalidLoginError(), false);
      const isValidPassword = await user.comparePassword(password)
      if (!isValidPassword)
        return done(new InvalidLoginError(), false);
      return done(null, user);
    } catch (err) {
      return done(new InvalidLoginError(), false);
    }
  }
));

require('./routes')(app);

sequelize.sync()
  .then(() => {
      app.listen(process.env.PORT || 8081);
  })
const ResourceAlreadyExistsError = require('../errors/ResourceAlreadyExistsError');
const ErrorHandler = require('../errors/ErrorHandler');
const InvalidLoginError = require('../errors/InvalidLoginError');

const {User} = require('../models');
const _ = require('lodash');
module.exports = {

  async login (req, res) {
    try {
      const {email, password} = req.body;
      const user = await User.findOne({where: {email: email}});
      if (!user) throw new InvalidLoginError();

      const isMatch = await user.comparePassword(password);
      if (!isMatch) throw new InvalidLoginError()

      res
        .status(200)
        .send({
          message: 'successfully logged in',
          user: _.omit(user.toJSON(), 'password')
        });
    } catch (err) {
      ErrorHandler(err, res)
    }
  },

  async register (req, res) {
    try {
      const {email} = req.body;
      const user = await User.findOne({where: {email: email}});
      if (user) throw new ResourceAlreadyExistsError()

      await User.create(req.body);
      res
        .send({
          message: 'successfully register this user, please login'
        });
    } catch (err) {
      ErrorHandler(err, res)
    }
  }
}

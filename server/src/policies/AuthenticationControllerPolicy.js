const Joi = require('joi')

const config = require('../config/config')

module.exports = {
  register: (req, res, next) => {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp(
        `^[a-zA-Z0-9]{${config.authentication.minPasswordLength},${config.authentication.maxPasswordLength}}$`
      ))
    }
    const {error, value} = Joi.validate(req.body, schema);

    if (error) {
      console.log(error)
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            message: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            message: `The password provided failed to match the following rules:
              <br>
              1. It must contain ONLY the following characters: lower case, upper case, numerics.
              <br>
              2. It must be at least ${config.authentication.minPasswordLength} character in length and not greater than a length of ${config.authentication.maxPasswordLength}
            `
          })
          break
        default:
          res.status(400).send({
            message: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
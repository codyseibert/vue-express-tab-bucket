const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

const hashPassword = (user, options) => {
  const SALT_FACTOR = 8

  if (!user.changed('password'))
    return

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    token: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        models.User.hasMany(models.Song)
        models.User.hasMany(models.Recent)
        models.User.hasMany(models.Bookmark)
      }
    },
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    },
    instanceMethods: {
      comparePassword: function (candidatePassword) {
        return bcrypt.compareAsync(candidatePassword, this.password)
      }
    }
  })


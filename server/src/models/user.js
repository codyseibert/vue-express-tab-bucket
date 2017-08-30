const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

const hashPassword = (user, options) => {
  const SALT_FACTOR = 8;

  if (!user.changed('password'))
    return;

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash);
    });
}

module.exports = function(sequelize, DataTypes) {
  var User;
  User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    displayName: DataTypes.STRING,
    isEmailPublic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Tab)
      }
    },
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    },
    instanceMethods: {
      comparePassword: function(candidatePassword) {
        return bcrypt.compareAsync(candidatePassword, this.password);
      }
    }
  });
  return User;
};


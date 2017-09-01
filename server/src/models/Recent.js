module.exports = function(sequelize, DataTypes) {
  var Recent
  Recent = sequelize.define('Recent', {}, {
    classMethods: {
      associate: function(models) {
        Recent.belongsTo(models.User)
        Recent.belongsTo(models.Song)
      }
    }
  })
  return Recent
}

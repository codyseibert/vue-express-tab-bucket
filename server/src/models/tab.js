module.exports = function(sequelize, DataTypes) {
  var Tab;
  Tab = sequelize.define('Tab', {
    title: DataTypes.STRING,
    artist: DataTypes.INTEGER,
    version: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Tab.belongsTo(models.User)
      }
    }
  });
  return Tab;
};

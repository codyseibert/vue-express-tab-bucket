module.exports = function(sequelize, DataTypes) {
  var Bookmark;
  Bookmark = sequelize.define('Bookmark', {}, {
    classMethods: {
      associate: function(models) {
        Bookmark.belongsTo(models.User)
        Bookmark.belongsTo(models.Song)
      }
    }
  });
  return Bookmark;
};

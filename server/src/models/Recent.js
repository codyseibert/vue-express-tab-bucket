module.exports = function(sequelize, DataTypes) {
  var Song;
  Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    artist: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    video: DataTypes.STRING,
    lryics: DataTypes.TEXT,
    tab: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Song.belongsTo(models.User)
      }
    }
  });
  return Song;
};

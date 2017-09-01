module.exports = function(sequelize, DataTypes) {
  var Song
  Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    artist: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    album: DataTypes.STRING,
    albumImage: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    tab: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Song.belongsTo(models.User)
        Song.hasMany(models.Recent)
      }
    }
  })
  return Song
}

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Track extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Track.belongsTo(models.Album);
      Track.belongsTo(models.Artist);
      Track.belongsToMany(models.Playlist, {
        through: 'PlaylistsTracks',
        foreignKey: 'trackId'
      })

    }
  }
  Track.init({
    name: DataTypes.STRING,
    albumId: DataTypes.INTEGER,
    cover: DataTypes.STRING,
    artistId: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Track',
  });
  return Track;
};
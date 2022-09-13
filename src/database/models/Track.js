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
      Track.belongsTo(models.Album,{foreignKey:{name:'albumId'}});
      Track.belongsTo(models.Artist,{foreignKey:{name:'artistId'}});
      Track.belongsToMany(models.Playlist, {
        through: 'PlaylistsTracks',
        foreignKey: {
          name: 'trackId'
        }
      });
    }
  }
  Track.init({
    name: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Track',
  });
  return Track;
};
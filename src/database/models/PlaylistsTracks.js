'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlaylistsTracks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PlaylistsTracks.belongsTo(models.Playlist, {
        foreignKey: 'id',
        target_key: 'playlistId'
      });
      PlaylistsTracks.belongsTo(models.Track, {
        foreignKey: 'id',
        target_key: 'trackId'
      })
    }
  }
  PlaylistsTracks.init({
    playlistId: DataTypes.INTEGER,
    trackId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PlaylistsTracks',
  });
  return PlaylistsTracks;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Artist.hasMany(models.Track,{foreignKey:{name:'artistId'}});

      Artist.hasMany(models.Album,{foreignKey:{name:'artistId'}});

      Artist.belongsTo(models.User,{foreignKey:{name:'userId'}});
    }
  }
  Artist.init({
    name: DataTypes.STRING,
    nickname: DataTypes.STRING,
    nationality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};
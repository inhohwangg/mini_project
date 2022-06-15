'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Myprofile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Myprofile.init({
    userId: DataTypes.STRING,
    userNick: DataTypes.STRING,
    introduction: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Myprofile',
  });
  return Myprofile;
};
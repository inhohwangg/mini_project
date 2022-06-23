'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Day.init({
    username: DataTypes.STRING,
    day1: DataTypes.STRING,
    day2: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Day',
  });
  return Day;
};
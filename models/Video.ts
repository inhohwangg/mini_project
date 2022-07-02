"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize: any, DataTypes: any) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Video.init(
    {
      videoUrl: DataTypes.STRING,
      cityName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Video",
    }
  );
  return Video;
};

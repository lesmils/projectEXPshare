"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class skillTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      skillTag.belongsTo(models.user, {
        foreignKey: "userId",
      });
      // skillTag.belongsTo(models.Category, {
      //   foreignKey: "categoryId",
      // });
    }
  }
  skillTag.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "skillTag",
    }
  );
  return skillTag;
};

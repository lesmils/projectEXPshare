"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      category.belongsToMany(models.user, {
        through: "userCategories",
        foreignKey: "categoryId",
      });
      category.hasMany(models.liveEvent, {
        foreignKey: "categoryId",
      });
      category.hasMany(models.onlineEvent, {
        foreignKey: "categoryId",
      });
      category.hasMany(models.offer, {
        foreignKey: "categoryId",
      });
    }
  }
  category.init(
    {
      name: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "category",
    }
  );
  return category;
};

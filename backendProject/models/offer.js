"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class offer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      offer.belongsTo(models.user, {
        foreignKey: "userId",
      });
      offer.belongsTo(models.category, {
        foreignKey: "categoryId",
      });
      offer.hasMany(models.request, {
        foreignKey: "offerId",
      });
    }
  }
  offer.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      tokenCost: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "offer",
    }
  );
  return offer;
};

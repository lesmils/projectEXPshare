"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class request extends Model {
    static associate(models) {
      request.belongsTo(models.user, {
        foreignKey: "buyerId",
        as: "buyer",
      });
      request.belongsTo(models.user, {
        foreignKey: "sellerId",
        as: "seller",
      });
      request.belongsTo(models.offer, {
        foreignKey: "offerId",
      });
    }
  }
  request.init(
    {
      message: DataTypes.TEXT,
      isAccepted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "request",
    }
  );
  return request;
};

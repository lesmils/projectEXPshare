"use strict";
const { Model } = require("sequelize");
const onlineEvent = require("../migrations/4-online-event");
module.exports = (sequelize, DataTypes) => {
  class onlineEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      onlineEvent.belongsTo(models.user, {
        foreignKey: "userId",
      });
      onlineEvent.belongsTo(models.category, {
        foreignKey: "categoryId",
      });
    }
  }
  onlineEvent.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      time: DataTypes.DATE,
      streamUrl: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "onlineEvent",
    }
  );
  return onlineEvent;
};

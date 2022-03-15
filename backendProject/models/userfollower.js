"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userFollower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userFollower.belongsTo(models.user, {
        foreignKey: "followerId",
        as: "follower",
      });
      userFollower.belongsTo(models.user, {
        foreignKey: "followingId",
        as: "following",
      });
    }
  }
  userFollower.init(
    {
      followerId: DataTypes.INTEGER,
      followingId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userFollower",
    }
  );
  return userFollower;
};

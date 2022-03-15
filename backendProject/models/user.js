"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsToMany(models.user, {
        through: models.userFollower,
        foreignKey: "followerId",
        as: "followers",
      });
      user.belongsToMany(models.user, {
        through: models.userFollower,
        foreignKey: "followingId",
        as: "following",
      });
      user.hasMany(models.userFollower, {
        foreignKey: "followerId",
      });

      user.hasMany(models.userFollower, {
        foreignKey: "followingId",
      });

      user.hasMany(models.offer, {
        foreignKey: "userId",
      });
      user.belongsToMany(models.category, {
        through: "userCategories",
        foreignKey: "userId",
      });
      user.hasMany(models.liveEvent, {
        foreignKey: "organizerId",
        as: "organizer",
      });
      user.belongsToMany(models.liveEvent, {
        foreignKey: "participantId",
        through: "liveEventParticipant",
        as: "participant",
      });
      user.hasMany(models.onlineEvent, {
        foreignKey: "userId",
      });
      user.hasMany(models.skillTag, {
        foreignKey: "userId",
      });
      user.hasMany(models.review, {
        foreignKey: "reviewerId",
        as: "reviewer",
      });
      user.hasMany(models.review, {
        foreignKey: "reviewedId",
        as: "reviewed",
      });
      user.hasMany(models.request, {
        foreignKey: "buyerId",
        as: "buyer",
      });
      user.hasMany(models.request, {
        foreignKey: "sellerId",
        as: "seller",
      });
    }
  }
  user.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      description: DataTypes.TEXT,
      isAdmin: DataTypes.BOOLEAN,
      imageUrl: DataTypes.STRING,
      tokenBalance: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};

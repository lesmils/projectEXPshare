"use strict";
const { Model } = require("sequelize");
const CreateLiveEventParticipant = require("../migrations/9-create-live-event-participant");
module.exports = (sequelize, DataTypes) => {
  class liveEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      liveEvent.belongsTo(models.user, {
        foreignKey: "organizerId",
        as: "organizer",
      });
      liveEvent.belongsToMany(models.user, {
        foreignKey: "participantId",
        through: "liveEventParticipant",
        as: "participant",
      });
      liveEvent.belongsTo(models.category, {
        foreignKey: "categoryId",
      });
    }
  }
  liveEvent.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      tokenCost: DataTypes.INTEGER,
      location: DataTypes.STRING,
      time: DataTypes.DATE,
      durationHours: DataTypes.FLOAT,
      imageUrl: DataTypes.STRING,
      maxParticipants: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "liveEvent",
    }
  );
  return liveEvent;
};

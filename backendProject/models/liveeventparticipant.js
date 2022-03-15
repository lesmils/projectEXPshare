"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class liveEventParticipant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      liveEventParticipant.belongsTo(models.user);
      liveEventParticipant.belongsTo(models.liveEvent);
    }
  }
  liveEventParticipant.init(
    {
      participantId: DataTypes.INTEGER,
      liveEventId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "liveEventParticipant",
    }
  );
  return liveEventParticipant;
};

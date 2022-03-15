"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "liveEventParticipants",
      [
        {
          liveEventId: 1,
          participantId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          liveEventId: 1,
          participantId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          liveEventId: 1,
          participantId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          liveEventId: 2,
          participantId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          liveEventId: 2,
          participantId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          liveEventId: 3,
          participantId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          liveEventId: 3,
          participantId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("liveEventParticipants", null, {});
  },
};

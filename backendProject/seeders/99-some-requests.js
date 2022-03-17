"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "requests",
      [
        {
          offerId: 1,
          sellerId: 1,
          buyerId: 2,
          message:
            "Hey I would love to learn Javascript from you,can we make an appointment?",
          isAccepted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          offerId: 4,
          sellerId: 2,
          buyerId: 1,
          message:
            "Hey I would love to learn how to cook some nice spaghetti some time, when are you available?",
          isAccepted: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("requests", null, {});
  },
};

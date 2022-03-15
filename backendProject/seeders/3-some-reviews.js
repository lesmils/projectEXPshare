"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          reviewedId: 1,
          reviewerId: 2,
          title: "Pro Coder now",
          description: "Thanks, Learned a lot",
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          reviewedId: 1,
          reviewerId: 5,
          title: "Absolute Dogsh*t",
          description:
            "1/1 would not recommend 1/1 would not recommend 1/1 would not recommend",
          rating: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          reviewedId: 2,
          reviewerId: 9,
          title: "Good Food",
          description:
            "Hey Ima work in the kitchen now, this guy is so professional",
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("reviews", null, {});
  },
};

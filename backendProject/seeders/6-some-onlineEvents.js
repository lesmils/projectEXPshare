"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "onlineEvents",
      [
        {
          userId: 1,
          name: "Javascript workshop scream",
          description: "Let's build a web app together",
          categoryId: 5,
          time: new Date("2022-04-10T20:00:00Z"),
          createdAt: new Date(),
          updatedAt: new Date(),
          streamUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab",
        },
        {
          userId: 1,
          name: "Javascript workshop stream",
          description: "Let's build another web app together",
          categoryId: 5,
          time: new Date("2022-04-11T20:00:00Z"),
          createdAt: new Date(),
          updatedAt: new Date(),
          streamUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab",
        },
        {
          userId: 2,
          name: "Italian Cooking Clinic",
          description:
            "Hey I'm going to show you how to cook the best spaghetti",
          categoryId: 8,
          time: new Date("2022-03-17T18:00:00Z"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("liveEvents", null, {});
  },
};

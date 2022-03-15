"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userFollowers",
      [
        {
          followingId: 1,
          followerId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          followingId: 1,
          followerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          followingId: 1,
          followerId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          followingId: 1,
          followerId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          followingId: 1,
          followerId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          followingId: 2,
          followerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          followingId: 2,
          followerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          followingId: 6,
          followerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          followingId: 7,
          followerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          followingId: 8,
          followerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          followingId: 9,
          followerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("userFollowers", null, {});
  },
};

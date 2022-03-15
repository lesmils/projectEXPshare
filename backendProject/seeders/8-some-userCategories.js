"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userCategories",
      [
        {
          userId: 1,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          categoryId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          categoryId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          categoryId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          categoryId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 15,
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 16,
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 17,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 18,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 19,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          categoryId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("userCategories", null, {});
  },
};

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "offers",
      [
        {
          userId: 1,
          name: "Javascript beginner session",
          description:
            "I will teach you the fundamentals of Javascript, either online or in person depending on your location.",
          tokenCost: 10,
          categoryId: 5,
          imageUrl: "https://picsum.photos/300",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          name: "Javascript intermediate session",
          description:
            "I will teach you Javascript, either online or in person depending on your location. We can build an advanced web application together, I'll walk you through it step by step",
          tokenCost: 15,
          categoryId: 5,
          imageUrl: "https://picsum.photos/300",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "Reduxxx session",
          description:
            "I will teach you Redux, either online or in person depending on your location.",
          tokenCost: 20,
          categoryId: 5,
          imageUrl: "https://picsum.photos/300",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "Italian Cooking workshop",
          description:
            "I will teach you how to teach traditional italian cuisine. You can choose between various pastas, pizza or risotto",
          tokenCost: 15,
          categoryId: 8,
          imageUrl: "https://picsum.photos/300",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          name: "Chef techniques",
          imageUrl: "https://picsum.photos/300",
          description:
            "I will teach you beginner chef techniques. This includes cutting techniques, but also how to cook the perfect omelette",
          tokenCost: 20,
          categoryId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "Physics Masterclass",
          imageUrl: "https://picsum.photos/300",
          description:
            "Need help with your homework? Or do you want to know more about the meaning of life, the universe and everything? I can help you with that",
          tokenCost: 100,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          name: "Special Relativity",
          imageUrl: "https://picsum.photos/300",
          description: "H",
          tokenCost: 100,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("offers", null, {});
  },
};

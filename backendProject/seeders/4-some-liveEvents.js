"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "liveEvents",
      [
        {
          organizerId: 1,
          name: "Web Developer beginner session",
          description:
            "I will teach you the fundamentals of Javascript, HTML and CSS, either online or in person depending on your location.",
          tokenCost: 10,
          categoryId: 5,
          imageUrl: "https://picsum.photos/300",
          time: new Date("2022-03-10T20:00:00Z"),
          location: "Nijmegen",
          createdAt: new Date(),
          updatedAt: new Date(),
          maxParticipants: 5,
        },
        {
          organizerId: 1,
          name: "Hackaton at my place",
          description:
            "I will give you a short lecture about basic Javascript, followed by some nice beginner coding challenges",
          tokenCost: 5,
          categoryId: 5,
          imageUrl: "https://picsum.photos/300",
          time: new Date("2022-03-18T15:00:00Z"),
          location: "Nijmegen",
          createdAt: new Date(),
          updatedAt: new Date(),
          maxParticipants: 10,
        },
        {
          organizerId: 2,
          name: "Italian Cooking Clinic",
          description: "Let's cook some spaghetti oh yeah",
          tokenCost: 10,
          categoryId: 8,
          imageUrl: "https://picsum.photos/300",
          time: new Date("2022-03-17T18:00:00Z"),
          location: "Amsterdam",
          createdAt: new Date(),
          updatedAt: new Date(),
          maxParticipants: 10,
        },
        {
          organizerId: 2,
          name: "SpaghettiCode workshop",
          description: "Let's combine the best two things in the world",
          tokenCost: 10,
          categoryId: 8,
          imageUrl: "https://picsum.photos/300",
          time: new Date("2022-05-17T18:00:00Z"),
          location: "Amsterdam",
          createdAt: new Date(),
          updatedAt: new Date(),
          maxParticipants: 10,
        },
        {
          organizerId: 4,
          name: "Walking on stairs",
          description: "I'll teach you how to run up and down the stairs",
          tokenCost: 10,
          categoryId: 9,
          imageUrl: "https://picsum.photos/300",
          time: new Date("2022-05-17T18:00:00Z"),
          location: "Biersexum",
          createdAt: new Date(),
          updatedAt: new Date(),
          maxParticipants: 10,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("liveEvents", null, {});
  },
};

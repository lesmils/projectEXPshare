"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Milton",
          email: "1",
          password: bcrypt.hashSync("1", SALT_ROUNDS),
          isAdmin: true,
          description:
            "Hey, I am Milton, I am a Senior Javascript developer. I've spent a lot of time to graduate from the prestigious Codaisseur Academy. I can teach you anything about building websites, both the front end as well as the backend.",
          tokenBalance: 1000,
          imageUrl: "https://picsum.photos/400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fabio",
          email: "2",
          password: bcrypt.hashSync("2", SALT_ROUNDS),
          isAdmin: true,
          description:
            "I am a Masterchef who has worked in 3-Michelinstarrestaurants all over the world. I am open to teaching you basic cooking techniques, or anything more advanced depending on your level",
          tokenBalance: 1000,
          imageUrl: "https://picsum.photos/400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Albert Einstein",
          email: "3",
          password: bcrypt.hashSync("3", SALT_ROUNDS),
          isAdmin: true,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tokenBalance: 1000,
          imageUrl: "https://picsum.photos/400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rocky Balboa",
          email: "4",
          password: bcrypt.hashSync("4", SALT_ROUNDS),
          isAdmin: true,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tokenBalance: 10,
          imageUrl: "https://picsum.photos/400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jack the Smith",
          email: "n@n.com",
          password: bcrypt.hashSync("4", SALT_ROUNDS),
          isAdmin: true,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tokenBalance: 10,
          imageUrl: "https://picsum.photos/400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Janice from Accounting",
          email: "m@m.com",
          password: bcrypt.hashSync("4", SALT_ROUNDS),
          isAdmin: true,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tokenBalance: 10,
          imageUrl: "https://picsum.photos/400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jane Austen",
          email: "Jane@Austen.com",
          password: bcrypt.hashSync("4", SALT_ROUNDS),
          isAdmin: true,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tokenBalance: 10,
          imageUrl: "https://picsum.photos/400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Magnus Carlsen",
          email: "5",
          password: bcrypt.hashSync("5", SALT_ROUNDS),
          isAdmin: true,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tokenBalance: 60,
          imageUrl: "https://picsum.photos/400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "jan de tuinman",
          email: "6",
          password: bcrypt.hashSync("6", SALT_ROUNDS),
          isAdmin: true,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tokenBalance: 60,
          imageUrl: "https://picsum.photos/400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maarten de Meubelmaker",
          email: "v@v.com",
          password: bcrypt.hashSync("7", SALT_ROUNDS),
          isAdmin: true,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tokenBalance: 50,
          imageUrl: "https://picsum.photos/400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Yogi Behr",
          email: "8",
          password: bcrypt.hashSync("7", SALT_ROUNDS),
          isAdmin: true,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tokenBalance: 40,
          imageUrl: "https://picsum.photos/400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Makerbot",
          email: "9",
          password: bcrypt.hashSync("7", SALT_ROUNDS),
          isAdmin: true,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tokenBalance: 40,
          imageUrl: "https://picsum.photos/400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "MiltonFriedman",
          email: "10",
          password: bcrypt.hashSync("7", SALT_ROUNDS),
          isAdmin: true,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tokenBalance: 40,
          imageUrl: "https://picsum.photos/400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alfred Hitchcock",
          email: "11",
          password: bcrypt.hashSync("7", SALT_ROUNDS),
          isAdmin: true,
          tokenBalance: 40,
          imageUrl: "https://picsum.photos/400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jackson Pollock",
          email: "12",
          password: bcrypt.hashSync("7", SALT_ROUNDS),
          isAdmin: true,
          tokenBalance: 40,
          imageUrl: "https://picsum.photos/400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vincent van Gogh",
          email: "13",
          password: bcrypt.hashSync("7", SALT_ROUNDS),
          isAdmin: true,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tokenBalance: 40,
          imageUrl: "https://picsum.photos/400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Marie Curie",
          email: "14",
          password: bcrypt.hashSync("7", SALT_ROUNDS),
          isAdmin: true,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tokenBalance: 40,
          imageUrl: "https://picsum.photos/400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Yuja Wang",
          email: "15",
          password: bcrypt.hashSync("7", SALT_ROUNDS),
          isAdmin: true,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tokenBalance: 40,
          imageUrl: "https://picsum.photos/400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "F. Chopin",
          email: "16",
          password: bcrypt.hashSync("7", SALT_ROUNDS),
          isAdmin: true,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tokenBalance: 40,
          imageUrl: "https://picsum.photos/400",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};

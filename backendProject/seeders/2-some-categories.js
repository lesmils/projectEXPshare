"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Film & Design",
          imageUrl:
            "https://live.staticflickr.com/8367/8391298224_188fef10a4_b.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Music",
          imageUrl:
            "https://live.staticflickr.com/8096/8520504191_7564d4d93c_b.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Business",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/2/2d/Thinking_of_your_business_name.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Science & Education",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/1/14/Barbara_McClintock_%281902-1992%29_shown_in_her_laboratory_in_1947.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Technology",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/9/91/Bruce_McCandless_II_during_EVA_in_1984.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Art",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/b/bc/Dolceacqua43_-_Artista_locale_mentre_dipinge_un_acquarello.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Craftsmanship",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/0/0b/Woodworking_Tools_at_the_Women%27s_Woodshop_in_Minneapolis%2C_MN.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lifestyle & Cooking",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/3/3d/Isaac_Alonso.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sport",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/3/3b/London_Bees_v_Millwall_Lionesses%2C_15_April_2017_%28062%29_%28cropped%29.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Other",
          imageUrl: "https://miro.medium.com/max/1200/0*Rs7b86ycsonX-tx0.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};

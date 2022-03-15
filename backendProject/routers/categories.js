const { Router } = require("express");
const User = require("../models").user;
const Category = require("../models").category;
const SkillTag = require("../models").skillTag;
const router = new Router();

router.get("/", async (req, res) => {
  const categories = await Category.findAll({
    order: [["id", "ASC"]],
    include: [{ model: User, attributes: ["name"] }],
  });
  res.status(200).send({ message: "ok", categories });
});

router.get("/:id", async (req, res) => {
  const categoryId = req.params.id;

  if (isNaN(parseInt(categoryId))) {
    return res.status(400).send({ message: "Category id is not a number" });
  }

  const CategoryResponse = await Category.findByPk(categoryId, {
    include: {
      model: User,
      include: [{ model: SkillTag, attributes: ["name", "id"] }],
    },
  });
  if (CategoryResponse == null) {
    res.status(404).send(`Category with ID ${categoryId} does not exist`);
  }
  res.status(200).send(CategoryResponse);
});

module.exports = router;

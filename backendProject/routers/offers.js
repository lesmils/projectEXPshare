const { Router } = require("express");
const User = require("../models").user;
const Category = require("../models").category;
const SkillTag = require("../models").skillTag;
const LiveEvent = require("../models").liveEvent;
const Offer = require("../models").offer;
const router = new Router();
const authMiddleware = require("../auth/middleware");

router.post("/", authMiddleware, async (req, res) => {
  const { name, description, imageUrl, tokenCost, categoryId } = req.body;

  const user = req.user;

  //this take the info of the user
  //   console.log("what is user", user);

  const newOffer = await Offer.create({
    name: name,
    description: description,
    imageUrl: imageUrl,
    tokenCost: tokenCost,
    categoryId: categoryId,
    userId: user.id,
    name: name,
  });
  res.status(200).send(newOffer);
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const offer = await Offer.findByPk(id);
    if (!offer) {
      return res.status(404).send("Story not found");
    }

    // Check if this user is the owner of the space
    if (offer.userId !== req.user.id) {
      return res.status(401).send("You're not authorized to delete this offer");
    }

    await offer.destroy();

    res.status(200).send(id);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

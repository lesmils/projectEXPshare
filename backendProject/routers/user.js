const { Router } = require("express");
const User = require("../models").user;
const Category = require("../models").category;
const SkillTag = require("../models").skillTag;
const Review = require("../models").review;
const LiveEvent = require("../models").liveEvent;
const OnlineEvent = require("../models").onlineEvent;
const Offer = require("../models").offer;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/:id", async (req, res) => {
  const profileId = req.params.id;

  if (isNaN(parseInt(profileId))) {
    return res.status(400).send({ message: "Profile id is not a number" });
  }

  const profileById = await User.findByPk(profileId, {
    attributes: ["name", "description", "imageUrl", "createdAt"],
    include: [
      {
        model: User,
        as: "followers",
        attributes: ["name"],
      },
      {
        model: User,
        as: "following",
        attributes: ["name"],
      },
      {
        model: SkillTag,
        attributes: ["name"],
      },
      {
        model: Review,
        as: "reviewed",
      },
      {
        model: LiveEvent,
        as: "organizer",
      },
      {
        model: OnlineEvent,
      },
      {
        model: Category,
        attributes: ["name"],
      },
      {
        model: Offer,
      },
    ],
  });

  if (profileById == null) {
    res.status(404).send(`Profile with ID ${profileId} does not exist`);
  }

  res.status(200).send(profileById);
});

router.patch("/:id", authMiddleware, async (req, res) => {
  const user = req.user;
  const getUserById = await User.findByPk(user.id);

  if (!req.params.id === user.id) {
    return res
      .status(403)
      .send({ message: "You are not authorized to update this image" });
  }

  const { imageUrl } = req.body;

  await getUserById.update({ imageUrl: imageUrl });

  return res.status(200).send({ imageUrl });
});

module.exports = router;

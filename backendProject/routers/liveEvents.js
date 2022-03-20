const { Router } = require("express");
const User = require("../models").user;
const LiveEvent = require("../models").liveEvent;
const authMiddleware = require("../auth/middleware");
const router = new Router();

router.get("/", async (req, res) => {
  const allLiveEvents = await LiveEvent.findAll({
    include: {
      model: User,
      as: "organizer",
      attributes: ["name", "id"],
    },

    order: [["time", "ASC"]],
  });
  res.status(200).send(allLiveEvents);
});

router.post("/", authMiddleware, async (req, res) => {
  const {
    name,
    time,
    durationHours,
    description,
    location,
    imageUrl,
    tokenCost,
    categoryId,
    maxParticipants,
  } = req.body;

  const user = req.user;

  //this take the info of the user
  //   console.log("what is user", user);

  const newLiveEvent = await LiveEvent.create({
    name: name,
    time: time,
    durationHours: durationHours,
    description: description,
    location: location,
    imageUrl: imageUrl,
    tokenCost: tokenCost,
    categoryId: categoryId,
    maxParticipants: maxParticipants,
    organizerId: user.id,
  });
  res.status(200).send(newLiveEvent);
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const liveEvent = await LiveEvent.findByPk(id);
    if (!liveEvent) {
      return res.status(404).send("Story not found");
    }

    // Check if this user is the owner of the space
    if (liveEvent.organizerId !== req.user.id) {
      return res
        .status(401)
        .send("You're not authorized to delete this liveEvent");
    }

    await liveEvent.destroy();

    res.status(200).send(id);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

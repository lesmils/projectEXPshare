const { Router } = require("express");
const User = require("../models").user;
const Category = require("../models").category;
const SkillTag = require("../models").skillTag;
const LiveEvent = require("../models").liveEvent;
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

module.exports = router;

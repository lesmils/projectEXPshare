const { Router } = require("express");
const User = require("../models").user;
const OnlineEvent = require("../models").onlineEvent;
const router = new Router();

router.get("/", async (req, res) => {
  const allOnlineEvents = await OnlineEvent.findAll({
    include: {
      model: User,
      attributes: ["name", "id"],
    },
    order: [["time", "ASC"]],
  });
  res.status(200).send(allOnlineEvents);
});

module.exports = router;

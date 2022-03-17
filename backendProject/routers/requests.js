const { Router } = require("express");
const User = require("../models").user;
const Category = require("../models").category;
const SkillTag = require("../models").skillTag;
const LiveEvent = require("../models").liveEvent;
const Offer = require("../models").offer;
const Request = require("../models").request;
const router = new Router();
const authMiddleware = require("../auth/middleware");

router.post("/", authMiddleware, async (req, res) => {
  const { offerId, sellerId, message } = req.body;

  const user = req.user;

  //this take the info of the user
  //   console.log("what is user", user);

  const newRequest = await Request.create({
    offerId: offerId,
    sellerId: sellerId,
    message: message,
    buyerId: user.id,
    isAccepted: false,
  });
  res.status(200).send(newRequest);
});

module.exports = router;

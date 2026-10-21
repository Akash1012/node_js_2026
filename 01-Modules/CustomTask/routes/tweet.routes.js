const express = require("express");
const {
  getContactDetails,
  getListOfTweets,
  addNewTweet,
} = require("../controllers/tweet.controller.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, World !");
});

router.get("/contact-us", getContactDetails);
router.post("/tweets", addNewTweet);
router.get("/tweets", getListOfTweets);

// tweet.routes.js
// export const applicationsRouter = router;

module.exports = router;

const fs = require("fs");
const path = require("path");

const tweetFilePath = path.join(__dirname, "../tweet.json");

// read tweets from the JSON file
function readTweetsFromFile() {
  try {
    const data = fs.readFileSync(tweetFilePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading tweets from file:", err);
    return [];
  }
}

// helper function
function sendSuccess(res, status, data) {
  res.status(status).json({ success: true, data });
}

function writeData(tweets) {
  fs.writeFileSync(
    tweetFilePath,
    JSON.stringify({ applications: tweets }, null, 2),
  );
}

const getContactDetails = (req, res) => {
  let contactDetails = {
    name: "Akash Gupta",
    email: "gupta.akash@example.com",
  };
  return sendSuccess(res, 200, contactDetails);
};

const getListOfTweets = (req, res) => {
  const tweets = readTweetsFromFile();
  return sendSuccess(res, 200, tweets);
};

const addNewTweet = (req, res) => {
  console.log();
  const { tweet } = req.body;
  if (!tweet) {
    return res
      .status(400)
      .json({ success: false, message: "Tweet is required" });
  }

  const tweets = readTweetsFromFile().applications;
  const newTweet = {
    id: tweets.length + 1,
    tweet,
    createdAt: new Date().toISOString(),
  };

  tweets.push(newTweet);

  try {
    writeData(tweets);
    return sendSuccess(res, 201, newTweet);
  } catch (err) {
    console.error("Error writing tweet to file:", err);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { getContactDetails, getListOfTweets, addNewTweet };

const express = require("express");
const app = express();
const applicationsRouter = require("./routes/tweet.routes.js");
const PORT = 3000;

app.use(express.json());

app.use("/", applicationsRouter);

// app.get("/", (req, res) => {
//   res.send("Hello, World !");
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
